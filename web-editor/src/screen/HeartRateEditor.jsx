import { Box, Grid, Typography } from "@mui/material";
import PullKeyInput from "../component/PullKeyInput";
import OverlayExportPanel from "../component/OverlayExportPanel";
import { TextSettings } from "../component/TextSettings";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { scrollbarStyles } from "../theme/editorTheme";

function HeartRateEditor({
  pullKey,
  onPullKeyChange,
  textStyle,
  onTextStyleChange,
}) {
  const url = `https://overlays.rtirl.com/heart_rate/bpm.html?key=${pullKey.value}`;

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
              overlayDescription="Heart Rate Overlay URL"
              isExportable={pullKey.valid}
              url={url}
              textDivCSS={textStyle}
              type="heart_rate_overlay"
            />
          </Box>
          <TextSettings
            textDivCSS={textStyle}
            setTextDivCSS={onTextStyleChange}
          />
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <TextOverlayPreview text={`72 bpm`} textDivCSS={textStyle} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default HeartRateEditor;
