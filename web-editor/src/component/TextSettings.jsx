import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import PaddingIcon from "@mui/icons-material/Padding";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import {
  Divider,
  IconButton,
  Input,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import React from "react";
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
          <Stack direction={"row"} spacing={2}>
            <Input
              style={{ marginLeft: "4px", width: "84px" }}
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
                justifyContent: "center",
              }}
            >
              <Tooltip title="Text Color">
                <FormatColorFillIcon />
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
          </Stack>
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
          <Stack direction={"row"} spacing={2}>
            <Input
              style={{ marginLeft: "4px", width: "100px" }}
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

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Tooltip title="Background Color">
                <FormatColorFillIcon />
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

          <Stack direction={"row"} spacing={2}>
            <Tooltip title="Padding">
              <PaddingIcon />
            </Tooltip>
            <Slider
              size="small"
              defaultValue={100}
              value={textDivCSS.padding}
              valueLabelDisplay="auto"
              valueLabelFormat={(x) => `${x} px`}
              color="text"
              onChange={(e, value) => {
                setTextDivCSS({
                  ...textDivCSS,
                  padding: value,
                });
              }}
            />
          </Stack>
        </Stack>

        {/* border */}
        <Stack spacing={1}>
          <label> Border </label>
          <Stack direction={"row"} spacing={1}>
            <Input
              style={{ marginLeft: "4px", width: "84px" }}
              type="number"
              value={textDivCSS.borderWidth}
              onChange={(e) => {
                setTextDivCSS({
                  ...textDivCSS,
                  borderWidth: e.target.value,
                });
              }}
              endAdornment={<InputAdornment position="end">px</InputAdornment>}
            />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Tooltip title="Background Color">
                <FormatColorFillIcon />
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

          <Stack direction={"row"} spacing={2}>
            <Tooltip title="Border Radius Top Left">
              <Slider
                size="small"
                defaultValue={100}
                value={textDivCSS.border_top_left_radius}
                valueLabelDisplay="auto"
                color="text"
                onChange={(e, value) => {
                  setTextDivCSS({
                    ...textDivCSS,
                    border_top_left_radius: value,
                  });
                }}
              />
            </Tooltip>
            <Tooltip title="Border Radius Top Right">
              <Slider
                size="small"
                defaultValue={100}
                value={textDivCSS.border_top_right_radius}
                valueLabelDisplay="auto"
                color="text"
                onChange={(e, value) => {
                  setTextDivCSS({
                    ...textDivCSS,
                    border_top_right_radius: value,
                  });
                }}
              />
            </Tooltip>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Tooltip title="Border Radius Bottom Left">
              <Slider
                size="small"
                defaultValue={100}
                value={textDivCSS.border_bottom_left_radius}
                valueLabelDisplay="auto"
                color="text"
                onChange={(e, value) => {
                  setTextDivCSS({
                    ...textDivCSS,
                    border_bottom_left_radius: value,
                  });
                }}
              />
            </Tooltip>
            <Tooltip title="Border Radius Bottom Right">
              <Slider
                size="small"
                defaultValue={100}
                value={textDivCSS.border_bottom_right_radius}
                valueLabelDisplay="auto"
                color="text"
                onChange={(e, value) => {
                  setTextDivCSS({
                    ...textDivCSS,
                    border_bottom_right_radius: value,
                  });
                }}
              />
            </Tooltip>
          </Stack>
        </Stack>
        <Stack></Stack>
      </Stack>
    </Box>
  );
});
