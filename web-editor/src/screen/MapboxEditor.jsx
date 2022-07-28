import { Box, Grid, Stack } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import MapboxContainer from "../component/mapbox/MapboxContainer";
import MapboxSettings from "../component/mapbox/MapboxSettings";
import OverlayExportPanel from "../component/OverlayExportPanel";

const mapboxMapStyleJsonCache = [];

export default function MapboxEditor({
  pullKey,
  onPullKeyChange,
  indicatorStyle,
  setIndicatorStyle,
}) {
  const [mapStyle, setMapStyle] = useState(null);
  const [apiKey, setAPIKey] = useState(
    "pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2w0MW1qaTh3MG80dzNjcXRndmJ0a2JieiJ9.Y_xABmAqvD-qZeed8MabxQ"
  );
  const [mapLibrary, setMapLibrary] = useState("leaflet");
  const [styleId, setStyleID] = useState("mapbox/streets-v11");
  const [zoom, setZoom] = useState(5);
  const [fullscreen, setFullscreen] = useState(false);
  const [attribution, setAttribution] = useState(false);
  const [lang, setLang] = useState("en");
  const [validStyle, setValidStyle] = useState(true);

  const indicatorStyleB64 = encodeURIComponent(
    window.btoa(JSON.stringify(indicatorStyle))
  );
  const url = `https://overlays.rtirl.com/${mapLibrary}.html?key=${
    pullKey.value
  }&access_token=${apiKey}&style=${styleId}&zoom=${zoom}&lang=${lang}${
    fullscreen ? "&fullscreen=1" : ""
  }&attribution=${attribution ? "1" : "0"}&indicatorStyle=${indicatorStyleB64}`;
  const iFrameTag = `<iframe height="100%" width="100%" frameborder="0" 
  src="https://overlays.rtirl.com/compat.html?key=${
    pullKey.value
  }&access_token=${apiKey}&style=${styleId}&attribution=${
    attribution ? "1" : "0"
  }"> </iframe>`;

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
          zoom={zoom}
          setZoom={setZoom}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          mapLibrary={mapLibrary}
          onMapLibraryChange={setMapLibrary}
          attribution={attribution}
          onAttributionChange={setAttribution}
          indicatorStyle={indicatorStyle}
          setIndicatorStyle={setIndicatorStyle}
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
                indicatorStyle={indicatorStyle}
              />
              <OverlayExportPanel
                overlayDescription="Mapbox Overlay URL"
                isExportable={pullKey.valid && apiKey && styleId && validStyle}
                url={url}
                streamElementExportable={true}
                iFrameTag={iFrameTag}
                type="mapbox_overlay"
              />
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
