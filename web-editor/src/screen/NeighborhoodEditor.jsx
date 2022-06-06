import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CountryPicker from "../component/CountryPicker";
import MultipleSelect from "../component/MultipleSelect";
import OverlayExportPanel from "../component/OverlayExportPanel";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";
import useStyle from "../hooks/useStyle";

function NeighborhoodEditor({ pullKey, onPullKeyChange }) {
  const [textDivCSS, setTextDivCSS] = useStyle();
  const [selected, setSelected] = useState(["place", "postcode", "address"]);
  const [lang, setLang] = useState("en");

  // const coordinates = [-73.990593, 40.740121];

  useEffect(() => {}, [selected, lang]);

  const fullSet = [
    "address",
    "country",
    "region",
    "postcode",
    "district",
    "place",
    "locality",
    "neighborhood",
    "poi",
  ];

  const countries = [
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
          {/* Select Types */}
          <MultipleSelect
            selected={selected}
            setSelected={setSelected}
            fullSet={fullSet}
            inputLabel={"Types"}
          />
          {/* Select Language */}
          <Typography>Language</Typography>
          <CountryPicker countries={countries} lang={lang} setLang={setLang} />
          <TextSettings textDivCSS={textDivCSS} setTextDivCSS={setTextDivCSS} />
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <TextOverlayPreview text={`3`} textDivCSS={textDivCSS} />
          <OverlayExportPanel
            overlayDescription="Distance Overlay URL"
            isExportable={pullKey.valid}
            streamElementExportable={false}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default NeighborhoodEditor;
