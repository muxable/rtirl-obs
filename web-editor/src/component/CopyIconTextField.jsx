import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect, useState } from "react";
import { firebaseApp } from "../firebase";

export const CopyIconTextField = ({ value, multiline, row, label, type }) => {
  const analytics = getAnalytics(firebaseApp);
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
                  if (type) {
                    logEvent(analytics, "export_string", {
                      type: type,
                    });
                  }
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
