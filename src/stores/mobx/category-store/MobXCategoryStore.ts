import { makeAutoObservable, runInAction } from "mobx";
import * as categoryService from "@/services/CategoryService";
import { CategoryType } from "@/types/category.ts";
import { CategoryTaskStatusType, DeleteTaskServiceType, SetActionsTaskIdType } from "@/services/types.ts";

class MobXCategoryStore {
  currentCategory: CategoryType | undefined = undefined;
  activeActionsId: string = "";
  error: string | null = null;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadCurrentCategory = async (id: string): Promise<void> => {
    this.isLoading = true;
    try {
      const data = await categoryService.fetchCategoryById(id);
      runInAction(() => {
        this.currentCategory = data;
      });
    } catch (error) {
      console.log(error);
      this.setError("Failed to load todos");
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  getIsLoadingCurrentCategory = (): boolean => {
    return this.isLoading;
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

  updateTaskStatusInCurrentCategory = async ({ status, categoryId, idTask }: CategoryTaskStatusType) => {
    try {
      const data = await categoryService.updateCategoryTaskStatus({
        status,
        categoryId,
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

  removeTask = async ({ categoryId, idTask }: DeleteTaskServiceType): Promise<boolean> => {
    try {
      const data = await categoryService.fetchDeleteTask(categoryId, idTask);
      runInAction(() => {
        this.loadCurrentCategory(categoryId);
      });
      return data as boolean;
    } catch (error) {
      console.log(error);
      this.setError("Failed to set task status");
      return false;
    }
  };

  setActionsTaskId = ({ id }: SetActionsTaskIdType): void => {
    this.activeActionsId = id;
  };

  getActionsTaskId = (): string => {
    return this.activeActionsId;
  };
}

export default new MobXCategoryStore();
