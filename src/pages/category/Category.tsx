import { useParams } from "react-router-dom";
import s from "./Category.module.scss";
import CategoryItem from "@/sections/category-item";
import { Fragment } from "react";
import AddNewItem from "@/components/add-new-item";

function Category() {
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <Fragment>
      <div className={s.category}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <AddNewItem />
      </div>
    </Fragment>
  );
}

export default Category;
