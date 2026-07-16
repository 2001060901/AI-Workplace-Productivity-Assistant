"use client";

import { useState } from "react";

interface Task {
  id: number;
  title: string;
  priority: string;
  completed: boolean;
}

export default function PlannerPage() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask() {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: task,
        priority,
        completed: false,
      },
    ]);

    setTask("");
    setPriority("Medium");
  }

  function toggleTask(id: number) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        📅 Smart Task Planner
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Organize your daily work and track your progress.
      </p>

      <div className="bg-white shadow rounded-xl p-8">

        <input
          className="border rounded-lg p-3 w-full"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <select
          className="border rounded-lg p-3 w-full mt-4"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          onClick={addTask}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Add Task
        </button>

      </div>

      <div className="mt-8 space-y-4">

        {tasks.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow rounded-lg p-5 flex justify-between items-center"
          >
            <div>
              <h3
                className={`font-bold ${
                  t.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {t.title}
              </h3>

              <p className="text-sm text-gray-500">
                Priority: {t.priority}
              </p>
            </div>

            <div className="space-x-3">

              <button
                onClick={() => toggleTask(t.id)}
                className="bg-green-600 text-white px-3 py-2 rounded"
              >
                {t.completed ? "Undo" : "Done"}
              </button>

              <button
                onClick={() => deleteTask(t.id)}
                className="bg-red-600 text-white px-3 py-2 rounded"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}