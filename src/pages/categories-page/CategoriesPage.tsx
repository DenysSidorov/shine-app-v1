import { Fragment } from "react";
import s from "./CategoriesPage.module.scss";
import CategoriesList from "@/sections/categories-list";
import TitleSection from "@/sections/title-section";
import { useGetCategories } from "@/hooks/fetchHooks/useGetCategories.tsx";
import { observer } from "mobx-react";
import SearchCategories from "@/components/search-categories";
import { useAppStore } from "@/hooks/useAppStore.tsx";

function CategoriesPage() {
  const title: string = "You don't have any categories yet.";
  const { isLoadingCategories, categories } = useGetCategories();
  const { getFilteredCategories } = useAppStore();
  const filteredCategories = getFilteredCategories();

  return (
    <div className={s.categories}>
      <Fragment>
        {categories.length === 0 && <TitleSection title={title} inProgress={isLoadingCategories} />}
        {categories.length > 0 && <SearchCategories />}
        <CategoriesList categories={filteredCategories} />
      </Fragment>
    </div>
  );
}

const ObservedCategoriesPage = observer(CategoriesPage);

export default ObservedCategoriesPage;
