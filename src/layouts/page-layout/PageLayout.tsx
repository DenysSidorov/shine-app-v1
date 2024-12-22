import { Outlet } from "react-router-dom";
import Header from "@/sections/header";
import s from "./PageLayout.module.scss";
import NewItem from "@/sections/categories-list/new-item";

function PageLayout() {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Header />
      </div>
      <div className={s.content}>
        <Outlet />
        <NewItem />
      </div>
    </div>
  );
}

export default PageLayout;
