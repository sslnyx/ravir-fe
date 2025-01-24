import React, { useEffect, useState, useRef, Fragment } from "react";

import heroSrc from "/src/assets/img/floorplans/floorplan-anchor.jpg";
import PageHero from "../../components/PageHero";
import FooterBanner from "../../components/FooterBanner";
import fBannerSrc from "/src/assets/img/floorplans/tab-toAmenity.jpg";
import TypeTabs from "./TypeTabs";
import BedsTabsT from "./BedsTabsT";
import BedsTabsC from "./BedsTabsC";
import FloorPlansContainer from "./FloorPlansContainer";
import LevelContainer from "./LevelContainer";
import FloorplanModal from "./FloorplanModal";
import selectArrow from "/src/assets/img/icons/arrowSelect.svg";

import allFloorPlan from "/src/assets/pdfs/Ravir_Floorplans_All.pdf";
import { bedsOptions, LevelOptions } from "./floorplanData";

import "./floorplans.css";
import usePlanStates from "../../hooks/usePlanStates";
import { Helmet } from "react-helmet";

// import "./levels/level.css"

const Floorplans = () => {
  const {
    type,
    setType,
    bed,
    setBed,
    level,
    setLevel,
    selectedPlan,
    setSelectedPlan,
    levelAvailable,
    setLevelAvailable,
  } = usePlanStates();

  const optionsRef = useRef({});

  const [plans, setPlans] = useState(null);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [selectedIdx, setSelectedIdx] = useState();

  useEffect(() => {
    if (!selectedPlan.bed) {
      optionsRef.current.bed.value = "";
    }
  }, [selectedPlan]);

  return (
    <div className="page-floorplan">
      <Helmet title="Floorplans" />

      <PageHero imgSrc={heroSrc} className="object-top" />

      <section className="mb-10">
        <div className="container">
          <div className="mb-10 w-full">
            <div className="flex justify-between gap-10 items-center flex-wrap">
              <TypeTabs type={type} setType={setType} />
              <div className="shrink-0 w-full md:w-auto">
                <a
                  href={allFloorPlan}
                  target="_blank"
                  className="bg-skin w-full font-serif text-center px-10 inline-block py-3 text-xl md:text-3xl hover:bg-orange hover:text-white transition-[background] duration-500"
                >
                  Download All Floorplans
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full mb-10 hidden md:block">
            {type === "townhome" ? (
              <div className="absolute top-0 left-0">
                <BedsTabsT bed={bed} setBed={setBed} />
              </div>
            ) : (
              <div className="w-full absolute top-0 left-0">
                <BedsTabsC
                  bed={bed}
                  setBed={setBed}
                  setSelectedPlan={setSelectedPlan}
                  selectedPlan={selectedPlan}
                  setLevelAvailable={setLevelAvailable}
                />
              </div>
            )}

            <div className="w-full opacity-0 pointer-events-none">
              <BedsTabsC />
            </div>
          </div>

          <div className="mb-10 md:hidden">
            <div className="relative h-full ">
              <select
                className="w-full border py-2 pl-14 bg-white"
                onChange={(ev) => {
                  if (ev.target.value === "") {
                    setLevelAvailable(["2", "3", "4-5", "6"]);
                  }
                  setBed(ev.target.value);
                }}
                ref={(el) => (optionsRef.current.bed = el)}
              >
                <option value={""}>Select Home Type</option>
                {bedsOptions[type].map(({ bed, id }, i) => (
                  <option key={i} value={id}>
                    {bed}
                  </option>
                ))}
              </select>
              <img
                src={selectArrow}
                className="absolute top-[50%] -translate-y-[50%] left-2 pointer-events-none"
                alt="select arrow"
              />

              <div className="absolute left-10 h-full w-[1px] bg-black top-0"></div>
            </div>
          </div>

          {type === "condo" && (
            <div className="mb-10 md:hidden">
              <div className="relative h-full ">
                <select
                  className="w-full border py-2 pl-14 bg-white"
                  onChange={(ev) => {
                    setLevel(ev.target.value);
                  }}
                  ref={(el) => (optionsRef.current.level = el)}
                >
                  <option value={""}>Select Level</option>
                  {LevelOptions.map((level, i) => (
                    <Fragment key={i}>
                      {levelAvailable.includes(level) && (
                        <option value={level}>{level}</option>
                      )}
                    </Fragment>
                  ))}
                </select>
                <img
                  src={selectArrow}
                  className="absolute top-[50%] -translate-y-[50%] left-2 pointer-events-none"
                  alt="select arrow"
                />

                <div className="absolute left-10 h-full w-[1px] bg-black top-0"></div>
              </div>
            </div>
          )}

          {type === "condo" && (
            <div className="mb-20 hidden md:block">
              <LevelContainer
                level={level}
                setLevel={setLevel}
                levelAvailable={levelAvailable}
              />
            </div>
          )}

          <div className="min-h-[230px] mb-10">
            <FloorPlansContainer
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
              setLevelAvailable={setLevelAvailable}
              setLevel={setLevel}
              handleOpen={handleOpen}
              setPlans={setPlans}
              plans={plans}
              setSelectedIdx={setSelectedIdx}
            />
          </div>

          <span className="text-xs leading-[1.2] inline-block">
            Artist renditions, including any furniture, features, finishings and
            fixtures depicted therein or in any other marketing materials, are
            for illustration purposes only and subject to change. All renderings
            and pictures included in marketing materials are draft conceptual
            drawings and/or artistic impressions which may not be accurate. The
            developer reserves the right to make changes and modifications to
            the information contained herein at any time. Window sizes on the
            6th floor will differ from other floors. This is not an offering for
            sale. An offering for sale can only be made after filing a
            Disclosure Statement under the Real Estate Development Marketing Act
            (British Columbia). E.&O.E.
          </span>
        </div>
      </section>
      <FooterBanner
        bannerImg={fBannerSrc}
        link={"/amenity"}
        title={"Explore our Amenities"}
      />

      <FloorplanModal
        open={open}
        handleOpen={handleOpen}
        plans={plans}
        selectedIdx={selectedIdx}
        type={type}
      />
    </div>
  );
};

export default Floorplans;
