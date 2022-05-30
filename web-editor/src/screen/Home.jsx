import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { HomeBackground } from "../component/HomeBackground";
import { OverlayPreview } from "../component/OverlayPreview";
import homeTheme from "../theme/homeTheme";

//"https://assets.website-files.com/5d3ef00c73102c436bc83996/5d3ef00c73102c893bc83a28_logo-regular.png"
const pages = [
  {
    name: "Mapbox",
    route: "/mapbox",
    image: "https://source.unsplash.com/random/256x256",
  },
  {
    name: "Google Maps",
    route: "/googlemap",
    image: "https://source.unsplash.com/random/256x256",
  },
  {
    name: "Neighborhood",
    route: "/neighborhood",
    image: "https://source.unsplash.com/random/256x256",
  },
  {
    name: "Speed",
    route: "/speed",
    image: "https://source.unsplash.com/random/256x256",
  },
  {
    name: "Clock",
    route: "/clock",
    image: "https://source.unsplash.com/random/256x256",
  },
  {
    name: "Temperature",
    route: "/temperature",
    image: "https://source.unsplash.com/random/256x256",
  },
  {
    name: "Heading",
    route: "/heading",
    image: "https://source.unsplash.com/random/256x256",
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
          <Typography variant="h2" component="h2">
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
            sx={{ paddingTop: "2%" }}
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
        </Container>
      </Box>
      <HomeBackground />
    </ThemeProvider>
  );
};
