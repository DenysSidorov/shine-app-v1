import s from "./CategoriesListItem.module.scss";
import {
  CategoryListType,
  AllCategoryTypes,
  CategoryCountType,
} from "@/types/category.ts";
import { FaGlassWater } from "react-icons/fa6";
import Title from "@/components/title";
import Checkbox from "@/components/checkbox";
import { Fragment } from "react";

interface CategoriesListItemI {
  category: AllCategoryTypes;
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
      {(category as CategoryCountType)?.goalCount !== undefined ? (
        <Fragment>
          <div className={s.countTypeIconWrapper}>
            <FaGlassWater />
          </div>
          <div className={s.countTypeText}>
            {category.currentCount}/{category.goalCount} times
          </div>
        </Fragment>
      ) : null}
    </div>
  );
}

export default CategoriesListItem;
