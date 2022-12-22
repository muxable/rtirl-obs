import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Tooltip, Link } from "@mui/material";
import * as React from "react";
import { useLocation } from "react-router-dom";

export const EditorAppbar = () => {
  const location = useLocation();
  // Do not render the app bar on the home screen
  if (location.pathname === "/") {
    return <></>;
  }
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ justifyContent: "flex-start" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            RealtimeIRL Overlay Editor
          </Typography>
        </Box>
        <Box sx={{ paddingLeft: "1%" }}>
          <Tooltip title="Go back to main page">
            <Link href="/" underline="none">
              Home
            </Link>
          </Tooltip>
        </Box>
        <Box sx={{ paddingLeft: "1%" }}>
          <Tooltip title="Join the Discord">
            <Link
              underline="none"
              sx={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://discord.gg/uWuzfEUBTX", "_blank")
              }
            >
              Discord
            </Link>
          </Tooltip>
        </Box>
        <Box sx={{ paddingLeft: "1%" }}>
          <Tooltip title="View the repository">
            <Link
              underline="none"
              sx={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://github.com/muxable/rtirl-obs", "_blank")
              }
            >
              GitHub
            </Link>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
