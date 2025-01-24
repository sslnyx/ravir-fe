import React from "react";

const PageHero = ({ imgSrc, className }) => {
  return (
    <section className="p-0 mb-10 w-full h-[450px] md:h-[600px] 3xl:h-[calc(100vh-150px)] overflow-hidden 2xl:min-h-[600px]">
      <div className="w-full h-full">
        <img
          className={`w-full h-full object-cover ${
            className || "object-left"
          } `}
          src={imgSrc}
          alt="home-hero"
          data-aos="fade"
        />
      </div>
    </section>
  );
};

export default PageHero;
