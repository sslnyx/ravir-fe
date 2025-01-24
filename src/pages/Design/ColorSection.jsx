import React, { useState } from "react";
import ColorTabs from "./ColorTabs";
import "./colorSection.css";

const ColorSection = ({ imgSrc, title, des, color }) => {
  // const colors = ["white", "warm", "dark"];
  const [selectedColor, setSelectedColor] = useState("warm");
  const props = { selectedColor, setSelectedColor };

  // const getNextColor = () => {
  //   const color =
  //     colors[
  //       (colors.findIndex((color) => color === selectedColor) + 1) %
  //         colors.length
  //     ];

  //   setSelectedColor(color);
  // };

  return (
    <section>
      <div className="container px-0 md:px-[22px]">
        <div className="relative flex justify-center z-[10] md:hidden">
          <div className="flex bg-lightGray py-1 px-[22px]">
            {Object.entries(imgSrc).map(([key, { imgSrc, label }], idx) => (
              <h3
                key={key}
                className={`capitalize shrink-0 px-[40px] py-3 -mx-[17px] cursor-pointer text-base text-center clip ${
                  key === selectedColor
                    ? "text-white bg-orange"
                    : "text-black bg-skin"
                }`}
                onClick={() => setSelectedColor(key)}
              >
                {label}
              </h3>
            ))}
          </div>
        </div>

        {/* <div className="flex justify-center relative z-[20] md:hidden">
          <h4
            className="bg-skin py-3 px-5 font-serif font-bold border-lightGray border-4"
            onClick={getNextColor}
          >
            See Alternate Color
          </h4>
        </div> */}

        <div className="w-full relative pt-[250px] md:pt-[650px] -mt-5 md:mt-0 overflow-hidden">

          <div className="absolute left-5 top-5 justify-center z-[10] hidden md:flex">
            <div className="flex bg-lightGray py-1 px-[22px]">
              {Object.entries(imgSrc).map(([key, { imgSrc, label }], idx) => (
                <h3
                  key={key}
                  className={`capitalize shrink-0 md:px-[40px] py-3 md:min-w-[150px] -mx-[17px] cursor-pointer md:text-base text-center clip ${
                    key === selectedColor
                      ? "text-white bg-orange"
                      : "text-black bg-skin"
                  }`}
                  onClick={() => setSelectedColor(key)}
                >
                  {label}
                </h3>
              ))}
            </div>
          </div>

          {Object.entries(imgSrc).map(([key, img]) => (
            <img
              key={key}
              className={`img-sec absolute h-full w-full object-cover transition-all duration-1000 ease-in top-0 left-0 ${
                selectedColor === key
                  ? "active-img z-[5]"
                  : "delay-1000 duration-75"
              }`}
              src={img.imgSrc}
              alt={key}
            />
          ))}
        </div>

        <div className="flex justify-end relative">
          <div className="h-[10px] w-full md:w-[16px] bg-orange md:h-full absolute z-[2] right-0 top-0"></div>
          <div
            className={
              color +
              " py-10 md:py-10 p-5 pl-[22px] pr-[calc(22px+16px)] md:pl-12 md:pr-[calc(48px+16px)] max-w-[960px] flex gap-5 md:gap-12 flex-wrap md:flex-nowrap"
            }
          >
            <div className="basis-full md:basis-1/3 flex items-center">
              <h3>{title}</h3>
            </div>
            <div className="basis-full md:basis-2/3">{des}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorSection;
