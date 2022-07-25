import React from "react";
import { Tooltip, Input, InputAdornment } from "@mui/material";
import FormatSizeIcon from "@mui/icons-material/FormatSize";

export const NumberTextField = ({
  value,
  setValue,
  endAdornmentUnit,
  prefixIcon,
  tooltipTitle,
}) => {
  return (
    <Input
      disableUnderline
      type="number"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      endAdornment={
        <InputAdornment position="end">{endAdornmentUnit}</InputAdornment>
      }
      startAdornment={
        <InputAdornment position="start">
          <Tooltip title={tooltipTitle}>{prefixIcon}</Tooltip>
        </InputAdornment>
      }
    />
  );
};
