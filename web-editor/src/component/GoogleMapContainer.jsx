import * as React from "react";


const containerStyle = {
  width: "80vw",
  height: '524px',
  marginTop: "16px"
};


export const GoogleMapContainer = ({ mapStyle, apiKey }) => {

  console.log("google map container render");
  
  mapStyle = JSON.parse(mapStyle) ?? {};
  const styleB64 = encodeURIComponent(window.btoa(JSON.stringify(mapStyle)));
  const uri = `google_preview.html?api_key=${apiKey}&style=${styleB64}`;

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