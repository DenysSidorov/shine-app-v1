import s from "./Todos.module.scss";
import TodoList from "@/sections/todo-list";

function Todos() {
  return (
    <div className={s.tasks}>
      <TodoList />
    </div>
  );
}

export default Todos;
