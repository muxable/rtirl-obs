import { Box, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";

function SpeedUnitsToggle({ units, onUnitsChange }) {
  return (
    <Box>
      <Typography gutterBottom>Units</Typography>
      <ToggleButtonGroup
        value={units}
        exclusive
        fullWidth
        onChange={(_, selectedUnits) => onUnitsChange(selectedUnits)}
      >
        <ToggleButton value="mph">MPH</ToggleButton>
        <ToggleButton value="kph">KPH</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default SpeedUnitsToggle;
