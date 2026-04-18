import s from "./CategorySort.module.scss";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { observer } from "mobx-react";
import { BsSortAlphaDown, BsCalendar3 } from "react-icons/bs";
import { MdDragIndicator } from "react-icons/md";

function CategorySort() {
  const { setSortBy, getSortBy } = useAppStore();
  const currentSort = getSortBy();

  const sorts: Array<{ value: "name" | "date" | "manual"; label: string; icon: React.ReactNode }> = [
    { value: "manual", label: "Manual", icon: <MdDragIndicator /> },
    { value: "name", label: "A-Z", icon: <BsSortAlphaDown /> },
    { value: "date", label: "Date", icon: <BsCalendar3 /> },
  ];

  return (
    <div className={s.sortContainer} data-testid="category-sort">
      {sorts.map((sort) => (
        <button
          key={sort.value}
          className={`${s.sortButton} ${currentSort === sort.value ? s.active : ""}`}
          onClick={() => setSortBy(sort.value)}
          title={`Sort by ${sort.label}`}
          data-testid={`sort-${sort.value}`}
        >
          {sort.icon}
          <span className={s.label}>{sort.label}</span>
        </button>
      ))}
    </div>
  );
}

const ObservedCategorySort = observer(CategorySort);

export default ObservedCategorySort;
