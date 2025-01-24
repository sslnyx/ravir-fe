import React from "react";
import bike from "/src/assets/img/home/homepage-bike-cropped.jpg";
import family from "/src/assets/img/home/homepage-family-cropped.jpg";
// import shapedBg from "/src/assets/img/home/shape-1-ed.svg";

import ImageAndTextBlock from "../../components/ImageAndTextBlock";
import PageIntro from "../../components/PageIntro";

const imgTextProps = {
  imgSrc: bike,
  title: "Where Heritage and Convenience Meet",
  des: "In the heart of culturally-rich Maillardville, life at Ravir seamlessly blends heritage with the best in urban convenience.",
  button: {
    title: "Explore our Neighbourhood",
    link: "/location",
  },
  ringPosition: "-right-[280px] -top-[450px] w-[620px]",
};

const imgTextProps2 = {
  right: true,
  dark: true,
  imgSrc: family,
  title: "French Inspired,<br> Built for You",
  des: "Ravir captures modernism at its best, with a warmth that instantly feels like home and complimented by an array of family-forward amenities.",
  button: {
    title: "Explore our Design",
    link: "/design",
  },
  ringPosition: "-left-[350px] -top-[450px] w-[620px]",
};



const HomeSectionOverview = () => {
  return (
    <section className="pb-0 md:pb-10">
      <div className="container">

        <ImageAndTextBlock {...imgTextProps} />
        <div className="md:mb-10"></div>
        <ImageAndTextBlock {...imgTextProps2} />

        <div></div>
      </div>
    </section>
  );
};

export default HomeSectionOverview;
