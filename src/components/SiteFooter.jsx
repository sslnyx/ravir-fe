import React from "react";
import { Link } from "react-router-dom";
import map from "/src/assets/img/footer/Footer-map.jpg";
import "./siteFooter.css";
import { siteData } from "./SiteData";
import paulsun from "/src/assets/img/footer/Footer-Paulsun.svg";
import pilotHouse from "/src/assets/img/footer/Footer-Pilothouse.svg";
import logo from "/src/assets/img/footer/Footer-transparent-logo.svg";

const SiteFooter = () => {
  return (
    <footer className="bg-lightBrown w-full text-white py-10 overflow-hidden">
      <div className="container max-w-[1440px] relative flex gap-10 justify-center md:justify-between flex-wrap text-center md:text-left xl:flex-nowrap">
        <div className="h-full">
          <img
            className="max-w-none"
            width={250}
            height={"auto"}
            src={map}
            alt="map"
          />
        </div>

        <div className="flex flex-col gap-10 w-[650px] justify-between">
          <div className="flex justify-between flex-wrap -mx-5 -my-5">
            <div className="basis-full md:basis-1/2 p-5">
              <h3>Site Address</h3>
              <a target="_blank" href={siteData.siteGoogleMap}>
                <span>{siteData.address}</span>
              </a>
            </div>

            <div className="basis-full md:basis-1/2 p-5">
              <h3>Contact Us</h3>
              <p>
                <a href={`mailto:${siteData.email}`}>{siteData.email}</a> <br />
                <a href={`tel:${siteData.phone}`}>{siteData.phone}</a>
              </p>
            </div>

            <div className="basis-full md:basis-1/2 p-5">
              <h3 className="">
                <span>Presentation Centre</span>
              </h3>
              {siteData.pcOpen ? (
                <>
                  <a
                    href={siteData.pcGoogleMap}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{siteData.pc}</span>
                  </a>{" "}
                  <br />
                  {siteData.pcMessage && (
                    <span
                      // className="text-base"
                      dangerouslySetInnerHTML={{ __html: siteData.pcMessage }}
                    ></span>
                  )}
                </>
              ) : (
                <p>Coming Soon</p>
              )}
            </div>

            <div className="basis-full md:basis-1/2 p-5 flex items-center justify-center md:justify-start">
              <div className="flex gap-5 justify-center md:justify-start">
                <div>
                  <a
                    href="https://paulsundevelopment.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-[70px]"
                      width="auto"
                      height={100}
                      src={paulsun}
                      alt="paulsun"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://pilothouseprojects.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-[70px]"
                      width="auto"
                      height={100}
                      src={pilotHouse}
                      alt="pilotHouse"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs">
            Renderings are artists concept only. This is not an offering for
            sale. Any such offering can only be made with a disclosure
            statement. The developer reserves the right to make modifications to
            floorplans, features, and/or finishes without notice. E.&O.E.{" "}
            <span className="hidden md:inline-block"> | </span>{" "}
            <br className="block md:hidden" />
            <Link to="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="w-[250px] shrink-0 hidden xl:block relative">
          <div className="absolute left-0 w-auto h-full">
            <img
              src={logo}
              alt="logo"
              className="max-w-none top-[50%] absolute -translate-y-[50%]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
