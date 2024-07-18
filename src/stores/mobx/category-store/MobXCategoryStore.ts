import { makeAutoObservable, runInAction } from "mobx";
import * as categoryService from "@/services/CategoryService";
import { CategoryType } from "@/types/category.ts";
import { CategoryTaskStatusType } from "@/services/types.ts";

class MobXCategoryStore {
  currentCategory: CategoryType | undefined = undefined;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

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

  getCurrentCategory = (): CategoryType | undefined => {
    return this.currentCategory;
  };

  updateTaskStatusInCurrentCategory = async ({ status, idCategory, idTask }: CategoryTaskStatusType) => {
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
}

export default new MobXCategoryStore();
