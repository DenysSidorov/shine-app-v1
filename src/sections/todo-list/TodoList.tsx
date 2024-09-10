import { useParams } from "react-router-dom";
import s from "./TodoList.module.scss";
import TodoItem from "@/sections/todo-item";
import CategoryTitle from "@/sections/category-title";
import NewTask from "@/components/new-task";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useEffect } from "react";
function TodoList() {
  const { categoryId } = useParams();
  const { getCategoryTodos, loadCategoryTodos } = useAppStore();

  useEffect(() => {
    (async () => {
      await loadCategoryTodos({ categoryId: categoryId ?? "", idTask: "122" });
    })();
  }, [categoryId, loadCategoryTodos]);

  const todos = getCategoryTodos();
  console.log("todos: ", todos);
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
