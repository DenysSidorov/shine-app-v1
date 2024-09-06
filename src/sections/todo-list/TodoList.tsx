import s from "./TodoList.module.scss";
import TodoItem from "@/sections/todo-item";
import CategoryTitle from "@/sections/category-title";
import NewTask from "@/components/new-task";

function TodoList() {
  return (
    <div className={s.wrapper}>
      <CategoryTitle />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <NewTask />
    </div>
  );
}

export default TodoList;
