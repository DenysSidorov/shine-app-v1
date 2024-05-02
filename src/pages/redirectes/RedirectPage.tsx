import { Navigate } from "react-router-dom";
const RedirectPage = ({ page }: { page?: string }) => {
  return <Navigate to={page || "/categories"} replace={true} />;
};
export default RedirectPage;
console.log(4);
