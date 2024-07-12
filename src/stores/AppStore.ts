import { CategoryType } from "@/types/category.ts";

export abstract class AppStore {
  abstract getCategories(): CategoryType[];
  abstract loadCategories(): Promise<void>;
  abstract categories: CategoryType[];
  abstract currentCategory: CategoryType | undefined;
  abstract loadCurrentCategory(id: string): Promise<void>;
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
