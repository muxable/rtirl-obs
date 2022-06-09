import { TextField, InputAdornment, IconButton, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

export const CopyIconTextField = ({ value, multiline, row, label }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1500);
    }
  }, [copied]);

  return (
    <TextField
      disabled
      label={label}
      readOnly
      multiline={multiline}
      rows={row}
      value={value}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Tooltip title={copied ? "Copied" : "Copy"} placement={"top"}>
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(value);
                  setCopied(true);
                }}
              >
                {copied ? <CheckIcon /> : <ContentCopyIcon />}
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};
