import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./helpers/router.tsx";
import { UserDataProvider } from "./context/UserDataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserDataProvider>
    <RouterProvider router={router} />
    </UserDataProvider>
  </React.StrictMode>,
);
