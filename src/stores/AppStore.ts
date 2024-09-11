import { CategoryType } from "@/types/category.ts";
import { CategoryTaskStatusType, TaskTodosServiceType } from "@/services/types.ts";
import { TodoType } from "@/types/todo.ts";

export abstract class AppStore {
  abstract getCategories(): CategoryType[];
  abstract getCurrentCategory(): CategoryType | undefined;
  abstract loadCategories(): Promise<void>;
  abstract updateTaskStatusCategory({ status, categoryId, idTask }: CategoryTaskStatusType): Promise<void>;

  // abstract categories: CategoryType[];
  // abstract currentCategory: CategoryType | undefined;
  abstract loadCurrentCategory(id: string): Promise<void>;
  abstract updateTaskStatusInCurrentCategory({ status, categoryId, idTask }: CategoryTaskStatusType): Promise<void>;

  abstract getTaskTodos(): TodoType[] | undefined;
  abstract loadTaskTodos({ categoryId, idTask }: TaskTodosServiceType): Promise<void>;
  // abstract addTodo(todo: Todo): void;
  // abstract removeTodo(id: string): void;
}

export interface Todo {
  id: string;
  name: string;
  date: Date;
  completed: boolean;
  description: string;
}
