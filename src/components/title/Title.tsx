import s from "./Title.module.scss";
import classes from "classnames";
import { useState } from "react";

interface TitleBase {
  title: string;
  className?: string;
  isEditable?: boolean;
}

interface EditableTitle extends TitleBase {
  isEditable: true;
  saveTitle: (value: string) => void;
}

interface NonEditableTitle extends TitleBase {
  isEditable?: false;
  saveTitle?: never;
}

type TitleI = EditableTitle | NonEditableTitle;

function Title({ title, className, isEditable = false, saveTitle }: TitleI) {
  const [value, setValue] = useState<string>(title);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isEditable) {
      setValue(e.target.value);
    }
  };

  const leaveHandler = () => {
    if (!value.length) {
      setValue(title);
    } else if (saveTitle) {
      saveTitle(value);
    }
  };

  if (isEditable) {
    return (
      <input className={classes(s.title, className)} value={value} onChange={changeHandler} onBlur={leaveHandler} />
    );
  }

  return <span className={classes(s.title, className)}>{title}</span>;
}

export default Title;
