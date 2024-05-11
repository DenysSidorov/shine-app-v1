import { Outlet } from "react-router-dom";
import Header from "@/sections/header";
import s from "./PageLayout.module.scss";

function PageLayout() {
  console.log("render page layout");
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Header />
      </div>
      <div className={s.content}>
        <div
          style={{ height: "200px", backgroundColor: "red", width: "160px" }}
        >
          me
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default PageLayout;
