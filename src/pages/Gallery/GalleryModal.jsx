import React from "react";

// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";

import ModalN from "../../components/ModalN";

import closeBtn from "/src/assets/img/icons/floorplan-popup-close.svg";

const array500 = [
  "/src/assets/img/gallery/gallery-photos/gallery-interior-1.jpg",
  "/src/assets/img/gallery/gallery-photos/gallery-amenity-2.jpg",
  "/src/assets/img/gallery/gallery-photos/gallery-amenity-3.jpg",
  "/src/assets/img/gallery/gallery-photos/gallery-amenity-4.jpg",
];

const GalleryModal = ({ open, setOpen, handleOpen, selectedImg }) => {
  return (
    <ModalN open={open} handler={handleOpen}>
      <div
        className={`flex justify-center xl:w-auto w-full h-auto max-h-[800px] ${
          array500.includes(selectedImg) ? "xl:h-[500px]" : "xl:h-[calc(100svh-44px)]"
        }`}
      >
        <div className="relative w-full xl:w-auto h-auto">
          <div className="w-full xl:w-auto flex justify-end mb-5 xl:mb-0 pointer-events-auto">
            <div
              className="relative xl:absolute xl:block xl:right-5 xl:top-5 cursor-pointer"
              onClick={handleOpen}
            >
              <img src={closeBtn} alt="closeBtn" className="w-[35px]" />
            </div>
          </div>

          <div className="w-full xl:w-auto h-auto xl:h-full pointer-events-auto">
            <img
              className="w-full h-auto xl:w-auto xl:h-full object-contain"
              src={selectedImg}
              alt="img"
            />
          </div>
        </div>
      </div>
    </ModalN>
  );
};

export default GalleryModal;
