import CodeIcon from "@mui/icons-material/Code";
import KeyIcon from "@mui/icons-material/Key";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import StyleIcon from "@mui/icons-material/Style";
import { IconButton, InputAdornment, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import ControlPanel from "./ControlPanel";
import { StyleIDHelperDialog } from "./StyleIDHelperDialog";
import { ZoomSlider } from "./ZoomSlider";

export const Settings = ({
  onStyleJSONSubmit,
  onStyleIDSubmit,
  lang,
  setLang,
  mapStyle,
  setMapStyle,
  mapProvider,
  zoom,
  setZoom,
}) => {
  const [openStyleIDDialog, setOpenStyleIDDialog] = useState(false);
  const [inputStyleID, setInputStyleID] = useState("");
  const [inputAPIKey, setInputAPIKey] = useState("");
  const [inputPullKey, setInputPullKey] = useState("");

  const [inputStyleJSON, setInputStyleJSON] = useState("");

  // clear all fields when user switch provider
  useEffect(() => {
    setInputStyleID("");
    setInputAPIKey("");
    setInputPullKey("");
    setInputStyleJSON("");
  }, [mapProvider]);

  return (
    <Box
      style={{
        width: "15vw",
        padding: "16px",
      }}
      paddingLeft={4}
      borderRight={1}
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

        {/* API key form */}
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            required
            id="standard-required"
            label="API Key"
            defaultValue="Your API Key"
            variant="standard"
            value={inputAPIKey}
            onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            onChange={(e) => setInputAPIKey(e.target.value)}
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
          {mapProvider === "mapbox" && (
            <IconButton
              onClick={() => setOpenStyleIDDialog(true)}
              style={{ position: "absolute", right: "0px", zIndex: "3" }}
            >
              <QuestionMarkIcon />
            </IconButton>
          )}
          {mapProvider === "mapbox" ? (
            <TextField
              fullWidth
              id="tf-style-id"
              label="Style ID"
              variant="standard"
              helperText={
                <>
                  format: account/styleId <br />
                  example: mapbox/streets-v11 <br />
                </>
              }
              onSubmit={(e) => {
                e.preventDefault();
              }}
              onChange={(e) => {
                setInputStyleID(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StyleIcon />
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Style JSON"
              multiline
              rows={4}
              defaultValue=""
              helperText={
                <>
                  format: JSON <br />
                  <Link href="https://mapstyle.withgoogle.com/">
                    Style with Google
                  </Link>
                  <br />
                  <Link href="https://snazzymaps.com/">
                    Style with Snazzymaps
                  </Link>
                </>
              }
              onSubmit={(e) => {
                e.preventDefault();
              }}
              onChange={(e) => {
                setInputStyleJSON(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CodeIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </Box>

        {/* Pull key from rtirl.com */}
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            required
            id="standard-required"
            label="Pull Key"
            helperText="Pull Key from rtirl.com"
            variant="standard"
            value={inputPullKey}
            onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            onChange={(e) => setInputPullKey(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Map style controll */}
        {mapProvider === "mapbox" ? (
          <>
            <Box>
              <ControlPanel
                onChange={setMapStyle}
                language={lang}
                setLanguage={setLang}
                mapStyle={mapStyle}
              ></ControlPanel>
            </Box>

            <ZoomSlider
              zoomValue={zoom}
              minZoomLevel={0}
              maxZoomLevel={23}
              onZoomChange={setZoom}
            />
          </>
        ) : (
          <></>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            mapProvider === "mapbox"
              ? onStyleIDSubmit(inputStyleID, inputAPIKey, inputPullKey)
              : onStyleJSONSubmit(inputStyleJSON, inputAPIKey, inputPullKey);
          }}
        >
          Preview
        </Button>
      </Stack>

      <StyleIDHelperDialog
        open={openStyleIDDialog}
        setOpen={setOpenStyleIDDialog}
      />
    </Box>
  );
};
