import { createTheme } from "@mui/material/styles";

const primaryColor = "#9C528B";
const secondPrimaryColor = "#3AAFA9";
const secondDarkPrimaryColor = "#377572";
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColor, // Ana renk
    },

    secondary: {
      main: secondPrimaryColor, // Soluk kırmızı tonunda ikinci renk
    },
    background: {
      default: "#eeeeee", // Hafif krem arka plan
      paper: primaryColor, // Kartlar ve modallar için yumuşak gri arka plan
    },
    text: {
      primary: "#3d3d3d", // Koyu gri metin rengi
      secondary: "#eee", // Daha açık gri
    },
    success: { main: "#4caf50" },
    error: { main: "#f44336" },
    warning: { main: "#ff9800" },
    info: { main: "#2196f3" },
  },
  typography: {
    fontFamily: "'Delius', 'Slabo 27px', sans-serif",
    button: { textTransform: "none" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7D5BA6",
    },
    secondary: {
      main: secondDarkPrimaryColor,
    },
    background: {
      default: "#121212", // Koyu arka plan
      paper: "#7D5BA6", // Daha yumuşak koyu gri
    },
    text: {
      primary: "#ffffff", // Beyaz metin
      secondary: "#222", // Açık gri metin
    },
    success: { main: "#66bb6a" },
    error: { main: "#e57373" },
    warning: { main: "#ffa726" },
    info: { main: "#64b5f6" },
  },
  typography: {
    fontFamily: "'Delius', 'Slabo 27px', sans-serif",
    button: { textTransform: "none" },
  },
});

export { lightTheme, darkTheme };
