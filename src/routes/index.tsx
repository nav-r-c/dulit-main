import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../components/RootLayout"; // Shared layout (Navbar/Footer)

const Registration = lazy(() => import("../pages/registration"));
const Home = lazy(() => import("../pages/home"));
const Speakers = lazy(() => import("../pages/speakers"));
const SpeakerDetails = lazy(() => import("../pages/SpeakerDetails")); // Dynamic page
const Programmes = lazy(() => import("../pages/programmes"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Shared Layout
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
        children: [
          {
            index: true,
            element: <Speakers />, // Shows list of speakers
          },
          {
            path: ":id", // Dynamic route for individual speakers
            element: <SpeakerDetails />,
          },
        ],
      },
      {
        path: "programmes",
        element: <Programmes />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />, // Redirect unknown routes
      },
    ],
  },
]);
