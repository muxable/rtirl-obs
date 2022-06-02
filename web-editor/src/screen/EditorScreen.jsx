import { Box, Grid } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { PreviewSnackBar } from "../component/PreviewSnackBar";
import { mapboxMapStyleJsonCache, RightPanel } from "../component/RightPanel";
import { Settings } from "../component/Settings";

export const EditorScreen = ({ mapProvider }) => {
  // mapbox states
  const [mapStyle, setMapStyle] = useState(null);
  const [apiKey, setAPIKey] = useState(
    "pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2oyMDFlMGpsMDN3bTJ4bjR1MzRrbDFleCJ9.7XEB3HHBGr-N6ataUZh_6g"
  );
  const [styleID, setStyleID] = useState("mapbox/streets-v11");
  const [pullKey, setPullKey] = useState("");
  const [zoom, setZoom] = useState(5);
  const [fullscreen, setFullscreen] = useState(false);
  const [lang, setLang] = useState("EN");

  // google map states
  const [googleStyleJSON, setGoogleStyleJSON] = useState(null);
  const [googleApiKey, setGoogleApiKey] = useState("tempInitKey");

  const [openPreviewSnackBar, setOpenPreviewSnackBar] = useState({
    open: false,
    errorMessage: "",
  });

  useEffect(() => {
    fetch(
      "https://api.mapbox.com/styles/v1/mapbox/streets-v11?access_token=pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2oyMDFlMGpsMDN3bTJ4bjR1MzRrbDFleCJ9.7XEB3HHBGr-N6ataUZh_6g"
    )
      .then((res) => res.json())
      .then((res) => {
        mapboxMapStyleJsonCache["mapbox/streets-v11"] = res;
        setMapStyle(res);
      });
  }, []);

  const onStyleIDSubmit = (styleID, apiKey, pullKey) => {
    if (apiKey === undefined || apiKey === null || apiKey === "") {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage: "An API Key is required.",
      });
      return;
    }
    if (!apiKey.includes("pk.")) {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage:
          "That API Key is invalid, it should be prefixed with 'pk.'.",
      });
      return;
    }
    if (styleID === undefined || styleID === null || styleID === "") {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage: "A style ID is required.",
      });
      return;
    }
    if (!styleID.includes("/")) {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage:
          "That style ID  is invalid, check that it is copied correctly.",
      });
      return;
    }
    if (pullKey === undefined || pullKey === null || pullKey === "") {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage: "A pull key is required.",
      });
      return;
    }

    if (!validatePullkey(pullKey)) {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage:
          "The pull key is invalid. Make sure you copy it correctly.",
      });
      return;
    }

    setStyleID(styleID);
    setAPIKey(apiKey);
    setPullKey(pullKey);
  };

  const onStyleJSONSubmit = (styleJSON, apiKey, pullKey) => {
    styleJSON = styleJSON.trim();
    if (styleJSON === "") {
      styleJSON = "[]";
    }

    if (styleJSON === undefined || styleJSON === null) {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage:
          "A style JSON from Google Maps or Snazzy Maps is required.",
      });
      return;
    }

    if (apiKey === undefined || apiKey === null || apiKey === "") {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage: "An API Key is required.",
      });
      return;
    }

    try {
      JSON.parse(styleJSON);
    } catch (e) {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage:
          "The style JSON is invalid, check that it's copied correctly.",
      });
      return;
    }
    if (pullKey === undefined || pullKey === null || pullKey === "") {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage: "A pull key is required.",
      });
      return;
    }

    if (!validatePullkey(pullKey)) {
      setOpenPreviewSnackBar({
        ...openPreviewSnackBar,
        open: true,
        errorMessage:
          "The pull key is invalid. Make sure you copy it correctly.",
      });
      return;
    }

    apiKey = apiKey.trim();
    setGoogleStyleJSON(styleJSON);
    setGoogleApiKey(apiKey);
    setPullKey(pullKey);
  };

  return (
    <Grid container columns={{ xs: 1, md: 12 }} direction="row">
      <Grid item xs={1} md={2.5}>
        <Settings
          mapProvider={mapProvider}
          onStyleIDSubmit={onStyleIDSubmit}
          onStyleJSONSubmit={onStyleJSONSubmit}
          mapStyle={mapStyle}
          setMapStyle={setMapStyle}
          apiKey={apiKey}
          setAPIKey={setAPIKey}
          styleID={styleID}
          setStyleID={setStyleID}
          pullKey={pullKey}
          setPullKey={setPullKey}
          zoom={zoom}
          setZoom={setZoom}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          lang={lang}
          setLang={setLang}
        ></Settings>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <RightPanel
            mapProvider={mapProvider}
            setMapStyle={setMapStyle}
            mapStyle={mapStyle}
            zoom={zoom}
            setZoom={setZoom}
            fullscreen={fullscreen}
            lang={lang}
            pullKey={pullKey}
            apiKey={apiKey}
            styleID={styleID}
            googleStyleJSON={googleStyleJSON}
            googleApiKey={googleApiKey}
          ></RightPanel>
          <PreviewSnackBar
            open={openPreviewSnackBar.open}
            setOpen={setOpenPreviewSnackBar}
            errorMessage={openPreviewSnackBar.errorMessage}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

const PULL_KEY_CHARSET = "abcdefghijklmnopqrstuvwxyz0123456789";

export function validatePullkey(key) {
  key = key.trim();
  if (key.length !== 16) {
    return false;
  }
  let checksum = 13;
  for (let i = 0; i < 15; i++) {
    const index = PULL_KEY_CHARSET.indexOf(key[i]);
    checksum += index;
  }
  const checksumKey = PULL_KEY_CHARSET.charAt(
    checksum % PULL_KEY_CHARSET.length
  );
  const lastChar = key[key.length - 1];
  return checksumKey === lastChar;
}
