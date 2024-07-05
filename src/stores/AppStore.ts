export abstract class AppStore {
  abstract getTodos(): Todo[];
  abstract addTodo(todo: Todo): void;
  abstract removeTodo(id: string): void;
}

export interface Todo {
  id: string;
  name: string;
  date: Date;
  completed: boolean;
  description: string;
}

