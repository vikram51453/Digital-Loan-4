import { useState } from "react";

export default function Assistant() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("/api/gemini-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      setResponse("Error contacting AI service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Ask Flexi AI </h1>
        <textarea
          rows="4"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about loans, EMIs..."
          className="w-full border p-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          {loading ? "Thinking..." : "Ask Flexi"}
        </button>

        {response && (
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <h2 className="font-semibold text-blue-600 mb-2">Response:</h2>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
