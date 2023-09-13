import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Main from '../layouts/Main'
import Cities from "../pages/Cities";
import SignUp from './../pages/SignUp';
import SignIn from "../pages/SignIn";
import Details from '../pages/Details';
import Page404 from "../pages/page404";
import ProtectedRoute from "./protectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cities',
                element: <Cities />
            },
            {
                path: '/signin',
                element: (<ProtectedRoute path='/'>
                    <SignIn />
                </ProtectedRoute>)
            },
            {
                path: '/signup',
                element: (<ProtectedRoute path='/'>
                    <SignUp />
                </ProtectedRoute>)
            },
            {
                path: '/cities/:id',
                element: <Details />

            }
        ]
    },
    {
        path: '*',
        element: <Page404 />
    },
]);

export default router;