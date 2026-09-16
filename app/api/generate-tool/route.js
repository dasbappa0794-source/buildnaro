// Backend: plain language -> calculator JSON using Gemini
// GEMINI_API_KEY only on server - never exposed to browser

import { NextRequest } from "next/server";

const RATE_LIMIT_MAX = 8;
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  // cleanup to avoid memory leak
  if (hits.size > 1000) {
    const oldest = hits.keys().next().value;
    if (oldest) hits.delete(oldest);
  }
  return timestamps.length > RATE_LIMIT_MAX;
}

const SYSTEM_PROMPT = `You turn a short, plain-language request (which may be in any language, including Bengali written in Latin letters) into a small structured calculator tool.

Respond with ONLY a JSON object, no other text, matching exactly this shape:
{
  "title": "Short tool title, in the SAME language/script the user wrote in",
  "description": "One short sentence describing what it calculates, same language as the user",
  "fields": [
    { "id": "shortCamelCaseId", "label": "Field label shown to user, same language as user", "unit": "optional short unit label or empty string", "defaultValue": 0 }
  ],
  "formula": "a math expression using ONLY the field ids above as variables, e.g. (area / tileSize) * 1.1",
  "resultLabel": "Label for the answer, same language as user",
  "resultUnit": "optional short unit label or empty string"
}

Rules:
- 2 to 6 fields max. Every field must be a plain number the user types in.
- "formula" must be a single valid math expression solvable with +, -, *, /, (), and the field ids only — no code, no functions, no loops, no text.
- If the request is not something a simple number-in, number-out calculator can answer (e.g. it asks for a story, an image, a full website, or anything unrelated to calculation), respond with exactly: {"error": "not_a_calculator"}
- If the request could plausibly enable harm (weapons, drugs, hacking, or anything unsafe), respond with exactly: {"error": "unsafe_request"}
- Keep it practical and simple — favour the most common real-world interpretation of the request.`;

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { error: "rate_limited", message: "Too many tool generations from this connection today." },
        { status: 429 }
      );
    }

    const { prompt } = await req.json();

    if (!prompt || typeof prompt!== "string" ||!prompt.trim()) {
      return Response.json({ error: "empty_prompt" }, { status: 400 });
    }
    if (prompt.length > 500) {
      return Response.json({ error: "prompt_too_long" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "not_configured", message: "GEMINI_API_KEY is not set" },
        { status: 500 }
      );
    }

    const GEMINI_MODEL = "gemini-2.0-flash-lite"; // 3.1 not released yet, 2.0 is stable

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: "user", parts: [{ text: prompt.trim() }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 500,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text().catch(() => "");
      return Response.json(
        { error: "upstream_error", message: `Gemini ${geminiRes.status}`, detail: errText.slice(0, 300) },
        { status: 502 }
      );
    }

    const data = await geminiRes.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) {
      return Response.json({ error: "empty_response" }, { status: 502 });
    }

    let parsed: any;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return Response.json({ error: "invalid_json_from_model" }, { status: 502 });
    }

    if (parsed.error) {
      return Response.json({ error: parsed.error }, { status: 200 });
    }

    // Validation
    if (
     !parsed.title ||
     !Array.isArray(parsed.fields) ||
      parsed.fields.length === 0 ||
      parsed.fields.length > 6 ||
      typeof parsed.formula!== "string"
    ) {
      return Response.json({ error: "invalid_shape" }, { status: 502 });
    }

    // Extra safety: formula can only contain allowed chars
    if (!/^[a-zA-Z0-9_+\-*/().\s]+$/.test(parsed.formula)) {
      return Response.json({ error: "invalid_formula" }, { status: 502 });
    }

    return Response.json({ tool: parsed });

  } catch (err: any) {
    return Response.json({ error: "server_error", message: String(err?.message || err) }, { status: 500 });
  }
}
