import React from "react";
import heroImg from "/src/assets/img/home/ext-anchor-m.jpg";
import HomeSectionOverview from "./HomeSectionOverview";
import HomeSectionLivingRoom from "./HomeSectionLivingRoom";
import PageHero from "../../components/PageHero";
import PageIntro from "../../components/PageIntro";

const introProps = {
  title: `
        Delightful Living in
        <br />
        Coquitlam’s Historic Maillardville`,
  desc: `Taking cues from the rich French heritage of its surroundings, Ravir is all about the art of living life to the fullest. This delightful community of 74 studio, 1, 2, 3 & 4 bedroom homes is nestled in a remarkably connected yet tranquil location directly across from Mackin Park and just minutes away from the SkyTrain.`,
};

const Home = () => {
  return (
    <>
      <PageHero imgSrc={heroImg} />

      <PageIntro {...introProps} />
      
      <HomeSectionOverview />
      <HomeSectionLivingRoom />
    </>
  );
};

export default Home;
