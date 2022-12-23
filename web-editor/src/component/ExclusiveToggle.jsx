import { Box, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";

function ExclusiveToggle({ name, selectedOption, onOptionChange, options }) {
  return (
    <Box bgcolor="black" sx={{marginTop:"3%", padding:"4%"}}>
      <Typography gutterBottom>{name}</Typography>
      <ToggleButtonGroup
        value={selectedOption}
        exclusive
        fullWidth
        onChange={(_, selectedOption) => {
          if (selectedOption) {
            onOptionChange(selectedOption);
          }
        }}
      >
        {options.map((option, _) => (
          <ToggleButton key={option.name} value={option.value}>
            {option.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}

export default ExclusiveToggle;
