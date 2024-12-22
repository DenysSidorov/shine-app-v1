import { Fragment, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import s from "./NewTodo.module.scss";

interface AddNewItemI {
  addNew: (text: string) => void;
}

function NewTodo({ addNew }: AddNewItemI) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputMode, setIsInputMode] = useState<boolean>(false);

  const changeModeHandler = () => {
    if (!isInputMode) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 200);
    }
    setIsInputMode((state) => !state);
  };

  const addNewTodo = () => {
    const text = inputRef.current?.value;
    if (text) {
      addNew(text);
      inputRef.current.value = "";
    }
    changeModeHandler();
  };

  return (
    <Fragment>
      <div className={s.wrapper}>
        {isInputMode ? (
          <div className={s.inputContainer}>
            <div className={s.icon}>
              <GoCheckCircleFill className={s.checkIcon} onClick={() => addNewTodo()} />
            </div>
            <input type="text" placeholder="New todo..." className={s.input} ref={inputRef} />
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

export default NewTodo;
