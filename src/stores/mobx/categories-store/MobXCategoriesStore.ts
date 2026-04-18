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
  sortBy: "name" | "date" | "manual" = "manual";
  showDeleted: boolean = false;

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

  removeNewCategoryId = (): void => {
    this.newCategoryId = null;
  };

  removeCategory = async (id: string): Promise<void> => {
    try {
      await categoryService.fetchDeleteCategory(id);
      runInAction(() => {
        const categories = this.categories.map((category: CategoryType) => {
          if (category.id === id) {
            return { ...category, isDeleted: true };
          }
          return category;
        });
        this.categories = categories;
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

  // Search methods
  setSearchQuery = (query: string): void => {
    this.searchQuery = query;
  };

  getSearchQuery = (): string => {
    return this.searchQuery;
  };

  // Sort methods
  setSortBy = (sortBy: "name" | "date" | "manual"): void => {
    this.sortBy = sortBy;
  };

  getSortBy = (): "name" | "date" | "manual" => {
    return this.sortBy;
  };

  // Trash methods
  setShowDeleted = (show: boolean): void => {
    this.showDeleted = show;
  };

  getShowDeleted = (): boolean => {
    return this.showDeleted;
  };

  restoreCategory = async (id: string): Promise<void> => {
    try {
      await categoryService.fetchDeleteCategory(id);
      runInAction(() => {
        const categories = this.categories.map((category: CategoryType) => {
          if (category.id === id) {
            return { ...category, isDeleted: false };
          }
          return category;
        });
        this.categories = categories;
      });
    } catch (error) {
      console.log(error);
      this.setError("Failed to restore category");
    }
  };

  // Drag and drop
  reorderCategories = (categoryId: string, newIndex: number): void => {
    runInAction(() => {
      // Get only non-deleted categories (visible)
      const visibleCategories = this.categories.filter((c) => !c.isDeleted);
      const oldIndex = visibleCategories.findIndex((c) => c.id === categoryId);

      if (oldIndex === -1 || newIndex < 0 || newIndex >= visibleCategories.length) {
        return;
      }

      // Reorder visible categories
      const reordered = [...visibleCategories];
      const [movedCategory] = reordered.splice(oldIndex, 1);
      reordered.splice(newIndex, 0, movedCategory);

      // Update all categories with new indices and deleted categories in place
      const result: CategoryType[] = [];
      let visibleIndex = 0;

      for (const cat of this.categories) {
        if (cat.isDeleted) {
          result.push(cat);
        } else {
          result.push({ ...reordered[visibleIndex], order: visibleIndex });
          visibleIndex++;
        }
      }

      this.categories = result;
    });
  };

  // Filtering and sorting
  private getVisibleCategories = (): CategoryType[] => {
    return this.categories.filter((c) => {
      const isVisible = this.showDeleted ? c.isDeleted : !c.isDeleted;
      const query = this.searchQuery.toLowerCase().trim();
      const matchesSearch = !query || c.title.toLowerCase().includes(query);
      return isVisible && matchesSearch;
    });
  };

  getFilteredCategories = (): CategoryType[] => {
    const visible = this.getVisibleCategories();

    if (this.sortBy === "name") {
      return [...visible].sort((a, b) => a.title.localeCompare(b.title));
    }

    if (this.sortBy === "date") {
      return [...visible].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    // manual sort
    return [...visible].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  };

  // Completion percentage
  getCategoryCompletionPercent = (category: CategoryType): number => {
    if (!category.tasks || category.tasks.length === 0) return 0;
    const completed = category.tasks.filter((t) => t.completed).length;
    return Math.round((completed / category.tasks.length) * 100);
  };
}

export default new MobXCategoriesStore();
