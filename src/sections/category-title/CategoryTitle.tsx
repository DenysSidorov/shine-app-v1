import s from "./CategoryTitle.module.scss";
import { TaskType } from "@/types/task.ts";
import RemoveTodo from "@/components/remove-todo";
import { useTask } from "@/sections/category-title/useTask.tsx";

export type TaskWithCategoryTitle = Partial<TaskType & { categoryTitle: string; color: string }>;
function CategoryTitle() {
  const { task } = useTask();
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

      <RemoveTodo />
    </div>
  );
}

export default CategoryTitle;
