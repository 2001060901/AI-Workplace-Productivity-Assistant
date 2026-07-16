"use client";

import { useState } from "react";

export default function ResearchPage() {
  const [topic, setTopic] = useState("");
  const [report, setReport] = useState("");

  const generateResearch = () => {
    if (!topic.trim()) {
      alert("Please enter a research topic.");
      return;
    }

    const result = `
🔍 RESEARCH REPORT

Topic:
${topic}

--------------------------------------------------

Overview

${topic} is an important subject in today's business and technology environment. It helps organizations improve efficiency, decision-making, and productivity.

--------------------------------------------------

Key Benefits

• Improves productivity
• Saves time
• Supports better decision making
• Reduces repetitive work
• Encourages innovation

--------------------------------------------------

Challenges

• Security and privacy concerns
• Initial implementation costs
• User training requirements

--------------------------------------------------

Applications

• Business
• Education
• Healthcare
• Finance
• Marketing

--------------------------------------------------

Conclusion

Research shows that ${topic} can significantly improve workplace performance when implemented correctly.
`;

    setReport(result);
  };

  const copyReport = async () => {
    await navigator.clipboard.writeText(report);
    alert("Research copied!");
  };

  const downloadReport = () => {
    const blob = new Blob([report], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "Research_Report.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-2">
        🔍 Research Assistant
      </h1>

      <p className="text-gray-500 mb-8">
        Generate a structured research report on any topic.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Enter research topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          onClick={generateResearch}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Generate Report
        </button>

      </div>

      {report && (

        <div className="mt-10 bg-white rounded-xl shadow-lg p-8">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-2xl font-bold">
              📄 Research Report
            </h2>

            <div className="space-x-3">

              <button
                onClick={copyReport}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Copy
              </button>

              <button
                onClick={downloadReport}
                className="bg-purple-600 text-white px-4 py-2 rounded"
              >
                Download
              </button>

            </div>

          </div>

          <textarea
            readOnly
            value={report}
            className="w-full h-96 border rounded-lg p-4 bg-gray-50"
          />

        </div>

      )}

    </div>
  );
}