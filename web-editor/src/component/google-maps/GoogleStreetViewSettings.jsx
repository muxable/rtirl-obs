import KeyIcon from "@mui/icons-material/Key";
import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import PullKeyInput from "../PullKeyInput";
import OverlayExportPanel from "../OverlayExportPanel";

export const GoogleStreetViewSettings = ({
  pullKey,
  onPullKeyChange,
  apiKey,
  onApiKeyChange,
}) => {
  const url = `https://overlays.rtirl.com/streetview/google.html?key=${pullKey.value}&api_key=${apiKey}`;
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
          component="form"
          noValidate
          autoComplete="off"
          bgcolor="black"
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
            sx={{
              width: "95%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box bgcolor="black" sx={{ marginTop: "12px" }}>
          <Typography sx={{ paddingLeft: "24px", paddingTop: "10px" }}>
            Export
          </Typography>
          <OverlayExportPanel
            overlayDescription="Goole Street View Overlay URL"
            isExportable={pullKey.valid && apiKey}
            url={url}
            type="google_maps_overlay"
          />
        </Box>
      </Stack>
    </Box>
  );
};
