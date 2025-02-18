import { ResponsiveAppBar } from "./components/layout/home/components/Appbar";
import { ThemeProvider, CssBaseline, Box, Fab } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { useState, useMemo } from "react";
import { Journey } from "./components/layout/home/components/Journey";
import { AboutMe } from "./components/layout/home/components/AboutMe";
import { AlsoKnownAs } from "./components/layout/home/components/AlsoKnownAs";
import { Welcome } from "./components/layout/home/components/Welcome";
import { Counts } from "./components/layout/home/components/Counts";
import { Contributions } from "./components/layout/home/components/Contributions";
import { Portfolio } from "./components/layout/home/components/Portfolio";
import React from "react";
import { Footer } from "./components/layout/home/components/Footer";
import { KeyboardArrowUp } from "@mui/icons-material";
import { SocialMedia } from "./components/layout/home/components/SocialMedia";
function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const componentRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setScrolled(rect.top <= 0); // Eğer component üst kısmı geçtiyse
      }
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <ResponsiveAppBar
          scrolled={scrolled}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
        <Welcome />
        <AboutMe />
        <Journey />
        <Counts ref={componentRef} />
        <Contributions />
        {/* <AlsoKnownAs />*/}

        <Portfolio />
        <SocialMedia />
      </Box>
      <Footer />
      {showScroll && (
        <Fab
          color="primary"
          size="large"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            backgroundColor: scrolled
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
          }}
        >
          <KeyboardArrowUp fontSize="large" />
        </Fab>
      )}
    </ThemeProvider>
  );
}

export default App;
