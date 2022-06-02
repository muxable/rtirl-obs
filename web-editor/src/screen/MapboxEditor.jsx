import { Box, Grid, Stack } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import MapboxContainer from "../component/mapbox/MapboxContainer";
import MapboxSettings from "../component/mapbox/MapboxSettings";
import { mapboxMapStyleJsonCache } from "../component/RightPanel";
import TextOverlayExportPanel from "../component/TextOverlayExportPanel";

export default function MapboxEditor({ pullKey, onPullKeyChange }) {
  const [mapStyle, setMapStyle] = useState(null);
  const [apiKey, setAPIKey] = useState(
    "pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2oyMDFlMGpsMDN3bTJ4bjR1MzRrbDFleCJ9.7XEB3HHBGr-N6ataUZh_6g"
  );
  const [styleId, setStyleID] = useState("mapbox/streets-v11");
  const [zoom, setZoom] = useState(5);
  const [fullscreen, setFullscreen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [validStyle, setValidStyle] = useState(true);
  const url = `https://overlays.rtirl.com/mapbox.html?key=${
    pullKey.value
  }&access_token=${apiKey}&style=${styleId}&zoom=${zoom}&lang=${lang}${
    fullscreen ? "&fullscreen=1" : ""
  }`;

  useEffect(() => {
    fetch(`https://api.mapbox.com/styles/v1/${styleId}?access_token=${apiKey}`)
      .then((res) => {
        res.status === 200 ? setValidStyle(true) : setValidStyle(false);
        return res.json();
      })
      .then((res) => {
        mapboxMapStyleJsonCache[styleId] = res;
        setMapStyle(res);
      });
  }, [styleId, apiKey]);

  return (
    <Grid container columns={{ xs: 1, md: 12 }} direction="row">
      <Grid item xs={1} md={2.5}>
        <MapboxSettings
          pullKey={pullKey}
          onPullKeyChange={onPullKeyChange}
          styleId={styleId}
          onStyleChange={setStyleID}
          apiKey={apiKey}
          onApiKeyChange={setAPIKey}
          lang={lang}
          setLang={setLang}
          mapStyle={mapStyle}
          setMapStyle={setMapStyle}
          zoom={zoom}
          setZoom={setZoom}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
        />
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <Box>
            <Stack height="95vh" direction="column">
              <MapboxContainer
                canPreview={pullKey.valid && apiKey && styleId && validStyle}
                zoom={zoom}
                fullscreen={fullscreen}
                setZoom={setZoom}
                mapStyle={mapStyle}
                apiKey={apiKey}
              />
              <TextOverlayExportPanel
                overlayDescription="Mapbox Overlay URL"
                isExportable={pullKey.valid && apiKey && styleId && validStyle}
                url={url}
              />
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
