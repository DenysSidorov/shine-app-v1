import { Outlet } from "react-router-dom";
import Header from "@/sections/header";
import s from "./PageLayout.module.scss";
import AddNewItem from "@/components/add-new-item";

function PageLayout() {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Header />
      </div>
      <div className={s.content}>
        <Outlet />
        <AddNewItem />
      </div>
    </div>
  );
}

export default PageLayout;
