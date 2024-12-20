import s from "./TodoList.module.scss";
import TodoItem from "@/sections/todo-item";
import NewTodo from "@/components/new-todo";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";
import { TodoType } from "@/types/todo.ts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import NewCategoryTitle from "@/components/new-category-title";

const TaskNew = observer(() => {
  const {
    addNewTodoForNewTask,
    removeTodoForNewTask,
    changeStatusTodoForNewTask,
    getTodosOfNewTask,
    initCategoryIdForNewTask,
  } = useAppStore();

  const todos = getTodosOfNewTask();
  const { categoryId } = useParams();

  useEffect(() => {
    initCategoryIdForNewTask(categoryId || "");
  }, [categoryId, initCategoryIdForNewTask]);

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <NewCategoryTitle />
        {todos?.map((todo: TodoType) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodoForNewTask}
              changeStatus={changeStatusTodoForNewTask}
            />
          );
        })}
        <NewTodo addNew={addNewTodoForNewTask} />
      </div>
    </div>
  );
});

export default TaskNew;
