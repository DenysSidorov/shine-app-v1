import React from "react";
import s from "./AppLayout.module.scss";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>{children}</div>
    </div>
  );
}

export default AppLayout;
