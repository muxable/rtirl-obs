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
  type,
}) {
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
            <CopyIconTextField
              type={type}
              value={url}
              multiline={false}
              row={1}
            />
            {streamElementExportable && (
              <>
                <h2> StreamElements iframe </h2>
                <Typography color={"warning.main"}>
                  Warning! If you want to use the StreamElements iFrame, you
                  have to provide your own Mapbox API Key.
                </Typography>
                <CopyIconTextField
                  type={`${type}_iframe`}
                  value={iFrameTag}
                  multiline={false}
                  row={1}
                />
              </>
            )}
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
