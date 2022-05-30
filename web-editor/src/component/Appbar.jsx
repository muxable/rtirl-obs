import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useLocation } from "react-router-dom";

export const EditorAppbar = ({ setOpenDrawer }) => {
  const location = useLocation();
  // Do not render the app bar on the home screen
  if (location.pathname === "/") {
    return <></>;
  }
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => {
            setOpenDrawer(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Overlay Editor
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
