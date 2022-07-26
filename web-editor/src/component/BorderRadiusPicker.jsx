import { Stack } from "@mui/material";
import React from "react";
import BorderStyleIcon from "@mui/icons-material/BorderStyle";
import { NumberTextField } from "./NumberTextField";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function BorderRadiusPicker({ textDivCSS, setTextDivCSS }) {
  return (
    <>
      <Stack direction={"row"} spacing={3}>
        <NumberTextField
          value={textDivCSS.border_top_left_radius}
          setValue={(border_top_left_radius) => {
            setTextDivCSS({
              ...textDivCSS,
              border_top_left_radius: clamp(border_top_left_radius, 0, 100),
            });
          }}
          endAdornmentUnit="%"
          prefixIcon={<BorderStyleIcon />}
          tooltipTitle="Top Left Border Radius"
        />
        <NumberTextField
          value={textDivCSS.border_top_right_radius}
          setValue={(border_top_right_radius) => {
            setTextDivCSS({
              ...textDivCSS,
              border_top_right_radius: clamp(border_top_right_radius, 0, 100),
            });
          }}
          endAdornmentUnit="%"
          prefixIcon={<BorderStyleIcon sx={{ transform: "rotate(90deg)" }} />}
          tooltipTitle="Top Right Border Radius"
        />
      </Stack>

      <Stack direction={"row"} spacing={3}>
        <NumberTextField
          value={textDivCSS.border_bottom_left_radius}
          setValue={(border_bottom_left_radius) => {
            setTextDivCSS({
              ...textDivCSS,
              border_bottom_left_radius: clamp(
                border_bottom_left_radius,
                0,
                100
              ),
            });
          }}
          endAdornmentUnit="%"
          prefixIcon={<BorderStyleIcon sx={{ transform: "rotate(270deg)" }} />}
          tooltipTitle="Bottom Left Border Radius"
        />
        <NumberTextField
          value={textDivCSS.border_bottom_right_radius}
          setValue={(border_bottom_right_radius) => {
            setTextDivCSS({
              ...textDivCSS,
              border_bottom_right_radius: clamp(
                border_bottom_right_radius,
                0,
                100
              ),
            });
          }}
          endAdornmentUnit="%"
          prefixIcon={<BorderStyleIcon sx={{ transform: "rotate(180deg)" }} />}
          tooltipTitle="border_bottom_right_radius"
        />
      </Stack>
    </>
  );
}

export default BorderRadiusPicker;
