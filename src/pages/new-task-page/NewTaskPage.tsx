import s from "./NewTaskPage.module.scss";
import TodoItem from "@/sections/todo-item";
import NewTodo from "@/components/new-todo";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";
import { TodoType } from "@/types/todo.ts";
import NewCategoryTitle from "@/components/new-category-title";
import { useInitCategoryIdForNewTask } from "@/hooks/useInitCategoryIdForNewTask.tsx";
import { useResetNewTask } from "@/hooks/useResetNewTask.tsx";

const NewTaskPage = observer(() => {
  const { addNewTodoForNewTask, removeTodoForNewTask, changeStatusTodoForNewTask, getTodosOfNewTask } = useAppStore();

  const todos = getTodosOfNewTask();

  useInitCategoryIdForNewTask();
  useResetNewTask();

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
              changeStatusProp={changeStatusTodoForNewTask}
            />
          );
        })}
        <NewTodo addNew={addNewTodoForNewTask} />
      </div>
    </div>
  );
});

export default NewTaskPage;
