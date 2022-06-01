import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";
import { DateTime } from 'luxon'


function ClockEditor(props) {
  const [pullKey, setPullKey] = useState({ value: "", valid: false });
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

  const [clockSetting, setClockSetting] = useState({
    format: "tt",
    lang: "en",
  });

  const url = `https://overlays.rtirl.com/datetime/luxon.html?key=${pullKey.value}&lang=${clockSetting.lang}&format=${clockSetting.format}`;

  const standadloneToken = [
    "S",
    "SSS",
    "u",
    "uu",
    "uuu",
    "s",
    "ss",
    "m",
    "mm",
    "h",
    "hh",
    "H",
    "HH",
    "Z",
    "ZZ",
    "ZZZ",
    "ZZZZ",
    "ZZZZZ",
    "z",
    "a",
    "d",
    "dd",
    "c",
    "ccc",
    "cccc",
    "ccccc",
    "L",
    "LL",
    "LLL",
    "LLLL",
    "LLLLL",
    "y",
    "yy",
    "yyyy",
    "G",
    "GG",
    "GGGGG",
    "kk",
    "kkkk",
    "W",
    "WW",
    "o",
    "ooo",
    "q",
    "qq",
    "D",
    "DD",
    "DDD",
    "DDDD",
    "t",
    "tt",
    "ttt",
    "tttt",
    "T",
    "TT",
    "TTT",
    "TTTT",
    "f",
    "ff",
    "fff",
    "ffff",
    "F",
    "FF",
    "FFF",
    "FFFF",
    "X",
    "x",
  ];

  const time = DateTime.now().setLocale(clockSetting.lang);

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
        <h2> Clock Overlay URL </h2>
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
          <Select
            fullWidth
            label="Format"
            value={time.toFormat(clockSetting.format)}
          >
            {standadloneToken.map((token, index) => (
              <MenuItem
                value={time.toFormat(token)}
                onClick={() => {
                  setClockSetting({ ...clockSetting, format: token });
                }}
              >
                {time.toFormat(token)}
              </MenuItem>
            ))}
          </Select>
          <TextSettings textDivCSS={textDivCSS} setTextDivCSS={setTextDivCSS} />
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <TextOverlayPreview
            text={time.toFormat(clockSetting.format)}
            textDivCSS={textDivCSS}
          />
          {exportModule}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ClockEditor;
