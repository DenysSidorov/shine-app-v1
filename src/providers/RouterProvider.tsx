import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import ErrorPage from '../pages/Error.tsx';
import Category from '../pages/category/Category.tsx';
import RedirectPage from '../pages/redirectes/RedirectPage.tsx';
import Categories from '../pages/categories/Category.tsx';
import Tasks from '../pages/tasks/Tasks.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RedirectPage />,
        errorElement: <ErrorPage />,
        // children: [
        //     {
        //         path: "categories/:categoryId",
        //         element: <Category />,
        //         children: [
        //             {
        //                 path: "tasks",
        //                 element: <Category />,
        //             },
        //         ],
        //     },
        //
        // ],
    // /categories/:categoryId
    },
    {
        path: '/categories',
        element: <Categories />,
    },
    {
        path: '/categories/:categoryId',
        element: <Category />,
    },
    {
        path: '/categories/:categoryId/tasks',
        element: <Tasks />,
    }
]);

export const Router = () => <RouterProvider router={router}/>;

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );
