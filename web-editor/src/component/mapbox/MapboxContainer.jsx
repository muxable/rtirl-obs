import "mapbox-gl/dist/mapbox-gl.css";
import * as React from "react";
import MapGL from "react-map-gl";

export default function MapboxContainer({
  mapStyle,
  apiKey,
  canPreview,
  zoom,
  setZoom,
  fullscreen,
  indicatorStyle,
}) {
  const mapRef = React.useRef();
  const [viewState, setViewState] = React.useState({
    longitude: -100,
    latitude: 40,
  });

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
}
