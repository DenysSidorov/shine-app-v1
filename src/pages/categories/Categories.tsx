import s from "./Categories.module.scss";
import CategoriesList from "@/sections/categories-list";

function Categories() {
  return (
    <div className={s.categories}>
      <CategoriesList />
    </div>
  );
}

export default Categories;
