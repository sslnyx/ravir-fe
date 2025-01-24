import React from "react";
import Home from "../pages/Home";
import Register from "../pages/Register";
import RegisterMain from "../pages/Register/RegisterMain";
import Amenity from "../pages/Amenity";
import Design from "../pages/Design";
import Floorplans from "../pages/Floorplans";
import Location from "../pages/Location";
import Gallery from "../pages/Gallery";
import Team from "../pages/Team";
import Thankyou from "../pages/Thankyou";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import RegisterError from "../pages/Register/RegisterError.jsx";
import ErrorPage from "../pages/error-page.jsx";

const useRoutes = () => {
  return [
    { index: true, element: <Home /> },
    {
      path: "register",
      element: <Register />,
      children: [
        {
          index: true,
          element: <RegisterMain />,
        },
        {
          path: "thank-you",
          element: <Thankyou />,
        },
        {
          path: "register-error",
          element: <RegisterError />,
        },
      ],
    },
    {
      path: "location",
      label: "Location",
      element: <Location />,
    },
    {
      path: "design",
      label: "Design",
      element: <Design />,
    },
    {
      path: "floorplans",
      label: "Floorplans",
      element: <Floorplans />,
      // element: <ErrorPage />,
    },
    {
      path: "amenity",
      label: "Amenity",
      element: <Amenity />,
      // element: <ErrorPage />,
    },
    { path: "gallery", label: "Gallery", element: <Gallery /> },
    { path: "team", label: "Team", element: <Team /> },
    {
      path: "privacy-policy",
      label: "Privacy Policy",
      element: <PrivacyPolicy />,
    },
  ];
};

export default useRoutes;
