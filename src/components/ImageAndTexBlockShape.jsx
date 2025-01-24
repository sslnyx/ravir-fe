import React from "react";

const ImageAndTexBlockShape = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={2000}
      height={600}
      {...props}
    >
      <title>{"shape-1-svg"}</title>
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M-1651.92-4038.41h7433.63v9064.37h-7433.63z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path d="M2000 600H1.2l781.4-1612.8H2000z" />
      </g>
    </svg>
  );
};

export default ImageAndTexBlockShape;
