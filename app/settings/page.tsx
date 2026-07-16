"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-2">
        ⚙ Settings
      </h1>

      <p className="text-gray-500 mb-8">
        Customize your AI Workplace Productivity Assistant.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">

        <div className="flex justify-between items-center">
          <span className="font-semibold">Dark Mode</span>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold">
            Notifications
          </span>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className="border-t pt-6">

          <h2 className="font-bold text-xl">
            About
          </h2>

          <p className="text-gray-500 mt-2">
            AI Workplace Productivity Assistant v1.0
          </p>

          <p className="text-gray-500">
            Built using Next.js, React and TypeScript.
          </p>

        </div>

      </div>

    </div>
  );
}