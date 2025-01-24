import React from "react";
import PageHero from "../../components/PageHero";
import anchor from "/src/assets/img/gallery/gallery-anchor.jpg";
// import PageIntro from "../../components/PageIntro";
import FooterBanner from "../../components/FooterBanner";
import toTeam from "/src/assets/img/gallery/tab-toTeam.jpg";

import GallerySlider from "./GallerySlider";
import { Helmet } from "react-helmet";
import "./gallery.css";

const introProps = {
  title: "Find Delight in Everyday Amenities",
  // desc: `
  //       The inspired amenities at Ravir provide pure delight in their own distinctive way. Elevate your workout routine in the state-of-the art fitness centre, accomplish all your daily tasks in the library-inspired co-working and study lounge and socialize in the fully stocked entertainment lounge with connected outdoor patio. Within each of these spaces, wellness and creativity will flourish, along with the strong sense of community that comes from lively interactions with family, friends and neighbours.`,
};

const Gallery = () => {
  return (
    <div className="page-gallery">
      <Helmet title="Gallery"/>
      <PageHero imgSrc={anchor} className="object-[60%_50%]" />
      {/* <PageIntro {...introProps} /> */}
      <section className="py-5 md:py-10">
        <div className="container text-center">
          <h1>Gallery</h1>
        </div>
      </section>

      <GallerySlider />

      <FooterBanner bannerImg={toTeam} title="Meet Our Team" link="/team" />
    </div>
  );
};

export default Gallery;
