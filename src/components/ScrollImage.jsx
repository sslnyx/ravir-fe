import React, { useRef, useState, useEffect } from "react";
import { Slider } from "@material-tailwind/react";

const ScrollImage = ({ children }) => {
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
    <>
      <div
        className="overflow-x-auto mb-10 w-full max-w-[100vw] 2xl:mb-0 scroll-container"
        ref={scrollContainerRef}
      >
        <div className="w-auto relative h-[429px] md:h-[515px]">
          {children}
        </div>
      </div>

      <div className="w-[350px] mx-auto 2xl:hidden">
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
