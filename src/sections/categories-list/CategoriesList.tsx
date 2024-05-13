import s from "./CategoriesList.module.scss";
import data from "@/api/data.json";
import CategoriesListItem from "@/sections/categories-list/categories-list-item";
import { AllCategoryTypes } from "@/types/category.ts";
import { Fragment } from "react";
import AddNewItem from "@/components/add-new-item";

function CategoriesList() {
  return (
    <Fragment>
      <div className={s.categories}>
        {data.categories.map((category: AllCategoryTypes) => {
          return <CategoriesListItem category={category} key={category.id} />;
        })}
      </div>
      <AddNewItem />
    </Fragment>
  );
}

export default CategoriesList;
