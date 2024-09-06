import { useParams } from "react-router-dom";
import s from "./Todos.module.scss";
import TodoList from "@/sections/todo-list";

function Todos() {
  const { categoryId } = useParams();
  console.log("render categoryId", categoryId);
  return (
    <div className={s.tasks}>
      <TodoList />
    </div>
  );
}

export default Todos;
