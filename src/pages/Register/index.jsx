import React from "react";
import RegisterHeader from "./RegisterHeader";
import RegisterOverview from "./RegisterOverview";
import contentBg from "/src/assets/img/register/brownish.svg";
import RegisterForm from "./RegisterForm";
import RegisterFooter from "./RegisterFooter";
import bgLightGray from "/src/assets/img/register/light-grey.svg";
import { Parallax } from "react-scroll-parallax";
import RegisterMainBg from "./RegisterMainBg";
import MainBgMobile from "/src/assets/img/register/brownish-for-mobile.svg";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./index.css";

const Register = () => {
  //   const parallax = useParallax({
  //     speed: 20,
  //   });
  const { pathname } = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col page-register">
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div
        className={`absolute top-[1200px] bg-[#DBD0C6] w-screen h-[4000px] rotate-3 scale-125 hidden md:block ${
          pathname.includes("/thank-you") && "-translate-y-[120px]"
        }`}
      ></div>

      <div
        className={`bg-lightGray w-screen h-full absolute -bottom-[90%] -rotate-3 scale-125 hidden md:block ${
          pathname.includes("/thank-you") && "invisible"
        }`}
      ></div>

      <RegisterHeader />

      <Outlet />

      <RegisterFooter />
    </div>
  );
};

export default Register;
