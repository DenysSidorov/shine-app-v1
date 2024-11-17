import { useParams } from "react-router-dom";
import s from "./Category.module.scss";
import { Fragment, useEffect } from "react";
import AddNewItem from "@/components/add-new-item";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";
import { TaskType } from "@/types/task.ts";
import Task from "@/sections/task";

function Category() {
  const { categoryId } = useParams();
  const { getCurrentCategory, loadCurrentCategory, setActionsTaskId } = useAppStore();

  useEffect(() => {
    (async () => {
      await loadCurrentCategory(categoryId ?? "");
    })();
  }, [categoryId, loadCurrentCategory]);

  useEffect(() => {
    return () => setActionsTaskId({ id: "" });
  }, [setActionsTaskId]);

  const category = getCurrentCategory();
  const tasks: TaskType[] = category?.tasks ?? [];

  return (
    <Fragment>
      <div className={s.category}>
        {tasks.map((task: TaskType) => {
          return <Task key={task.id} task={task} categoryTitle={category?.title} color={category?.color} />;
        })}
        <AddNewItem />
      </div>
    </Fragment>
  );
}

const ObservedCategory = observer(Category);

export default ObservedCategory;
