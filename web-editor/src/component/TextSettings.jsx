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
  Input,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import BorderRadiusPicker from "./BorderRadiusPicker";
import ColorPickerToggle from "./ColorPickerToggle";
import FontPicker from "./FontPicker";

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
          <Input
            disableUnderline
            style={{ width: "110px" }}
            type="number"
            value={textDivCSS.rotation}
            onChange={(e) => {
              setTextDivCSS({
                ...textDivCSS,
                rotation: e.target.value % 360,
              });
            }}
            endAdornment={<InputAdornment position="end">deg</InputAdornment>}
            startAdornment={
              <InputAdornment position="start">
                <Tooltip title="Rotation">
                  <RotateLeftIcon />
                </Tooltip>
              </InputAdornment>
            }
          />

          <Input
            disableUnderline
            style={{ width: "110px" }}
            type="number"
            value={textDivCSS.padding}
            onChange={(e) => {
              setTextDivCSS({
                ...textDivCSS,
                padding: parseInt(e.target.value),
              });
            }}
            endAdornment={<InputAdornment position="end"> px </InputAdornment>}
            startAdornment={
              <InputAdornment position="start">
                <Tooltip title="Padding">
                  <PaddingIcon />
                </Tooltip>
              </InputAdornment>
            }
          />

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
            <Input
              disableUnderline
              type="number"
              value={textDivCSS.borderWidth}
              onChange={(e) => {
                setTextDivCSS({
                  ...textDivCSS,
                  borderWidth: e.target.value,
                });
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Tooltip title="Border Width">
                    <BorderOuterIcon />
                  </Tooltip>
                </InputAdornment>
              }
              endAdornment={<InputAdornment position="end">px</InputAdornment>}
            />
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
