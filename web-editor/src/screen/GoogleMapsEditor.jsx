import { Box, Grid, Stack } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { GoogleMapsContainer } from "../component/google-maps/GoogleMapsContainer";
import { GoogleMapsSettings } from "../component/google-maps/GoogleMapsSettings";
import OverlayExportPanel from "../component/OverlayExportPanel";

export default function GoogleMapsEditor({ pullKey, onPullKeyChange }) {
  const [mapStyle, setMapStyle] = useState({ value: "", valid: false });
  const [apiKey, setAPIKey] = useState("");
  const [zoom, setZoom] = useState(5);
  const [fullscreen, setFullscreen] = useState(false);
  const jsonMapStyle = mapStyle.valid ? JSON.parse(mapStyle.value) : {};
  const styleB64 = encodeURIComponent(
    window.btoa(JSON.stringify(jsonMapStyle))
  );
  const url = `https://overlays.rtirl.com/googlemaps.html?key=${
    pullKey.value
  }&api_key=${apiKey}&style=${styleB64}&zoom=${zoom}${
    fullscreen ? "&fullscreen=1" : ""
  }`;

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
              />
              <OverlayExportPanel
                overlayDescription="Goole Maps Overlay URL"
                isExportable={pullKey.valid && apiKey && mapStyle.valid}
                url={url}
              />
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
