import { useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
  data?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  const getErrorHTML = (error: RouteError) => {
    return <i>{error?.data || error?.message || error?.statusText}</i>;
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <br />
      <p>{getErrorHTML(error)}</p>
    </div>
  );
}
