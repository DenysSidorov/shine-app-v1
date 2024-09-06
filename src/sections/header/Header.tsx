import s from "./Header.module.scss";
import Avatar from "@/components/avatar";
import Title from "@/components/title";
import Menu from "@/components/menu";

function Header() {
  return (
    <div className={s.header}>
      <div>
        <Avatar src={"https://blog.logrocket.com/wp-content/uploads/2019/04/diogosouza.jpeg?w=150&h=150&crop=1"} />
      </div>
      <div>
        <Title title={"Change me later"} className={s.title} />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
/*
<ul>
        <Link to="/categories">categories</Link>
        <Link to="/categories/1">categories/:1</Link>
        <Link to="/categories/2">categories/:2</Link>
        <Link to="/categories/2/tasks">/categories/1/tasks</Link>
      </ul>
* */
