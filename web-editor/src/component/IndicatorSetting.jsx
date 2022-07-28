import {
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ColorPickerToggle from "./ColorPickerToggle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ColorLensIcon from "@mui/icons-material/ColorLens";
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
          <Stack spacing={2}>
            <Stack direction={"row"} spacing={1}>
              <ColorLensIcon />
              <ColorPickerToggle
                color={indicatorStyle.backgroundColor}
                setColor={(color) => {
                  setIndicatorStyle({
                    ...indicatorStyle,
                    backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                  });
                }}
              />
            </Stack>
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
