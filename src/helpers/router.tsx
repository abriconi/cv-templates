import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import App from "../App";
import { Suspense, lazy } from "react";
import Loader from "../shared-components/Loader";

const Lumina = lazy(() => import("../templates/Lumina/Lumina").then((module) => ({ default: module.Lumina })));
const Vertex = lazy(() => import("../templates/Vertex/Vertex").then((module) => ({ default: module.Vertex })));
const Aurora = lazy(() => import("../templates/Aurora/Aurora").then((module) => ({ default: module.Aurora })));
const Echo = lazy(() => import("../templates/Echo/Echo").then((module) => ({ default: module.Echo })));
const Zenith = lazy(() => import("../templates/Zenith/Zenith").then((module) => ({ default: module.Zenith })));

export const router = createBrowserRouter([
  {
    path: Routes.Root,
    element: <App />,
  },
    {
      path: Routes.Vertex,
      element: (
        <Suspense fallback={<Loader />}>
          <Vertex />
        </Suspense>
      ),
    },
    {
      path: Routes.Lumina,
      element: (
        <Suspense fallback={<Loader />}>
          <Lumina />
        </Suspense>
      ),
    },
    {
      path: Routes.Aurora,
      element: (
        <Suspense fallback={<Loader />}>
          <Aurora />
        </Suspense>
      ),
    },
    {
      path: Routes.Echo,
      element: (
        <Suspense fallback={<Loader />}>
          <Echo />
        </Suspense>
      ),
    },
    {
      path: Routes.Zenith,
      element: (
        <Suspense fallback={<Loader />}>
          <Zenith />
        </Suspense>
      ),
    },
]);
