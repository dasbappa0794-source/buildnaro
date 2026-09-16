const RATE_LIMIT_MAX = 8;
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;
const hits = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}
const SYSTEM_PROMPT = `You turn a short, plain-language request into a small structured calculator tool. Respond with ONLY a JSON object matching exactly this shape: {"title": "Short title same language as user", "description": "One sentence same language", "fields": [{"id": "camelCaseId", "label": "Label same language", "unit": "", "defaultValue": 0}], "formula": "math expression using ONLY field ids, e.g. (area / tileSize) * 1.1", "resultLabel": "Label same language", "resultUnit": ""} Rules: 2 to 6 fields max. Formula must be single math expression with +, -, *, /, (), and field ids only. If not a calculator, respond {"error": "not_a_calculator"} If unsafe, respond {"error": "unsafe_request"}`;

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) return Response.json({ error: "rate_limited" }, { status: 429 });
    const { prompt } = await req.json();
    if (!prompt?.trim()) return Response.json({ error: "empty_prompt" }, { status: 400 });
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return Response.json({ error: "not_configured" }, { status: 500 });
    const GEMINI_MODEL = "gemini-1.5-flash";
    const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: "user", parts: [{ text: prompt.trim() }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 500, responseMimeType: "application/json" },
      }),
    });
    if (!geminiRes.ok) return Response.json({ error: "upstream_error" }, { status: 502 });
    const data = await geminiRes.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsed = JSON.parse(raw);
    if (parsed.error) return Response.json({ error: parsed.error }, { status: 200 });
    return Response.json({ tool: parsed });
  } catch (err) {
    return Response.json({ error: "server_error" }, { status: 500 });
  }
}
