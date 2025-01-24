import React from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  ThemeProvider,
  dialogBody,
} from "@material-tailwind/react";

import ModalN from "../../components/ModalN";

import close from "/src/assets/img/icons/floorplan-popup-close.svg";
import ScrollImage from "../../components/ScrollImage";
import { theme } from "./modalTheme";

const AmenityModal = ({ handleOpen, open, selectedImg }) => {
  return (
    <ModalN
      open={open}
      handler={handleOpen}
      fullBleed={true}
    >
      <div className="relative pointer-events-auto">

        <div className="flex justify-end mb-3 xl:mb-0">
          <div
            className="xl:mb-0 absolute right-3 cursor-pointer z-10 xl:right-0 -top-[50px]"
            onClick={() => handleOpen()}
          >
            <img src={close} alt="close" className="w-[35px]" />
          </div>
        </div>

        <ScrollImage>
          <img
            className="w-auto h-full max-w-none"
            src={selectedImg}
            alt="lounge"
          />
        </ScrollImage>
      </div>
    </ModalN>
  );
};

export default AmenityModal;
