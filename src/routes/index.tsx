import { lazy } from "react";
import { createBrowserRouter } from "react-router";


const Registration = lazy(() => import("../pages/registration"));

export const router = createBrowserRouter([
    {
        path: '/',
        element: (<Registration />)
    }
])