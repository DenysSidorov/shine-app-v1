import { useLocation } from "react-router-dom";
import AddNewTask from "@/components/add-new-task";
import AddNewCategory from "@/components/add-new-category";
import { observer } from "mobx-react";

function NewItem() {
  const { pathname } = useLocation();
  // console.log(pathname);

  const isCategoriesRoute = pathname === "/categories";

  if (isCategoriesRoute) {
    return <AddNewCategory />;
  }

  if (!isCategoriesRoute) {
    return <AddNewTask />;
  }

  return null;
}

export default observer(NewItem);
