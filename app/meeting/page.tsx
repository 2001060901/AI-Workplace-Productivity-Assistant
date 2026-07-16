"use client";

import { useState } from "react";
import { summarizeMeeting } from "@/lib/ai";

export default function MeetingPage() {
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");

  const generateSummary = () => {
    if (!notes.trim()) {
      alert("Please enter meeting notes.");
      return;
    }

    setSummary(summarizeMeeting(notes));
  };

  const copySummary = async () => {
    await navigator.clipboard.writeText(summary);
    alert("Summary copied!");
  };

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        📝 Meeting Summarizer
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Convert long meeting notes into a professional summary.
      </p>

      <div className="bg-white rounded-xl shadow p-8">

        <textarea
          rows={10}
          className="border rounded-lg p-4 w-full"
          placeholder="Paste your meeting notes here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button
          onClick={generateSummary}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Generate Summary
        </button>

      </div>

      {summary && (
        <div className="bg-white rounded-xl shadow p-8 mt-10">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-2xl font-bold">
              Summary
            </h2>

            <button
              onClick={copySummary}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Copy
            </button>

          </div>

          <textarea
            readOnly
            value={summary}
            className="border rounded-lg p-4 w-full h-96"
          />

        </div>
      )}

    </div>
  );
}