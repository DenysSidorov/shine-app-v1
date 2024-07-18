import { Link } from "react-router-dom";
import s from "./CategoriesTypeListItem.module.scss";
import { CategoryListType } from "@/types/category.ts";
import Title from "@/components/title";
import Checkbox from "@/components/checkbox";
import { useMemo } from "react";

interface CategoriesListItemI {
  category: CategoryListType;
}

const LIMIT_TASKS = 4;

function CategoriesTypeListItem({ category }: CategoriesListItemI) {
  const { tasks } = category;

  const countLimitedTasks = useMemo(() => {
    return tasks.filter((_, ind: number) => ind < LIMIT_TASKS);
  }, [tasks]);

  return (
    <div className={`noWrap ${s.block}`} style={{ backgroundColor: category.color }}>
      <Link to={category.id}>
        <Title title={category.title} className={s.title} />
      </Link>

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
      {tasks.length > LIMIT_TASKS && (
        <div className={s.showMore}>
          <Link to={category.id} className={s.link}>
            Show more...
          </Link>
        </div>
      )}
    </div>
  );
}

export default CategoriesTypeListItem;
