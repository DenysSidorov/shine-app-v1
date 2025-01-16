import s from "./CategoriesList.module.scss";
import { CategoryCountType, CategoryListType, CategoryType } from "@/types/category.ts";
import { Fragment } from "react";
import { observer } from "mobx-react";
import CategoriesItemCount from "@/sections/categories-list/categories-item-count";
import CategoriesItemList from "@/sections/categories-list/categories-item-list";

interface CategoriesListProps {
  categories: CategoryType[];
}

function CategoriesList({ categories }: CategoriesListProps) {
  return (
    <Fragment>
      <div className={s.categories}>
        {categories.map((category: CategoryType) => {
          if (category.type === "list") {
            return <CategoriesItemList category={category as CategoryListType} key={category.id} />;
          }
          if (category.type === "count") {
            return <CategoriesItemCount category={category as CategoryCountType} key={category.id} />;
          }
        })}
      </div>
    </Fragment>
  );
}

const ObservedCategoriesList = observer(CategoriesList);

export default ObservedCategoriesList;
