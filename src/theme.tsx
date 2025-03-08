import { createTheme } from "@mui/material/styles";

const secondPrimaryColor = '#E07A5F';
const secondDarkPrimaryColor = "#C9D99E";
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: secondPrimaryColor, // Ana renk
    },

    secondary: {
      main: '#669B7C',
      
    },
    background: {
      default: "#eeeeee", 
      paper: secondDarkPrimaryColor, 
    },
    text: {
      primary: "#3d3d3d",
      secondary: "#eeeeee", 
    },
    success: { main: "#4caf50" },
    error: { main: "#f44336" },
    warning: { main: "#ff9800" },
    info: { main: "#2196f3" },
  },
  typography: {
    fontFamily: ' "Indie Flower", cursive',
    button: { textTransform: "none" },
  },
  
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#16A085",
    },
    secondary: {
      main: secondDarkPrimaryColor,
    },
    background: {
      default: '#2E2E2E', // Koyu arka plan
      paper: "#16A085", // Daha yumuşak koyu gri
    },
    text: {
      primary: "#eeeeee", // Beyaz metin
      secondary: "#222", // Açık gri metin
    },
    success: { main: "#66bb6a" },
    error: { main: "#e57373" },
    warning: { main: "#ffa726" },
    info: { main: "#64b5f6" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    button: { textTransform: "none" },
  },
});

export { lightTheme, darkTheme };
