import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import ExclusiveToggle from "../component/ExclusiveToggle";
import OverlayExportPanel from "../component/OverlayExportPanel";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";
import useStyle from "../hooks/useStyle";

const unitOptions = [
  { name: "Celsius", value: "C" },
  { name: "Fahrenheit", value: "F" },
];

const modeOptions = [
  { name: "Temperature", value: "temperature" },
  { name: "Feels Like", value: "feels_like" },
];

function WeatherEditor({ pullKey, onPullKeyChange }) {
  const [units, setUnits] = useState("C");
  const [mode, setMode] = useState("temperature");
  const [textDivCSS, setTextDivCSS] = useStyle();
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
          <PullKeyInput pullKey={pullKey} onKeyChange={onPullKeyChange} />
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
          <OverlayExportPanel
            overlayDescription="Weather Overlay URL"
            isExportable={pullKey.valid}
            url={url}
            textDivCSS={textDivCSS}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default WeatherEditor;
