import React from "react";
import { Link } from "react-router-dom";

const FooterBanner = ({ bannerImg, title, link }) => {
  return (
    <Link to={link}>
      <div className="py-[150px] relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={bannerImg}
            alt="bannerImg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative">
          <h2 className="text-center md:text-5xl text-white">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default FooterBanner;
