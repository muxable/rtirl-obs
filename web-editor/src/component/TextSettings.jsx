import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {
  IconButton,
  Input,
  InputAdornment,
  Divider,
  TextField,
  Tooltip,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import OpacitySharpIcon from "@mui/icons-material/OpacitySharp";
import PaddingIcon from "@mui/icons-material/Padding";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const TextSettings = React.memo(({ textDivCSS, setTextDivCSS }) => {
  const css = [
    `color: ${textDivCSS.textColor}`,
    `font-size: ${textDivCSS.fontSize}px`,
    `font-family: ${textDivCSS.fontFamily}`,
    `font-weight: ${textDivCSS.isBold ? "bold" : "normal"}`,
    `font-style: ${textDivCSS.isItalic ? "italic" : "normal"}`,
    `transform: rotate(${textDivCSS.rotation}deg)`,
    `background-color: ${textDivCSS.backgroundColor}`,
    `opacity: ${textDivCSS.opacity / 100}`,
    `border-color: ${textDivCSS.borderColor}`,
    `border: ${textDivCSS.borderWidth}px solid`,
    `align-text: ${textDivCSS.textAlign}`,
    `border-radius: ${textDivCSS["border_top_left_radius"]}% ${textDivCSS["border_top_right_radius"]}% ${textDivCSS["border_bottom_right_radius"]}% ${textDivCSS["border_bottom_left_radius"]}%`,
    `padding: ${textDivCSS.padding}px`,
  ].join(";\n");

  return (
    <Box
      style={{
        width: "300px",
        height: "100vh",
        padding: "16px",
      }}
      paddingLeft={4}
      borderRight={1}
      borderColor="#545454"
      backgroundColor="secondary.main"
    >
      <Stack
        spacing={1}
        divider={<Divider orientation="horizontal" flexItem />}
        ivider
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

            <Input
              style={{ marginTop: "6px", width: "94px" }}
              type="color"
              disableUnderline
              value={textDivCSS.textColor}
              onChange={(e) => {
                setTextDivCSS({
                  ...textDivCSS,
                  textColor: e.target.value,
                });
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Tooltip title="Text Color">
                    <FormatColorFillIcon />
                  </Tooltip>
                </InputAdornment>
              }
            />
          </Stack>
          <Select
            label="Font Family"
            defaultValue={"serif"}
            onChange={(e) =>
              setTextDivCSS({
                ...textDivCSS,
                fontFamily: e.target.value,
              })
            }
          >
            <MenuItem value="serif">serif</MenuItem>
            <MenuItem value="sans-serif">sans-serif</MenuItem>
          </Select>

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

            <Input
              style={{ marginTop: "6px", width: "94px" }}
              type="color"
              disableUnderline
              value={textDivCSS.backgroundColor}
              onChange={(e) => {
                setTextDivCSS({
                  ...textDivCSS,
                  backgroundColor: e.target.value,
                });
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Tooltip title="Background Color">
                    <FormatColorFillIcon />
                  </Tooltip>
                </InputAdornment>
              }
            />
          </Stack>

          <Stack direction={"row"} spacing={2}>
            <Tooltip title="Opacity">
              <OpacitySharpIcon />
            </Tooltip>
            <Slider
              size="small"
              defaultValue={100}
              value={textDivCSS.opacity}
              valueLabelDisplay="auto"
              onChange={(e, value) => {
                setTextDivCSS({
                  ...textDivCSS,
                  opacity: value,
                });
              }}
            />
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
            <Input
              style={{ marginTop: "6px", width: "94px" }}
              type="color"
              disableUnderline
              value={textDivCSS.borderColor}
              onChange={(e) => {
                setTextDivCSS({
                  ...textDivCSS,
                  borderColor: e.target.value,
                });
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Tooltip title="Border Color">
                    <BorderColorIcon />
                  </Tooltip>
                </InputAdornment>
              }
            />
          </Stack>

          <Stack direction={"row"} spacing={2}>
            <Tooltip title="Border Radius Top Left">
              <Slider
                size="small"
                defaultValue={100}
                value={textDivCSS.border_top_left_radius}
                valueLabelDisplay="auto"
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
        <Stack>
          <TextField
            label="CSS"
            multiline
            rows={3}
            defaultValue={css}
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(css);
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Stack>
      </Stack>
    </Box>
  );
});
