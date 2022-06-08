import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import CountryPicker from "../component/CountryPicker";
import ExclusiveToggle from "../component/ExclusiveToggle";
import OverlayExportPanel from "../component/OverlayExportPanel";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";
import useStyle from "../hooks/useStyle";

const headingOptions = [
  { name: "deg\u00B0", value: "deg" },
  { name: "NSEW", value: "nsew" },
];

function HeadingEditor({ pullKey, onPullKeyChange }) {
  const [units, setUnits] = useState("deg");
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
          <PullKeyInput pullKey={pullKey} onKeyChange={onPullKeyChange} />
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
          <OverlayExportPanel
            overlayDescription="Heading Overlay URL"
            isExportable={pullKey.valid}
            url={url}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default HeadingEditor;
