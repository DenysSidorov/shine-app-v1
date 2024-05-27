import { Outlet } from "react-router-dom";
import Header from "@/sections/header";
import s from "./PageLayout.module.scss";

function PageLayout() {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Header />
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default PageLayout;
