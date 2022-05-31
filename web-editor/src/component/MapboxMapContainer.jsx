import * as React from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const MapboxMapContainer = ({
  mapStyle,
  viewState,
  setViewState,
  apiKey,
  canPreview,
  zoom,
  setZoom,
}) => {
  return (
    <div style={{ height: "70vh", width: "85vw" }}>
      {canPreview ? (
        <MapGL
          zoom={zoom}
          onZoom={(evt) => setZoom(evt.viewState.zoom)}
          {...viewState}
          mapStyle={mapStyle}
          styleDiffing
          width="100%"
          height="100%"
          onMove={(evt) =>
            setViewState({
              latitude: evt.viewState.latitude,
              longitude: evt.viewState.longitude,
            })
          }
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
