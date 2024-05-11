import s from "./Title.module.scss";

interface TitleI {
  title: string;
}

function Title({ title }: TitleI) {
  return <span className={s.title}>{title}</span>;
}

export default Title;
