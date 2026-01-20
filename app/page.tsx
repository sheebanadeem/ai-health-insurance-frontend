"use client";

import { useState } from "react";

export default function Home() {
  const [pdf, setPdf] = useState<File | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!pdf || !question) {
      setError("Please upload a policy PDF and enter a question.");
      return;
    }

    setLoading(true);
    setError("");
    setAnswer("");

    const formData = new FormData();
    formData.append("policy_pdf", pdf);
    formData.append("question", question);

    try {
      const res = await fetch(
        "https://ai-health-insurance-backend.onrender.com/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log("API RESPONSE:", data);

      // 🔥 HANDLE ALL POSSIBLE BACKEND SHAPES
      if (typeof data.answer === "string") {
        setAnswer(data.answer);
      } else if (typeof data.response === "string") {
        setAnswer(data.response);
      } else if (typeof data.response?.answer === "string") {
        setAnswer(data.response.answer);
      } else {
        setAnswer(JSON.stringify(data, null, 2));
      }
    } catch (err) {
      console.error("FRONTEND ERROR:", err);
      setError("Failed to analyze policy. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            AI Health Insurance Assistant
          </h1>
          <p className="mt-3 text-white/60 text-lg">
            Instant clarity on complex insurance policies.
          </p>
        </div>

        <div className="mb-6">
          <label className="text-sm text-white/70 mb-2 block">
            Policy document
          </label>
          <label className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/15 bg-white/5 cursor-pointer hover:bg-white/10 transition">
            <span className="text-sm text-white/80">
              {pdf ? pdf.name : "Upload health insurance PDF"}
            </span>
            <span className="text-xs text-white/50">PDF</span>
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => setPdf(e.target.files?.[0] || null)}
            />
          </label>
        </div>

        <div className="mb-8">
          <label className="text-sm text-white/70 mb-2 block">
            Your question
          </label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Does this policy cover pre-existing diseases?"
            rows={3}
            className="w-full rounded-xl bg-white/5 border border-white/15 p-4 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 py-3 font-medium text-white hover:opacity-90 disabled:opacity-50 transition"
        >
          {loading ? "Analyzing policy…" : "Analyze policy"}
        </button>

        {error && (
          <p className="mt-4 text-center text-sm text-red-400">{error}</p>
        )}

        {answer && (
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-xs uppercase tracking-wide text-white/40 mb-2">
              AI Insight
            </p>
            <p className="text-sm leading-relaxed text-white/85 whitespace-pre-wrap">
              {answer}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
