import s from "./TaskItem.module.scss";
import { MdEdit } from "react-icons/md";
import Checkbox from "@/components/checkbox";
// import data from "@/api/data.json";

function TaskItem() {
  const isList = true;
  return (
    <div className={s.items}>
      <div className={s.mark} />
      <div className={`noWrap ${s.content}`}>
        <div className={s.title}>daily</div>
        <div className={s.textWrapper}>
          <Checkbox
            label={"Order Tools"}
            name={"Order Tools"}
            value={true}
            completed={false}
            labelClassName={s.labelClassName}
            className={s.checkbox}
            hideCheckbox={isList}
          />
        </div>
        <div className={s.date}>at 06:30PM </div>
      </div>
      <div className={s.action}>
        <MdEdit />
      </div>
    </div>
  );
}

export default TaskItem;
