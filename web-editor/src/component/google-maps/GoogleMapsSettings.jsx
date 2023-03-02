import KeyIcon from "@mui/icons-material/Key";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CodeIcon from "@mui/icons-material/Style";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { GoogleMapsStyleDialog } from "../GoogleMapsStyleDialog";
import { IndicatorSetting } from "../IndicatorSetting";
import PullKeyInput from "../PullKeyInput";
import { ZoomSlider } from "../ZoomSlider";
import { GoogleAPIKeyDialog } from "./GoogleAPIKeyDialog";
import OverlayExportPanel from "../OverlayExportPanel";

function isValidJSON(string) {
  if (!string) {
    return false;
  }
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  return true;
}

export const GoogleMapsSettings = ({
  pullKey,
  onPullKeyChange,
  apiKey,
  onApiKeyChange,
  mapStyle,
  setMapStyle,
  zoom,
  setZoom,
  fullscreen,
  setFullscreen,
  indicatorStyle,
  setIndicatorStyle,
}) => {
  const [showStyleDialog, setShowStyleDialog] = React.useState(false);
  const [showGoogleAPIKeyDialog, setShowGoogleAPIKeyDialog] =
    React.useState(false);
  const jsonMapStyle = mapStyle.valid ? JSON.parse(mapStyle.value) : {};
  const styleB64 = encodeURIComponent(
    window.btoa(JSON.stringify(jsonMapStyle))
  );
  const indicatorStyleB64 = encodeURIComponent(
    window.btoa(JSON.stringify(indicatorStyle))
  );

  const url = `https://overlays.rtirl.com/googlemaps.html?key=${
    pullKey.value
  }&api_key=${apiKey}&style=${styleB64}&zoom=${zoom}${
    fullscreen ? "&fullscreen=1" : ""
  }&indicatorStyle=${indicatorStyleB64}`;

  return (
    <Box
      style={{
        height: "100%",
      }}
      borderRight={1}
      borderBottom={1}
      borderColor="primary.border"
      backgroundColor="primary.main"
    >
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        textAlign="left"
      >
        <PullKeyInput pullKey={pullKey} onKeyChange={onPullKeyChange} />

        <Box
          bgcolor="black"
          component="form"
          noValidate
          autoComplete="off"
          sx={{ paddingTop: "8px", paddingLeft: "24px", paddingBottom: "8px" }}
        >
          <TextField
            fullWidth
            required
            id="standard-required"
            label="Google Maps API Key"
            variant="standard"
            value={apiKey}
            error={!apiKey}
            helperText={apiKey ? "" : "The API key is required"}
            onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            onChange={(e) => onApiKeyChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowGoogleAPIKeyDialog(true)}>
                    <QuestionMarkIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              width: "95%",
            }}
          />
        </Box>

        <Box bgcolor="black" sx={{ marginTop: "12px" }}>
          <Typography sx={{ paddingLeft: "24px", paddingTop: "10px" }}>
            Export
          </Typography>
          <OverlayExportPanel
            overlayDescription="Goole Maps Overlay URL"
            isExportable={pullKey.valid && apiKey && mapStyle.valid}
            url={url}
            type="google_maps_overlay"
          />
        </Box>

        {/* Style Id form */}
        <Box
          bgcolor="black"
          component="form"
          noValidate
          autoComplete="off"
          style={{ position: "relative" }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          sx={{ paddingTop: "15px", paddingBottom: "5px" }}
        >
          <TextField
            fullWidth
            id="tf-style-id"
            label="Syle JSON String"
            value={mapStyle.value}
            placeholder="Valid JSON string"
            multiline
            rows={4}
            error={!isValidJSON(mapStyle.value)}
            helperText={
              isValidJSON(mapStyle.value) ? "" : "The style string is required"
            }
            onSubmit={(e) => {
              e.preventDefault();
            }}
            onChange={(e) => {
              setMapStyle({
                value: e.target.value,
                valid: isValidJSON(e.target.value),
              });
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CodeIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowStyleDialog(true)}>
                    <QuestionMarkIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box>
          <ZoomSlider
            zoomValue={zoom}
            minZoomLevel={0}
            maxZoomLevel={23}
            onZoomChange={setZoom}
          />
        </Box>

        <Box bgcolor="black">
          <FormControlLabel
            control={
              <Checkbox
                value={fullscreen}
                onChange={(event) => setFullscreen(event.target.checked)}
                sx={{
                  paddingLeft: "24px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              />
            }
            label="Fullscreen"
          />
        </Box>

        <Box bgcolor="black" sx={{ padding: "10px" }}>
          <IndicatorSetting
            indicatorStyle={indicatorStyle}
            setIndicatorStyle={setIndicatorStyle}
          />
        </Box>
      </Stack>
      <GoogleMapsStyleDialog
        open={showStyleDialog}
        setOpen={setShowStyleDialog}
      />
      <GoogleAPIKeyDialog
        open={showGoogleAPIKeyDialog}
        setOpen={setShowGoogleAPIKeyDialog}
      />
    </Box>
  );
};
