import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { OverlayPreview } from "../component/OverlayPreview";
import { useState } from "react";
import { scrollbarStyles } from "../theme/editorTheme";
import altitudeImage from "../images/altitude.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import backgroundImage from "../images/background.png";
import clockImage from "../images/clock.svg";
import cortexImage from "../images/cortex.png";
import distanceImage from "../images/distance.svg";
import googleMapsImage from "../images/google_maps.jpg";
import headingImage from "../images/heading.svg";
import inclinationImage from "../images/inclination.svg";
import googleStreetViewImage from "../images/streetview.png";
import mapboxImage from "../images/mapbox.jpg";
import speedImage from "../images/mph.svg";
import neighborhoodImage from "../images/neighborhood.svg";
import temperatureImage from "../images/temperature.svg";
import homeTheme from "../theme/homeTheme";

const pages = [
  {
    name: "Mapbox",
    route: "/mapbox",
    image: mapboxImage,
  },
  {
    name: "Google Maps",
    route: "/googlemap",
    image: googleMapsImage,
  },
  {
    name: "Google Street View",
    route: "/googlestreetview",
    image: googleStreetViewImage,
  },
  {
    name: "Neighborhood",
    route: "/neighborhood",
    image: neighborhoodImage,
  },
  {
    name: "Speed",
    route: "/speed",
    image: speedImage,
  },
  {
    name: "Clock",
    route: "/clock",
    image: clockImage,
  },
  {
    name: "Weather",
    route: "/weather",
    image: temperatureImage,
  },
  {
    name: "Heading",
    route: "/heading",
    image: headingImage,
  },
  {
    name: "Total Distance",
    route: "/distance",
    image: distanceImage,
  },
  {
    name: "Altitude",
    route: "/altitude",
    image: altitudeImage,
  },
  {
    name: "Inclination by sprEEEzy",
    route: "/inclination",
    image: inclinationImage,
  },
  {
    name: "Heart Rate",
    route: "/heart_rate",
    text: "72 bpm",
  },
];

export const Home = (props) => {
  const [option, setOption] = useState("Design your own");
  const copyright = new Date().getFullYear() + " Muxable, Inc";

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <ThemeProvider theme={homeTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Box>
          <Typography variant="h2" component="h2" paddingTop={6}>
            REALTIMEIRL
            <div>
              <Typography variant="h2" display="block">
                OVERLAY EDITOR
              </Typography>
            </div>
          </Typography>
        </Box>

        <Box>
          <Select
            labelId="overlayoptions"
            disableUnderline
            variant="standard"
            defaultValue={option}
            value={option}
            onChange={handleChange}
            IconComponent={KeyboardArrowDownIcon}
            MenuProps={{
              sx: {
                ".MuiMenu-paper": {
                  outline: "solid 3px",
                  marginTop: "4px",
                  outlineColor: "white",
                  backgroundColor: "black",
                  width: { xs: "23rem", md: "28rem" },
                  borderRadius: "0px",
                },
              },
            }}
            sx={{
              backgroundColor: "transparent",
              width: { xs: "23rem", md: "28rem" },
              height: "3rem",
              outlineColor: "white",
              outlineStyle: "solid",
              outlineWidth: "3px",
              marginTop: "1%",
              marginBottom: "3%",
              ".MuiSelect-iconStandard": {
                marginRight: "2%",
                stroke: "white",
                strokeWidth: "2px",
              },
            }}
          >
            <MenuItem
              value={"Design your own"}
              disableRipple
              style={option === "Design your own" ? { display: "none" } : {}}
            >
              <Typography variant="h5" sx={{ marginTop: "5px" }}>
                Design your own
              </Typography>
            </MenuItem>

            <MenuItem
              value={"Community Templates"}
              disableRipple
              style={
                option === "Community Templates" ? { display: "none" } : {}
              }
            >
              <Typography variant="h5" sx={{ marginTop: "5px" }}>
                Community Templates
              </Typography>
            </MenuItem>
          </Select>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={4}
          sx={{ overflowX: "auto", ...scrollbarStyles }}
        >
          {option === "Design your own" && (
            <div>
              <Grid
                container
                alignItems="center"
                justifyContent="flex-start"
                direction={{ xs: "column", md: "row" }}
                wrap="nowrap"
                spacing={{ xs: 4, sm: 3, md: 3 }}
                sx={{ paddingBottom: "2%" }}
              >
                {pages.map((page, index) => (
                  <Grid item xs="auto" key={index}>
                    <OverlayPreview
                      name={page.name}
                      route={page.route}
                      image={page.image}
                      text={page.text}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
          {option === "Community Templates" && (
            <div sx={{ overflowX: "auto" }}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 1, sm: 1, md: 3 }}
                sx={{ paddingBottom: "2%" }}
              >
                <Grid item xs={10} sm={5} md={12}>
                  <OverlayPreview
                    name={"Cortex's React-based Overlay System"}
                    href={"https://github.com/scallensc/react-realtimeirl"}
                    image={cortexImage}
                  />
                </Grid>
              </Grid>
            </div>
          )}
        </Box>

        <Box sx={{ bottom: "0", position: { md: "absolute" }, width: "100%" }}>
          <Typography fontWeight="bold">&copy; {copyright}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
