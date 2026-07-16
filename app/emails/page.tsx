"use client";

import { useState } from "react";

export default function EmailGeneratorPage() {
  const [purpose, setPurpose] = useState("");
  const [audience, setAudience] = useState("Manager");
  const [tone, setTone] = useState("Professional");
  const [instructions, setInstructions] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateEmail = () => {
    if (!purpose.trim()) {
      alert("Please enter the email purpose.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const email = `Subject: ${purpose}

Dear ${audience},

I hope you are doing well.

I am writing regarding ${purpose}.

${instructions}

This email has been written in a ${tone.toLowerCase()} tone to help you communicate professionally.

Please let me know if you require any additional information. I look forward to your response.

Kind regards,

Your Name`;

      setResult(email);
      setLoading(false);
    }, 1200);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(result);
    alert("Email copied successfully!");
  };

  const downloadEmail = () => {
    const blob = new Blob([result], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "AI_Email.txt";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-2">
        📧 Smart Email Generator
      </h1>

      <p className="text-gray-500 mb-8">
        Generate professional workplace emails using AI assistance.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">

        <div>
          <label className="font-semibold">
            Email Purpose
          </label>

          <input
            className="w-full mt-2 border rounded-lg p-3"
            placeholder="Example: Internship Application"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold">
              Audience
            </label>

            <select
              className="w-full mt-2 border rounded-lg p-3"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            >
              <option>Manager</option>
              <option>Client</option>
              <option>HR Department</option>
              <option>Team</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">
              Tone
            </label>

            <select
              className="w-full mt-2 border rounded-lg p-3"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option>Professional</option>
              <option>Formal</option>
              <option>Friendly</option>
              <option>Persuasive</option>
            </select>
          </div>

        </div>

        <div>
          <label className="font-semibold">
            Extra Instructions
          </label>

          <textarea
            rows={5}
            className="w-full mt-2 border rounded-lg p-3"
            placeholder="Mention Python, SQL, Business Analysis, availability next week..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <button
          onClick={generateEmail}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg"
        >
          {loading ? "Generating..." : "Generate Email"}
        </button>

      </div>

      {result && (
        <div className="mt-10 bg-white rounded-xl shadow-lg p-8">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-2xl font-bold">
              ✨ Generated Email
            </h2>

            <div className="space-x-3">

              <button
                onClick={copyEmail}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Copy
              </button>

              <button
                onClick={downloadEmail}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
              >
                Download
              </button>

            </div>

          </div>

          <textarea
            readOnly
            value={result}
            className="w-full h-80 border rounded-lg p-4 bg-gray-50"
          />

          <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4">
            <h3 className="font-semibold text-yellow-800">
              Responsible AI Notice
            </h3>

            <p className="text-sm text-yellow-700 mt-2">
              Always review AI-generated content before sending it. Verify
              names, dates, facts, and confidential information.
            </p>
          </div>

        </div>
      )}

    </div>
  );
}