import s from "./Menu.module.scss";
import { IoIosMenu } from "react-icons/io";

function Menu() {
  return <IoIosMenu className={s.menuIcon} size={"32px"} data-testid="menu-icon" />;
}

export default Menu;
