import { Link } from "react-router-dom";
import s from "./CategoriesItemCount.module.scss";
import { CategoryCountType } from "@/types/category.ts";
import { FaGlassWater } from "react-icons/fa6";
import Title from "@/components/title";
import { Fragment } from "react";

interface CategoriesListItemI {
  category: CategoryCountType;
}

function CategoriesItemCount({ category }: CategoriesListItemI) {
  return (
    <Link to={category.id}>
      <div className={`noWrap ${s.block}`} style={{ backgroundColor: category.color }}>
        <Title title={category.title} className={s.title} />
        <div className={s.separator} />

        {category.goalCount !== undefined ? (
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
    </Link>
  );
}

export default CategoriesItemCount;
