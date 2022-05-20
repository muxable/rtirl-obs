import * as React from "react";


const containerStyle = {
  width: "80vw",
  height: '524px',
  marginTop: "16px"
};


export const GoogleMapContainer = ({ mapStyle, apiKey }) => {

  console.log("google map container render");
  
  const pullKey = "justANeededHardCodedKey";
  mapStyle = JSON.parse(mapStyle) ?? {};
  const styleB64 = encodeURIComponent(window.btoa(JSON.stringify(mapStyle)));
  const uri = `https://overlays.rtirl.com/google_preview.html?key=${pullKey}&api_key=${apiKey}&style=${styleB64}`;

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