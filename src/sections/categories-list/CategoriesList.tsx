import s from "./CategoriesList.module.scss";
import CategoriesTypeListItem from "@/sections/categories-list/categories-type-list-item";
import CategoriesTypeCountItem from "@/sections/categories-list/categories-type-count-item";
import {
  CategoryCountType,
  CategoryListType,
  CategoryType,
} from "@/types/category.ts";
import { Fragment, useEffect } from "react";
import AddNewItem from "@/components/add-new-item";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";

function CategoriesList() {
  const { categories, loadCategories } = useAppStore();

  useEffect(() => {
    (async () => {
      await loadCategories();
    })();
  }, [loadCategories]);

  return (
    <Fragment>
      <div className={s.categories}>
        {categories?.map((category: CategoryType) => {
          if (category.type === "list") {
            return (
              <CategoriesTypeListItem
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

const ObservedCategoriesList = observer(CategoriesList);

export default ObservedCategoriesList;
