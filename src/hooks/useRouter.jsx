import React from "react";
import App from "../App";
import ErrorPage from "../pages/error-page";
import useRoutes from "./useRoutes";
import { createBrowserRouter } from "react-router-dom";

const useRouter = () => {
  const routes = useRoutes();

  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ]);
};

export default useRouter;
