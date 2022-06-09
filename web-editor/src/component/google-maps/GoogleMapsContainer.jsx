import * as React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export const GoogleMapsContainer = ({ canPreview, mapStyle, apiKey, zoom }) => {
  const uri = `google_preview.html?api_key=${apiKey}&style=${mapStyle}&zoom=${zoom}`;

  return (
    <>
      {canPreview ? (
        <iframe
          style={containerStyle}
          title="gmaps"
          frameBorder={0}
          src={uri}
        ></iframe>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1> Unable to preview, please verify the data provided </h1>
        </div>
      )}
    </>
  );
};
