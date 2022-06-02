import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import CountryPicker from "../component/CountryPicker";
import ExclusiveToggle from "../component/ExclusiveToggle";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayExportPanel from "../component/TextOverlayExportPanel";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";
import useStyle from "../hooks/useStyle";

const headingOptions = [
  { name: "deg\u00B0", value: "deg" },
  { name: "NSEW", value: "nsew" },
];

function HeadingEditor(props) {
  const [pullKey, setPullKey] = useState({ value: "", valid: false });
  const [units, setUnits] = useState("mph");
  const [lang, setLang] = useState("en");
  const [textDivCSS, setTextDivCSS] = useStyle();
  const url = `https://overlays.rtirl.com/heading/${units}.html?key=${pullKey.value}&lang=${lang}`;

  const headingCountries = ["en", "es", "sv", "tr"];

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
            name="Format"
            selectedOption={units}
            options={headingOptions}
            onOptionChange={setUnits}
          />
          <Typography>Language</Typography>
          <CountryPicker
            lang={lang}
            setLang={setLang}
            countries={headingCountries}
          />
          <TextSettings textDivCSS={textDivCSS} setTextDivCSS={setTextDivCSS} />
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <TextOverlayPreview
            text={units === "nsew" ? "NW" : `1000\u00B0`}
            textDivCSS={textDivCSS}
          />
          <TextOverlayExportPanel
            overlayDescription="Heading Overlay URL"
            hasValidPullKey={pullKey.valid}
            url={url}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default HeadingEditor;
