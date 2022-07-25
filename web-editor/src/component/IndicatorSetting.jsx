import react from "react";
import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ColorPickerToggle from "./ColorPickerToggle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { NumberTextField } from "./NumberTextField";
import BorderOuterIcon from "@mui/icons-material/BorderOuter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const IndicatorSetting = ({ indicatorStyle, setIndicatorStyle }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        Indicator Style
      </AccordionSummary>
      <AccordionDetails>
        <Stack>
          <Stack direction={"row"} spacing={3}>
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
                  width: `${indicatorStyle.width}px`,
                  height: `${indicatorStyle.height}px`,
                  borderRadius: `${indicatorStyle.borderRadius}%`,
                  backgroundColor: indicatorStyle.backgroundColor,
                }}
              />
            </Box>
          </Stack>
          <Stack spacing={3}>
            <NumberTextField
              value={indicatorStyle.width}
              setValue={(width) => {
                setIndicatorStyle({
                  ...indicatorStyle,
                  width,
                });
              }}
              endAdornmentUnit="px"
              prefixIcon={<HorizontalRuleIcon />}
              tooltipTitle="Width"
            />
            <NumberTextField
              value={indicatorStyle.height}
              setValue={(height) => {
                setIndicatorStyle({
                  ...indicatorStyle,
                  height,
                });
              }}
              endAdornmentUnit="px"
              prefixIcon={
                <HorizontalRuleIcon sx={{ transform: "rotate(90deg)" }} />
              }
              tooltipTitle="Height"
            />
            <NumberTextField
              value={indicatorStyle.borderRadius}
              setValue={(borderRadius) => {
                setIndicatorStyle({
                  ...indicatorStyle,
                  borderRadius,
                });
              }}
              endAdornmentUnit="%"
              prefixIcon={<BorderOuterIcon />}
              tooltipTitle="Border Radius"
            />
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
