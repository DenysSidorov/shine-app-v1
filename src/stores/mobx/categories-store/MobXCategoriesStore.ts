import { makeAutoObservable, runInAction } from "mobx";
import * as categoryService from "@/services/CategoryService";
import { CategoryType } from "@/types/category.ts";
import { CategoryTaskStatusType } from "@/services/types.ts";

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

  updateTaskStatusCategory = async ({ status, idCategory, idTask }: CategoryTaskStatusType) => {
    try {
      const data: CategoryType = await categoryService.updateCategoryTaskStatus({
        status,
        idCategory,
        idTask,
      });

      runInAction(() => {
        const categories = this.categories.map((category: CategoryType) => {
          if (category.id === data.id) {
            return data;
          }
          return category;
        });

        this.categories = categories;
      });
    } catch (error) {
      console.log(error);
      this.setError("Failed to set task status");
    }
  };
}

export default new MobXCategoriesStore();
