import React from "react";
import PageHero from "../../components/PageHero";
import hero from "/src/assets/img/design/design-anchor.jpg";
import PageIntro from "../../components/PageIntro";
import Highlights from "./Highlights";
import ColorSection from "./ColorSection";
import kDark from "/src/assets/img/design/color-selection/kitchen-color-dark.jpg";
import kWarm from "/src/assets/img/design/color-selection/kitchen-color-warm.jpg";
import kWhite from "/src/assets/img/design/color-selection/kitchen-color-white.jpg";
import bDark from "/src/assets/img/design/color-selection/bath-color-dark.jpg";
import bWarm from "/src/assets/img/design/color-selection/bath-color-warm.jpg";
import bWhite from "/src/assets/img/design/color-selection/bath-color-white.jpg";

import energyStar from "/src/assets/img/design/EnergyStar-logo.svg";
import homeOwner from "/src/assets/img/design/HomeOwner-logo.svg";
import homeWarranty from "/src/assets/img/design/HomeWarranty-logo.svg";

import FooterBanner from "../../components/FooterBanner";
// import bannerImg from "/src/assets/img/design/tab-to-gallery-min.jpg";
import bannerImg from "/src/assets/img/design/tab-toFloorplans.jpg";

import ring from "/src/assets/img/icons/transparent-ring.svg";

import featuresList from "/src/assets/pdfs/FeaturesList-Insert-R8-Out-Web.pdf";

import { Helmet } from "react-helmet";

const introProps = {
  title: "Where Life & Style Meet",
  desc: `
        The interiors at Ravir are thoughtfully designed to maximize functionality and comfort through open concept living marked by abundant natural light. Enjoy contemporary yet timeless finishes like oak-toned wood laminate flooring, designer-curated colour palettes and European-inspired cabinetry. Ample storage, state-of-the-art connectivity and energy-saving features complete the modern living experience.`,
};

const kitchenSrc = {
  warm: { imgSrc: kWarm, label: "Warm Wood" },
  white: { imgSrc: kWhite, label: "White" },
  dark: { imgSrc: kDark, label: "Dark Wood" },
};

const kitchenContent = {
  title: `Gourmet Ready Kitchens`,
  des: `Welcome to your very own gourmet haven, where elegance meets modern culinary excellence. Each kitchen at Ravir features custom cabinetry, engineered quartz countertops and herringbone tile backsplashes. Equipped with an integrated stainless steel appliance package, pull-down spray faucets and soft-closing cabinets and tied altogether with bespoke interior design elements, these kitchens perfectly blend functionality with sophistication.`,
  color: "bg-lightBrown text-white",
};

const bathSrc = {
  warm: { imgSrc: bWarm, label: "Warm Wood" },
  white: { imgSrc: bWhite, label: "White" },
  dark: { imgSrc: bDark, label: "Dark Wood" },
};

const bathContent = {
  title: `Spa-Like Bathroom Sanctuaries`,
  des: `Harmonious sophistication combined with innovation - that is the essence of the bathrooms at Ravir. Frameless mirrors with designer LED vanity lighting and smart water consumption toilets enhance your daily routine. Sleek undermount sinks with premium GROHE faucets, chic porcelain flooring and polished quartz countertops deliver modern appeal. Spacious walk-in showers with striking glass surround make every moment a lavish retreat.`,
  color: "bg-skin text-brown ",
};

const bannerProps = {
  bannerImg,
  title: "Explore Our Floorplans",
  link: "/floorplans",
};

const Design = () => {
  return (
    <div>
      <Helmet title="Design" />
      <PageHero imgSrc={hero} className={"object-[45%_50%]"} />

      <div className="relative mb-10">
        <img
          data-aos="fade-left"
          className="absolute right-0 top-24"
          src={ring}
          alt="ring"
        />

        <PageIntro {...introProps} />

        <div className="container flex justify-center">
          <a
            href={featuresList}
            target="_blank"
            className="py-2 px-10 bg-orange text-white font-serif clip-btn"
          >
            <h3>Features List</h3>
          </a>
        </div>
      </div>

      <Highlights />

      <div className="relative">
        <img
          data-aos="fade-right"
          className="absolute -left-10 -bottom-10"
          src={ring}
          alt="ring"
        />

        <ColorSection imgSrc={kitchenSrc} {...kitchenContent} />
      </div>

      <div className="relative">
        <img
          data-aos="fade-left"
          className="absolute right-0 -top-14"
          src={ring}
          alt="ring"
        />

        <ColorSection imgSrc={bathSrc} {...bathContent} />
      </div>

      <section className="mb-10">
        <div className="container flex justify-center">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-20 items-center">
            <div>
              <img src={energyStar} width="88" height="auto" alt="energy" />
            </div>
            <div>
              <img
                className="h-[55px]"
                src={homeOwner}
                width="auto"
                height="55"
                alt="energy"
              />
            </div>
            <div>
              <img
                className="h-[55px]"
                src={homeWarranty}
                width="auto"
                height="55"
                alt="energy"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterBanner {...bannerProps} />
    </div>
  );
};

export default Design;
