import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectPage from "@/pages/redirects/RedirectPage.tsx";
import PageLayout from "@/layouts/page-layout/PageLayout.tsx";
import CategoriesPage from "@/pages/categories-page/CategoriesPage.tsx";
import ErrorPage from "@/pages/Error.tsx";
import Category from "@/pages/category-page/CategoryPage.tsx";
import TodosPage from "@/pages/todos-page/TodosPage.tsx";
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
        element: <CategoriesPage />,
      },
      {
        path: "categories/:categoryId",
        element: <Category />,
      },
      {
        path: "/categories/:categoryId/todos/:idTask",
        element: <TodosPage />,
      },
      {
        path: "/categories/:categoryId/new-task",
        element: <TaskNew />,
      },
    ],
  },
]);
export const Router = () => <RouterProvider router={router} />;
