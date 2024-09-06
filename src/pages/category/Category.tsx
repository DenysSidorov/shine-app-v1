import { useParams } from "react-router-dom";
import s from "./Category.module.scss";
import CategoryItem from "@/sections/category-item";
import { Fragment, useEffect } from "react";
import AddNewItem from "@/components/add-new-item";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";
import { TaskType } from "@/types/task.ts";

function Category() {
  const { categoryId } = useParams();
  const { getCurrentCategory, loadCurrentCategory } = useAppStore();

  useEffect(() => {
    (async () => {
      await loadCurrentCategory(categoryId ?? "");
    })();
  }, [categoryId, loadCurrentCategory]);

  const category = getCurrentCategory();
  const tasks: TaskType[] = category?.tasks ?? [];

  return (
    <Fragment>
      <div className={s.category}>
        {tasks.map((task: TaskType) => {
          return <CategoryItem key={task.id} task={task} title={category?.title} />;
        })}
        <AddNewItem />
      </div>
    </Fragment>
  );
}

const ObservedCategory = observer(Category);

export default ObservedCategory;
