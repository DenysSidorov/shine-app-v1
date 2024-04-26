import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import ErrorPage from '../pages/Error.tsx';
import RootLayout from '../components/RootLayout.tsx';
import Category from '../pages/category/Category.tsx';

export const router = createBrowserRouter([
    {
        path: '/', // should be categories
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "categories/:categoryId",
                element: <Category />,
                children: [
                    {
                        path: "tasks",
                        element: <Category />,
                    },
                ],
            },

        ],
    },
    {
        path: '/categories',
        element: <div>TEST</div>
    }
]);

export const Router = () => <RouterProvider router={router}/>;

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );
