import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import App from "../App";
import { lazy } from "react";

const Lumina = lazy(() => import("../templates/Lumina/Lumina").then((module) => ({ default: module.Lumina })));
const Vertex = lazy(() => import("../templates/Vertex/Vertex").then((module) => ({ default: module.Vertex })));
const Aurora = lazy(() => import("../templates/Aurora/Aurora").then((module) => ({ default: module.Aurora })));
const Echo = lazy(() => import("../templates/Echo/Echo").then((module) => ({ default: module.Echo })));
const Zenith = lazy(() => import("../templates/Zenith/Zenith").then((module) => ({ default: module.Zenith })));

export const router = createBrowserRouter([
  {
    path: Routes.Root,
    element: <App />,
    children: [
      {
        path: Routes.Vertex,
        element: <Vertex />,
      },
      {
        path: Routes.Lumina,
        element: <Lumina />,
      },
      {
        path: Routes.Aurora,
        element: <Aurora />,
      },
      {
        path: Routes.Echo,
        element: <Echo />,
      },
      {
        path: Routes.Zenith,
        element: <Zenith />,
      },
    ],
  },
]);
