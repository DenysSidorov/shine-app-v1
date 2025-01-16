import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryType } from "@/types/category.ts";

export function useGetCategory() {
  const { categoryId } = useParams();
  const { getCurrentCategory, loadCurrentCategory, getIsLoadingCurrentCategory } = useAppStore();

  useEffect(() => {
    (async () => {
      await loadCurrentCategory(categoryId ?? "");
    })();
  }, [categoryId, loadCurrentCategory]);

  const currentCategory: CategoryType | undefined = getCurrentCategory();

  return { currentCategory, isLoadingCurrentCategory: getIsLoadingCurrentCategory() };
}
