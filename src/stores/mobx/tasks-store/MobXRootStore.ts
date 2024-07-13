import { makeAutoObservable } from "mobx";
import * as categoryService from "@/services/CategoryService";
import { CategoryType } from "@/types/category.ts";

class MobXRootStore {
  categories: CategoryType[] = [];
  currentCategory: CategoryType | undefined = undefined;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadCategories = async (): Promise<void> => {
    try {
      const data = await categoryService.fetchCategories();
      this.categories = data;
    } catch (error) {
      console.log(error);
      this.setError("Failed to load todos");
    }
  };

  loadCurrentCategory = async (id: string): Promise<void> => {
    try {
      const data = await categoryService.fetchCategoryById(id);
      this.currentCategory = data;
    } catch (error) {
      console.log(error);
      this.setError("Failed to load todos");
    }
  };

  // getError(): string | null {
  //   return this.error;
  // }

  setError(error: string | null): void {
    this.error = error;
  }

  getCategories(): CategoryType[] {
    return this.categories;
  }

  // addTodo(todo: Todo): void {
  //   console.log(todo);
  //   // this.todos.push(todo);
  // }
  //
  // removeTodo(id: string): void {
  //   console.log(id);
  //   // this.todos = this.todos.filter((todo) => todo.id !== id);
  // }
}

export default MobXRootStore;
