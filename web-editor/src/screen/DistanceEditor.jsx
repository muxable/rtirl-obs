import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ExclusiveToggle from "../component/ExclusiveToggle";
import OverlayExportPanel from "../component/OverlayExportPanel";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";

const unitOptions = [
  { name: "Miles", value: "miles" },
  { name: "Kilometers", value: "km" },
];

function DistanceEditor({
  pullKey,
  onPullKeyChange,
  textStyle,
  onTextStyleChange,
}) {
  const [units, setUnits] = useState("miles");
  const url = `https://overlays.rtirl.com/distance/${units}.html?key=${pullKey.value}`;

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
          <TextSettings
            textDivCSS={textStyle}
            setTextDivCSS={onTextStyleChange}
          />
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <TextOverlayPreview text={`32 ${units}`} textDivCSS={textStyle} />
          <OverlayExportPanel
            overlayDescription="Distance Overlay URL"
            isExportable={pullKey.valid}
            streamElementExportable={false}
            url={url}
            textDivCSS={textStyle}
            type="distance_overlay"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default DistanceEditor;
