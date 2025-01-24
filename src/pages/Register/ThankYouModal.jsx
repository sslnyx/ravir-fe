import { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ThankYouModal = ({ showThankYou, setShowThankYou }) => {
  const handleOpen = () => setShowThankYou(!showThankYou);
  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog className="py-5 md:p-10" open={showThankYou} handler={handleOpen}>
        <DialogHeader className="pb-0">
          <h3 className="text-xl md:text-3xl">Thank You for Joining Ravir</h3>
        </DialogHeader>
        <DialogBody>
          Thank you for registering your interest in Ravir. You are now on the
          priority list to receive updates on the project as they become
          available.
        </DialogBody>
        {/* <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </>
  );
};

export default ThankYouModal;
