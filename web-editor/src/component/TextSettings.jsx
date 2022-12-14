import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import PaddingIcon from "@mui/icons-material/Padding";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import BorderOuterIcon from "@mui/icons-material/BorderOuter";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import BlurLinearOutlinedIcon from "@mui/icons-material/BlurLinearOutlined";
import LineWeightOutlinedIcon from "@mui/icons-material/LineWeightOutlined";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import BorderRadiusPicker from "./BorderRadiusPicker";
import ColorPickerToggle from "./ColorPickerToggle";
import FontPicker from "./FontPicker";
import { NumberTextField } from "./NumberTextField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const TextSettings = React.memo(({ textDivCSS, setTextDivCSS }) => {
  return (
    <Box
      style={{
        height: "100%",
      }}
    >
      <Stack
        spacing={1}
      >
        {/* fonts */}
        <Stack spacing={1} bgcolor="black" sx={{marginTop:"3%", paddingLeft:"6%", paddingTop:"2%"}}>
          <label> Font style </label>
          <Box sx={{ width: "110px" }}>
            <NumberTextField
              value={textDivCSS.fontSize}
              setValue={(fontSize) => {
                fontSize = Math.max(parseInt(fontSize), 0);
                setTextDivCSS({
                  ...textDivCSS,
                  fontSize,
                });
              }}
              endAdornmentUnit="px"
              prefixIcon={<FormatSizeIcon />}
              tooltipTitle="Font size"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Tooltip title="Text Color">
              <ColorLensIcon />
            </Tooltip>
            <ColorPickerToggle
              color={textDivCSS.textColor}
              setColor={(color) => {
                setTextDivCSS({
                  ...textDivCSS,
                  textColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                });
              }}
            />
          </Box>
          <FontPicker
            apiKey="AIzaSyCNxjzD_cGkwlE-6OgL3JsAJuCcnh6SWG8"
            activeFontFamily={textDivCSS.fontFamily}
            onChange={(nextFont) => {
              setTextDivCSS({
                ...textDivCSS,
                fontFamily: nextFont.family,
              });
            }}
          />

          <Stack direction="row">
            <IconButton
              color={textDivCSS.isBold ? "inherit" : "default"}
              onClick={() => {
                setTextDivCSS({
                  ...textDivCSS,
                  isBold: !textDivCSS.isBold,
                });
              }}
            >
              <Tooltip title="Bold">
                <FormatBoldIcon />
              </Tooltip>
            </IconButton>
            <IconButton
              color={textDivCSS.isItalic ? "inherit" : "default"}
              onClick={() => {
                setTextDivCSS({
                  ...textDivCSS,
                  isItalic: !textDivCSS.isItalic,
                });
              }}
            >
              <Tooltip title="Italic">
                <FormatItalicIcon />
              </Tooltip>
            </IconButton>
            <IconButton
              color={textDivCSS.textAlign === "left" ? "inherit" : "default"}
              onClick={() => {
                setTextDivCSS({
                  ...textDivCSS,
                  textAlign: "left",
                });
              }}
            >
              <Tooltip title="Align Left">
                <FormatAlignLeftIcon />
              </Tooltip>
            </IconButton>
            <IconButton
              color={
                textDivCSS.textAlign === "center" ? "inherit" : "default"
              }
              onClick={() => {
                setTextDivCSS({
                  ...textDivCSS,
                  textAlign: "center",
                });
              }}
            >
              <Tooltip title="Align Center">
                <FormatAlignCenterIcon />
              </Tooltip>
            </IconButton>
            <IconButton
              color={textDivCSS.textAlign === "right" ? "inherit" : "default"}
              onClick={() => {
                setTextDivCSS({
                  ...textDivCSS,
                  textAlign: "right",
                });
              }}
            >
              <Tooltip title="Align Right">
                <FormatAlignRightIcon />
              </Tooltip>
            </IconButton>
          </Stack>
          <Stack>
          <Accordion
            sx={{
              backgroundColor: "primary.main",
              width:"85%",
              marginBottom:"4%"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Additional Options
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={1}>
                <label> Stroke </label>
                <NumberTextField
                  value={textDivCSS.strokeWidth}
                  setValue={(strokeWidth) => {
                    strokeWidth = Math.max(0, parseInt(strokeWidth));
                    setTextDivCSS({
                      ...textDivCSS,
                      strokeWidth,
                    });
                  }}
                  endAdornmentUnit="px"
                  prefixIcon={<LineWeightOutlinedIcon />}
                  tooltipTitle="Stroke Width"
                ></NumberTextField>
                <Stack direction={"row"} spacing={1}>
                  <Tooltip title="Stroke Color">
                    <ColorLensIcon />
                  </Tooltip>
                  <ColorPickerToggle
                    color={textDivCSS.strokeColor}
                    setColor={(color) => {
                      setTextDivCSS({
                        ...textDivCSS,
                        strokeColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                      });
                    }}
                  />
                </Stack>
                <label> Text Shadow </label>
                <NumberTextField
                  value={textDivCSS.hShadow}
                  setValue={(hShadow) => {
                    hShadow = parseInt(hShadow);
                    setTextDivCSS({
                      ...textDivCSS,
                      hShadow,
                    });
                  }}
                  endAdornmentUnit="px"
                  prefixIcon={<BlurLinearOutlinedIcon />}
                  tooltipTitle="H-Shadow"
                ></NumberTextField>
                <NumberTextField
                  value={textDivCSS.vShadow}
                  setValue={(vShadow) => {
                    vShadow = parseInt(vShadow);
                    setTextDivCSS({
                      ...textDivCSS,
                      vShadow,
                    });
                  }}
                  endAdornmentUnit="px"
                  prefixIcon={
                    <BlurLinearOutlinedIcon
                      sx={{ transform: "rotate(-90deg)" }}
                    />
                  }
                  tooltipTitle="V-Shadow"
                ></NumberTextField>
                <NumberTextField
                  value={textDivCSS.blurRadius}
                  setValue={(blurRadius) => {
                    blurRadius = Math.max(0, parseInt(blurRadius));
                    setTextDivCSS({
                      ...textDivCSS,
                      blurRadius,
                    });
                  }}
                  endAdornmentUnit="px"
                  prefixIcon={<BlurOnIcon />}
                  tooltipTitle="Blur Radius"
                ></NumberTextField>
                <Stack direction={"row"} spacing={1}>
                  <Tooltip title="Shadow Color">
                    <ColorLensIcon />
                  </Tooltip>
                  <ColorPickerToggle
                    color={textDivCSS.shadowColor}
                    setColor={(color) => {
                      setTextDivCSS({
                        ...textDivCSS,
                        shadowColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                      });
                    }}
                  />
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>
          </Stack>
        </Stack>

        {/* background */}
        <Stack spacing={1} bgcolor="black" sx={{marginTop:"3%", paddingLeft:"6%", paddingTop:"2%", paddingBottom:"2%"}}>
          <label> Background </label>
          <Box sx={{ width: "110px" }}>
            <NumberTextField
              value={textDivCSS.rotation}
              setValue={(rotation) => {
                setTextDivCSS({
                  ...textDivCSS,
                  rotation,
                });
              }}
              endAdornmentUnit="deg"
              prefixIcon={<RotateLeftIcon />}
              tooltipTitle="Rotation"
            />
          </Box>
          <Box sx={{ width: "110px" }}>
            <NumberTextField
              value={textDivCSS.padding}
              setValue={(padding) => {
                padding = Math.max(parseInt(padding), 0);
                setTextDivCSS({
                  ...textDivCSS,
                  padding: parseInt(padding),
                });
              }}
              endAdornmentUnit="px"
              prefixIcon={<PaddingIcon />}
              tooltipTitle="Padding"
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Tooltip title="Background Color">
              <ColorLensIcon />
            </Tooltip>
            <ColorPickerToggle
              color={textDivCSS.backgroundColor}
              setColor={(color) => {
                setTextDivCSS({
                  ...textDivCSS,
                  backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                });
              }}
            />
          </Box>
        </Stack>

        {/* border */}
        <Stack spacing={1} bgcolor="black" sx={{paddingLeft:"6%",paddingTop:"2%",paddingBottom:"5%"}}>
          <label> Border </label>
          <Stack direction={"row"} spacing={3}>
            <Box sx={{ width: "110px" }}>
              <NumberTextField
                value={textDivCSS.borderWidth}
                setValue={(borderWidth) => {
                  borderWidth = Math.max(parseInt(borderWidth), 0);
                  setTextDivCSS({
                    ...textDivCSS,
                    borderWidth,
                  });
                }}
                endAdornmentUnit="px"
                prefixIcon={<BorderOuterIcon />}
                tooltipTitle="Border Width"
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Tooltip title="Border Color">
                <ColorLensIcon />
              </Tooltip>
              <ColorPickerToggle
                color={textDivCSS.borderColor}
                setColor={(color) => {
                  setTextDivCSS({
                    ...textDivCSS,
                    borderColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                  });
                }}
              />
            </Box>
          </Stack>
          <BorderRadiusPicker
            textDivCSS={textDivCSS}
            setTextDivCSS={setTextDivCSS}
          />
        </Stack>
      </Stack>
    </Box>
  );
});
