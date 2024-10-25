import s from "./CategoryTitle.module.scss";
import { MdDelete } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { useCallback } from "react";

interface CategoryTitleI {
  isRemovingTaskWithTodos?: boolean;
  removeAction: () => void;
}

//
function CategoryTitle({ removeAction, isRemovingTaskWithTodos }: CategoryTitleI) {
  const handleRemoveAction = useCallback(() => {
    removeAction();
  }, [removeAction]);

  return (
    <div className={s.items}>
      <div className={`noWrap ${s.content}`}>
        <div className={`noWrap ${s.title}`}>Garage</div>
        <div className={`noWrap ${s.text}`}>Buy wheels</div>
        <div className={s.date}>at 06:30PM </div>
      </div>

      <div className={s.action}>
        {!isRemovingTaskWithTodos ? (
          <MdDelete onClick={handleRemoveAction} />
        ) : (
          <div className={s.preloader}>
            <VscLoading />
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryTitle;
