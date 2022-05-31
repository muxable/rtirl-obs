import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MuiInput from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const ZoomSlider = ({
  zoomValue,
  minZoomLevel,
  maxZoomLevel,
  onZoomChange,
}) => {
  const handleSliderChange = (_, newValue) => {
    onZoomChange(newValue);
  };

  const handleInputChange = (event) => {
    onZoomChange(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (zoomValue < minZoomLevel) {
      onZoomChange(minZoomLevel);
    } else if (zoomValue > maxZoomLevel) {
      onZoomChange(maxZoomLevel);
    }
  };

  return (
    <Box>
      <Typography id="input-slider" gutterBottom>
        Zoom level
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ZoomInIcon />
        </Grid>
        <Grid item xs>
          <Slider
            size="small"
            color="text"
            value={typeof zoomValue === "number" ? zoomValue : 0}
            min={minZoomLevel}
            max={maxZoomLevel}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <MuiInput
            value={zoomValue}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: minZoomLevel,
              max: maxZoomLevel,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
