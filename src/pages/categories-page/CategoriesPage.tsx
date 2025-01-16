import { Fragment } from "react";
import s from "./CategoriesPage.module.scss";
import CategoriesList from "@/sections/categories-list";
import TitleSection from "@/sections/title-section";
import { useGetCategories } from "@/hooks/fetchHooks/useGetCategories.tsx";
import { observer } from "mobx-react";

function CategoriesPage() {
  const title: string = "You don't have any categories yet.";
  const { isLoadingCategories, categories } = useGetCategories();

  return (
    <div className={s.categories}>
      <Fragment>
        {categories.length === 0 && <TitleSection title={title} inProgress={isLoadingCategories} />}
        <CategoriesList categories={categories} />
      </Fragment>
    </div>
  );
}

const ObservedCategoriesPage = observer(CategoriesPage);

export default ObservedCategoriesPage;
