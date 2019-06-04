import { ID, guid } from '@datorama/akita';

export interface Todo {
  id: ID;
  text: string;
}

/**
 * A factory function that creates Todo
 */
export function createTodo(params: Partial<Todo>) {
  return {
    ...params,
    id: guid()
  } as Todo;
}
