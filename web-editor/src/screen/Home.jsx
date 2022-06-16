import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { HomeBackground } from "../component/HomeBackground";
import { OverlayPreview } from "../component/OverlayPreview";
import altitudeImage from "../images/altitude.svg";
import clockImage from "../images/clock.svg";
import distanceImage from "../images/distance.svg";
import googleMapsImage from "../images/google_maps.jpg";
import headingImage from "../images/heading.svg";
import mapboxImage from "../images/mapbox.jpg";
import speedImage from "../images/mph.svg";
import neighborhoodImage from "../images/neighborhood.svg";
import temperatureImage from "../images/temperature.svg";
import homeTheme from "../theme/homeTheme";
import cortexImage from "../images/cortex.png";

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
];

export const Home = (props) => {
  return (
    <ThemeProvider theme={homeTheme}>
      <CssBaseline />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Container>
          <Typography variant="h2" component="h2" paddingTop={6}>
            REALTIMEIRL OVERLAY EDITOR
          </Typography>
          <Typography variant="h4" component="h4">
            Choose an overlay to get started
          </Typography>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 1, sm: 1, md: 3 }}
            sx={{ paddingTop: "2%", paddingBottom: "2%" }}
          >
            {pages.map((page, index) => (
              <Grid item xs={10} sm={5} md={3} key={index}>
                <OverlayPreview
                  name={page.name}
                  route={page.route}
                  image={page.image}
                />
              </Grid>
            ))}
          </Grid>
          <Typography variant="h3" component="h4">
            Community Overlays
          </Typography>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 1, sm: 1, md: 3 }}
            sx={{ paddingTop: "2%", paddingBottom: "2%" }}
          >
            <Grid item xs={10} sm={5} md={3}>
              <OverlayPreview
                name={"Cortex's React-based Overlay System"}
                href={"https://github.com/scallensc/react-realtimeirl"}
                image={cortexImage}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <HomeBackground />
    </ThemeProvider>
  );
};
