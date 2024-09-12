import { useParams } from "react-router-dom";
import s from "./TodoList.module.scss";
import TodoItem from "@/sections/todo-item";
import CategoryTitle from "@/sections/category-title";
import NewTodo from "@/components/new-todo";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { TodoType } from "@/types/todo.ts";
function TodoList() {
  const { categoryId, idTask } = useParams();
  const { getTaskTodos, loadTaskTodos, addNewTodo, deleteTodo } = useAppStore();

  useEffect(() => {
    (async () => {
      await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    })();
  }, [categoryId, idTask, loadTaskTodos]);

  const removeTodo = async (idTodo: string) => {
    const result = await deleteTodo({ categoryId: categoryId ?? "", idTodo, idTask: idTask ?? "" });
    console.log(result);
    if (result) {
      await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    }
  };

  const addNew = async (text: string) => {
    const result = await addNewTodo({ categoryId: categoryId ?? "", text, idTask: idTask ?? "" });
    console.log(result);
    if (result) {
      await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    }
  };

  const todos = getTaskTodos();
  console.log("todos: ", todos);
  return (
    <div className={s.wrapper}>
      <CategoryTitle />
      {todos?.map((todo: TodoType) => {
        return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />;
      })}
      <NewTodo addNew={addNew} />
    </div>
  );
}

export default observer(TodoList);
