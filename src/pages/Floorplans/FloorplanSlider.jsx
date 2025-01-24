import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Arrow from "../Gallery/Arrow";
import close from "/src/assets/img/icons/floorplan-popup-close.svg";

const FloorplanSlider = ({ open, handleOpen, plans, selectedIdx, type }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [plan, setPlan] = useState();
  const [loaded, setLoaded] = useState(false);
  //   const [realSlider, setRealSlider] = useState(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: selectedIdx.key,
    renderMode: "performance",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel);
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="w-full h-auto xl:h-full flex flex-col fp-modal-wrapper">
        <div
          ref={sliderRef}
          className="keen-slider pointer-events-none xl:pointer-events-auto flex-1"
        >
          {plans?.map(({ plan, interior, exterior, total, beds }) => (
            <div key={plan} className="keen-slider__slide number-slide1">
              <div className="flex gap-10 justify-center h-full w-full">
                <div className="flex flex-col xl:flex-row gap-5 xl:gap-10 w-full xl:w-auto items-center">
                  <div className="flex flex-col xl:w-[180px] items-start gap-5 xl:gap-10 mb-5 justify-center">
                    <h2
                      className={` text-orange font-sans ${
                        type === "townhome"
                          ? "text-5xl xl:text-8xl"
                          : "text-7xl xl:text-9xl"
                      }`}
                    >
                      {plan}
                    </h2>

                    <div className="text-[14px] font-bold shrink-0 text-brown xl:translate-x-[10px]">
                      <span className="text-2xl">{beds}</span> <br />
                      <span>Int: {interior} SF</span> <br />
                      {exterior && (
                        <>
                          <span className="">Ext: {exterior} SF</span> <br />
                        </>
                      )}
                      <div className="border-b w-full pt-2 mb-2"></div>
                      <span>Total: {total} SF</span>
                      <br />
                      <br />
                      <div>
                        <a
                          target="_blank"
                          href={`/floorplan-assets/pdfs/${plans[currentSlide]?.plan}.pdf`}
                          className="bg-orange px-3 py-2 font-serif text-white font-normal text-base pointer-events-auto"
                        >
                          Download Floorplan
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="w-full justify-center flex xl:hidden mb-5 relative ">
                    <div className="relative pt-[100%] w-full">
                      <img
                        src={`${
                          plan === "A"
                            ? "/floorplan-assets/plans-v3/A-FP.png"
                            : `/floorplan-assets/plans-v3/${plan}-FP.svg`
                        }`}
                        alt="plan"
                        className="absolute object-contain w-auto h-full top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center w-[240px] relative h-full">
                    <img
                      src={`/floorplan-assets/plans-key/${plan}-KeyP-2x2.svg`}
                      alt="key"
                      className="absolute top-0 left-0 w-full h-full object-contain hidden xl:block"
                    />

                    <img
                      src={`/floorplan-assets/plans-key-mobile/${plan}-KeyP-2x2.svg`}
                      alt="key"
                      className="top-0 left-0 w-full h-full object-contain xl:hidden"
                    />
                  </div>
                </div>

                <div className="flex-1 justify-center hidden xl:flex">
                  <div className="w-full relative">
                    <img
                      src={`${
                        plan === "A"
                          ? "/floorplan-assets/plans-v3/A-FP.png"
                          : `/floorplan-assets/plans-v3/${plan}-FP.svg`
                      }`}
                      alt="plan"
                      className="absolute object-contain w-full h-full top-0 left-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          {/* {loaded && instanceRef.current && (
            <div className="w-full hidden xl:flex flex-wrap justify-center gap-10 font-serif text-white ">
              <button
                className={`pr-5 pl-16 py-2 bg-gray ${
                  currentSlide === 0 ? "opacity-20 pointer-events-none" : ""
                }`}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 25% 100%)",
                }}
                onClick={() => instanceRef.current.prev()}
              >
                <span className="text-white">Previous Floorplan</span>
              </button>

              <a
                target="_blank"
                href={`/floorplan-assets/pdfs/${plans[currentSlide]?.plan}.pdf`}
                className="bg-orange px-5 py-2"
              >
                Download Floorplan
              </a>
              <button
                className={`pl-5 pr-16 py-2 bg-gray ${
                  currentSlide === plans.length - 1
                    ? "opacity-20 pointer-events-none"
                    : ""
                }`}
                style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)" }}
                onClick={() => instanceRef.current.next()}
              >
                <span className="text-white">Next Floorplan</span>
              </button>
            </div>
          )} */}

          <div className="block">
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={currentSlide === plans.length - 1}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorplanSlider;
