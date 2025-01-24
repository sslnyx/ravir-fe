import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import useRoutes from "../hooks/useRoutes";
import { Link } from "react-router-dom";
import map from "/src/assets/img/footer/Footer-map.jpg";
import { siteData } from "./SiteData";
import "./MainMenu.css";

const routesByColFn = (routes) => {
  const filteredRoutes = routes.filter(
    (route) =>
      route.path && !["privacy-policy", "register"].includes(route.path)
  );

  // console.log(filteredRoutes);
  const routesByCol = { col1: [], col2: [] };

  filteredRoutes.map((route, i) => {
    if (i < filteredRoutes.length / 2) {
      routesByCol.col1.push(route);
    } else {
      routesByCol.col2.push(route);
    }
  });

  return routesByCol;
};

const MainMenu = ({ active, setActive }) => {
  const initRef = useRef(false);
  const routes = useRoutes();
  const [routesByCol, setRoutesByCol] = useState({});

  useEffect(() => {
    if (initRef.current) {
      return;
    }
    initRef.current = true;

    setRoutesByCol(routesByColFn(routes));
  }, []);

  useEffect(() => {
    const animateOption = {
      targets: [".bg-top", ".bg-mid", ".bg-bottom"],
      translateX: "-100%",
      easing: "easeInOutQuint",
      delay: anime.stagger(100), // increase delay by 100ms for each elements.
    };

    if (!active) {
      // console.log("fun");
      anime({
        ...animateOption,
        translateX: "0%",
      });
    }

    if (active) {
      anime(animateOption);
    }
  }, [active]);

  return (
    <div
      className={`main-menu fixed w-full h-[100lvh] bg-transparent top-0 left-0 flex z-[999] ${
        active ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`bg-white top-0 left-full absolute h-[35%] w-full bg-top ${
          initRef.current ? "block" : "hidden"
        }`}
      ></div>

      <div
        className={`bg-white top-[33%] left-full absolute h-[35%] w-full bg-mid ${
          initRef.current ? "block" : "hidden"
        }`}
      ></div>

      <div
        className={`bg-white top-[66%] left-full absolute h-[35%] w-full bg-bottom  ${
          initRef.current ? "block" : "hidden"
        }`}
      ></div>

      {active && (
        <div
          className={`container w-full h-full overflow-y-auto py-[100px] md:py-0 md:mt-[200px] flex md:justify-between flex-col md:flex-row relative gap-10 transition-opacity duration-700 md:h-[350px] items-center`}
        >
          <div className="flex flex-col md:flex-row md:gap-20 overflow-hidden text-center md:text-left shrink-0">
            {Object.values(routesByCol)?.map((routes, i) => (
              <ul key={i}>
                {routes.map(({ label, path }, j) => (
                  <li
                    key={j}
                    className="py-3 mb-1"
                    data-aos="fade-left"
                    data-aos-delay={(j + i) * 100 + 500}
                  >
                    <Link
                      to={`/${path}`}
                      onClick={() => setActive(false)}
                      // className={`${
                      //   ["floorplans", "amenity"].includes(path)
                      //     ? "pointer-events-none text-black/20"
                      //     : ""
                      // }`}
                    >
                      <span className="text-xl md:text-4xl font-serif">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}

            <Link
              to="/register"
              className="py-2 px-10 bg-orange md:hidden mt-3 shrink-0"
              data-aos="fade"
              data-aos-delay="500"
            >
              <span className="text-xl font-serif text-white">Register</span>
            </Link>
          </div>

          <div
            className="border-r border-b md:h-full w-full md:w-auto"
            data-aos="fade"
            data-aos-delay="500"
          ></div>

          <div className="flex gap-10 items-center">
            <div className="h-[240px] relative shrink-0 hidden xl:block">
              <img
                src={map}
                alt="map"
                className="w-auto h-full top-0 left-0"
                data-aos="fade"
                data-aos-delay={800}
              />
            </div>

            <div
              className="shrink-0 text-center md:text-left"
              data-aos="fade"
              data-aos-delay={1000}
              data-aos-offset="-500"
            >
              <div className="mb-3 hidden md:block">
                <h3 className="text-orange">Site Address</h3>
                <p>
                  <a target="_blank" href={siteData.siteGoogleMap}>
                    <span>{siteData.address}</span>
                  </a>
                </p>
              </div>
              <div className="mb-3">
                <h3 className="text-orange">Presentation Centre</h3>
                {siteData.pcOpen ? (
                  <div>
                    <a
                      href={siteData.pcGoogleMap}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{siteData.pc}</span>
                    </a>
                    <br />
                    {siteData.pcMessage && (
                      <span
                        // className="text-sm"
                        dangerouslySetInnerHTML={{ __html: siteData.pcMessage }}
                      ></span>
                    )}
                  </div>
                ) : (
                  <p>Coming Soon</p>
                )}
              </div>

              <h3 className="text-orange">Contact us</h3>
              <p>
                <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
                <br />
                <a href={`tel:${siteData.phone}`}>{siteData.phone}</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainMenu;
