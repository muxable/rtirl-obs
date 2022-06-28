import { Stack, Tooltip, Input, InputAdornment } from "@mui/material";
import React from "react";
import BorderStyleIcon from "@mui/icons-material/BorderStyle";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function BorderRadiusPicker({ textDivCSS, setTextDivCSS }) {
  return (
    <>
      <Stack direction={"row"} spacing={3}>
        <Input
          disableUnderline
          type="number"
          value={textDivCSS.border_top_left_radius}
          onChange={(e) => {
            setTextDivCSS({
              ...textDivCSS,
              border_top_left_radius: clamp(e.target.value, 0, 100),
            });
          }}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
          startAdornment={
            <InputAdornment position="start">
              <Tooltip title="border_top_left_radius">
                <BorderStyleIcon />
              </Tooltip>
            </InputAdornment>
          }
        />
        <Input
          disableUnderline
          type="number"
          value={textDivCSS.border_top_right_radius}
          onChange={(e) => {
            setTextDivCSS({
              ...textDivCSS,
              border_top_right_radius: clamp(e.target.value, 0, 100),
            });
          }}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
          startAdornment={
            <InputAdornment position="start">
              <Tooltip title="border_top_right_radius">
                <BorderStyleIcon sx={{ transform: "rotate(90deg)" }} />
              </Tooltip>
            </InputAdornment>
          }
        />
      </Stack>

      <Stack direction={"row"} spacing={3}>
        <Input
          InputProps={{
            inputProps: {
              max: 100,
              min: 0,
            },
          }}
          disableUnderline
          type="number"
          value={textDivCSS.border_bottom_left_radius}
          onChange={(e) => {
            setTextDivCSS({
              ...textDivCSS,
              border_bottom_left_radius: clamp(e.target.value, 0, 100),
            });
          }}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
          startAdornment={
            <InputAdornment position="start">
              <Tooltip title="border_bottom_left_radius">
                <BorderStyleIcon sx={{ transform: "rotate(270deg)" }} />
              </Tooltip>
            </InputAdornment>
          }
        />
        <Input
          disableUnderline
          type="number"
          value={textDivCSS.border_bottom_right_radius}
          onChange={(e) => {
            setTextDivCSS({
              ...textDivCSS,
              border_bottom_right_radius: clamp(e.target.value, 0, 100),
            });
          }}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
          startAdornment={
            <InputAdornment position="start">
              <Tooltip title="border_bottom_right_radius">
                <BorderStyleIcon
                  sx={{
                    transform: "rotate(180deg)",
                  }}
                />
              </Tooltip>
            </InputAdornment>
          }
        />
      </Stack>
    </>
  );
}

export default BorderRadiusPicker;
