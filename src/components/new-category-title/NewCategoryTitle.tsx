import s from "./NewCategoryTitle.module.scss";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";

interface NewCategoryTitleI {}

const NewCategoryTitle = observer(({}: NewCategoryTitleI) => {
  const { setNewTitle, getNewTitle } = useAppStore();
  return (
    <div className={s.wrapper}>
      <div className={`noWrap ${s.content}`}>
        <div className={`noWrap ${s.title}`}>{"Task's Name"}</div>
        <input
          type="text"
          className={s.userInput}
          value={getNewTitle()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
        />
      </div>
    </div>
  );
});

export default NewCategoryTitle;
