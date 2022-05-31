import { createTheme } from "@mui/material/styles";
import OskariBook from "../fonts/OskariG2-Book.ttf";
import OskariSemiBold from "../fonts/OskariG2-SemiBold.ttf";

const colors = {
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
};

const editorTheme = createTheme({
  palette: {
    mode: "dark",
    ...colors,
  },
  typography: {
    fontFamily: "Oskari G2, Arial",
    allVariants: {
      color: colors.text.main,
    },
    h6: {
      color: colors.text.title,
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
          color: colors.text.main,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: colors.text.title,
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: colors.text.title,
          },
          color: colors.text.main,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid",
          borderColor: colors.primary.border,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.text.main,
        },
        underlineAlways: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default editorTheme;
