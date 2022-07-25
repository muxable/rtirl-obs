import react from "react";
import { Box, Stack, Tooltip, Input, InputAdornment } from "@mui/material";
import ColorPickerToggle from "./ColorPickerToggle";

export const IndicatorSetting = ({ indicatorStyle, setIndicatorStyle }) => {
  return (
    <>
      <Stack direction="row" spacing={3}>
        <label>Indicator Color</label>
        <ColorPickerToggle
          color={indicatorStyle.backgroundColor}
          setColor={(color) => {
            setIndicatorStyle({
              ...indicatorStyle,
              backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
            });
          }}
        />

        <Box>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "45%",
              backgroundColor: indicatorStyle.backgroundColor,
            }}
          />
        </Box>
      </Stack>
    </>
  );
};
