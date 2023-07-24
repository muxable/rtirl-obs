import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ExclusiveToggle from "../component/ExclusiveToggle";
import OverlayExportPanel from "../component/OverlayExportPanel";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";
import { scrollbarStyles } from "../theme/editorTheme";

const unitOptions = [
  { name: "Feet", value: "feet" },
  { name: "Meters", value: "meters" },
];

function AltitudeEditor({
  pullKey,
  onPullKeyChange,
  textStyle,
  onTextStyleChange,
}) {
  const [units, setUnits] = useState("feet");
  const url = `https://overlays.rtirl.com/altitude/${units}.html?key=${pullKey.value}`;

  return (
    <Grid container columns={{ xs: 1, md: 12 }} direction="row">
      <Grid
        item
        xs={1}
        md={2.5}
        sx={{
          overflow: "auto",
          height: "100vh",
          ...scrollbarStyles,
        }}
      >
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
              overlayDescription="Altitude Overlay URL"
              isExportable={pullKey.valid}
              streamElementExportable={false}
              url={url}
              textDivCSS={textStyle}
              type="altitude_overlay"
            />
          </Box>
          <ExclusiveToggle
            name="Units"
            selectedOption={units}
            options={unitOptions}
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
          <TextOverlayPreview text={`8849 ${units}`} textDivCSS={textStyle} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default AltitudeEditor;
