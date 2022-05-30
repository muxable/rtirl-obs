import * as React from "react";

const containerStyle = {
  width: "85vw",
  height: "70vh",
};

export const GoogleMapContainer = ({ mapStyle, apiKey }) => {
  mapStyle = JSON.parse(mapStyle) ?? {};
  const styleB64 = encodeURIComponent(window.btoa(JSON.stringify(mapStyle)));
  const uri = `google_preview.html?api_key=${apiKey}&style=${styleB64}`;

  return (
    <>
      <iframe
        style={containerStyle}
        title="gmaps"
        frameBorder={0}
        src={uri}
      ></iframe>
      `
    </>
  );
};
