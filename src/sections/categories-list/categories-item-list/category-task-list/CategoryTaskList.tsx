import s from "./CategoryTaskList.module.scss";
import Checkbox from "@/components/checkbox";
import { Fragment, useMemo } from "react";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { TaskType } from "@/types/task.ts";

interface CategoryTaskListProps {
  categoryId: string;
  limitTasks: number;
  tasks: TaskType[];
}

function CategoryTaskList({ categoryId, limitTasks, tasks }: CategoryTaskListProps) {
  const { updateTaskStatusCategory } = useAppStore();

  const countLimitedTasks = useMemo(() => {
    return tasks.filter((_, ind: number) => ind < limitTasks);
  }, [limitTasks, tasks]);

  const oneTaskClickHandler = async (task: TaskType) => {
    updateTaskStatusCategory({
      status: !task.completed,
      categoryId: String(categoryId),
      idTask: task.id,
    });
  };

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default CategoryTaskList;
