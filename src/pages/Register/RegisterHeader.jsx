import React from "react";
import logo from "/src/assets/img/register/logo-ravir.svg";
import whiteBg from "/src/assets/img/register/white-top-left.svg";
import comingSoon from "/src/assets/img/register/orange-top-right-new.svg";
import { Link } from "react-router-dom";
import "./registerHeader.css";

const RegisterHeader = () => {
  return (
    <nav className="relative z-10">
      <div className="absolute w-[1254px] left-[50%] -translate-x-[calc(50%+5px)]">
        <img className="w-full" src={whiteBg} />

        <div className="absolute top-0 right-0">
          <img className="w-[350px]" src={comingSoon} />
        </div>
      </div>

      <div className="absolute top-0 -right-[120px] sm:-right-[20px] mobile-orange-coming-block">
        <img className="w-[320px] xl:w-[350px]" src={comingSoon} />
      </div>

      <div className="container !max-w-[960px] flex justify-between relative py-[40px] pb-12 xl:pb-[40px] xl:pt-[64px] pl-[40px] md:pl-[22px]">
        <div className="relative">
          <Link to="/">
            <img className="w-[120px] sm:w-[200px] xl:w-[250px]" src={logo} />
          </Link>
        </div>

        <div className="relative flex items-center z-0">
          {/* <div className="relative text-2xl text-center text-white sm:text-[36px] -translate-y-4 -translate-x-2 md:-translate-x-4 xl:-translate-y-[60px] xl:translate-x-[100PX] font-[500]">
            COMING <br /> SOON
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default RegisterHeader;
