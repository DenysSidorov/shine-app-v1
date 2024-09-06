import { Link, useParams } from "react-router-dom";
import s from "./CategoryItem.module.scss";
import { MdEdit } from "react-icons/md";
import Checkbox from "@/components/checkbox";
import { TaskType } from "@/types/task.ts";
import { useAppStore } from "@/hooks/useAppStore.tsx";

function CategoryItem({ task, title }: { task: TaskType; title?: string }) {
  const { categoryId } = useParams();
  const { updateTaskStatusInCurrentCategory } = useAppStore();
  const isList = !!task.todos?.length;
  const url = `/categories/${categoryId}/tasks`;

  const oneTaskClickHandler = () => {
    updateTaskStatusInCurrentCategory({
      status: !task.completed,
      idCategory: String(categoryId),
      idTask: task.id,
    });
  };

  return (
    <div className={s.item}>
      <div className={s.mark} />
      <div className={`noWrap ${s.content}`}>
        <Link to={url}>
          <div className={s.title}>{title}</div>
        </Link>
        <div className={s.textWrapper}>
          {isList ? (
            <Link to={url}>
              <div className={s.listBlock}>
                <div className={s.list}>List</div>
                <div className={s.text}>{task.name}</div>
              </div>
            </Link>
          ) : (
            <Checkbox
              onChange={oneTaskClickHandler}
              label={task.name}
              name={task.id + task.name}
              value={task.completed}
              completed={task.completed}
              labelClassName={s.labelClassName}
              className={s.checkbox}
              hideCheckbox={isList}
            />
          )}
        </div>
        <div className={s.date}>{task.date.toString()}</div>
      </div>
      <div className={s.action}>
        <MdEdit />
      </div>
    </div>
  );
}

export default CategoryItem;
