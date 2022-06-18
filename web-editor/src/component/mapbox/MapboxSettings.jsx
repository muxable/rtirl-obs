import InfoIcon from "@mui/icons-material/Info";
import KeyIcon from "@mui/icons-material/Key";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import StyleIcon from "@mui/icons-material/Style";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CountryPicker from "../CountryPicker";
import ExclusiveToggle from "../ExclusiveToggle";
import PullKeyInput from "../PullKeyInput";
import { ZoomSlider } from "../ZoomSlider";
import { AttributionDialog } from "./AttributionDialog";
import { StyleIDHelperDialog } from "./StyleIDHelperDialog";

export default function MapboxSettings({
  pullKey,
  onPullKeyChange,
  styleId,
  onStyleChange,
  apiKey,
  onApiKeyChange,
  lang,
  setLang,
  zoom,
  setZoom,
  fullscreen,
  setFullscreen,
  attribution,
  onAttributionChange,
  mapLibrary,
  onMapLibraryChange,
}) {
  const [openStyleIDDialog, setOpenStyleIDDialog] = useState(false);
  const [openAttributionDialog, setOpenAttributionDialog] = useState(false);
  const libraries = [
    { name: "Leaflet", value: "leaflet" },
    { name: "Mapbox GL", value: "mapbox" },
  ];

  return (
    <Box
      style={{
        padding: "16px",
        height: "100%",
      }}
      paddingLeft={4}
      borderRight={1}
      borderBottom={1}
      borderColor="primary.border"
      backgroundColor="primary.main"
    >
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        textAlign="left"
      >
        <Typography variant="h6" component="div">
          Settings
        </Typography>

        <PullKeyInput pullKey={pullKey} onKeyChange={onPullKeyChange} />

        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            required
            id="standard-required"
            label="API Key"
            variant="standard"
            value={apiKey}
            error={!apiKey}
            helperText={apiKey ? "" : "The API key is required"}
            onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            onChange={(e) => onApiKeyChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Style Id form */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          style={{ position: "relative" }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <TextField
            fullWidth
            id="tf-style-id"
            label="Style ID"
            variant="standard"
            value={styleId}
            placeholder="Format: account/styleId"
            error={!styleId}
            helperText={styleId ? "" : "The style id is required"}
            onSubmit={(e) => {
              e.preventDefault();
            }}
            onChange={(e) => {
              onStyleChange(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <StyleIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setOpenStyleIDDialog(true)}>
                    <QuestionMarkIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box>
          <InputLabel id="select-language-label"> Language </InputLabel>
          <CountryPicker
            lang={lang}
            setLang={setLang}
            countries={[
              "ar",
              "de",
              "en",
              "es",
              "fr",
              "it",
              "ja",
              "ko",
              "mul",
              "pt",
              "ru",
              "vi",
              "zh-Hans",
              "zh-Hant",
            ]}
          />
        </Box>

        <Box>
          <ZoomSlider
            zoomValue={zoom}
            minZoomLevel={0}
            maxZoomLevel={23}
            onZoomChange={setZoom}
          />
        </Box>

        <Box>
          <FormControlLabel
            control={
              <Checkbox
                value={fullscreen}
                onChange={(event) => setFullscreen(event.target.checked)}
              />
            }
            label="Fullscreen"
          />
        </Box>

        <Box>
          <ExclusiveToggle
            name="Mapping Library"
            selectedOption={mapLibrary}
            options={libraries}
            onOptionChange={onMapLibraryChange}
          />

          <Typography sx={{ p: 1 }}>
            <InfoIcon style={{ verticalAlign: "middle" }} />
            While both libraries use Mapbox tiles, Leaflet is more compatible
            with streaming tools such as Prism Live, StreamLabs and
            StreamElements.
          </Typography>
        </Box>

        {mapLibrary === "leaflet" && (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  value={attribution}
                  onChange={(event) =>
                    onAttributionChange(event.target.checked)
                  }
                />
              }
              label="Map Attribution"
            />
            <Tooltip title="About map attribution">
              <IconButton onClick={() => setOpenAttributionDialog(true)}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Stack>

      <AttributionDialog
        open={openAttributionDialog}
        setOpen={setOpenAttributionDialog}
      />
      <StyleIDHelperDialog
        open={openStyleIDDialog}
        setOpen={setOpenStyleIDDialog}
      />
    </Box>
  );
}
