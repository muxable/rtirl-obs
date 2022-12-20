import KeyIcon from "@mui/icons-material/Key";
import { Box, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";

function PullKeyInput({ pullKey, onKeyChange }) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      bgcolor="black"
      sx={{ paddingTop: "2%", paddingLeft: "6%", paddingBottom: "2%" }}
    >
      <TextField
        fullWidth
        required
        error={!pullKey.valid}
        id="standard-required"
        label="Pull Key"
        helperText={pullKey.valid ? "" : "The pull key is invalid"}
        variant="standard"
        value={pullKey.value}
        onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
        onChange={(e) => {
          onKeyChange(e.target.value);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          width: "95%",
        }}
      />
    </Box>
  );
}

export default PullKeyInput;
