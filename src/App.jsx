import { useEffect, useRef, useState, useMemo } from "react";
import RegisterHeader from "./pages/Register/RegisterHeader";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "./App.css";
import "/node_modules/aos/dist/aos.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import useGoogleMapAPI from "./hooks/useGoogleMapAPI";
import useRoutes from "./hooks/useRoutes";
// import MainMenu from "./components/MainMenu";
import { Helmet } from "react-helmet";

function App() {
  const initRef = useRef(false);
  // const navigate = useNavigate();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!initRef.current) return;
    const top = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => {
      clearTimeout(top);
    };
  }, [pathname]);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    const timeout = setTimeout(() => {
      AOS.init({
        // offset: 200,
        duration: 1200,
        easing: "ease-out-sine",
        once: true,
      });
    }, 300);
  }, []);

  // useEffect(() => {
  //   if (pathname === "/") navigate("/register");
  // }, [pathname]);

  return (
    <>
      <Helmet
        titleTemplate="%s | RAVIR | 74 Delightful Parkside Condos & Townhomes"
        defaultTitle="RAVIR | 74 Delightful Parkside Condos & Townhomes"
      />
      {!pathname.includes("/register") && <SiteHeader />}

      <main>
        <Outlet />
      </main>

      {!pathname.includes("/register") && <SiteFooter />}
    </>
  );
}

export default App;
