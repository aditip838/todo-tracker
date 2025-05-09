'use client';

import { useState, useEffect } from 'react';
import { countTasks } from '../actions/todoActions';

export default function TodoClient() {
  const [todos, setTodos] = useState<string[]>([]);
  const [taskCount, setTaskCount] = useState(0);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function updateCount() {
      const count = await countTasks(todos);
      setTaskCount(count);
    }
    updateCount();
  }, [todos]);

  function addTodo() {
    if (input.trim()) {
      setTodos(prev => [...prev, input.trim()]);
      setInput('');
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          className="border px-2 py-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-1 rounded">
          Add
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Tasks</h2>
        <ul className="list-disc list-inside">
          {todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mt-2">Task count (from server action): {taskCount}</p>
      </div>
    </div>
  );
}
