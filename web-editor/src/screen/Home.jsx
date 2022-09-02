import { Box, Container, CssBaseline, Grid, Typography, Select, MenuItem } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { OverlayPreview } from "../component/OverlayPreview";
import { useState } from 'react'
import altitudeImage from "../images/altitude.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
];

export const Home = (props) => {
  const [option, setOption] = useState('Design your own');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <ThemeProvider theme={homeTheme}>
      <CssBaseline />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Container>
          <Typography variant="h2" component="h2" paddingTop={6}>
            REALTIMEIRL <Typography variant="h2" display="block">OVERLAY EDITOR</Typography>
          </Typography>

          <Select
    labelId="overlayoptions"
    disableUnderline
    variant="standard"
    defaultValue={option}
    value={option}
    onChange={handleChange}
    IconComponent={KeyboardArrowDownIcon}
    MenuProps={{
      
      sx:{
        '.MuiMenu-paper' : {
          outline:'solid 4px',
          marginTop:"4px",
        outlineColor:"white",
          backgroundColor:'black',
          width:"32%",
          borderRadius:"0px"
        }
      }
    }}
    sx={{backgroundColor:"transparent", width:"35%", height:"6vh", outlineColor:"white", outlineStyle:"solid", outlineWidth:"3px", marginTop:"1%",
    '.MuiSelect-iconStandard' : {
      marginRight:'2%',
      stroke:"white",
      strokeWidth:'2px'
    }
  }}>
    <MenuItem value={"Design your own"} disableRipple><Typography variant="h5" sx={{marginTop:'5px'}}>Design your own</Typography></MenuItem>
    <MenuItem value={"Community Templates"} disableRipple><Typography variant="h5" sx={{marginTop:'5px'}}>Community Templates</Typography></MenuItem>

  </Select>
  {option === "Design your own" && (
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 1, sm: 1, md: 3 }}
            sx={{ paddingTop: "4%", paddingBottom: "2%" }}
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
  )}
  {option === 'Community Templates' && (
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
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};
