import React, { useState, useRef, useEffect } from "react";
import interiorBanner from "/src/assets/img/design/lanscape-feature.jpg";
import { Slider } from "@material-tailwind/react";

import hWhite from "/src/assets/img/design/highlights/landscape-color-white.jpg";
import hWarm from "/src/assets/img/design/highlights/landscape-color-warm.jpg";
import hDark from "/src/assets/img/design/highlights/landscape-color-dark.jpg";

const dots = [
  {
    position: "top-[10%] left-[50%]",
    boxPosition: "top-[50px] -left-[20px]",
    anglePosition: "left-[20px] -top-[9px]",
    description: "Ceiling heights soaring up to 8’10”",
  },
  {
    position: "top-[38%] right-[15%]",
    boxPosition: "-top-[95px] -right-[10px]",
    anglePosition: "right-[10px] -bottom-[9px]",
    description: "Oversized energy-efficient windows",
  },
  {
    position: "top-[30%] left-[15%]",
    boxPosition: "-top-[10px] left-[55px]",
    anglePosition: "-left-[15px] bottom-[9px]",
    description: "Ample storage space throughout",
  },
  {
    position: "bottom-[8%] left-[15%]",
    boxPosition: "-top-[125px] -left-[25px]",
    anglePosition: "left-[25px] -bottom-[15px]",
    description:
      "Resilient 7.5” wide plank wood laminate flooring in main living spaces",
  },
  {
    position: "top-[5%] right-[22%]",
    boxPosition: "top-[55px] -left-[25px]",
    anglePosition: "left-[25px] -top-[10px]",
    description: "LED ceiling lights come standard throughout the entire home",
  },
  {
    position: "top-[38%] right-[5%]",
    boxPosition: "-top-[125px] -right-[25px]",
    anglePosition: "right-[25px] -bottom-[15px]",
    description:
      "Elegant glass French doors leading to private patio or covered balcony (most homes)",
  },
  {
    position: "top-[12%] left-[30%]",
    boxPosition: "-bottom-[140px] -left-[25px]",
    anglePosition: "left-[25px] -top-[10px]",
    description:
      "Available A/C – heat pump system for cooling, heating, dehumidification and fan function (most homes)",
  },
  {
    position: "top-[53%] left-[28%]",
    boxPosition: "-top-[10px] left-[55px]",
    anglePosition: "-left-[15px] bottom-[9px]",
    description: "Energy Star LG appliance package",
  },
];

const highlightTabs = {
  warm: { imgSrc: hWarm, label: "Warm Wood" },
  white: { imgSrc: hWhite, label: "White" },
  dark: { imgSrc: hDark, label: "Dark Wood" },
};

const Highlights = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [selectedColor, setSelectedColor] = useState("warm");

  const scrollContainerRef = useRef();

  const [scrollValue, setScrollValue] = useState(10);

  const rangeController = (ev) => {
    setScrollValue(ev.target.value);
  };

  const handleScrollContainer = () => {
    if (scrollContainerRef?.current) {
      const maxScrollLeft =
        scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth;

      const scrollLeft = scrollContainerRef.current.scrollLeft;

      let value = (scrollLeft / maxScrollLeft) * 100;
      if (value < 10) {
        value = 10;
      }
      setScrollValue(value);
    }
  };

  useEffect(() => {
    const maxScrollLeft =
      scrollContainerRef.current.scrollWidth -
      scrollContainerRef.current.clientWidth;
    const scrollLeft = (maxScrollLeft * scrollValue) / 100;

    // console.log(scrollLeft)
    scrollContainerRef.current.scrollLeft = scrollLeft;
  }, [scrollValue]);

  useEffect(() => {
    if (scrollContainerRef?.current) {
      const scrollContainer = scrollContainerRef.current;
      scrollContainer.addEventListener("scroll", handleScrollContainer);

      return () => {
        scrollContainer.removeEventListener("scroll", handleScrollContainer);
      };
    }
  }, []);

  return (
    <section>
      <div className="flex justify-center z-[99] relative md:hidden">
        <div className="bg-lightGray py-1 px-[22px] flex">
          {Object.entries(highlightTabs).map(
            ([key, { imgSrc, label }], idx) => (
              <h3
                key={key}
                className={`capitalize shrink-0 px-[40px] md:px-[50px] py-3 md:min-w-[250px] -mx-[17px] cursor-pointer text-base md:text-2xl text-center clip ${
                  key === selectedColor
                    ? "text-white bg-orange"
                    : "text-black bg-skin"
                }`}
                onClick={() => setSelectedColor(key)}
              >
                {label}
              </h3>
            )
          )}
        </div>
      </div>

      <div
        className="overflow-x-auto md:overflow-hidden mb-10 -mt-5 md:mt-0 w-full scroll-container"
        ref={scrollContainerRef}
      >
        <div className="w-[1200px] md:w-[1440px] mx-auto relative h-[429px] md:h-[515px]">
          <div className="hidden md:flex justify-center z-[99] relative">
            <div className="bg-lightGray py-1 px-[22px] flex absolute left-5 top-5">
              {Object.entries(highlightTabs).map(
                ([key, { imgSrc, label }], idx) => (
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
                )
              )}
            </div>
          </div>
          <div className="w-full h-full">
            {Object.entries(highlightTabs).map(([key, img], idx) => (
              <img
                key={key}
                className={`img-sec h-full w-full object-contain transition-all duration-1000 ease-in absolute top-0 left-0 ${
                  selectedColor === key
                    ? "active-img z-[10]"
                    : "delay-1000 duration-75"
                }`}
                width={1200}
                height="auto"
                src={img.imgSrc}
                alt={key}
              />
            ))}
          </div>

          <div className="absolute w-full h-full top-0 left-0 z-[98] overflow-hidden">
            {dots.map(
              ({ position, description, boxPosition, anglePosition }, i) => (
                <div className={`absolute ${position}`} key={i}>
                  <div
                    className={`w-[30px] h-[30px] ${
                      activeDot === i ? "bg-orange" : "bg-brown"
                    } rounded-full cursor-pointer`}
                    onClick={() => setActiveDot(i)}
                  ></div>

                  <div
                    className={`absolute pointer-events-none min-w-[280px] z-10 bg-skin p-3 transition-all duration-700 ${boxPosition} ${
                      activeDot === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      className={`absolute bg-skin w-[30px] h-[30px] rotate-45 ${anglePosition}`}
                    ></div>
                    <span
                      className="relative"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="container w-[350px] md:py-10 mx-auto xl:hidden">
        <Slider
          // defaultValue={10}
          onChange={rangeController}
          value={scrollValue}
          className="text-transparent "
          barClassName={`rounded-none h-[8px] rounded-none bg-orange`}
          thumbClassName="[&::-moz-range-thumb]:rounded-none border-none [&::-webkit-slider-thumb]:bg-[transparent] [&::-moz-range-thumb]:bg-[transparent] [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[8px] [&::-webkit-slider-thumb]:-mt-[12px] [&::-webkit-slider-thumb]:p-[16px]"
          trackClassName={`[&::-webkit-slider-runnable-track]:bg-brown/20  [&::-moz-range-track]:bg-brown/20 [&::-webkit-slider-runnable-track]:rounded-none [&::-moz-range-track]:rounded-none [&::-webkit-slider-runnable-track]:border-none [&::-moz-range-track]:border-none`}
        />
      </div>
    </section>
  );
};

export default Highlights;
