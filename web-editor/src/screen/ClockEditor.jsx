import { Box, Grid, MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DateTime } from "luxon";
import { useState } from "react";
import CountryPicker from "../component/CountryPicker";
import OverlayExportPanel from "../component/OverlayExportPanel";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";

function ClockEditor({
  pullKey,
  onPullKeyChange,
  textStyle,
  onTextStyleChange,
}) {
  const [format, setFormat] = useState("tt");
  const [lang, setLang] = useState("en");

  const url = `https://overlays.rtirl.com/datetime/luxon.html?key=${pullKey.value}&lang=${lang}&format=${format}`;

  const standaloneToken = [
    { token: "D", hint: "Date" },
    { token: "DD", hint: "Date" },
    { token: "DDD", hint: "Date" },
    { token: "DDDD", hint: "Date" },
    { token: "t", hint: "Time (12-hour)" },
    { token: "tt", hint: "Time (12-hour)" },
    { token: "ttt", hint: "Time (12-hour)" },
    { token: "tttt", hint: "Time (12-hour)" },
    { token: "T", hint: "Time (24-hour)" },
    { token: "TT", hint: "Time (24-hour)" },
    { token: "TTT", hint: "Time (24-hour)" },
    { token: "TTTT", hint: "Time (24-hour)" },
    { token: "f", hint: "Date and time (12-hour)" },
    { token: "ff", hint: "Date and time (12-hour)" },
    { token: "fff", hint: "Date and time (12-hour)" },
    { token: "ffff", hint: "Date and time (12-hour)" },
    { token: "F", hint: "Date and time (24-hour)" },
    { token: "FF", hint: "Date and time (24-hour)" },
    { token: "FFF", hint: "Date and time (24-hour)" },
    { token: "FFFF", hint: "Date and time (24-hour)" },
    { token: "ss", hint: "Seconds" },
    { token: "mm", hint: "Minutes" },
    { token: "hh", hint: "Hours (12-hour)" },
    { token: "HH", hint: "Hours (24-hour)" },
    { token: "ZZZZ", hint: "Time zone" },
    { token: "ZZZZZ", hint: "Full time zone" },
    { token: "a", hint: "AM/PM" },
    { token: "d", hint: "Day of the month" },
    { token: "dd", hint: "Day of the month with zero" },
    { token: "ccc", hint: "Day of the week" },
    { token: "cccc", hint: "Full day of the week" },
    { token: "L", hint: "Month number" },
    { token: "LL", hint: "Month number with zero" },
    { token: "LLL", hint: "Month" },
    { token: "LLLL", hint: "Full month" },
    { token: "y", hint: "Year" },
    { token: "yy", hint: "Year (two digits)" },
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
            disableUnderline
            variant="standard"
            label="Format"
            value={time.toFormat(format)}
            MenuProps={{
              style: {
                maxHeight: "65%",
              },
            }}
          >
            {standaloneToken.map(({ token, hint }) => (
              <MenuItem
                key={token}
                value={time.toFormat(token)}
                onClick={() => {
                  setFormat(token);
                }}
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <div>{hint}</div>
                <div>
                  <Typography variant="caption">
                    {time.toFormat(token)}
                  </Typography>
                </div>
              </MenuItem>
            ))}
          </Select>
          <Typography>Language</Typography>
          <CountryPicker
            lang={lang}
            setLang={setLang}
            countries={luxonCountries}
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
            text={time.toFormat(format)}
            textDivCSS={textStyle}
          />
          <OverlayExportPanel
            overlayDescription="Clock Overlay URL"
            isExportable={pullKey.valid}
            url={url}
            textDivCSS={textStyle}
            type="clock_overlay"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ClockEditor;
