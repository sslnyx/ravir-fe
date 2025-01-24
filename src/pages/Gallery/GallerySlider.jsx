import React, { useEffect, useRef, useState } from "react";
import g1 from "/src/assets/img/gallery/gallery-photos/gallery-exterior-1.jpg";
import g2 from "/src/assets/img/gallery/gallery-photos/gallery-exterior-2.jpg";
import g3 from "/src/assets/img/gallery/gallery-photos/gallery-exterior-3.jpg";
import g4 from "/src/assets/img/gallery/gallery-photos/gallery-exterior-4.jpg";
import g5 from "/src/assets/img/gallery/gallery-photos/gallery-interior-1.jpg";
import g6 from "/src/assets/img/gallery/gallery-photos/gallery-interior-2.jpg";
import g7 from "/src/assets/img/gallery/gallery-photos/gallery-interior-3.jpg";
import g8 from "/src/assets/img/gallery/gallery-photos/gallery-interior-4.jpg";
import g9 from "/src/assets/img/gallery/gallery-photos/gallery-amenity-1.jpg";
import g10 from "/src/assets/img/gallery/gallery-photos/gallery-amenity-2.jpg";
import g11 from "/src/assets/img/gallery/gallery-photos/gallery-amenity-3.jpg";
import g12 from "/src/assets/img/gallery/gallery-photos/gallery-amenity-4.jpg";
import g13 from "/src/assets/img/gallery/gallery-photos/gallery-image-model.jpg";

import Arrow from "./Arrow";

import expendIcon from "/src/assets/img/gallery/expand.svg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import GalleryTabs from "./GalleryTabs";
import GalleryModal from "./GalleryModal";

const galleryPhotos = [g1, g2, g3, g4, g13, g5, g6, g7, g8, g9, g10, g11, g12];

const GallerySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    // mode: "free-snap",
    loop: true,
    initial: 0,
    slideChanged(slider) {
      const currentSlide = slider.track.details.rel;
      setCurrentSlide(currentSlide);

      for (const slide of slider.slides) {
        slide.classList.remove("active");
      }

      slider.slides[currentSlide].classList.add("active");
    },
    slides: {
      origin: "center",
      perView: 1.6,
      spacing: 0,
    },
    created(slider) {
      setLoaded(true);
      slider.slides[currentSlide].classList.add("active");
    },
  });
  const [selectedImg, setSelectedImg] = useState(null);

  const tabsHandler = (ev) => {
    // console.log(ev.target.parentNode.id);
    if (ev.target.parentNode.id === "amenity") {
      instanceRef.current?.moveToIdx(8);
    }

    if (ev.target.parentNode.id === "interior") {
      instanceRef.current?.moveToIdx(4);
    }

    if (ev.target.parentNode.id === "exterior") {
      instanceRef.current?.moveToIdx(0);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = (imgSrc) => {
    setOpen(!open);
    setSelectedImg(imgSrc);
  };

  const modalProps = { open, setOpen, handleOpen, selectedImg, setSelectedImg };

  return (
    <section className="mb-10 relative">
      {/* <div className="mb-10 flex justify-center">
        <GalleryTabs
          className="h-[45px] md:h-auto"
          tabsHandler={tabsHandler}
          currentSlide={currentSlide}
        />
      </div> */}
      <div className="container max-w-[1440px] relative overflow-x-hidden  flex items-center mb-10">
        <div className="pt-[calc(9/16*100%)] md:pt-[calc(7.5/16*100%)] ">
          <div
            ref={sliderRef}
            className="keen-slider !absolute left-0 top-[50%] -translate-y-[50%]"
          >
            {galleryPhotos.map((imgSrc, i) => (
              <div
                key={i}
                className={`keen-slider__slide number-slide${i} relative`}
                onClick={() => handleOpen(imgSrc)}
              >
                <div className="h-full flex items-center">
                  <img
                    src={imgSrc}
                    alt="gallery-img"
                    className="h-full object-cover gallery-img"
                  />
                </div>

                <div className="absolute -top-[10px] -right-[20px] md:-right-[50px] expendIcon">
                  <img src={expendIcon} alt="expendIcon" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
      </div>
      <div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>

      <GalleryModal {...modalProps} />
    </section>
  );
};

export default GallerySlider;
