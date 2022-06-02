import { Box, Grid, MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DateTime } from "luxon";
import * as React from "react";
import { useState } from "react";
import CountryPicker from "../component/CountryPicker";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayExportPanel from "../component/TextOverlayExportPanel";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";

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

  const [format, setFormat] = useState("tt");
  const [lang, setLang] = useState("en");

  const url = `https://overlays.rtirl.com/datetime/luxon.html?key=${pullKey.value}&lang=${lang}&format=${format}`;

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

  const luxonCountries = [
    "en",
    "es",
    "fr",
    "it",
    "de",
    "nl",
    "pt",
    "ru",
    "ja",
    "zh",
    "ko",
    "el",
    "tr",
    "ar",
    "he",
    "id",
    "th",
    "vi",
    "pl",
    "sv",
    "hu",
    "fi",
    "da",
    "no",
    "is",
    "cs",
    "sk",
    "sl",
    "hr",
    "bg",
    "ro",
    "lt",
    "lv",
    "et",
  ];

  const time = DateTime.now().setLocale(lang);

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
          <Typography>Format</Typography>
          <Select
            fullWidth
            label="Format"
            value={time.toFormat(format)}
            MenuProps={{
              style: {
                maxHeight: "65%",
              },
            }}
          >
            {standadloneToken.map((token) => (
              <MenuItem
                key={token}
                value={time.toFormat(token)}
                onClick={() => {
                  setFormat(token);
                }}
              >
                {time.toFormat(token)}
              </MenuItem>
            ))}
          </Select>
          <Typography>Language</Typography>
          <CountryPicker
            lang={lang}
            setLang={setLang}
            countries={luxonCountries}
          />
          <TextSettings textDivCSS={textDivCSS} setTextDivCSS={setTextDivCSS} />
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <TextOverlayPreview
            text={time.toFormat(format)}
            textDivCSS={textDivCSS}
          />
          <TextOverlayExportPanel
            overlayDescription="Clock Overlay URL"
            hasValidPullKey={pullKey.valid}
            url={url}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ClockEditor;
