import React from "react";
import { Box, Stack, Tooltip, Input, InputAdornment } from "@mui/material";

export const NumberTextField = ({ value, setValue }) => {
  return (
    <Input
      style={{ width: "110px" }}
      disableUnderline
      type="number"
      value={textDivCSS.fontSize}
      onChange={(e) => {
        setTextDivCSS({
          ...textDivCSS,
          fontSize: e.target.value,
        });
      }}
      endAdornment={<InputAdornment position="end">px</InputAdornment>}
      startAdornment={
        <InputAdornment position="start">
          <Tooltip title="Font Size">
            <FormatSizeIcon />
          </Tooltip>
        </InputAdornment>
      }
    />
  );
};
