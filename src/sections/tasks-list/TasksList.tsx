import s from "./TasksList.module.scss";
import TaskItem from "@/sections/task-item";
import CategoryTitle from "@/sections/category-title";

function TasksList() {
  return (
    <div className={s.wrapper}>
      <CategoryTitle />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}

export default TasksList;
