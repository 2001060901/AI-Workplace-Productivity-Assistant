"use client";

import { useState } from "react";

type Message = {
  sender: "user" | "ai";
  text: string;
};

export default function ChatbotPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "👋 Hello! I'm your AI Workplace Productivity Assistant. Ask me about emails, meetings, tasks, or research.",
    },
  ]);

  const getResponse = (message: string) => {
    const text = message.toLowerCase();

    if (text.includes("email")) {
      return "📧 Use the Email Generator to create professional emails for managers, HR, clients, or teams.";
    }

    if (text.includes("meeting")) {
      return "📝 Use the Meeting Summarizer to turn long meeting notes into a clear summary with action items.";
    }

    if (text.includes("task")) {
      return "📅 The Smart Task Planner helps you organize, prioritize, and track your daily work.";
    }

    if (text.includes("research")) {
      return "🔍 The Research Assistant creates structured reports with an overview, benefits, challenges, applications, and conclusion.";
    }

    if (text.includes("hello") || text.includes("hi")) {
      return "👋 Hello! How can I help you today?";
    }

    if (text.includes("thank")) {
      return "😊 You're welcome! Good luck with your project.";
    }

    return "🤖 I can help with workplace productivity, emails, meetings, research, and task planning.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: input,
    };

    const aiMessage: Message = {
      sender: "ai",
      text: getResponse(input),
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-2">
        🤖 AI Chat Assistant
      </h1>

      <p className="text-gray-500 mb-8">
        Chat with your productivity assistant.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-6 h-[500px] overflow-y-auto">

        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === "user"
                ? "text-right"
                : "text-left"
            }`}
          >
            <div
              className={`inline-block px-4 py-3 rounded-lg max-w-md ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

      </div>

      <div className="flex gap-4 mt-6">

        <input
          className="flex-1 border rounded-lg p-3"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg"
        >
          Send
        </button>

      </div>

    </div>
  );
}