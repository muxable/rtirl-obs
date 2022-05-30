import * as React from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const MapboxMapContainer = ({
  mapStyle,
  viewState,
  setViewState,
  apiKey,
  canPreview,
}) => {
  return (
    <div style={{ height: "70vh", width: "85vw"}}>
      {canPreview ? (
        <MapGL
          {...viewState}
          mapStyle={mapStyle}
          styleDiffing
          width="100%"
          height="100%"
          onMove={(evt) => setViewState(evt.viewState)}
          mapboxAccessToken={apiKey}
        />
      ) : (
        <div>
          <h1>
            {" "}
            Unable to preview, please enter a valid styleId and a valid map
            token.{" "}
          </h1>
        </div>
      )}
    </div>
  );
};
