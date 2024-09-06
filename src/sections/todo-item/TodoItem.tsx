import s from "./TodoItem.module.scss";
import { CiCircleRemove } from "react-icons/ci";
import Checkbox from "@/components/checkbox";

function TodoItem() {
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
      <CiCircleRemove className={s.removeIcon} />
    </div>
  );
}

export default TodoItem;
