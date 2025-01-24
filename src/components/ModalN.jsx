import React, { useEffect, useState } from "react";

const className =
  "fixed top-0 left-0 w-screen h-full z-[999] duration-500 transition-opacity overflow-auto";


const ModalN = ({ children, open, handler, fullBleed, fullHeigh }) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open"); // Lock body scroll
      // document.querySelector("body").classList.add("h-auto");
      // document.querySelector("html").classList.add(...classListArr);
    } else {
      // document.querySelector("body").classList.remove("h-auto");
      document.body.classList.remove("modal-open"); // Restore scroll
      // document.querySelector("html").classList.remove(...classListArr);
    }
  }, [open]);

  return (
    <div
      className={`${open ? "" : "pointer-events-none opacity-0"} ${className}`}
    >
      <div
        className="fixed bg-black/50 w-full min-h-[100lvh] h-full backdrop-blur-sm"
        onClick={handler}
      ></div>

      <div
        className={`flex justify-center items-center w-full pointer-events-none py-10 md:py-5 min-h-full xl:h-full ${
          fullHeigh ? "" : ""
        }`}
      >
        {open && (
          <div
            className={`${
              fullBleed
                ? "w-auto"
                : "max-w-[calc(100%-44px)] w-[calc(100%-44px)] md:max-w-[calc(1440px-44px)]"
            }  h-full  flex items-center justify-center`}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <div className={`${fullHeigh ? "h-full" : ""} w-full`}>
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalN;
