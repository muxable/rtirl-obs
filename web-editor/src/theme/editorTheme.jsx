import { createTheme } from "@mui/material/styles";
import OskariBook from "../fonts/OskariG2-Book.ttf";
import OskariSemiBold from "../fonts/OskariG2-SemiBold.ttf";

const editorTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#262626",
      border: "#545454",
      contrastText: "white",
    },
    secondary: {
      main: "#000000",
      text: "white",
      contrastText: "white",
    },
    background: {
      default: "black",
      contrastText: "white",
    },
    error: {
      main: "rgba(255, 68, 68, 0.4)",
    },
    text: {
      main: "rgba(246, 243, 237, 0.8)",
      title: "rgba(246, 243, 237, 1)",
    },
  },
  typography: {
    fontFamily: "Oskari G2, Arial",
    allVariants: {
      color: "rgba(246, 243, 237, 0.8)",
    },
    h6: {
      color: "rgba(246, 243, 237, 1)",
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
          font-family: 'Oskari G2 SemiBold';
          src: url(${OskariSemiBold});
        }
      `,
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: "rgba(246, 243, 237, 0.8)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "rgba(246, 243, 237, 1)",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "rgba(246, 243, 237, 1)",
          },
          color: "rgba(246, 243, 237, 0.8)",
        },
      },
    },
  },
});

export default editorTheme;
