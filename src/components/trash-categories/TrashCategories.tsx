import s from "./TrashCategories.module.scss";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { CategoryType } from "@/types/category.ts";
import { MdDeleteOutline, MdRestoreFromTrash } from "react-icons/md";

function TrashCategories() {
  const { getCategories, getShowDeleted, setShowDeleted, restoreCategory } = useAppStore();
  const [deletedCategories, setDeletedCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const deleted = getCategories().filter((c) => c.isDeleted);
    setDeletedCategories(deleted);
  }, [getCategories]);

  if (deletedCategories.length === 0) {
    return null;
  }

  const showTrash = getShowDeleted();

  return (
    <div className={s.trash} data-testid="trash-categories">
      <button
        className={`${s.trashButton} ${showTrash ? s.active : ""}`}
        onClick={() => setShowDeleted(!showTrash)}
        data-testid="trash-toggle"
      >
        <MdDeleteOutline />
        <span>Trash ({deletedCategories.length})</span>
      </button>

      {showTrash && (
        <div className={s.trashList}>
          {deletedCategories.map((category) => (
            <div key={category.id} className={s.trashItem} data-testid={`trash-item-${category.id}`}>
              <span className={s.title}>{category.title}</span>
              <button
                className={s.restoreButton}
                onClick={() => restoreCategory(category.id)}
                title="Restore"
                data-testid={`restore-${category.id}`}
              >
                <MdRestoreFromTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const ObservedTrashCategories = observer(TrashCategories);

export default ObservedTrashCategories;
