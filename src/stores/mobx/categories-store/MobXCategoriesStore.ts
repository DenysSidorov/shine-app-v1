import { makeAutoObservable, runInAction } from "mobx";
import * as categoryService from "@/services/CategoryService";
import { CategoryType } from "@/types/category.ts";

class MobXCategoriesStore {
  categories: CategoryType[] = [];
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

  setError(error: string | null): void {
    this.error = error;
  }

  getCategories = (): CategoryType[] => {
    return this.categories;
  };
}

export default new MobXCategoriesStore();
