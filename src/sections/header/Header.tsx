import s from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={s.header}>
      <ul>
        <Link to="/categories">categories</Link>
        <Link to="/categories/1">categories/:1</Link>
        <Link to="/categories/2">categories/:2</Link>
        <Link to="/categories/2/tasks">/categories/1/tasks</Link>
      </ul>
    </div>
  );
}

export default Header;
