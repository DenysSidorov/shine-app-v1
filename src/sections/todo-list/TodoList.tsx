import { useParams } from "react-router-dom";
import TodoItem from "@/sections/todo-item";
import NewTodo from "@/components/new-todo";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { Fragment } from "react";
import { observer } from "mobx-react";
import { TodoType } from "@/types/todo.ts";

interface TodoListI {
  todos: TodoType[];
}

const TodoList = observer(({ todos }: TodoListI) => {
  const { categoryId = "", idTask = "" } = useParams();
  const { loadTaskTodos, addNewTodo, deleteTodo } = useAppStore();

  const removeTodo = async (idTodo: string) => {
    const result = await deleteTodo({ categoryId: categoryId ?? "", idTodo, idTask: idTask ?? "" });
    if (result) {
      await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    }
  };

  const addNew = async (text: string) => {
    const result = await addNewTodo({ categoryId: categoryId ?? "", text, idTask: idTask ?? "" });
    if (result) {
      await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    }
  };

  return (
    <Fragment>
      {todos?.map((todo: TodoType) => {
        return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />;
      })}
      <NewTodo addNew={addNew} />
    </Fragment>
  );
});

export default TodoList;
