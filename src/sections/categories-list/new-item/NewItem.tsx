import { useLocation } from "react-router-dom";
import AddNewTask from "@/components/add-new-task";
import AddNewCategory from "@/components/add-new-category";
import { observer } from "mobx-react";

function NewItem() {
  const { pathname } = useLocation();

  const isNewTaskRoute = pathname.includes("/categories") && pathname.includes("/new-task");

  if (isNewTaskRoute) {
    return <AddNewTask />;
  }

  if (!isNewTaskRoute) {
    return <AddNewCategory />;
  }

  return null;
}

export default observer(NewItem);
