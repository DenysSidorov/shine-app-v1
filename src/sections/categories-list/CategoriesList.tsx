import s from "./CategoriesList.module.scss";
import data from "@/api/data.json";
import CategoriesListItem from "@/sections/categories-list/categories-list-item";
import { AllCategoryTypes } from "@/types/category.ts";

function CategoriesList() {
  return (
    <div className={s.categories}>
      {data.categories.map((category: AllCategoryTypes) => {
        return <CategoriesListItem category={category} key={category.id} />;
      })}
    </div>
  );
}

export default CategoriesList;
