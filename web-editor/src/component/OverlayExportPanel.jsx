import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { CopyIconTextField } from "./CopyIconTextField";

function OverlayExportPanel({
  overlayDescription,
  isExportable,
  url,
  streamElementExportable,
  iFrameTag,
  textDivCSS,
}) {
  const properties = [
    `color: ${textDivCSS.textColor}`,
    `font-size: ${textDivCSS.fontSize}px`,
    `font-family: ${textDivCSS.fontFamily}`,
    `font-weight: ${textDivCSS.isBold ? "bold" : "normal"}`,
    `font-style: ${textDivCSS.isItalic ? "italic" : "normal"}`,
    `transform: rotate(${textDivCSS.rotation}deg)`,
    `background-color: ${textDivCSS.backgroundColor}`,
    `border-color: ${textDivCSS.borderColor}`,
    `border-width: ${textDivCSS.borderWidth}px`,
    "border-style: solid",
    `text-align: ${textDivCSS.textAlign}`,
    `border-radius: ${textDivCSS.border_top_left_radius}% ${textDivCSS.border_top_right_radius}% ${textDivCSS.border_bottom_right_radius}% ${textDivCSS.border_bottom_left_radius}%`,
    `padding: ${textDivCSS.padding}px`,
  ].join(";\n");
  const css = `@import url('https://fonts.googleapis.com/css2?family=${textDivCSS.fontFamily}&display=swap');
  body {\n${properties}\n}`;
  return (
    <Box
      style={{
        marginTop: "8px",
        padding: "8px",
      }}
      border={1}
      borderColor="primary.border"
      backgroundColor="primary.main"
    >
      <aside>
        <h2> {overlayDescription} </h2>
        {isExportable ? (
          <Stack spacing={2}>
            <CopyIconTextField value={url} multiline={false} row={1} />
            {streamElementExportable && (
              <>
                <h2> StreamElements iframe </h2>
                <Typography color={"warning.main"}>
                  Warning! If you want to use the StreamElements iFrame, you
                  have to provide your own Mapbox API Key.
                </Typography>
                <CopyIconTextField
                  value={iFrameTag}
                  multiline={false}
                  row={1}
                />
              </>
            )}
            <CopyIconTextField
              label="CSS"
              value={css}
              multiline={true}
              row={3}
            />
          </Stack>
        ) : (
          <Typography color="inherit">
            Please correct all the errors in the settings section.
          </Typography>
        )}
      </aside>
    </Box>
  );
}

export default OverlayExportPanel;
