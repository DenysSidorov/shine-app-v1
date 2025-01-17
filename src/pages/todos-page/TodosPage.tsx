import s from "./TodosPage.module.scss";
import TodoList from "@/sections/todo-list";
import { useGetCategory } from "@/hooks/fetchHooks/useGetCategory.tsx";
import { useGetTodos } from "@/hooks/fetchHooks/useGetTodos.tsx";
import CategoryTitle from "@/sections/category-title/CategoryTitle.tsx";
import TitleSection from "@/sections/title-section";
import { observer } from "mobx-react";

const TodosPage = observer(() => {
  const { isLoadingCurrentCategory } = useGetCategory();
  const { todos } = useGetTodos();
  const title = `You don't have any todos for this task`;

  return (
    <div className={s.tasks}>
      <div className={s.wrapper}>
        <CategoryTitle />
        {(todos?.length === 0 || isLoadingCurrentCategory) && (
          <TitleSection title={title} inProgress={isLoadingCurrentCategory} />
        )}
        {!isLoadingCurrentCategory && <TodoList todos={todos || []} />}
      </div>
    </div>
  );
});

export default TodosPage;
