import { makeAutoObservable, runInAction } from "mobx";
import * as categoryService from "@/services/CategoryService";
import { CategoryType } from "@/types/category.ts";
import { CategoryTaskStatusType } from "@/services/types.ts";

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

  updateTaskStatusInCurrentCategory = async ({
    status,
    idCategory,
    idTask,
  }: CategoryTaskStatusType) => {
    try {
      const data = await categoryService.updateCategoryTaskStatus({
        status,
        idCategory,
        idTask,
      });

      runInAction(() => {
        this.currentCategory = data;
      });
    } catch (error) {
      console.log(error);
      this.setError("Failed to set task status");
    }
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
