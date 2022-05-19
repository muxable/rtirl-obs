import * as React from "react";
import { GoogleMap, useJsApiLoader, } from '@react-google-maps/api';
import { useState, useCallback, useRef, useEffect } from 'react';
import { mapboxMapStyleJsonCache } from "./RightPanel";
        

const containerStyle = {
  width: "80vw",
  height: '524px',
  marginTop: "16px"
};


export const GoogleMapContainer = ({ mapStyle, apiKey }) => {
  
  const pullKey = "justANeededHardCodedKey";
  mapStyle = JSON.parse(mapStyle) ?? {};
  const styleB64 = encodeURIComponent(window.btoa(JSON.stringify(mapStyle)));
  const uri = `https://overlays.rtirl.com/googlemaps.html?key=${pullKey}&api_key=${apiKey}&style=${styleB64}`;

  return (
    <>
      <iframe 
        style={containerStyle}
        title="gmaps" 
        frameBorder={0} 
        src={uri}>
      </iframe>`
    </>
  );
}