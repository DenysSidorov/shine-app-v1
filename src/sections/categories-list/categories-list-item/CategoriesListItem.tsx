import s from "./CategoriesListItem.module.scss";
import { CategoryListType, CategoryType } from "@/types/category.ts";
import Title from "@/components/title";
import Checkbox from "@/components/checkbox";

interface CategoriesListItemI {
  category: CategoryType;
}

function CategoriesListItem({ category }: CategoriesListItemI) {
  return (
    <div className={s.block} style={{ backgroundColor: category.color }}>
      <Title title={category.title} className={s.title} />
      <div className={s.separator} />
      {(category as CategoryListType)?.tasks?.map((task) => (
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

export default CategoriesListItem;
