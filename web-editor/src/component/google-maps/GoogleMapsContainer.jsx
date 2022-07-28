import * as React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export const GoogleMapsContainer = ({
  canPreview,
  mapStyle,
  apiKey,
  zoom,
  indicatorStyle,
}) => {
  console.log("indicatorStyle", indicatorStyle);
  const uri = `google_preview.html?api_key=${apiKey}&style=${mapStyle}&zoom=${zoom}`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
      <div
        style={{
          zIndex: "100",
          position: "absolute",
          width: `${indicatorStyle.width}px`,
          height: `${indicatorStyle.height}px`,
          borderRadius: `${indicatorStyle.borderRadius}%`,
          backgroundColor: indicatorStyle.backgroundColor,
          boxShadow: `0 0 10px ${indicatorStyle.backgroundColor}`,
        }}
      />
    </div>
  );
};
