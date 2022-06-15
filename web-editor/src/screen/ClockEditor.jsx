import { Box, Grid, MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DateTime } from "luxon";
import * as React from "react";
import { useState } from "react";
import CountryPicker from "../component/CountryPicker";
import OverlayExportPanel from "../component/OverlayExportPanel";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";
import useStyle from "../hooks/useStyle";

function ClockEditor({ pullKey, onPullKeyChange }) {
  const [textDivCSS, setTextDivCSS] = useStyle();

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
          <PullKeyInput pullKey={pullKey} onKeyChange={onPullKeyChange} />
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
          <OverlayExportPanel
            overlayDescription="Clock Overlay URL"
            isExportable={pullKey.valid}
            url={url}
            textDivCSS={textDivCSS}
            type="clock_overlay"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ClockEditor;
