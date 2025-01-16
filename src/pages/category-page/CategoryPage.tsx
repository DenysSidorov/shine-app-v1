import { Fragment } from "react";
import { observer } from "mobx-react";
import { TaskType } from "@/types/task.ts";
import TitleSection from "@/sections/title-section";
import { useGetCategory } from "@/hooks/fetchHooks/useGetCategory.tsx";
import TaskList from "@/sections/task-list";
import { useRemoveTaskId } from "@/pages/category-page/hooks.tsx";

function CategoryPage() {
  const { currentCategory, isLoadingCurrentCategory } = useGetCategory();

  useRemoveTaskId();

  const tasks: TaskType[] = currentCategory?.tasks ?? [];
  const title = `You don't have any tasks for "${currentCategory?.title}"`;

  return (
    <Fragment>
      {tasks.length === 0 && <TitleSection title={title} inProgress={isLoadingCurrentCategory} />}
      <TaskList tasks={tasks} color={currentCategory?.color} title={title} />
    </Fragment>
  );
}

const ObservedCategoryPage = observer(CategoryPage);

export default ObservedCategoryPage;
