import s from "./CategoriesList.module.scss";
import data from "@/api/data.json";

function CategoriesList() {
  return <div className={s.categories}>
    {data.categories.map((category) => {

    }}
  </div>;
}

export default CategoriesList;
