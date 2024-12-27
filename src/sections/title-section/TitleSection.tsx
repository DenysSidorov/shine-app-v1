import s from "./TitleSection.module.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface TitleSectionI {
  title: string;
  inProgress?: boolean;
}

export default function TitleSection({ title, inProgress }: TitleSectionI) {
  return (
    <div className={s.wrapper}>
      {inProgress && (
        <div className={s.inProgress}>
          <AiOutlineLoading3Quarters />
        </div>
      )}
      {!inProgress && title}
    </div>
  );
}
