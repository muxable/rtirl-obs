import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SpeedIcon from "@mui/icons-material/Speed";
import StraightenIcon from "@mui/icons-material/Straighten";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { Link } from "react-router-dom";

export const NavigationDrawer = ({ open, setOpen }) => {
  const actions = [
    { icon: <MyLocationIcon />, name: "Neighborhood" },
    { icon: <AccessTimeIcon />, name: "Clock" },
    { icon: <ThermostatIcon />, name: "Weather" },
    { icon: <SpeedIcon />, name: "Speed" },
    { icon: <ExploreIcon />, name: "Heading" },
    { icon: <StraightenIcon />, name: "Distance" },
  ];

  return (
    <SwipeableDrawer
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Box
        style={{
          marginTop: "16px",
          width: "256px",
        }}
      >
        <List>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to={"/mapbox"} style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Mapbox" />
            </ListItem>
          </Link>
          <Link to={"/googlemap"} style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Google Maps" />
            </ListItem>
          </Link>
        </List>
        <Divider />

        <List>
          {actions.map((action, index) => (
            <Link
              to={`/${action.name}`}
              style={{ textDecoration: "none" }}
              key={action.name}
            >
              <ListItem button key={index}>
                <ListItemIcon>{action.icon}</ListItemIcon>
                <ListItemText primary={action.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};
