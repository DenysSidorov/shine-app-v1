import s from "./Header.module.scss";
import { FaUserAstronaut } from "react-icons/fa6";
import Title from "@/components/title";
import Menu from "@/components/menu";
import Navigator from "@/components/navigator";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

function Header() {
  const { pathname } = useLocation();
  const isMainPage = pathname === "/categories";

  const getTitle = useMemo(() => {
    if (pathname.includes("todos")) {
      return "Todos";
    } else if (!pathname.includes("todos") && !isMainPage) {
      return "Tasks";
    }
    return "Main";
  }, [isMainPage, pathname]);

  return (
    <div className={s.header}>
      <div className={s.navigator}>
        {isMainPage ? <FaUserAstronaut className={s.menuIcon} size={"26px"} /> : <Navigator pathname={pathname} />}
      </div>
      <div>
        <Title title={getTitle} className={s.title} />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
