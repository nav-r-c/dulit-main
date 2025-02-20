import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import SuspenseWrapper from "../components/SuspenseWrapper";

const Registration = lazy(() => import("../pages/registration"));
const Home = lazy(() => import("../pages/home"));
const Speakers = lazy(() => import("../pages/speakers"));
const SpeakerDetails = lazy(() => import("../pages/SpeakerDetails"));
const Programmes = lazy(() => import("../pages/programmes"));
const Partners = lazy(() => import("../pages/partners"));
const House = lazy(() => import("../pages/house-of-fiction"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
      {
        path: "registration",
        element: (
          <SuspenseWrapper>
            <Registration />
          </SuspenseWrapper>
        ),
      },
      {
        path: "house-of-fiction",
        element: (
          <SuspenseWrapper>
            <House />
          </SuspenseWrapper>
        ),
      },
      {
        path: "speakers",
        children: [
          {
            index: true,
            element: (
              <SuspenseWrapper>
                <Speakers />
              </SuspenseWrapper>
            ),
          },
          {
            path: ":id",
            element: (
              <SuspenseWrapper>
                <SpeakerDetails />
              </SuspenseWrapper>
            ),
          },
        ],
      },
      {
        path: "programmes",
        element: (
          <SuspenseWrapper>
            <Programmes />
          </SuspenseWrapper>
        ),
      },
      {
        path: "partners",
        element: (
          <SuspenseWrapper>
            <Partners />
          </SuspenseWrapper>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
