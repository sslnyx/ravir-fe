import React, { useEffect, useState, useRef } from "react";
import scrollImg from "/src/assets/img/location/neighbourhood-image.jpg";
import { Slider } from "@material-tailwind/react";

import locationImg1 from "/src/assets/img/location/neighbourhood-image-1.jpg";
import locationImg2 from "/src/assets/img/location/neighbourhood-image-2.jpg";
import locationImg3 from "/src/assets/img/location/neighbourhood-image-3.jpg";

import { Scene, Controller } from "scrollmagic";

const ScrollImage = ({ scrollValue, setScrollValue }) => {
  const scrollContainerRef = useRef();

  const rangeController = (ev) => {
    setScrollValue(ev.target.value);
  };

  // const handleScrollContainer = () => {
  // if (scrollContainerRef?.current) {
  //   const maxScrollLeft =
  //     scrollContainerRef.current.scrollWidth -
  //     scrollContainerRef.current.clientWidth;
  //   const scrollLeft = scrollContainerRef.current.scrollLeft;
  //   let value = (scrollLeft / maxScrollLeft) * 100;
  //   if (value < 10) {
  //     value = 10;
  //   }
  //   setScrollValue(value);
  // }
  // };

  useEffect(() => {
    const maxScrollLeft =
      scrollContainerRef.current.scrollWidth -
      scrollContainerRef.current.clientWidth;
    const scrollLeft = (maxScrollLeft * scrollValue) / 100;
    scrollContainerRef.current.scrollLeft = scrollLeft;
  }, [scrollValue]);

  // useEffect(() => {
  //   if (scrollContainerRef?.current) {
  //     const scrollContainer = scrollContainerRef.current;
  //     scrollContainer.addEventListener("scroll", handleScrollContainer);

  //     return () => {
  //       scrollContainer.removeEventListener("scroll", handleScrollContainer);
  //     };
  //   }
  // }, []);

  return (
    <>
      <section>
        <div
          className="overflow-x-auto pb-0 scroll-container -mx-[22px] md:mx-0"
          ref={scrollContainerRef}
        >
          <div className="container">
            <div className="flex h-[400px] md:h-[600px] gap-[5px] md:gap-2">
              <div className="shrink-0 h-full">
                <img
                  src={locationImg1}
                  alt="scroll-img"
                  className="w-auto h-full"
                />
              </div>

              <div className="w-[400px] md:w-[550px] shrink-0 flex justify-center items-center p-20 bg-orange text-white">
                <h2 className="text-4xl md:text-6xl">
                  Find All Your
                  <br />
                  Urban Needs
                  <br /> in One Place
                </h2>
              </div>

              <div className="shrink-0 h-full">
                <img
                  src={locationImg2}
                  alt="scroll-img"
                  className="w-auto h-full"
                />
              </div>

              <div className="w-[400px] md:w-[550px] shrink-0 flex justify-center items-center p-20 bg-lightBrown text-white">
                <h2 className="text-4xl md:text-6xl">
                  Dive into
                  <br /> Exciting
                  <br /> Recreational
                  <br /> Pursuits
                </h2>
              </div>
              <div className="shrink-0 h-full">
                <img
                  src={locationImg3}
                  alt="scroll-img"
                  className="w-auto h-full"
                />
              </div>

              <div className="w-[400px] md:w-[550px] shrink-0 flex justify-center items-center p-20 bg-orange text-white">
                <h2 className="text-4xl md:text-6xl">
                  Experience
                  <br /> the Warmth
                  <br /> of Community
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container w-[350px] md:py-10 mx-auto">
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
    </>
  );
};

export default ScrollImage;
