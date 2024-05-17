import s from "./CategoryTitle.module.scss";
import { MdDelete } from "react-icons/md";

function CategoryTitle() {
  return (
    <div className={s.items}>
      <div className={`noWrap ${s.content}`}>
        <div className={`noWrap ${s.title}`}>Garage</div>
        <div className={`noWrap ${s.text}`}>Buy wheels</div>
        <div className={s.date}>at 06:30PM </div>
      </div>

      <div className={s.action}>
        <MdDelete />
      </div>
    </div>
  );
}

export default CategoryTitle;
