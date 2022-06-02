import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

function TextOverlayExportPanel({ overlayDescription, hasValidPullKey, url }) {
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
        {hasValidPullKey ? (
          <TextField
            readOnly
            value={url}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(url);
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        ) : (
          <Typography color="inherit">
            Your pull key is required to generate the overlay URL.
          </Typography>
        )}
      </aside>
    </Box>
  );
}

export default TextOverlayExportPanel;
