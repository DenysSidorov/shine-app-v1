import { useNavigate, useParams } from "react-router-dom";
import s from "./TodoList.module.scss";
import TodoItem from "@/sections/todo-item";
import NewTodo from "@/components/new-todo";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useMemo, useState } from "react";
import { observer } from "mobx-react";
import { TodoType } from "@/types/todo.ts";
import { TaskType } from "@/types/task.ts";
import { TaskWithCategoryTitle } from "@/sections/category-title/CategoryTitle.tsx";

/*
id: string;
  name: string;
  date: string | Date;
  completed: boolean;
* */

const TaskNew = observer(() => {
  const [todos, setTodos] = useState<Array<string>>([]);
  const { loadTaskTodos, addNewTodo, deleteTodo, updateTodoStatus, loadCurrentCategory, getCurrentCategory } =
    useAppStore();
  const navigate = useNavigate();
  const [isRemovingTaskWithTodos, setIsRemovingTaskWithTodos] = useState<boolean>(false);

  const addNew = async (text: string) => {
    setTodos((state) => [...state, text]);
  };

  const removeTodo = () => {};

  const changeStatus = async (id: string, completed: boolean) => {
    console.log(id, completed);
    // const response = await updateTodoStatus({ status: !completed, idTodo: id, categoryId, idTask });
    // if (response) {
    //   await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    // }
  };

  return (
    <div className={s.wrapper}>
      lol
      {todos?.map((todo: TodoType) => {
        return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} changeStatus={changeStatus} />;
      })}
      <NewTodo addNew={addNew} />
    </div>
  );
});

export default TaskNew;
