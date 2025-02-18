import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../components/RootLayout"; // Create this layout with Navbar/Footer

const Registration = lazy(() => import("../pages/registration"));
const Home = lazy(() => import("../pages/home"));
const Speakers = lazy(() => import("../pages/speakers"));
const Programmes = lazy(() => import("../pages/programmes"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // shared layout with Navbar, Footer, etc.
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "speakers",
        element: <Speakers />,
      },
      {
        path: "programmes",
        element: <Programmes />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />, // optional: redirect unknown routes
      },
    ],
  },
]);
