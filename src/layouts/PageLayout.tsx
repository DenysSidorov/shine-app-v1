import { Outlet, Link } from "react-router-dom";

function PageLayout() {
  console.log("render page layout");
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <Link to="/categories">categories</Link>
          <Link to="/categories/1">categories/:1</Link>
          <Link to="/categories/2">categories/:2</Link>
          <Link to="/categories/2/tasks">/categories/1/tasks</Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default PageLayout;
