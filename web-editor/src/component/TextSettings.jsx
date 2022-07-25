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
import {
  Divider,
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

export const TextSettings = React.memo(({ textDivCSS, setTextDivCSS }) => {
  return (
    <Box
      style={{
        height: "100%",
      }}
    >
      <Stack
        spacing={1}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {/* fonts */}
        <Stack spacing={1}>
          <label> Font </label>
          <Box sx={{ width: "110px" }}>
            <NumberTextField
              value={textDivCSS.fontSize}
              setValue={(fontSize) => {
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
              color={textDivCSS.isBold ? "secondary" : "default"}
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
              color={textDivCSS.isItalic ? "secondary" : "default"}
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
              color={textDivCSS.textAlign === "left" ? "secondary" : "default"}
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
                textDivCSS.textAlign === "center" ? "secondary" : "default"
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
              color={textDivCSS.textAlign === "right" ? "secondary" : "default"}
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
        </Stack>

        {/* background */}
        <Stack spacing={1}>
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
        <Stack spacing={1}>
          <label> Border </label>
          <Stack direction={"row"} spacing={3}>
            <Box sx={{ width: "110px" }}>
              <NumberTextField
                value={textDivCSS.borderWidth}
                setValue={(borderWidth) => {
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
        <Stack></Stack>
      </Stack>
    </Box>
  );
});
