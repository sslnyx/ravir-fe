import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

import "./index.css";
import useRouter from "./hooks/useRouter.jsx";

const MainComponent = () => {
  const router = useRouter();
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
);
