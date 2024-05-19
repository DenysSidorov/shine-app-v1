import s from "./CategoryActions.module.scss";
import { MdDelete } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdEdit } from "react-icons/md";

interface AddNewItemI {}

function CategoryActions({}: AddNewItemI) {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <MdOutlineDownloadDone className={s.icon} size={30} />
        <span>Complete</span>
      </div>
      <div className={s.block}>
        <MdEdit className={s.icon} />
        <span>Edit</span>
      </div>
      <div className={s.block}>
        <MdDelete className={s.icon} />
        <span>Delete</span>
      </div>
    </div>
  );
}

export default CategoryActions;
