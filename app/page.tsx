'use server';

import { Suspense } from 'react';
import TodoClient from './components/TodoClient';

export default function HomePage() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">📝 Todo App</h1>
      <p className="text-gray-600">
        This is a static section rendered on the server. It doesn’t change unless the page reloads.
      </p>

      <Suspense fallback={<div>Loading todos...</div>}>
        <TodoClient />
      </Suspense>
    </main>
  );
}
