import React, { useRef, useEffect, useState } from "react";
import useGoogleMapAPI from "../../hooks/useGoogleMapAPI";
import { useOutletContext } from "react-router-dom";
import { Map, APIProvider, useMap } from "@vis.gl/react-google-maps";
import { locations } from "./markers.js";
import LocationMapLegend from "./LocationMapLegend.jsx";

import {
  createMap,
  createCSMaker,
  createInfoWindows,
  createMarkers,
} from "./gMapLib.js";

const currentMarkers = {};
const currentInfoWindow = {};

const siteCenter = { lat: 49.239085814542705, lng: -122.86339723574926 };

const LocationMap = () => {
  const mapRef = useRef();
  const initRef = useRef(false);
  let map;

  const [refMarkers, setRefMarkers] = useState(null);
  const [refMap, setRefMap] = useState(null);
  const [refInfoWindow, setRefInfoWindow] = useState();
  const [returnFn, setReturnFn] = useState();

  const props = {
    refMarkers,
    setRefMarkers,
    refMap,
    mapRef,
    setRefMap,
    refInfoWindow,
    siteCenter,
  };

  // async function initMap() {}

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    const initFn = async () => {
      const { Map } = await google.maps.importLibrary("maps");
      map = createMap(mapRef, Map);

      const csMarker = createCSMaker(map);

      const bounds = new google.maps.LatLngBounds();

      createMarkers(bounds, map, locations, currentMarkers, currentInfoWindow);
      createInfoWindows(map, currentMarkers, currentInfoWindow);

      setRefInfoWindow(currentInfoWindow);
      setRefMarkers(currentMarkers);
      setRefMap(map);

    };

    initFn();
  }, []);

  return (
    <section className="mb-10 md:py-20">
      <div className="container flex md:gap-10 flex-col md:flex-row">
        <LocationMapLegend {...props} />
        <div
          className="w-full h-[450px] md:h-[700px] order-1 md:order-2"
          ref={mapRef}
        />
      </div>
    </section>
  );
};

export default LocationMap;
