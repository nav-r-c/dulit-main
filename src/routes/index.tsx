import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

const Registration = lazy(() => import("../pages/registration"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/registration" replace />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);
