import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navigator({ pathname }: { pathname: string }) {
  const navigate = useNavigate();
  let url = "/categories";

  if (pathname.includes("new-task") || pathname.includes("todos")) {
    url = `/categories/${getPathValues(pathname)[1]}`;
  }

  return <IoChevronBackCircle size={"32px"} onClick={() => navigate(url)} data-testid="back-button" />;
}

export default Navigator;

const getPathValues = (path: string) => path.split("/").filter(Boolean);
