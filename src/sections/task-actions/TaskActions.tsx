import s from "./TaskActions.module.scss";
import { FaCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface TaskActions {}

function TaskActions({}: TaskActions) {
  return (
    <div className={s.container}>
      <div className={s.actions}>
        <div className={s.action}>
          <FaCheck />
        </div>

        <div className={s.action}>
          <MdEdit />
        </div>

        <div className={s.action}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

export default TaskActions;
