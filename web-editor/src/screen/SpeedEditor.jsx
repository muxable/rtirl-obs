import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ExclusiveToggle from "../component/ExclusiveToggle";
import OverlayExportPanel from "../component/OverlayExportPanel";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";

const speedOptions = [
  { name: "MPH", value: "mph" },
  { name: "KPH", value: "kph" },
];

function SpeedEditor({
  pullKey,
  onPullKeyChange,
  textStyle,
  onTextStyleChange,
}) {
  const [units, setUnits] = useState("mph");
  const url = `https://overlays.rtirl.com/speed/${units}.html?key=${pullKey.value}`;

  return (
    <Grid container columns={{ xs: 1, md: 12 }} direction="row">
      <Grid item xs={1} md={2.5}>
        <Box
          style={{
            height: "max-content",
          }}
          borderRight={1}
          borderBottom={1}
          borderColor="primary.border"
          backgroundColor="primary.main"
          textAlign="left"
        >
          <PullKeyInput pullKey={pullKey} onKeyChange={onPullKeyChange} />

          <Box bgcolor="black" sx={{ marginTop: "12px" }}>
            <Typography sx={{ paddingLeft: "24px", paddingTop: "10px" }}>
              Export
            </Typography>
            <OverlayExportPanel
              isExportable={pullKey.valid}
              url={url}
              textDivCSS={textStyle}
              type="speed_overlay"
            />
          </Box>
          <ExclusiveToggle
            name="Units"
            selectedOption={units}
            options={speedOptions}
            onOptionChange={setUnits}
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
            text={`1000 ${units.toUpperCase()}`}
            textDivCSS={textStyle}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SpeedEditor;
