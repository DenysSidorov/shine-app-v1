import s from "./CategoryTitle.module.scss";
import { MdDelete } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { useCallback } from "react";
import { TaskType } from "@/types/task.ts";

export type TaskWithCategoryTitle = Partial<TaskType & { categoryTitle: string; color: string }>;

interface CategoryTitleI {
  isRemovingTaskWithTodos?: boolean;
  removeAction: () => void;
  task?: TaskWithCategoryTitle;
}

function CategoryTitle({ removeAction, isRemovingTaskWithTodos, task = {} as TaskWithCategoryTitle }: CategoryTitleI) {
  const handleRemoveAction = useCallback(() => {
    removeAction();
  }, [removeAction]);

  const titleColor = task?.color || "#000";

  return (
    <div className={s.items}>
      <div className={`noWrap ${s.content}`}>
        <div className={`noWrap ${s.title}`} style={{ color: titleColor }}>
          {task?.categoryTitle}
        </div>
        <div className={`noWrap ${s.text}`}>{task?.name}</div>
        <div className={s.date}>{String(task?.date)}</div>
      </div>

      <div className={s.action}>
        {!isRemovingTaskWithTodos ? (
          <MdDelete onClick={handleRemoveAction} />
        ) : (
          <div className={s.preloader}>
            <VscLoading />
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryTitle;
