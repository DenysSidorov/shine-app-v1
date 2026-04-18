import { makeAutoObservable, runInAction } from "mobx";
import * as categoryService from "@/services/CategoryService";
import { CategoryType } from "@/types/category.ts";
import { CategoryTaskStatusType } from "@/services/types.ts";

class MobXCategoriesStore {
  categories: CategoryType[] = [];
  newCategoryId: null | string = null;
  isLoading: boolean = false;
  error: string | null = null;
  searchQuery: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  loadCategories = async (): Promise<void> => {
    this.isLoading = true;
    try {
      const data = await categoryService.fetchCategories();
      runInAction(() => {
        this.categories = data;
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

  getIsLoadingCategories = (): boolean => {
    return this.isLoading;
  };

  getNewCategoryId = (): null | string => {
    return this.newCategoryId;
  };

  setError(error: string | null): void {
    this.error = error;
  }

  getCategories = (): CategoryType[] => {
    return this.categories;
  };

  setSearchQuery = (query: string): void => {
    this.searchQuery = query;
  };

  getSearchQuery = (): string => {
    return this.searchQuery;
  };

  getFilteredCategories = (): CategoryType[] => {
    if (!this.searchQuery.trim()) return this.categories;
    const q = this.searchQuery.toLowerCase().trim();
    return this.categories.filter((c) => c.title.toLowerCase().includes(q));
  };

  removeNewCategoryId = (): void => {
    this.newCategoryId = null;
  };

  removeCategory = async (id: string): Promise<void> => {
    try {
      await categoryService.fetchDeleteCategory(id);
      runInAction(() => {
        this.categories = this.categories.filter((category: CategoryType) => category.id !== id);
      });
    } catch (error) {
      console.log(error);
      this.setError("Failed to delete category");
    }
  };

  addNewCategory = async (): Promise<void> => {
    try {
      const data: CategoryType = await categoryService.fetchAddNewCategory();

      runInAction(() => {
        this.categories.push(data);
        this.newCategoryId = data.id;
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
        this.categories = this.categories.map((category: CategoryType) => {
          if (category.id === data.id) {
            return data;
          }
          return category;
        });
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
        this.categories = this.categories.map((category: CategoryType) => {
          if (category.id === data.id) {
            return data;
          }
          return category;
        });
      });
    } catch (error) {
      console.log(error);
      this.setError("Failed to set task status");
    }
  };
}

export default new MobXCategoriesStore();
