import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { locations } from "./markers";
import bg from "/src/assets/img/location/legend-bg.svg";
import trainIcon from "/src/assets/img/location/skytrain.svg";

const colors = ["bg-[#E5B535]", "bg-[#3EA4BA]", "bg-[#C762A2]", "bg-[#5EBC6D]"];

const LocationMapLegend = (props) => {
  const { refMarkers, refMap, refInfoWindow, siteCenter, mapRef } = props;

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function showCatMarkers(cat) {
    if (!refMarkers[cat]) return;
    for (const marker of refMarkers[cat]) {
      marker.setMap(refMap);
    }
  }

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (const infowindows of Object.values(refInfoWindow)) {
      for (const infowindow of infowindows) {
        infowindow.close();
      }
    }

    for (const markers of Object.values(refMarkers)) {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }
  }

  function cFitBounds(markers) {
    if (!markers) return;
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(siteCenter);
    for (const marker of markers) {
      bounds.extend(marker.position);
    }
    let padding = 150;
    if (markers.length > 1) {
      padding = 50;
    }
    refMap.fitBounds(bounds, padding);
  }

  // Removes the markers from the map, but keeps them in the array.
  function hideMarkers() {
    setMapOnAll(null);
  }

  const legendHandler = (category, j) => {
    const offset = window.innerWidth < 768 ? 83 : 180;

    // 3. Calculate the scroll position
    const scrollPosition =
      mapRef.current.getBoundingClientRect().top + window.scrollY - offset;

    // 4. Scroll to the calculated position
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth", // You can use 'auto' for instant scrolling
    });

    hideMarkers();
    if (!refMarkers[category] || !refInfoWindow[category]) return;
    refMarkers[category][j].setMap(refMap);
    refInfoWindow[category][j].open({
      anchor: refMarkers[category][j],
      refMap,
    });
    cFitBounds([refMarkers[category][j]]);
  };

  return (
    <div className="w-full md:w-[400px] relative p-5 flex items-center bg-[#ffbf7b] bg-none">
      <div className="absolute w-[150%] h-[800px]  left-0 overflow-hidden hidden md:block">
        <img className="w-full" src={bg} alt="legend-bg" />
      </div>
      <div className="">
        {locations.map(({ category, catLabel, markers }, i) => (
          <Accordion open={open === i + 1} className="mb-3" key={i}>
            <AccordionHeader
              className="border-0 py-0"
              onClick={() => {
                handleOpen(i + 1);
                hideMarkers();
                showCatMarkers(category);
                cFitBounds(refMarkers[category]);
              }}
            >
              <div className="text-black font-[500] uppercase flex">
                {i !== 4 ? (
                  <span
                    className={`inline-block w-[20px] h-[20px] rounded-full border-2 border-white shrink-0 mt-[3px] mr-2 ${colors[i]}`}
                  ></span>
                ) : (
                  <span className="inline-block w-[20px] mr-2 mt-[3px]">
                    <img src={trainIcon} alt="train" />
                  </span>
                )}

                <span>{catLabel}</span>
              </div>
            </AccordionHeader>
            <AccordionBody className="py-0 pt-3">
              <ul>
                {markers.map(({ title, subItems }, j) => (
                  <li
                    key={j}
                    className="cursor-pointer"
                    onClick={() => legendHandler(category, j)}
                  >
                    <div className="flex items-start">
                      <span
                        className={`relative shrink-0 font-[500] w-[1rem] h-[1rem] rounded-full flex justify-center items-center mr-3 pt-[8px]`}
                      >
                        <span>{j + 1}</span>
                      </span>
                      <span className="font-[500] text-base">{title}</span>{" "}
                      <br></br>
                    </div>

                    <div className="ml-[28px]">
                      {subItems && (
                        <span className="font-[500] text-xs">{subItems}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default LocationMapLegend;
