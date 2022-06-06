import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useLocation } from "react-router-dom";

export const EditorAppbar = ({ setOpenDrawer }) => {
  const location = useLocation();
  // Do not render the app bar on the home screen
  if (location.pathname === "/") {
    return <></>;
  }
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            RealtimeIRL Overlay Editor
          </Typography>
        </Box>
        <IconButton>
          <GitHubIcon
            onClick={() =>
              window.open("https://github.com/muxable/rtirl-obs", "_blank")
            }
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
