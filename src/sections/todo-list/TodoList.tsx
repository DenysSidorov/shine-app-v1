import { useParams } from "react-router-dom";
import s from "./TodoList.module.scss";
import TodoItem from "@/sections/todo-item";
import CategoryTitle from "@/sections/category-title";
import NewTask from "@/components/new-task";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { TodoType } from "@/types/todo.ts";
function TodoList() {
  const { categoryId, idTask } = useParams();
  const { getTaskTodos, loadTaskTodos } = useAppStore();

  useEffect(() => {
    (async () => {
      await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    })();
  }, [categoryId, idTask, loadTaskTodos]);

  const removeTodo = (id: string) => {
    console.log(id);
  };

  const todos = getTaskTodos();
  console.log("todos: ", todos);
  return (
    <div className={s.wrapper}>
      <CategoryTitle />
      {todos?.map((todo: TodoType) => {
        return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />;
      })}
      <NewTask />
    </div>
  );
}

export default observer(TodoList);
