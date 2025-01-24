import React from "react";
import buttonBg from "/src/assets/img/icons/button-bg.svg";
import { Link } from "react-router-dom";

const MainBtn = ({ title, children, link }) => {
  return (
    <Link
      to={link}
      className="relative w-[330px] flex justify-center items-center"
    >
      <span className="absolute text-white -translate-x-[25px] text-xl font-serif -translate-y-[2px]">
        {children}
      </span>
      <div className="w-full">
        <img className="w-full" src={buttonBg} alt="btn-bg" />
      </div>
    </Link>
  );
};

export default MainBtn;
