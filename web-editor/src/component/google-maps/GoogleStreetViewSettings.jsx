import KeyIcon from "@mui/icons-material/Key";
import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import PullKeyInput from "../PullKeyInput";

export const GoogleStreetViewSettings = ({
  pullKey,
  onPullKeyChange,
  apiKey,
  onApiKeyChange,
}) => {
  return (
    <Box
      style={{
        padding: "16px",
        height: "100%",
      }}
      paddingLeft={4}
      borderRight={1}
      borderBottom={1}
      borderColor="primary.border"
      backgroundColor="primary.main"
    >
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        textAlign="left"
      >
        <Typography variant="h6" component="div">
          Settings
        </Typography>

        <PullKeyInput pullKey={pullKey} onKeyChange={onPullKeyChange} />

        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            required
            id="standard-required"
            label="Google Maps API Key"
            variant="standard"
            value={apiKey}
            error={!apiKey}
            helperText={apiKey ? "" : "The API key is required"}
            onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            onChange={(e) => onApiKeyChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};
