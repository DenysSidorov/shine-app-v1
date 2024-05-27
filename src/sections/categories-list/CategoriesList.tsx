import s from "./CategoriesList.module.scss";
import data from "@/api/data.json";
import CategoriesTypeListtItem from "@/sections/categories-list/categories-type-list-item";
import CategoriesTypeCountItem from "@/sections/categories-list/categories-type-count-item";
import {
  CategoryCountType,
  CategoryListType,
  CategoryType,
} from "@/types/category.ts";
import { Fragment } from "react";
import AddNewItem from "@/components/add-new-item";

function CategoriesList() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categories: any[] = data.categories;

  return (
    <Fragment>
      <div className={s.categories}>
        {categories?.map((category: CategoryType) => {
          if (category.type === "list") {
            return (
              <CategoriesTypeListtItem
                category={category as CategoryListType}
                key={category.id}
              />
            );
          }
          if (category.type === "count") {
            return (
              <CategoriesTypeCountItem
                category={category as CategoryCountType}
                key={category.id}
              />
            );
          }
        })}
      </div>
      <AddNewItem />
    </Fragment>
  );
}

export default CategoriesList;
