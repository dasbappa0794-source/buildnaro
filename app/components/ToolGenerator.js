'use client';

import { useState } from "react";
import { evaluate } from "mathjs";

const ERROR_MESSAGES = {
  not_a_calculator: "That's not something a simple calculator can answer â€” try describing a tool that turns a few numbers into a result (e.g. \"how many tiles do I need for a 200 sq ft floor\").",
  unsafe_request: "Sorry, I can't generate a tool for that.",
  rate_limited: "You've reached today's limit for generating new tools on this connection. Please try again tomorrow.",
  empty_prompt: "Please describe the tool you need first.",
  prompt_too_long: "That description is a bit too long â€” please shorten it.",
  not_configured: "Tool generation isn't set up yet â€” please check back soon.",
};

export default function ToolGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tool, setTool] = useState(null);
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);

  const generate = async (e) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setError("");
    setTool(null);
    setResult(null);
    try {
      const res = await fetch("/api/generate-tool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(ERROR_MESSAGES[data.error] || "Something went wrong generating that tool â€” please try again.");
        return;
      }
      setTool(data.tool);
      const initialValues = {};
      data.tool.fields.forEach((f) => { initialValues[f.id] = f.defaultValue ?? 0; });
      setValues(initialValues);
    } catch (err) {
      setError("Couldn't reach the tool generator â€” please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateValue = (id, v) => setValues((prev) => ({ ...prev, [id]: v }));

  const calculate = () => {
    if (!tool) return;
    try {
      const scope = {};
      tool.fields.forEach((f) => { scope[f.id] = Number(values[f.id]) || 0; });
      const r = evaluate(tool.formula, scope);
      setResult(r);
    } catch (err) {
      setError("Couldn't calculate that â€” the generated formula may be invalid. Try rephrasing your request.");
    }
  };

  const reset = () => {
    setTool(null);
    setResult(null);
    setError("");
    setPrompt("");
  };

  return (
    <section className="card" id="tool-generator">
      <h2>ðŸª„ Describe the tool you need</h2>
      <p style={{ color: "#718096", fontSize: 13, marginBottom: 16 }}>
        Type what you need in any language â€” a small calculator will be generated for you instantly. Free, no sign-up.
      </p>

      {!tool && (
        <form onSubmit={generate} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            style={{ flex: 1, minWidth: 220 }}
            value={prompt}
            maxLength={500}
            placeholder="e.g. amar ekta tool lagbe joto tiles lagbe seta calculate korte"
            onChange={(e) => setPrompt(e.target.value)}
            disabled={loading}
          />
          <button type="submit" disabled={loading || !prompt.trim()}>
            {loading ? "Generatingâ€¦" : "Generate Tool"}
          </button>
        </form>
      )}

      {error && (
        <p style={{ marginTop: 14, color: "#c0392b", fontSize: 13, fontWeight: 600 }}>{error}</p>
      )}

      {tool && (
        <div style={{ marginTop: 18 }}>
          <h3 style={{ margin: "0 0 4px" }}>{tool.title}</h3>
          {tool.description && <p style={{ color: "#718096", fontSize: 13, marginBottom: 14 }}>{tool.description}</p>}

          <div className="form-grid">
            {tool.fields.map((f) => (
              <label key={f.id}>
                {f.label}{f.unit ? ` (${f.unit})` : ""}
                <input
                  type="number"
                  value={values[f.id] ?? 0}
                  onChange={(e) => updateValue(f.id, e.target.value)}
                />
              </label>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
            <button type="button" onClick={calculate}>Calculate</button>
            <button type="button" onClick={reset} style={{ background: "#172033" }}>Generate another tool</button>
          </div>

          {result !== null && !Number.isNaN(result) && (
            <div style={{ marginTop: 16, padding: "14px 18px", background: "#f6f8fc", borderRadius: 12 }}>
              <span style={{ fontSize: 13, color: "#718096" }}>{tool.resultLabel || "Result"}</span>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#172033" }}>
                {result}{tool.resultUnit ? ` ${tool.resultUnit}` : ""}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
