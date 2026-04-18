import s from "./DraggableCategories.module.scss";
import { CategoryType } from "@/types/category.ts";
import { useState } from "react";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";

interface DraggableCategoriesProps {
  categories: CategoryType[];
  renderCategory: (category: CategoryType) => React.ReactNode;
}

function DraggableCategories({ categories, renderCategory }: DraggableCategoriesProps) {
  const { reorderCategories } = useAppStore();
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (id: string) => {
    setDraggedId(id);
  };

  const handleDragOver = (index: number, e: React.DragEvent) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (index: number) => {
    if (draggedId) {
      reorderCategories(draggedId, index);
    }
    setDraggedId(null);
    setDragOverIndex(null);
  };

  return (
    <div className={s.draggableContainer} data-testid="draggable-categories">
      {categories.map((category, index) => (
        <div
          key={category.id}
          draggable
          onDragStart={() => handleDragStart(category.id)}
          onDragOver={(e) => handleDragOver(index, e)}
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(index)}
          className={`
            ${s.draggableItem}
            ${draggedId === category.id ? s.dragging : ""}
            ${dragOverIndex === index ? s.dragOver : ""}
          `}
          data-testid={`draggable-item-${category.id}`}
        >
          {renderCategory(category)}
        </div>
      ))}
    </div>
  );
}

const ObservedDraggableCategories = observer(DraggableCategories);

export default ObservedDraggableCategories;
