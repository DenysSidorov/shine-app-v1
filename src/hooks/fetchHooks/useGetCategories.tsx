import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useEffect } from "react";

export function useGetCategories() {
  const { getCategories, loadCategories, getIsLoadingCategories } = useAppStore();

  useEffect(() => {
    (async () => {
      await loadCategories();
    })();
  }, [loadCategories]);

  const categories = getCategories();

  return { categories, isLoadingCategories: getIsLoadingCategories() };
}
