import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectPage from "@/pages/redirects/RedirectPage.tsx";
import PageLayout from "@/layouts/page-layout/PageLayout.tsx";
import Categories from "@/pages/categories/Categories.tsx";
import ErrorPage from "@/pages/Error.tsx";
import Category from "@/pages/category/Category.tsx";
import Todos from "@/pages/todos/Todos.tsx";
import TaskNew from "@/sections/task-new";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectPage page="/categories" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "categories/:categoryId",
        element: <Category />,
      },
      {
        path: "/categories/:categoryId/todos/:idTask",
        element: <Todos />,
      },
      {
        path: "/categories/:categoryId/new-task",
        element: <TaskNew />,
      },
    ],
  },
]);
export const Router = () => <RouterProvider router={router} />;
