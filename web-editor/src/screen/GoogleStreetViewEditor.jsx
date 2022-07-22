import { Box, Grid, Stack } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { GoogleStreetViewSettings } from "../component/google-maps/GoogleStreetViewSettings";
import OverlayExportPanel from "../component/OverlayExportPanel";

export default function GoogleStreetViewEditor({ pullKey, onPullKeyChange }) {
  const [apiKey, setAPIKey] = useState("");
  const url = `https://overlays.rtirl.com/streetview/google.html?key=${pullKey.value}&api_key=${apiKey}`;

  return (
    <Grid container columns={{ xs: 1, md: 12 }} direction="row">
      <Grid item xs={1} md={2.5}>
        <GoogleStreetViewSettings
          pullKey={pullKey}
          onPullKeyChange={onPullKeyChange}
          apiKey={apiKey}
          onApiKeyChange={setAPIKey}
        />
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <Box>
            <Stack height="95vh" direction="column">
              {pullKey.valid && apiKey ? (
                <iframe
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder={0}
                  scrolling="no"
                  title="street view"
                  src={url}
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
              <OverlayExportPanel
                overlayDescription="Goole Street View Overlay URL"
                isExportable={pullKey.valid && apiKey}
                url={url}
                type="google_maps_overlay"
              />
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
