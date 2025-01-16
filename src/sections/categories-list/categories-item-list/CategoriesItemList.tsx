import { Link } from "react-router-dom";
import s from "./CategoriesItemList.module.scss";
import { CategoryListType } from "@/types/category.ts";
import { MdOutlineReadMore } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import Title from "@/components/title";
import Checkbox from "@/components/checkbox";
import { useMemo } from "react";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { TaskType } from "@/types/task.ts";

interface CategoriesListItemI {
  category: CategoryListType;
}

const LIMIT_TASKS = 3;

function CategoriesItemList({ category }: CategoriesListItemI) {
  const { updateTaskStatusCategory, saveCategoryTitle, removeCategory } = useAppStore();
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

  const saveTitle = (title: string) => {
    saveCategoryTitle({ categoryId: category.id, title });
  };

  return (
    <div className={`noWrap ${s.block}`} style={{ backgroundColor: category.color }}>
      <Link to={category.id}>
        <div className={s.editBlock}>
          <MdOutlineReadMore />
        </div>
      </Link>

      <div className={s.removeBlock} onClick={() => removeCategory(category.id)}>
        <MdOutlineDelete />
      </div>

      <Title title={category.title} className={s.title} isEditable saveTitle={saveTitle} id={category.id} />

      <div className={s.separator} />

      {countLimitedTasks?.map((task) => (
        <div className={s.task} key={task.id}>
          <Checkbox
            onChange={() => {
              !task.todos || task.todos.length === 0 ? oneTaskClickHandler(task) : () => {};
            }}
            label={task?.todos?.length > 0 ? `${task.todos?.length}: ${task.name}` : task.name}
            name={task.id + task.name}
            completed={task.completed}
            labelClassName={s.labelClassName}
            value={task.completed}
            className={s.checkbox}
            hideCheckbox={!!task.todos?.length}
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

export default CategoriesItemList;
