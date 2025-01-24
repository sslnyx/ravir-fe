import React from "react";
import living from "/src/assets/img/home/homepage-livingroom-cropped.jpg";
// import living from "/src/assets/img/gallery/gallery-photos/gallery-interior-2.jpg"
import MainBtn from "../../components/MainBtn";
import ring from "/src/assets/img/icons/transparent-ring.svg";

const HomeSectionLivingRoom = () => {
  return (
    <section className="mb-10 -mx-10 md:mx-0 pt-0 md:pt-10">
      <div className="container relative flex items-center flex-wrap">
        <div className="absolute hidden md:block w-[650px] -right-[400px] -top-[400px]">
          <img
            src={ring}
            alt="ring"
            data-aos="fade-left"
            data-aos-delay="800"
          />
        </div>
        <div className="w-[900px]">
          <img src={living} alt="living" data-aos="fade-right" />
        </div>
        <div
          className="bg-skin w-full md:w-[450px] max-w-full p-10 relative md:absolute md:right-[22px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="mb-5">A Tranquil Enclave for the Modern Family</h2>
          <p className="mb-5">
            With an array of studio to four bedroom floorplans to choose from,
            you’ll come home to a well-balanced space where comfort, light and
            timeless style blend in harmony.
          </p>
          {/* <MainBtn link={"/floorplans"}>Explore our Floorplans</MainBtn> */}
        </div>
      </div>
    </section>
  );
};

export default HomeSectionLivingRoom;
