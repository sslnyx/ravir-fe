import React from "react";
import "./amenity.css";
import ringSrc from "/src/assets/img/icons/ring.svg";
import expand from "/src/assets/img/gallery/expand.svg";

const AmenityImageSection = ({
  imgSrc,
  title,
  setOpen,
  open,
  handleOpen,
  setSelectedImage,
  ring,
  idx,
}) => {
  return (
    <section className="admin-sec relative">
      {ring && (
        <div className="absolute aRing">
          <img
            src={ringSrc}
            alt="ring"
            width={500}
            className="w-full"
            data-aos={idx % 2 !== 0 ? "fade-left" : "fade-right"}
            data-aos-delay="300"
          />
        </div>
      )}
      <div className="relative h-[350px] md:h-[600px] -mx-[22px] md:mx-0 ">
        <div
          className="absolute h-full max-w-full md:max-w-none md:w-[1298px] img-wrapper cursor-pointer"
          onClick={() => {
            handleOpen();
            setSelectedImage(imgSrc);
          }}
        >
          <img
            src={imgSrc}
            alt="imgSrc"
            className="object-cover h-full w-full aImg"
            data-aos={idx % 2 !== 0 ? "fade-left" : "fade-right"}
          />

          <div className="absolute right-5 top-5 btnExpand">
            <img src={expand} alt="expand" />
          </div>
        </div>
      </div>

      <div
        className="flex h-[200px] md:h-[300px] relative -mt-[50px] md:-mt-[150px] pointer-events-none items-center title-wrapper"
        data-aos={idx % 2 !== 0 ? "fade-right" : "fade-left"}
        data-aos-delay="500"
      >
        <div className="h-full flex items-center bg-skin title-bg absolute w-[5000px]"></div>

        <h2
          className="shrink-0 relative"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </section>
  );
};

export default AmenityImageSection;
