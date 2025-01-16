import { Link } from "react-router-dom";
import s from "./CategoriesItemList.module.scss";
import { CategoryListType } from "@/types/category.ts";
import { MdOutlineReadMore } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import Title from "@/components/title";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import CategoryTaskList from "@/sections/categories-list/categories-item-list/category-task-list";

interface CategoriesListItemI {
  category: CategoryListType;
}

const LIMIT_TASKS = 3;

function CategoriesItemList({ category }: CategoriesListItemI) {
  const { saveCategoryTitle, removeCategory } = useAppStore();
  const { tasks, id, color, title } = category;

  const saveTitle = (title: string) => {
    saveCategoryTitle({ categoryId: id, title });
  };

  return (
    <div className={`noWrap ${s.block}`} style={{ backgroundColor: color }}>
      <Link to={id}>
        <div className={s.editBlock}>
          <MdOutlineReadMore />
        </div>
      </Link>

      <div className={s.removeBlock} onClick={() => removeCategory(id)}>
        <MdOutlineDelete />
      </div>

      <Title title={title} className={s.title} isEditable saveTitle={saveTitle} id={id} />

      <div className={s.separator} />

      <CategoryTaskList limitTasks={LIMIT_TASKS} tasks={tasks} categoryId={id} />

      {tasks.length > LIMIT_TASKS && (
        <div className={s.showMore}>
          <Link to={id} className={s.link}>
            Show more...
          </Link>
        </div>
      )}
    </div>
  );
}

export default CategoriesItemList;
