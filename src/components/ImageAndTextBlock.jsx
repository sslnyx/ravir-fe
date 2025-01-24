import React from "react";
import ImageAndTexBlockShape from "./ImageAndTexBlockShape";
import MainBtn from "./MainBtn";
import ring from "/src/assets/img/icons/transparent-ring.svg";
import "./imageAndTextBlock.css"

const ImageAndTextBlock = ({
  imgSrc,
  title,
  des,
  right,
  dark,
  button,
  ringPosition,
}) => {
  return (
    <div className="flex flex-col md:flex-row -mx-[22px] lg:mx-0">
      <div
        className={`basis-full md:basis-1/2 flex items-center ${
          right && "lg:order-2"
        }`}
      >
        <div
          className="relative overflow-hidden flex items-center w-full h-[450px] z-10"
          data-aos="fade-up"
        >
          <img
            className={`md:absolute relative md:top-[50%] md:-translate-y-[50%] h-full max-w-none object-cover z-10 ${
              right
                ? "-scale-x-100 lg:scale-x-[inherit] crop-right lg:left-0 right-0"
                : "crop-left right-0"
            }`}
            src={imgSrc}
            alt="column-pic"
          />
        </div>
      </div>
      <div className="basis-full md:basis-1/2 relative -mt-16 md:mt-0">
        <div className="px-[22px] lg:px-0 h-[450px] md:h-[600px] flex items-center">
          <div
            className={`w-[2000px] h-full absolute top-0 ${
              right
                ? "-left-[200px] lg:-right-[200px] lg:left-[inherit]"
                : "-left-[200px]"
            }`}
            data-aos={right ? "fade-right" : "fade-left"}
            data-aos-delay="200"
          >
            <ImageAndTexBlockShape
              className={`w-full h-full ${right ? "lg:-scale-x-100" : ""} ${
                dark ? "fill-lightBrown" : "fill-skin"
              }`}
            />
          </div>
          <div
            className={`relative h-[300px] lg:h-[450px] flex items-end  w-full justify-end ${
              right && "lg:justify-start"
            }`}
          >
            <div className={`absolute hidden lg:block ${ringPosition}`}>
              <img
                src={ring}
                alt="ring"
                data-aos={right ? "fade-right" : "fade-left"}
                data-aos-delay="800"
              />
            </div>
            <div
              className={`text-right md:text-left max-w-[400px] ${
                dark ? "text-white" : "text-brown"
              }`}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <h2
                className="mb-5"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
              <p className="mb-5">{des}</p>
              <div className="flex justify-end md:justify-start">
                {button && <MainBtn link={button.link}>{button.title}</MainBtn>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAndTextBlock;
