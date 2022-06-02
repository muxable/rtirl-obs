import { Stack, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ConsolePanel } from "./ConsolePanel";
import { GoogleMapContainer } from "./GoogleMapContainer";
import { MapboxMapContainer } from "./MapboxMapContainer";

export const mapboxMapStyleJsonCache = {};

export const RightPanel = ({
  lang,
  pullKey,
  apiKey,
  styleID,
  mapStyle,
  setMapStyle,
  mapProvider,
  googleStyleJSON,
  googleApiKey,
  zoom,
  setZoom,
}) => {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
  });

  const [canPreview, setCanPreview] = useState(true);

  useEffect(() => {
    const mapboxMapStyleJson = mapboxMapStyleJsonCache[styleID];
    if (
      mapboxMapStyleJson !== undefined &&
      mapboxMapStyleJson !== null &&
      mapboxMapStyleJson !== ""
    ) {
      setMapStyle(mapboxMapStyleJsonCache[styleID]);
    } else {
      fetch(
        `https://api.mapbox.com/styles/v1/${styleID}?access_token=${apiKey}`
      )
        .then((res) => (res.status === 200 ? res.json() : null))
        .then((res) => {
          if (res !== null) {
            mapboxMapStyleJsonCache[styleID] = res;
            setMapStyle(res);
            setCanPreview(true);
          } else {
            setCanPreview(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setMapStyle(mapboxMapStyleJsonCache["mapbox/streets-v11"]);
        });
    }
  }, [styleID, apiKey, setMapStyle]);

  return (
    <Box>
      <Stack height="95vh" direction="column">
        {mapProvider === "mapbox" ? (
          <MapboxMapContainer
            canPreview={canPreview}
            viewState={viewState}
            zoom={zoom}
            setZoom={setZoom}
            setViewState={setViewState}
            mapStyle={mapStyle}
            apiKey={apiKey}
          />
        ) : (
          <GoogleMapContainer
            apiKey={googleApiKey}
            zoom={zoom}
            mapStyle={googleStyleJSON}
          />
        )}
        <ConsolePanel
          googleApiKey={googleApiKey}
          mapProvider={mapProvider}
          googleStyleJSON={googleStyleJSON}
          canPreview={canPreview}
          lang={lang}
          zoom={zoom}
          styleID={styleID}
          pullKey={pullKey}
          apiKey={apiKey}
        ></ConsolePanel>
      </Stack>
    </Box>
  );
};
