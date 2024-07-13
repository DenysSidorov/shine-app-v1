import { makeAutoObservable, runInAction, toJS } from "mobx";
import * as categoryService from "@/services/CategoryService";
import { CategoryType } from "@/types/category.ts";

class MobXCategoriesStore {
  categories: CategoryType[] = [];
  currentCategory: CategoryType | undefined = undefined;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadCategories = async (): Promise<void> => {
    try {
      const data = await categoryService.fetchCategories();
      runInAction(() => {
        this.categories = data;
      });
      console.log(toJS(this.categories));
    } catch (error) {
      console.log(error);
      this.setError("Failed to load todos");
    }
  };

  loadCurrentCategory = async (id: string): Promise<void> => {
    try {
      const data = await categoryService.fetchCategoryById(id);
      runInAction(() => {
        this.currentCategory = data;
      });
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

  getCategories = (): CategoryType[] => {
    return this.categories;
  };

  getCurrentCategory = (): CategoryType | undefined => {
    return this.currentCategory;
  };

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

export default new MobXCategoriesStore();
