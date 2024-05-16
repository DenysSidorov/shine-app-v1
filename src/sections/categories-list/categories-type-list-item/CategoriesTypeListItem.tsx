import s from "./CategoriesTypeListItem.module.scss";
import { CategoryListType } from "@/types/category.ts";
import Title from "@/components/title";
import Checkbox from "@/components/checkbox";
import { useMemo } from "react";

interface CategoriesListItemI {
  category: CategoryListType;
}

function CategoriesTypeListItem({ category }: CategoriesListItemI) {
  const { tasks } = category;
  const countLimitedTasks = useMemo(() => {
    const limit = 5;
    return tasks.filter((_, ind: number) => ind < limit);
  }, [tasks]);

  return (
    <div
      className={`noWrap ${s.block}`}
      style={{ backgroundColor: category.color }}
    >
      <Title title={category.title} className={s.title} />
      <div className={s.separator} />

      {countLimitedTasks?.map((task) => (
        <div className={s.task} key={task.id}>
          <Checkbox
            label={task.name}
            name={task.id}
            value={task.completed}
            completed={task.completed}
            labelClassName={s.labelClassName}
          />
        </div>
      ))}
    </div>
  );
}

export default CategoriesTypeListItem;
