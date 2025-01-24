import React, { useState, useEffect, useRef } from "react";
// import logo from "/src/assets/img/register/logo-ravir.svg";
import close from "/src/assets/img/icons/Menu-ToClose.svg";
import siteLogoH from "/src/assets/img/logo/site-logo-h.png";

import SiteLogo from "./SiteLogo";
import hamburger from "/src/assets/img/icons/Menu-ToOpen.svg";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";

const SiteHeader = () => {
  const [isTop, setIsTop] = useState();
  const [active, setActive] = useState();

  const registerLinkRef = useRef(null);

  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open(registerLinkRef.current.href, "_blank");
  };

  useEffect(() => {
    const scrollFn = () => {
      if (window.scrollY < 50) return setIsTop(true);
      return setIsTop(false);
    };

    window.addEventListener("scroll", scrollFn);

    return () => {
      window.removeEventListener("scroll", scrollFn);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] transition-[background] duration-700 ${
        isTop ? "bg-white" : "bg-white/80"
      }`}
    >
      <div className="max-w-[1440px] w-full px-[22px] mx-auto py-3 md:py-5 flex items-center">
        <Link
          to={"/"}
          onClick={() => setActive(false)}
          className="w-auto h-auto md:h-[85px] shrink-0 relative z-[1111]"
        >
          <SiteLogo
            alt="site-logo"
            className={`hidden md:block ${
              active ? "fill-brown" : "fill-brown"
            } transition-all duration-500 w-auto h-full`}
          />
          
          <img
            src={siteLogoH}
            alt="mobile-logo"
            className="md:hidden w-[200px]"
          />
        </Link>

        <div className="max-w-[1200px] px-[20px] mx-auto w-full flex justify-end items-center z-10">
          <a
            // ref={registerLinkRef}
            // onClick={handleLinkClick}
            href="/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-orange px-10 py-2 hidden md:block font-serif text-white text-xl">
              Register
            </span>
          </a>
        </div>

        <div
          className="shrink-0 cursor-pointer relative w-[50px] md:w-[90px] h-[45px] flex justify-center items-center"
          onClick={() => setActive(!active)}
        >
          <img
            className={`absolute w-[35px] md:w-[45px] z-0 transition-opacity duration-500 translate-y-[2px] md:translate-y-0 ${
              active ? "opacity-0" : "opacity-100"
            }`}
            src={hamburger}
            alt="hamburger"
            width={45}
            height="auto"
          />
          <img
            className={`absolute w-[25px] md:w-[35px] z-[1111] transition-opacity duration-500 ${
              active ? "opacity-100" : "opacity-0"
            }`}
            src={close}
            alt="hamburger"
            width={45}
            height="auto"
          />
        </div>
      </div>

      <MainMenu active={active} setActive={setActive} />
    </nav>
  );
};

export default SiteHeader;
