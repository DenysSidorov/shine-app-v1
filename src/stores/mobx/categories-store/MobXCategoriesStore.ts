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

  addNewCategory = async (): Promise<void> => {
    try {
      const data: CategoryType = await categoryService.fetchAddNewCategory();

      runInAction(() => {
        this.categories.push(data);
      });
    } catch (error) {
      console.log(error);
      this.setError("Failed to set task status");
    }
  };

  saveCategoryTitle = async ({ categoryId, title }: { categoryId: string; title: string }): Promise<void> => {
    try {
      const data: CategoryType = await categoryService.fetchSaveCategoryTitle({ categoryId, title });

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
      this.setError("Failed to set category title");
    }
  };

  updateTaskStatusCategory = async ({ status, categoryId, idTask }: CategoryTaskStatusType) => {
    try {
      const data: CategoryType = await categoryService.updateCategoryTaskStatus({
        status,
        categoryId,
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
