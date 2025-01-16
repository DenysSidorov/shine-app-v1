import s from "./TodoItem.module.scss";
import { CiCircleRemove } from "react-icons/ci";
import Checkbox from "@/components/checkbox";
import { TodoType } from "@/types/todo.ts";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useParams } from "react-router-dom";

interface TodoItemI {
  todo: TodoType;
  removeTodo: (id: string) => void;
  changeStatusProp?: (id: string, completed: boolean) => void;
}

function TodoItem({ todo, removeTodo, changeStatusProp }: TodoItemI) {
  const { loadTaskTodos, updateTodoStatus } = useAppStore();
  const { categoryId = "", idTask = "" } = useParams();

  const changeStatusServer = async (id: string, completed: boolean) => {
    const response = await updateTodoStatus({ status: !completed, idTodo: id, categoryId, idTask });
    if (response) {
      await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    }
  };

  const changeStatus = (id: string, completed: boolean) => {
    if (changeStatusProp) {
      changeStatusProp(id, completed);
    } else {
      changeStatusServer(id, completed);
    }
  };

  return (
    <div className={`noWrap ${s.wrapper}`}>
      <Checkbox
        label={todo.name}
        name={todo.name}
        value={todo.completed}
        completed={todo.completed}
        labelClassName={s.labelClassName}
        className={s.checkbox}
        checkboxClassName={s.checkboxClassName}
        onChange={() => changeStatus(todo.id, todo.completed)}
      />
      <CiCircleRemove className={s.removeIcon} onClick={() => removeTodo(todo.id)} />
    </div>
  );
}

export default TodoItem;
