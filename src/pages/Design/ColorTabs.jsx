import React from "react";

const ColorTabs = ({ img, selectedColor, setSelectedColor }) => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={644}
        height={80}
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        viewBox="0 0 479672 59586"
        className="h-[45px] w-full md:h-[80px]"
      >
        <defs>
          <style>
            {".fil1{fill:#dcd1c7}.fil2{fill:#60492f;fill-rule:nonzero}"}
          </style>
        </defs>
        <g id="Layer_x0020_1">
          <g id="interiortab">
            <path
              id="base"
              d="M0 0h479672v59586H0z"
              style={{
                fill: "#f0f0f0",
              }}
            />
            <g id="white">
              <path
                d="M5529 5959h185569l-50673 47669H5529z"
                className={`transition-all duration-500 cursor-pointer
                  ${selectedColor === "white" ? "fill-orange" : "fill-skin"}`}
                onClick={() => setSelectedColor("white")}
              />
            </g>
            <g id="warm">
              <path
                d="M197964 5959h134656l-50673 47669H147052z"
                className={`transition-all duration-500 cursor-pointer ${
                  selectedColor === "warm" ? "fill-orange" : "fill-skin"
                }`}
                onClick={() => setSelectedColor("warm")}
              />
            </g>
            <g id="dark">
              <path
                d="M474142 53628H288574l50673-47669h134895z"
                className={`transition-all duration-500 cursor-pointer
                  ${selectedColor === "dark" ? "fill-orange" : "fill-skin"}`}
                onClick={() => setSelectedColor("dark")}
              />
            </g>
          </g>
        </g>
      </svg>
      <div className="absolute pointer-events-none top-0 left-[50%] -translate-x-[50%] flex md:w-full justify-center md:justify-around items-center h-full w-full">
        {Object.entries(img).map(([key, { imgSrc, label }], idx) => (
          <h3
            key={key}
            className={`capitalize px-[28px] md:px-5 py-3 mx-3 cursor-pointer text-xs md:text-2xl basis-1/3 text-center ${
              key === selectedColor ? "text-white" : "text-black"
            }`}
          >
            {label}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default ColorTabs;
