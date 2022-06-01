import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import PullKeyInput from "../component/PullKeyInput";
import SpeedUnitsToggle from "../component/SpeedUnitsToggle";
import { TextSettings } from "../component/TextSettings";

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

  const textPreview = (text) => (
    <Box height="75vh">
      <div
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            ...textDivCSS,
            color: textDivCSS.textColor,
            fontFamily: textDivCSS.fontFamily,
            borderRadius: `${textDivCSS["border_top_left_radius"]}% ${textDivCSS["border_top_right_radius"]}% ${textDivCSS["border_bottom_right_radius"]}% ${textDivCSS["border_bottom_left_radius"]}%`,
            fontSize: `${textDivCSS.fontSize}px`,
            fontWeight: textDivCSS.isBold ? "bold" : "normal",
            fontStyle: textDivCSS.isItalic ? "italic" : "normal",
            transform: `rotate(${textDivCSS.rotation}deg)`,
            opacity: textDivCSS.opacity / 100,
            borderColor: textDivCSS.borderColor,
            border: `${textDivCSS.borderWidth}px solid`,
            justifyContent: textDivCSS.justifyContent,
          }}
        >
          {text}
        </div>
      </div>
    </Box>
  );

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
          <List>
            <Typography variant="h6" component="div">
              Settings
            </Typography>
            <PullKeyInput pullKey={pullKey} onKeyChange={setPullKey} />
            <SpeedUnitsToggle units={units} onUnitsChange={setUnits} />
            <TextSettings
              textDivCSS={textDivCSS}
              setTextDivCSS={setTextDivCSS}
            />
          </List>
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          {textPreview(`1000 ${units.toUpperCase()}`)}
          {exportModule}
        </Box>
      </Grid>
    </Grid>
  );
}

export default SpeedEditor;
