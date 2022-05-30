import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const ConsolePanel = ({
  zoom,
  lang,
  pullKey,
  apiKey,
  styleID,
  mapProvider,
  googleStyleJSON,
  googleApiKey,
}) => {
  apiKey =
    apiKey ===
    "pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2oyMDFlMGpsMDN3bTJ4bjR1MzRrbDFleCJ9.7XEB3HHBGr-N6ataUZh_6g"
      ? ""
      : apiKey;

  const hasGoogleApiKey =
    googleApiKey !== undefined && googleApiKey !== null && googleApiKey !== "";
  const hasPullKey =
    pullKey !== undefined && pullKey !== null && pullKey !== "";
  const hasStyleID =
    styleID !== undefined && styleID !== null && styleID !== "";
  const hasAPIKey = apiKey !== undefined && apiKey !== null && apiKey !== "";
  const hasLang = lang !== undefined && lang !== null && lang !== "";

  googleStyleJSON = JSON.parse(googleStyleJSON) ?? {};
  const styleB64 = encodeURIComponent(
    window.btoa(JSON.stringify(googleStyleJSON))
  );
  console.log(styleB64);
  const googleMapBaseURL = "https://overlays.rtirl.com/googlemaps.html?";
  const googleMapBaseParamsString =
    "key=<YOUR_PULL_KEY>&api_key=<YOUR_GOOGLE_MAPS_API_KEY>";
  const customizeGoogleMapBaseParams = new URLSearchParams(
    googleMapBaseParamsString
  );

  const genericBaseURL = "https://overlays.rtirl.com/generic.html?";
  const genericBaseParamsString =
    "key=YOUR_PULL_KEY&zoom=YOUR_ZOOM_LEVEL&lang=YOUR_LANGUAGE";
  const genericBaseParams = new URLSearchParams(genericBaseParamsString);

  const customizedBaseURL = "https://overlays.rtirl.com/mapbox.html?";
  const customizeBaseParamsString =
    "key=YOUR_PULL_KEY&access_token=YOUR_MAPBOX_ACCESS_TOKEN&style=MAPBOX_STYLE_ID&zoom=YOUR_ZOOM_LEVEL&lang=YOUR_LANGUAGE";
  const customizeBaseParams = new URLSearchParams(customizeBaseParamsString);

  if (hasPullKey) {
    genericBaseParams.set("key", pullKey);
    customizeBaseParams.set("key", pullKey);
    customizeGoogleMapBaseParams.set("key", pullKey);
  }

  if (hasAPIKey) {
    customizeBaseParams.set("access_token", apiKey);
  }

  if (hasGoogleApiKey) {
    customizeGoogleMapBaseParams.set("api_key", googleApiKey);
  }

  if (hasStyleID) {
    customizeBaseParams.set("style", styleID);
  }

  if (hasLang) {
    genericBaseParams.set("lang", lang.toLowerCase());
    customizeBaseParams.set("lang", lang.toLowerCase());
  }

  genericBaseParams.set("zoom", zoom);
  customizeBaseParams.set("zoom", zoom);

  const MapboxResult = (
    <Stack style={{ marginLeft: "16px" }} alignSelf="flex-start">
      <aside>
        <h2> Generic URL by Muxable </h2>
        <h4> API Key is supplied by Muxable in the generic URL </h4>
        {hasPullKey ? (
          <TextField
            readOnly
            value={genericBaseURL + genericBaseParams.toString()}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(
                        genericBaseURL + genericBaseParams.toString()
                      );
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        ) : (
          <Typography color="inherit">
            Pull key is required for a generic overlay URL
          </Typography>
        )}
      </aside>
      <aside>
        <h2> Your Customized Mapbox Style</h2>
        {hasAPIKey && hasStyleID && hasPullKey ? (
          <TextField
            readOnly
            value={customizedBaseURL + customizeBaseParams.toString()}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(
                        customizedBaseURL + customizeBaseParams.toString()
                      );
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        ) : (
          <Typography color="inherit">
            Pull key and Mapbox token and style ID are required for a customized
            overlay URL
          </Typography>
        )}
      </aside>
    </Stack>
  );

  const GoogleMapResult = (
    <Stack style={{ marginLeft: "16px" }} alignSelf="flex-start">
      <h2> Your Customized Google Map Overlay </h2>
      {hasGoogleApiKey && hasPullKey ? (
        <TextField
          readOnly
          value={
            googleMapBaseURL +
            customizeGoogleMapBaseParams.toString() +
            "&style=" +
            styleB64
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  onClick={() => {
                    navigator.clipboard.writeText(
                      googleMapBaseURL +
                        customizeGoogleMapBaseParams.toString() +
                        "&style=" +
                        styleB64
                    );
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      ) : (
        <p>
          {" "}
          Pull key and Google API key is requried for a customized overlay URL
        </p>
      )}
    </Stack>
  );

  return (
    <Box
      style={{
        width: "85vw",
        marginTop: "8px",
        padding: "8px",
      }}
      border={1}
      borderColor="primary.border"
      backgroundColor="primary.main"
    >
      {mapProvider === "mapbox" ? MapboxResult : GoogleMapResult}
    </Box>
  );
};
