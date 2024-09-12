import s from "./TodoItem.module.scss";
import { CiCircleRemove } from "react-icons/ci";
import Checkbox from "@/components/checkbox";
import { TodoType } from "@/types/todo.ts";

interface TodoItemI {
  todo: TodoType;
  removeTodo: (id: string) => void;
}

function TodoItem({ todo, removeTodo }: TodoItemI) {
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
      />
      <CiCircleRemove className={s.removeIcon} onClick={() => removeTodo(todo.id)} />
    </div>
  );
}

export default TodoItem;
