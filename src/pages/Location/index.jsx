import React, { useRef, useState, useEffect, useMemo } from "react";
import PageHero from "../../components/PageHero";
import heroSrc from "/src/assets/img/location/location-anchor.jpg";
import PageIntro from "../../components/PageIntro";
import LocationMap from "./LocationMap";
import ScrollImage from "./ScrollImage";
import FooterBanner from "../../components/FooterBanner";

import AerialSlides from "./AerialSlides";

import bannerImg from "/src/assets/img/location/tab-toDesign.jpg";

import { Helmet } from "react-helmet";


const bannerProps = {
  bannerImg,
  title: "Explore Our Design",
  link: "/design",
};

const introProps = {
  title: "Where Heritage and<br> Convenience Meet",
  desc: `
    Situated in the heart of Coquitlam’s historic Maillardville, life
              at Ravir seamlessly blends rich heritage with the best in urban
              convenience.`,
};

const Location = () => {
  const MemoizedLocationMap = useMemo(() => <LocationMap />, []);

  const scrollImgRef = useRef();
  const headRef = useRef();

  const [scrollValue, setScrollValue] = useState(1);

  const scrollProps = { scrollValue, setScrollValue };

  useEffect(() => {
    const scrollFn = () => {
      // console.log(window.scrollY);
      let offset;
      if (window.innerWidth > 768) offset = 150;
      if (window.innerWidth <= 768) offset = 100;

      // console.log(headRef.current.offsetHeight);
      const currentScrollPosition =
        window.scrollY - headRef.current.offsetHeight + offset;
      const containerHeight = 2000 - scrollImgRef.current.offsetHeight;

      if (
        window.scrollY > headRef.current.offsetHeight - offset &&
        window.scrollY <
          headRef.current.offsetHeight +
            2000 -
            offset -
            scrollImgRef.current.offsetHeight
      ) {
        const percent = (currentScrollPosition / containerHeight) * 100;

        setScrollValue(percent);

        scrollImgRef.current.classList.remove("absolute", "bottom-0");
        scrollImgRef.current.style = `top:${offset}px`;
        return scrollImgRef.current.classList.add("fixed");
      }

      if (window.scrollY <= headRef.current.offsetHeight - offset) {
        scrollImgRef.current.style = "";
        scrollImgRef.current.classList.remove("fixed", `top-[${offset}px]`);
      }

      if (
        window.scrollY >=
        headRef.current.offsetHeight +
          2000 -
          offset -
          scrollImgRef.current.offsetHeight
      ) {
        scrollImgRef.current.classList.remove("fixed", "top-[300px]");
        scrollImgRef.current.style = "";
        scrollImgRef.current.classList.add("absolute", "bottom-0");
      }
    };

    window.addEventListener("scroll", scrollFn);

    return () => {
      removeEventListener("scroll", scrollFn);
    };
  }, []);

  return (
    <div>
      <Helmet title="Location" />
      <div ref={headRef}>
        <PageHero imgSrc={heroSrc} className="object-[60%_50%]" />

        <PageIntro {...introProps} />
      </div>

      <div className="h-[2000px] relative">
        <div ref={scrollImgRef} className="w-full">
          <ScrollImage {...scrollProps} />
        </div>
      </div>

      <section className="pt-20">
        <div className="container text-center">
          <h2>Coquitlam’s Historic Maillardville Neighbourhood</h2>
        </div>
      </section>

      <AerialSlides />


      {MemoizedLocationMap}

      <FooterBanner {...bannerProps} />
    </div>
  );
};

export default Location;
