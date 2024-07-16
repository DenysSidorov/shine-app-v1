import { useParams } from "react-router-dom";
import s from "./Tasks.module.scss";
import TasksList from "@/sections/tasks-list";

function Tasks() {
  const { categoryId } = useParams();
  console.log("render categoryId", categoryId);
  return (
    <div className={s.tasks}>
      <TasksList />
    </div>
  );
}

export default Tasks;
