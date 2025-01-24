import React, { useEffect, useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";

const apiKey = import.meta.env.VITE_MAP_API_KEY;

const useGoogleMapAPI = () => {
  
  // useEffect(() => {
  //   // console.log(mapLoaded)
  //   if (!mapLoaded) {
  //     setMapLoaded(true);
  //   }
  // }, [mapLoaded]);

  // console.log(mapLoaded)
  // if (!mapLoaded) return null;

  return ({ children }) => (
    <APIProvider apiKey={apiKey}>
      {children}
    </APIProvider>
  );
};

export default useGoogleMapAPI;
