import * as React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export const GoogleMapContainer = ({ mapStyle, apiKey, zoom }) => {
  mapStyle = JSON.parse(mapStyle) ?? {};
  const styleB64 = encodeURIComponent(window.btoa(JSON.stringify(mapStyle)));
  const uri = `google_preview.html?api_key=${apiKey}&style=${styleB64}&zoom=${zoom}`;

  return (
    <iframe
      style={containerStyle}
      title="gmaps"
      frameBorder={0}
      src={uri}
    ></iframe>
  );
};
