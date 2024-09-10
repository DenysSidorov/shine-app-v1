import { Link } from "react-router-dom";
import s from "./CategoriesTypeListItem.module.scss";
import { CategoryListType } from "@/types/category.ts";
import Title from "@/components/title";
import Checkbox from "@/components/checkbox";
import { useMemo } from "react";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { TaskType } from "@/types/task.ts";

interface CategoriesListItemI {
  category: CategoryListType;
}

const LIMIT_TASKS = 4;

function CategoriesTypeListItem({ category }: CategoriesListItemI) {
  const { updateTaskStatusCategory } = useAppStore();
  const { tasks, id } = category;

  const countLimitedTasks = useMemo(() => {
    return tasks.filter((_, ind: number) => ind < LIMIT_TASKS);
  }, [tasks]);

  const oneTaskClickHandler = async (task: TaskType) => {
    updateTaskStatusCategory({
      status: !task.completed,
      categoryId: String(id),
      idTask: task.id,
    });
  };

  return (
    <div className={`noWrap ${s.block}`} style={{ backgroundColor: category.color }}>
      <Link to={category.id}>
        <Title title={category.title} className={s.title} />
      </Link>

      <div className={s.separator} />

      {countLimitedTasks?.map((task) => (
        <div className={s.task} key={task.id}>
          <Checkbox
            onChange={() => {
              !task?.todos ? oneTaskClickHandler(task) : () => {};
            }}
            label={!task?.todos ? task.name : `LIST: ${task.name}`}
            name={task.id + task.name}
            completed={task.completed}
            labelClassName={s.labelClassName}
            value={task.completed}
            className={s.checkbox}
          />
        </div>
      ))}
      {tasks.length > LIMIT_TASKS && (
        <div className={s.showMore}>
          <Link to={category.id} className={s.link}>
            Show more...
          </Link>
        </div>
      )}
    </div>
  );
}

export default CategoriesTypeListItem;
