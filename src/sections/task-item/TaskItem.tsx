import s from "./TaskItem.module.scss";
import Checkbox from "@/components/checkbox";

function TaskItem() {
  return (
    <div className={`noWrap ${s.wrapper}`}>
      <Checkbox
        label={"Order Tools tasks skk sks ksksks222222"}
        name={"Order Tools"}
        value={true}
        completed={false}
        labelClassName={s.labelClassName}
        className={s.checkbox}
        checkboxClassName={s.checkboxClassName}
      />
    </div>
  );
}

export default TaskItem;
