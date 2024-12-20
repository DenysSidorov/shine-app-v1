import { Outlet } from "react-router-dom";
import Header from "@/sections/header";
import s from "./PageLayout.module.scss";
import AddNewTask from "@/components/add-new-task";

function PageLayout() {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Header />
      </div>
      <div className={s.content}>
        <Outlet />
        <AddNewTask />
      </div>
    </div>
  );
}

export default PageLayout;
