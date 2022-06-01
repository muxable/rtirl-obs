import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import ExclusiveToggle from "../component/ExclusiveToggle";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";

const speedOptions = [
  { name: "MPH", value: "mph" },
  { name: "KPH", value: "kph" },
];

function SpeedEditor(props) {
  const [pullKey, setPullKey] = useState({ value: "", valid: false });
  const [units, setUnits] = useState("mph");
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
  const url = `https://overlays.rtirl.com/speed/${units}.html?key=${pullKey.value}`;

  const exportModule = (
    <Box
      style={{
        marginTop: "8px",
        padding: "8px",
      }}
      border={1}
      borderColor="primary.border"
      backgroundColor="primary.main"
    >
      <aside>
        <h2> Speed Overlay URL </h2>
        {pullKey.valid ? (
          <TextField
            readOnly
            value={url}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(url);
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        ) : (
          <Typography color="inherit">
            Pull key is required for a generic overlay URL
          </Typography>
        )}
      </aside>
    </Box>
  );
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
            options={speedOptions}
            onOptionChange={setUnits}
          />
          <TextSettings textDivCSS={textDivCSS} setTextDivCSS={setTextDivCSS} />
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <TextOverlayPreview
            text={`1000 ${units.toUpperCase()}`}
            textDivCSS={textDivCSS}
          />
          {exportModule}
        </Box>
      </Grid>
    </Grid>
  );
}

export default SpeedEditor;
