import { Link } from "react-router-dom";
import s from "./CategoriesItemList.module.scss";
import { CategoryListType } from "@/types/category.ts";
import { MdOutlineReadMore } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import Title from "@/components/title";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import CategoryTaskList from "@/sections/categories-list/categories-item-list/category-task-list";
import CompletionProgress from "@/components/completion-progress";
import { useState } from "react";

interface CategoriesListItemI {
  category: CategoryListType;
}

const LIMIT_TASKS = 3;

function CategoriesItemList({ category }: CategoriesListItemI) {
  const { saveCategoryTitle, removeCategory, getCategoryCompletionPercent } = useAppStore();
  const { tasks, id, color, title } = category;
  const completionPercent = getCategoryCompletionPercent(category);
  const [isDragging, setIsDragging] = useState(false);

  const saveTitle = (title: string) => {
    saveCategoryTitle({ categoryId: id, title });
  };

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("categoryId", id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`noWrap ${s.block} ${isDragging ? s.dragging : ""}`}
      style={{ backgroundColor: color }}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      data-category-id={id}
    >
      <Link to={id}>
        <div className={s.editBlock}>
          <MdOutlineReadMore />
        </div>
      </Link>

      <div className={s.removeBlock} onClick={() => removeCategory(id)}>
        <MdOutlineDelete />
      </div>

      <Title title={title} className={s.title} isEditable saveTitle={saveTitle} id={id} />

      <div className={s.separator} />

      <CompletionProgress percent={completionPercent} size="small" showLabel={true} />

      <div className={s.separator} />

      <CategoryTaskList limitTasks={LIMIT_TASKS} tasks={tasks} categoryId={id} />

      {tasks.length > LIMIT_TASKS && (
        <div className={s.showMore}>
          <Link to={id} className={s.link}>
            Show more...
          </Link>
        </div>
      )}
    </div>
  );
}

export default CategoriesItemList;
