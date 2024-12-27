import s from "./Title.module.scss";
import classes from "classnames";
import { useEffect, useRef, useState } from "react";
import { useAppStore } from "@/hooks/useAppStore.tsx";

interface TitleBase {
  title: string;
  className?: string;
  isEditable?: boolean;
  id?: null | string;
}

interface EditableTitle extends TitleBase {
  isEditable: true;
  saveTitle: (value: string) => void;
  id: null | string;
}

interface NonEditableTitle extends TitleBase {
  isEditable?: false;
  saveTitle?: never;
}

type TitleI = EditableTitle | NonEditableTitle;

function Title({ title, className, isEditable = false, saveTitle, id }: TitleI) {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>(title);
  const { getNewCategoryId, removeNewCategoryId } = useAppStore();

  useEffect(() => {
    if (id === getNewCategoryId() && ref.current) {
      ref.current.focus();
      removeNewCategoryId();
    }
  }, [removeNewCategoryId, id, getNewCategoryId]);

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
      <input
        className={classes(s.title, className)}
        value={value}
        onChange={changeHandler}
        onBlur={leaveHandler}
        ref={ref}
      />
    );
  }

  return <span className={classes(s.title, className)}>{title}</span>;
}

export default Title;
