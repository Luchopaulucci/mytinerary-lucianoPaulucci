import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Main from '../layouts/Main'
import Cities from "../pages/Cities";
import SignUp from './../pages/SignUp';
import Login from './../pages/Login';
import Details from '../pages/Details';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cities',
                element: <Cities />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/cities/:id',
                element: <Details />
            }
        ]
    },
]);

export default router;