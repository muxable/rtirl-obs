import KeyIcon from "@mui/icons-material/Key";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CodeIcon from "@mui/icons-material/Style";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { GoogleMapsStyleDialog } from "../GoogleMapsStyleDialog";
import PullKeyInput from "../PullKeyInput";
import { ZoomSlider } from "../ZoomSlider";

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
}) => {
  const [showStyleDialog, setShowStyleDialog] = React.useState(false);

  return (
    <Box
      style={{
        padding: "16px",
        height: "100%",
      }}
      paddingLeft={4}
      borderRight={1}
      borderBottom={1}
      borderColor="primary.border"
      backgroundColor="primary.main"
    >
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        textAlign="left"
      >
        <Typography variant="h6" component="div">
          Settings
        </Typography>

        <PullKeyInput pullKey={pullKey} onKeyChange={onPullKeyChange} />

        <Box component="form" noValidate autoComplete="off">
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
            }}
          />
        </Box>

        {/* Style Id form */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          style={{ position: "relative" }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
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

        <Box>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                value={fullscreen}
                onChange={(event) => setFullscreen(event.target.checked)}
              />
            }
            label="Fullscreen"
          />
        </Box>
      </Stack>
      <GoogleMapsStyleDialog
        open={showStyleDialog}
        setOpen={setShowStyleDialog}
      />
    </Box>
  );
};
