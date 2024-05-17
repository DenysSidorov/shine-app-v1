import { useParams } from "react-router-dom";
import TasksList from "@/sections/tasks-list";

function Tasks() {
  const { categoryId } = useParams();
  console.log("render tasks3", categoryId);
  return (
    <div className="lol">
      <TasksList />
    </div>
  );
}

export default Tasks;
