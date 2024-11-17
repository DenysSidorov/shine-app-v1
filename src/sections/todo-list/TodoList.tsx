import { useNavigate, useParams } from "react-router-dom";
import s from "./TodoList.module.scss";
import TodoItem from "@/sections/todo-item";
import CategoryTitle from "@/sections/category-title";
import NewTodo from "@/components/new-todo";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react";
import { TodoType } from "@/types/todo.ts";
import { TaskType } from "@/types/task.ts";
import { TaskWithCategoryTitle } from "@/sections/category-title/CategoryTitle.tsx";

const TodoList = observer(() => {
  const { categoryId = "", idTask = "" } = useParams();
  const {
    getTaskTodos,
    loadTaskTodos,
    addNewTodo,
    deleteTodo,
    removeTask,
    updateTodoStatus,
    loadCurrentCategory,
    getCurrentCategory,
  } = useAppStore();
  const navigate = useNavigate();
  const [isRemovingTaskWithTodos, setIsRemovingTaskWithTodos] = useState<boolean>(false);

  useEffect(() => {
    loadCurrentCategory(categoryId);
  }, [loadCurrentCategory, categoryId]);

  useEffect(() => {
    (async () => {
      await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    })();
  }, [categoryId, idTask, loadTaskTodos]);

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

  const removeTaskWithTodos = async () => {
    if (!isRemovingTaskWithTodos) {
      setIsRemovingTaskWithTodos(true);
      await removeTask({ categoryId, idTask });
      navigate(`/categories/${categoryId}`);
    }
  };

  const changeStatus = async (id: string, completed: boolean) => {
    const response = await updateTodoStatus({ status: !completed, idTodo: id, categoryId, idTask });
    if (response) {
      await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    }
  };

  const todos = getTaskTodos();
  const category = getCurrentCategory();

  const task: TaskWithCategoryTitle = useMemo(() => {
    if (category) {
      const currentTask = category?.tasks?.find((task: TaskType) => String(task.id) === String(idTask));
      return { ...currentTask, categoryTitle: category.title };
    }
    return {} as TaskWithCategoryTitle;
  }, [category, idTask]);

  return (
    <div className={s.wrapper}>
      <CategoryTitle removeAction={removeTaskWithTodos} isRemovingTaskWithTodos={isRemovingTaskWithTodos} task={task} />
      {todos?.map((todo: TodoType) => {
        return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} changeStatus={changeStatus} />;
      })}
      <NewTodo addNew={addNew} />
    </div>
  );
});

export default TodoList;
