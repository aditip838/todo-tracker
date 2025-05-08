'use server';
 
export async function countTasks(tasks: string[]): Promise<number> {
  console.log('Counting tasks on the server...');
  return tasks.length;
}