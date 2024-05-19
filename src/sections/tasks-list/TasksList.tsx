import s from "./TasksList.module.scss";
import TaskItem from "@/sections/task-item";
import CategoryTitle from "@/sections/category-title";
import NewTask from "@/components/new-task";

function TasksList() {
  return (
    <div className={s.wrapper}>
      <CategoryTitle />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <NewTask />
    </div>
  );
}

export default TasksList;
