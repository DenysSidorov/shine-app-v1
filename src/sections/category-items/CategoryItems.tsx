import s from "./CategoryItems.module.scss";
import { MdEdit } from "react-icons/md";
// import data from "@/api/data.json";

function CategoryItems() {
  return (
    <div className={s.items}>
      <div className={s.mark} />
      <div className={s.content}>
        <div className={s.title}>daily</div>
        <div className={s.text}>Order Tools</div>
        <div className={s.date}>at 06:30PM </div>
      </div>
      <div className={s.action}>
        <MdEdit />
      </div>
    </div>
  );
}

export default CategoryItems;
