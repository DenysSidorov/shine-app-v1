import { useLocation } from "react-router-dom";
import { FC } from "react";
import AddNewTask from "@/components/add-new-task";
import AddNewCategory from "@/components/add-new-category";
import { observer } from "mobx-react";

const NewItem: FC = () => {
  const { pathname } = useLocation();

  const isCategoriesRoute = pathname === "/categories";

  if (pathname.includes("/todos")) {
    return null;
  }

  if (isCategoriesRoute) {
    return <AddNewCategory />;
  }

  if (!isCategoriesRoute) {
    return <AddNewTask />;
  }

  return null;
};

export default observer(NewItem);
