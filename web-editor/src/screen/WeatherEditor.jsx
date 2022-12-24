import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ExclusiveToggle from "../component/ExclusiveToggle";
import OverlayExportPanel from "../component/OverlayExportPanel";
import PullKeyInput from "../component/PullKeyInput";
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

function WeatherEditor({
  pullKey,
  onPullKeyChange,
  textStyle,
  onTextStyleChange,
}) {
  const [units, setUnits] = useState("C");
  const [mode, setMode] = useState("temperature");
  const url = `https://overlays.rtirl.com/weather/${mode}/${units}.html?key=${pullKey.value}`;

  return (
    <Grid container columns={{ xs: 1, md: 12 }} direction="row">
      <Grid item xs={1} md={2.5}>
        <Box
          style={{
            height: "max-height",
          }}
          borderRight={1}
          borderBottom={1}
          borderColor="primary.border"
          backgroundColor="primary.main"
          textAlign="left"
        >
          <PullKeyInput pullKey={pullKey} onKeyChange={onPullKeyChange} />

          <Box bgcolor="black" sx={{ marginTop: "3%" }}>
            <Typography sx={{ paddingLeft: "6%", paddingTop: "2%" }}>
              Export
            </Typography>
            <OverlayExportPanel
              overlayDescription="Weather Overlay URL"
              isExportable={pullKey.valid}
              url={url}
              textDivCSS={textStyle}
              type="weather_overlay"
            />
          </Box>
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
          <TextSettings
            textDivCSS={textStyle}
            setTextDivCSS={onTextStyleChange}
          />
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <TextOverlayPreview
            text={`55 \u02DA${units.toUpperCase()}`}
            textDivCSS={textStyle}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default WeatherEditor;
