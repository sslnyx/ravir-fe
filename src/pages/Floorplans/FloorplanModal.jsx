import React, { useEffect, useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  ThemeProvider,
} from "@material-tailwind/react";

import Arrow from "../Gallery/Arrow";
import { fpTheme } from "./fp-modal-theme";
import ModalN from "../../components/ModalN";

import close from "/src/assets/img/icons/floorplan-popup-close.svg";
import FloorplanSlider from "./FloorplanSlider";

const FloorplanModal = (props) => {
  const { open, handleOpen, plans, selectedIdx, type } = props;
  // const [currentSlide, setCurrentSlide] = useState(0);
  // // const [plan, setPlan] = useState();
  // const [loaded, setLoaded] = useState(false);
  // const [realSlider, setRealSlider] = useState(null);

  // const [sliderRef, instanceRef] = useKeenSlider({
  //   initial: selectedIdx,
  //   slideChanged(slider) {
  //     setCurrentSlide(slider.track.details.rel);
  //   },
  //   created(slider) {
  //     setRealSlider(slider);
  //     setCurrentSlide(slider.track.details.rel);
  //     setLoaded(true);
  //   },
  //   destroyed() {
  //     setRealSlider(null);
  //     setLoaded(false);
  //     setCurrentSlide(0);
  //   },
  // });

  // useEffect(() => {
  //   if (plans?.length && realSlider) realSlider.update();
  // }, [plans]);

  // useEffect(() => {
  //   if (realSlider) {
  //     realSlider.moveToIdx(selectedIdx.key, false, { duration: 0 });
  //     setCurrentSlide(selectedIdx.key);
  //   }
  // }, [selectedIdx, realSlider]);

  return (
    <ModalN open={open} handler={handleOpen} fullHeigh={true}>
      <div className="px-10 py-5 md:px-20 relative bg-white h-auto md:h-full w-full pointer-events-auto">
        <div className="flex justify-end mb-3 xl:mb-0">
          <div
            className="absolute cursor-pointer z-10 top-5 right-5"
            onClick={() => handleOpen()}
          >
            <img src={close} alt="close" className="w-[35px]" />
          </div>
        </div>
        <FloorplanSlider {...props} />
      </div>
    </ModalN>
  );
};

export default FloorplanModal;
