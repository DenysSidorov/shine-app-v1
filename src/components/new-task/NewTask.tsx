import { Fragment, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import s from "./NewTask.module.scss";

interface AddNewItemI {}

function NewTask({}: AddNewItemI) {
  const [isInputMode, setIsInputMode] = useState<boolean>(false);

  const changeModeHandler = () => {
    setIsInputMode((state) => !state);
  };

  return (
    <Fragment>
      <div className={s.wrapper}>
        {isInputMode ? (
          <div className={s.inputContainer}>
            <div className={s.icon}>
              <GoCheckCircleFill className={s.checkIcon} />
            </div>
            <input type="text" placeholder="New todo..." className={s.input} />
          </div>
        ) : (
          <div className={s.addMore} onClick={changeModeHandler}>
            <div className={s.icon}>
              <FaPlus />
            </div>
            <span className={s.moreText}>Add more todos</span>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default NewTask;
