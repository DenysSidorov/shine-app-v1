import { useMemo } from "react";
import { TaskType } from "@/types/task.ts";
import { TaskWithCategoryTitle } from "@/sections/category-title/CategoryTitle.tsx";
import { useParams } from "react-router-dom";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { CategoryType } from "@/types/category.ts";

export const useTask = () => {
  const { idTask = "" } = useParams();
  const { getCurrentCategory } = useAppStore();
  const currentCategory: CategoryType | undefined = getCurrentCategory();

  const task: TaskWithCategoryTitle = useMemo(() => {
    if (currentCategory) {
      const currentTask = currentCategory?.tasks?.find((task: TaskType) => String(task.id) === String(idTask));
      return { ...currentTask, categoryTitle: currentCategory.title, color: currentCategory.color };
    }
    return {} as TaskWithCategoryTitle;
  }, [currentCategory, idTask]);

  return { task };
};
