import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import ErrorPage from '../pages/Error.tsx';
import Category from '../pages/category/Category.tsx';
import Categories from '../pages/categories/Category.tsx';
import Tasks from '../pages/tasks/Tasks.tsx';
import PageLayout from '../layouts/PageLayout.tsx';
import RedirectPage from '../pages/redirectes/RedirectPage.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RedirectPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/login',
        element: <div>Login</div>
    },
    {
        path: '/',
        element: <PageLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/categories',
                element: <Categories/>
            },
            {
                path: 'categories/:categoryId',
                element: <Category/>
            },
            {
                path: '/categories/:categoryId/tasks',
                element: <Tasks/>
            }
        ]
    }
]);
export const Router = () => <RouterProvider router={router}/>;
