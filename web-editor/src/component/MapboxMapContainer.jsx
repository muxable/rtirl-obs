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
  fullscreen,
}) => {
  const mapRef = React.useRef();

  React.useEffect(() => {
    if (mapRef.current) {
      mapRef.current.resize();
    }
  }, [fullscreen]);

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
        <MapGL
          style={{
            height: fullscreen ? "100%" : "300px",
            width: fullscreen ? "100%" : "300px",
          }}
          ref={mapRef}
          zoom={zoom}
          onZoom={(evt) => setZoom(evt.viewState.zoom)}
          {...viewState}
          mapStyle={mapStyle}
          styleDiffing
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
