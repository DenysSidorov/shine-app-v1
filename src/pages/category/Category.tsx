import { useParams } from "react-router-dom";
import s from "./Category.module.scss";
import CategoryItems from "@/sections/category-items";
import { Fragment } from "react";
import AddNewItem from "@/components/add-new-item";

function Category() {
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <Fragment>
      <div className={s.category}>
        <CategoryItems />
        <CategoryItems />
        <CategoryItems />
        <AddNewItem />
      </div>
    </Fragment>
  );
}

export default Category;
