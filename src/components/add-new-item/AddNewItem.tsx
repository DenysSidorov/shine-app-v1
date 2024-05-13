import { IoAddSharp } from "react-icons/io5";
import s from "./AddNewItem.module.scss";

interface AddNewItemI {}

function AddNewItem({}: AddNewItemI) {
  return (
    <div className={s.wrapper}>
      <IoAddSharp />
    </div>
  );
}

export default AddNewItem;
