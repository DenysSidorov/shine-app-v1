import s from "./SearchCategories.module.scss";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";
import { IoSearchOutline } from "react-icons/io5";

function SearchCategories() {
  const { setSearchQuery, getSearchQuery } = useAppStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={s.search}>
      <IoSearchOutline className={s.icon} />
      <input
        className={s.input}
        type="text"
        placeholder="Search categories..."
        value={getSearchQuery()}
        onChange={handleChange}
        data-testid="search-categories-input"
      />
    </div>
  );
}

const ObservedSearchCategories = observer(SearchCategories);

export default ObservedSearchCategories;
