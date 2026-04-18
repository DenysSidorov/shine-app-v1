import s from "./CategoriesList.module.scss";
import { CategoryCountType, CategoryListType, CategoryType } from "@/types/category.ts";
import { observer } from "mobx-react";
import CategoriesItemCount from "@/sections/categories-list/categories-item-count";
import CategoriesItemList from "@/sections/categories-list/categories-item-list";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useState } from "react";

interface CategoriesListProps {
  categories: CategoryType[];
}

function CategoriesList({ categories }: CategoriesListProps) {
  const { reorderCategories } = useAppStore();
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverIndex(null);
    const sourceCategoryId = e.dataTransfer.getData("categoryId");
    if (sourceCategoryId) {
      reorderCategories(sourceCategoryId, targetIndex);
    }
  };

  return (
    <div className={s.categories}>
      {categories.map((category: CategoryType, index: number) => (
        <div
          key={category.id}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
          style={{
            opacity: dragOverIndex === index ? 0.7 : 1,
            transition: "opacity 0.2s ease",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          {category.type === "list" && <CategoriesItemList category={category as CategoryListType} />}
          {category.type === "count" && <CategoriesItemCount category={category as CategoryCountType} />}
        </div>
      ))}
    </div>
  );
}

const ObservedCategoriesList = observer(CategoriesList);

export default ObservedCategoriesList;
