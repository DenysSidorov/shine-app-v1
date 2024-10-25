import s from "./TodoItem.module.scss";
import { CiCircleRemove } from "react-icons/ci";
import Checkbox from "@/components/checkbox";
import { TodoType } from "@/types/todo.ts";

interface TodoItemI {
  todo: TodoType;
  removeTodo: (id: string) => void;
  changeStatus: (id: string, completed: boolean) => void;
}

function TodoItem({ todo, removeTodo, changeStatus }: TodoItemI) {
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
