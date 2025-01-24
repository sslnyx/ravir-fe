import React from "react";
import expendIcon from "/src/assets/img/gallery/expand.svg";

const FloorPlanCard = (props) => {
  const { plan, interior, exterior, total, level, handleOpen, beds } = props;
  // console.log(props);
  return (
    <div
      className="flex p-3 h-full floorplan-wrapper cursor-pointer"
      onClick={handleOpen}
    >
      <div className="bg-skin w-[45%] p-3 flex flex-col">
        <h2 className="font-sans text-6xl">{plan}</h2>

        <div className="flex-1"></div>
        <div className="text-[14px] font-bold">
          <span>{beds}</span> <br />
          <span>Int: {interior} SF</span> <br />
          {exterior && (
            <>
              <span className="">Ext: {exterior} SF</span> <br />
            </>
          )}
          <div className="border-b w-full pt-2 mb-2"></div>
          <span>Total: {total} SF</span>
        </div>
      </div>
      <div className="bg-lightGray w-[55%] relative p-5">
        <div className="h-full w-full pt-[100%] relative">
          <img
            className="w-full h-full object-contain absolute top-[50%] -translate-y-[50%] left-0"
            src={`${
              plan === "A" ? "/floorplan-assets/plans-v3/A-FP.png" : `/floorplan-assets/plans-v3/${plan}-FP.svg`
            }`}
            alt=""
          />
        </div>
        <img
          src={expendIcon}
          alt="expendIcon"
          className="absolute right-3 top-3 w-[35px] expIcon opacity-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default FloorPlanCard;
