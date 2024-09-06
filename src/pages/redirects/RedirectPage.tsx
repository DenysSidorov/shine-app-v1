import { Navigate } from "react-router-dom";
const RedirectPage = ({ page }: { page: string }) => {
  return <Navigate to={page} replace={true} />;
};
export default RedirectPage;
