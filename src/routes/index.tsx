import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Registration = lazy(() => import("../pages/registration"));
const Home = lazy(() => import("../pages/home"));

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Navigate to="/registration" replace />,
  // },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
