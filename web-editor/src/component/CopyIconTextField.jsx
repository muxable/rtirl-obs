import { TextField, InputAdornment, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const CopyIconTextField = ({ value }) => {
  const [copied, setCopied] = useState(false);

  return (
    <TextField
      readOnly
      value={value}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Tooltip title={copied ? "Copied" : "Copy URL"}>
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(value);
                  setCopied(true);
                }}
              >
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};
