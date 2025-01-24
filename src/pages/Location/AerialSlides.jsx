import React from "react";

import aerial from "/src/assets/img/gallery/gallery-photos/gallery-exterior-1.jpg";
import aerial2 from "/src/assets/img/gallery/gallery-photos/gallery-exterior-2.jpg";
import aerial3 from "/src/assets/img/gallery/gallery-photos/gallery-exterior-3.jpg";
import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css"

const slides = [aerial, aerial2, aerial3];

function easeInOutExpo(x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

const AerialSlides = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            // slider.next();
            const currentIndex = slider.track.details.rel; // Get current index
            const nextIndex = currentIndex + 1; // Calculate next index

            slider.moveToIdx(nextIndex, false, {
              duration: 2000, // Duration in ms
              easing: easeInOutExpo,
            });
          }, 2000);
        }
        slider.on("created", () => {
        //   slider.container.addEventListener("mouseover", () => {
        //     mouseOver = true;
        //     clearNextTimeout();
        //   });
        //   slider.container.addEventListener("mouseout", () => {
        //     mouseOver = false;
        //     nextTimeout();
        //   });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <section className="w-full max-w-[2560px] md:min-h-[450px] md:h-full">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, i) => (
          <div className="keen-slider__slide number-slide" key={i}>
            <img
              src={slide}
              alt="aerial"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AerialSlides;
