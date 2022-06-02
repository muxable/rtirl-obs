import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import ExclusiveToggle from "../component/ExclusiveToggle";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayExportPanel from "../component/TextOverlayExportPanel";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";

const unitOptions = [
  { name: "Celsius", value: "C" },
  { name: "Fahrenheit", value: "F" },
];

const modeOptions = [
  { name: "Temperature", value: "temperature" },
  { name: "Feels Like", value: "feels_like" },
];

function WeatherEditor(props) {
  const [pullKey, setPullKey] = useState({ value: "", valid: false });
  const [units, setUnits] = useState("C");
  const [mode, setMode] = useState("temperature");
  const [textDivCSS, setTextDivCSS] = useState({
    textColor: "#94fe32",
    fontFamily: "sans-serif",
    rotation: 0,
    fontSize: 30,
    isBold: false,
    isItalic: false,
    opacity: 100,
    backgroundColor: "#000000",
    borderColor: "#ffffff",
    borderWidth: 0,
    padding: 0,
    border_top_left_radius: 0,
    border_top_right_radius: 0,
    border_bottom_left_radius: 0,
    border_bottom_right_radius: 0,
    textAlign: "left",
  });
  const url = `https://overlays.rtirl.com/weather/${mode}/${units}.html?key=${pullKey.value}`;

  return (
    <Grid container columns={{ xs: 1, md: 12 }} direction="row">
      <Grid item xs={1} md={2.5}>
        <Box
          style={{
            padding: "16px",
            height: "100%",
          }}
          borderRight={1}
          borderBottom={1}
          borderColor="primary.border"
          backgroundColor="primary.main"
          textAlign="left"
        >
          <Typography variant="h6" component="div">
            Settings
          </Typography>
          <PullKeyInput pullKey={pullKey} onKeyChange={setPullKey} />
          <ExclusiveToggle
            name="Units"
            selectedOption={units}
            options={unitOptions}
            onOptionChange={setUnits}
          />
          <ExclusiveToggle
            name="Mode"
            selectedOption={mode}
            options={modeOptions}
            onOptionChange={setMode}
          />
          <TextSettings textDivCSS={textDivCSS} setTextDivCSS={setTextDivCSS} />
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <TextOverlayPreview
            text={`55 \u02DA${units.toUpperCase()}`}
            textDivCSS={textDivCSS}
          />
          <TextOverlayExportPanel
            overlayDescription="Weather Overlay URL"
            hasValidPullKey={pullKey.valid}
            url={url}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default WeatherEditor;
