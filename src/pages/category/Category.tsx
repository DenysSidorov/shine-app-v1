import { useParams } from "react-router-dom";
import s from "./Category.module.scss";
import { Fragment, useEffect } from "react";
// import AddNewItem from "@/components/add-new-item";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";
import { TaskType } from "@/types/task.ts";
import Task from "@/sections/task";
import TitleSection from "@/sections/title-section";
import { CategoryType } from "@/types/category.ts";

function Category() {
  const { categoryId } = useParams();
  const { getCurrentCategory, loadCurrentCategory, setActionsTaskId, getIsLoadingCurrentCategory } = useAppStore();

  useEffect(() => {
    (async () => {
      await loadCurrentCategory(categoryId ?? "");
    })();
  }, [categoryId, loadCurrentCategory]);

  useEffect(() => {
    return () => setActionsTaskId({ id: "" });
  }, [setActionsTaskId]);

  const category: CategoryType | undefined = getCurrentCategory();
  const tasks: TaskType[] = category?.tasks ?? [];
  const title = `You don't have any tasks for "${category?.title}"`;

  return (
    <Fragment>
      {tasks.length === 0 && <TitleSection title={title} inProgress={getIsLoadingCurrentCategory()} />}
      <div className={s.category}>
        {tasks.map((task: TaskType) => {
          return <Task key={task.id} task={task} categoryTitle={category?.title} color={category?.color} />;
        })}
        {/*<AddNewItem />*/}
      </div>
    </Fragment>
  );
}

const ObservedCategory = observer(Category);

export default ObservedCategory;
