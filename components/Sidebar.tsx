"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-8">
        AI Assistant
      </h1>

      <nav className="space-y-4">

        <Link href="/" className="block hover:text-yellow-300">
          🏠 Dashboard
        </Link>

        <Link href="/emails" className="block hover:text-yellow-300">
          📧 Email Generator
        </Link>

        <Link href="/meeting" className="block hover:text-yellow-300">
          📝 Meeting Summarizer
        </Link>

        <Link href="/planner" className="block hover:text-yellow-300">
          📅 Task Planner
        </Link>

        <Link href="/research" className="block hover:text-yellow-300">
          🔍 Research Assistant
        </Link>

        <Link href="/chatbot" className="block hover:text-yellow-300">
          🤖 AI Chat
        </Link>

        <Link href="/settings" className="block hover:text-yellow-300">
          ⚙ Settings
        </Link>

      </nav>

    </aside>
  );
}