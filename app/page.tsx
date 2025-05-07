'use client';

import { useState } from "react";

export default function TodoTracker() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeTask = (indexToRemove: number) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Todo Tracker</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="border p-2 flex-grow rounded"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <span>{task}</span>
            <button
              onClick={() => removeTask(index)}
              className="ml-4 text-red-500 hover:text-red-700 text-sm"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
