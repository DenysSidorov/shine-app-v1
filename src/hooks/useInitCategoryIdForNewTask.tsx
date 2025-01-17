import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function useInitCategoryIdForNewTask() {
  const { categoryId } = useParams();
  const { initCategoryIdForNewTask } = useAppStore();

  useEffect(() => {
    initCategoryIdForNewTask(categoryId || "");
  }, [categoryId, initCategoryIdForNewTask]);
}
