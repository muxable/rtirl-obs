import { Box, Grid, Stack } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { GoogleMapsContainer } from "../component/google-maps/GoogleMapsContainer";
import { GoogleMapsSettings } from "../component/google-maps/GoogleMapsSettings";

export default function GoogleMapsEditor({
  pullKey,
  onPullKeyChange,
  indicatorStyle,
  setIndicatorStyle,
}) {
  const [mapStyle, setMapStyle] = useState({ value: "", valid: false });
  const [apiKey, setAPIKey] = useState("");
  const [zoom, setZoom] = useState(5);
  const [fullscreen, setFullscreen] = useState(false);
  const jsonMapStyle = mapStyle.valid ? JSON.parse(mapStyle.value) : {};
  const styleB64 = encodeURIComponent(
    window.btoa(JSON.stringify(jsonMapStyle))
  );

  return (
    <Grid container columns={{ xs: 1, md: 12 }} direction="row">
      <Grid item xs={1} md={2.5}>
        <GoogleMapsSettings
          pullKey={pullKey}
          onPullKeyChange={onPullKeyChange}
          apiKey={apiKey}
          onApiKeyChange={setAPIKey}
          mapStyle={mapStyle}
          setMapStyle={setMapStyle}
          zoom={zoom}
          setZoom={setZoom}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          indicatorStyle={indicatorStyle}
          setIndicatorStyle={setIndicatorStyle}
        />
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <Box>
            <Stack height="95vh" direction="column">
              <GoogleMapsContainer
                canPreview={pullKey.valid && apiKey && mapStyle.valid}
                zoom={zoom}
                fullscreen={fullscreen}
                setZoom={setZoom}
                mapStyle={styleB64}
                apiKey={apiKey}
                indicatorStyle={indicatorStyle}
              />
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
