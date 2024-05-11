import s from "./Title.module.scss";
import classes from "classnames";

interface TitleI {
  title: string;
  className?: string;
}

function Title({ title, className }: TitleI) {
  return <span className={classes(s.title, className)}>{title}</span>;
}

export default Title;
