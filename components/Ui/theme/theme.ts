"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "div",
          body2: "span",
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#9373EE",
    },
    secondary: {
      main: "#dc004e",
      light: "#EFEFEF",
    },
    background: {
      default: "#f0f0f0",
      paper: "#F8F8F8",
    },
    text: {
      primary: "#1d1d1d",
      secondary: "#747474",
    },
  },
});

export default theme;
