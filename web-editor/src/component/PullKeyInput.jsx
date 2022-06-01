import KeyIcon from "@mui/icons-material/Key";
import { Box, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";

const PULL_KEY_CHARSET = "abcdefghijklmnopqrstuvwxyz0123456789";

function validatePullkey(key) {
  key = key.trim();
  if (key.length !== 16) {
    return false;
  }
  let checksum = 13;
  for (let i = 0; i < 15; i++) {
    const index = PULL_KEY_CHARSET.indexOf(key[i]);
    checksum += index;
  }
  const checksumKey = PULL_KEY_CHARSET.charAt(
    checksum % PULL_KEY_CHARSET.length
  );
  const lastChar = key[key.length - 1];
  return checksumKey === lastChar;
}

function PullKeyInput({ pullKey, onKeyChange }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        required
        error={!validatePullkey(pullKey.value)}
        id="standard-required"
        label="Pull Key"
        helperText={
          validatePullkey(pullKey.value) ? "" : "The pull key is invalid"
        }
        variant="standard"
        value={pullKey.value}
        onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
        onChange={(e) => {
          onKeyChange({
            value: e.target.value,
            valid: validatePullkey(e.target.value),
          });
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default PullKeyInput;
