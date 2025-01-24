import React, { useState } from "react";
import hero from "/src/assets/img/amenity/amenity-anchor.jpg";
import PageHero from "../../components/PageHero";

import PageIntro from "../../components/PageIntro";
import AmenityImageSection from "./AmenityImageSection";

import lounge from "/src/assets/img/amenity/amenity-lounge.jpg";
import gym from "/src/assets/img/amenity/amenity-gym.jpg";
import cowork from "/src/assets/img/amenity/amenity-cowork.jpg";
import AmenityModal from "./AmenityModal";
import FooterBanner from "../../components/FooterBanner";
// import bannerImg from "/src/assets/img/design/tab-toFloorplans.jpg"
import bannerImg from "/src/assets/img/design/tab-to-gallery-min.jpg";
import { Helmet } from "react-helmet";

const introProps = {
  title: `Find Delight in Everyday Amenities`,
  desc: "The inspired amenities at Ravir provide pure delight in their own distinctive way. Elevate your workout routine in the state-of-the art fitness centre, accomplish all your daily tasks in the library-inspired co-working and study lounge and socialize in the fully stocked entertainment lounge with connected outdoor patio. Within each of these spaces, wellness and creativity will flourish, along with the strong sense of community that comes from lively interactions with family, friends and neighbours.",
};

const sectionProps = [
  {
    title: `Lounge Space<br/ > Perfect for<br/ >Socializing`,
    imgSrc: lounge,
    ring: true,
  },
  {
    title: `Elevate your<br/ > Workout<br/ > Routine`,
    imgSrc: gym,
    ring: true,
  },
  {
    title: `Work or Study <br/> with Ease`,
    imgSrc: cowork,
    ring: false,
  },
];

const bannerProps = {
  bannerImg,
  title: "Explore Our Gallery",
  link: "/gallery",
};

const Amenity = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImage] = useState("");
  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Helmet title="Amenity" />
      <PageHero imgSrc={hero} className="object-[60%_50%]" />

      <PageIntro {...introProps} />

      <section>
        <div className="container">
          {sectionProps.map((props, i) => (
            <AmenityImageSection
              key={i}
              {...props}
              setOpen={setOpen}
              open={open}
              handleOpen={handleOpen}
              setSelectedImage={setSelectedImage}
              idx={i}
            />
          ))}
        </div>
      </section>

      <FooterBanner {...bannerProps} />

      <AmenityModal
        handleOpen={handleOpen}
        open={open}
        selectedImg={selectedImg}
      />
    </div>
  );
};

export default Amenity;
