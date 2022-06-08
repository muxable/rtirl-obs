import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Icon, Tooltip } from "@mui/material";
import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useLocation } from "react-router-dom";
import discordIcon from "../images/discord.png";

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
        <Box>
          <Tooltip title="Join the Discord">
            <IconButton
              onClick={() =>
                window.open("https://discord.gg/uWuzfEUBTX", "_blank")
              }
            >
              <Icon>
                <img src={discordIcon} alt="discord" height={25} width={25} />
              </Icon>
            </IconButton>
          </Tooltip>
          <Tooltip title="View the repository">
            <IconButton
              onClick={() =>
                window.open("https://github.com/muxable/rtirl-obs", "_blank")
              }
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
