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
            <CopyIconTextField value={url} multiline={false} row={1} />
            {streamElementExportable && (
              <>
                <h2> StreamElements iframe </h2>
                <CopyIconTextField
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
