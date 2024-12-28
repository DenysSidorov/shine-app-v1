import s from "./TaskActions.module.scss";
import { FaCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface TaskActions {
  markTaskAndTodosAsCompleted: () => void;
  editTask: () => void;
  deleteTaskWithTodos: () => void;
}

function TaskActions({ markTaskAndTodosAsCompleted, editTask, deleteTaskWithTodos }: TaskActions) {
  return (
    <div className={s.container}>
      <div className={s.actions}>
        <div className={s.action} onClick={markTaskAndTodosAsCompleted}>
          <FaCheck />
        </div>

        <div className={s.action} onClick={editTask}>
          <MdEdit />
        </div>

        <div className={s.action} onClick={deleteTaskWithTodos}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

export default TaskActions;
