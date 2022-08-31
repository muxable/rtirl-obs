import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import HansonBold from "../fonts/Hanson-Bold.ttf";
import OskariBook from "../fonts/OskariG2-Book.ttf";

let homeTheme = createTheme({
  typography: {
    fontFamily: "Oskari G2, Arial",
    h2: {
      fontFamily: "Hanson, Arial",
    },
    h4: {
      fontFamily: "Hanson, Arial",
    },
    h5: {
      fontFamily: "Hanson, Arial",
    },
    allVariants: {
      color: "white",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Oskari G2';
          src: url(${OskariBook});
        }

        @font-face {
          font-family: 'Hanson';
          src: url(${HansonBold});
        }
      `,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1280,
      xl: 1580,
    },
  },
});

homeTheme = responsiveFontSizes(homeTheme, {
  breakpoints: ["xs", "sm", "md", "lg", "xl"],
  factor: 5,
});

export default homeTheme;
