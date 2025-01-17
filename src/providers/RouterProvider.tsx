import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "@/layouts/page-layout/PageLayout.tsx";
import RedirectPage from "@/pages/redirects/RedirectPage.tsx";
import ErrorPage from "@/pages/Error.tsx";
import CategoriesPage from "@/pages/categories-page/CategoriesPage.tsx";
import CategoryPage from "@/pages/category-page/CategoryPage.tsx";
import TodosPage from "@/pages/todos-page/TodosPage.tsx";
import NewTaskPage from "@/pages/new-task-page";

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
        element: <CategoryPage />,
      },
      {
        path: "/categories/:categoryId/todos/:idTask",
        element: <TodosPage />,
      },
      {
        path: "/categories/:categoryId/new-task",
        element: <NewTaskPage />,
      },
    ],
  },
]);
export const Router = () => <RouterProvider router={router} />;
