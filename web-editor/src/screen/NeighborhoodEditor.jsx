import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import CountryPicker from "../component/CountryPicker";
import MultipleSelect from "../component/MultipleSelect";
import OverlayExportPanel from "../component/OverlayExportPanel";
import PullKeyInput from "../component/PullKeyInput";
import TextOverlayPreview from "../component/TextOverlayPreview";
import { TextSettings } from "../component/TextSettings";

function NeighborhoodEditor({
  pullKey,
  onPullKeyChange,
  textStyle,
  onTextStyleChange,
}) {
  const [selected, setSelected] = useState(["neighborhood", "place"]);
  const [lang, setLang] = useState("en");

  const [text, setText] = useState("Williamsburg, Brooklyn, NY");

  const formatURL = () => {
    var base = `https://overlays.rtirl.com/neighborhood.html?key=${pullKey.value}&format=`;
    var formatStr = "";
    /* eslint-disable */
    const mp = {
      neighborhood: "${data.neighborhood ? data.neighborhood.text + ' ' : ''}",
      region: "${data.region ? data.region.text + ' ' : ''}",
      country: "${data.country ? data.country.text + ' ' : ''}",
      place: "${data.place ? data.place.text + ' ' : ''}",
      postcode: "${data.postcode ? data.postcode.text + ' ' : ''}",
      district: "${data.district ? data.district.text + ' ' : ''}",
      locality: "${data.locality ? data.locality.text + ' ' : ''}",
      poi: "${data.poi ? data.poi.text + ' ' : ''}",
      address: "${data.address ? data.address.text + ' ' : ''}",
    };
    /* eslint-enable */
    for (var param of selected) {
      formatStr += encodeURIComponent(mp[param]);
    }
    return base + formatStr;
  };

  useEffect(() => {
    const coordinates = [-73.990593, 40.740121];
    const lng = coordinates[0];
    const lat = coordinates[1];
    const context = {};
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2w0MW1qaTh3MG80dzNjcXRndmJ0a2JieiJ9.Y_xABmAqvD-qZeed8MabxQ&language=${lang}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        for (var param of [
          "country",
          "region",
          "postcode",
          "district",
          "place",
          "locality",
          "neighborhood",
          "address",
          "poi",
        ]) {
          const str = param;
          context[param] = res.features.find((feature) =>
            feature.place_type.includes(str)
          );
        }
        const ret = [];
        for (var p of selected) {
          if (context[p]) {
            if (p === "country") {
              ret.push(context[p]["properties"]["short_code"].toUpperCase());
            } else {
              ret.push(context[p]["text"]);
            }
          }
        }

        setText(ret.join(", "));
      })
      .catch((err) => console.log(err));
  }, [selected, lang, setText]);

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
          <Typography> Format, the order matters </Typography>
          <MultipleSelect
            selected={selected}
            setSelected={setSelected}
            fullSet={fullSet}
            inputLabel={"Types"}
          />
          {/* Select Language */}
          <Typography>Language</Typography>
          <CountryPicker countries={countries} lang={lang} setLang={setLang} />
          <TextSettings
            textDivCSS={textStyle}
            setTextDivCSS={onTextStyleChange}
          />
        </Box>
      </Grid>
      <Grid item xs={1} md={9.5} lg={12}>
        <Box padding={1} paddingBottom={0}>
          <TextOverlayPreview text={text} textDivCSS={textStyle} />
          <OverlayExportPanel
            overlayDescription="Neighborhood Overlay URL"
            isExportable={pullKey.valid}
            streamElementExportable={false}
            url={formatURL()}
            textDivCSS={textStyle}
            type="neighborhood_overlay"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default NeighborhoodEditor;
