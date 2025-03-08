import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { BrightnessHigh, DarkMode } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import CuteProfile from "../../../../assets/CuteProfile.png";
import logo from "../../../../assets/logo.png";

const pages = ["Home", "About Me", "Portfolio"];

interface ResponsiveAppBarProps {
  scrolled: boolean;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({
  scrolled,
  darkMode,
  setDarkMode,
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const theme = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    console.log(scrolled);
  }, [scrolled]);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: scrolled
          ? theme.palette.secondary.main + "33"
          : theme.palette.primary.main + "33",
        transition: "background-color 0.3s ease", // Adding transition for smooth color change
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={logo}
            height={"46px"}
            width={"46px"}
            style={{
              backgroundColor: "white",
              padding: 5,
              borderRadius: 100,
              marginRight: 20,
            }}
          />
          {/* Removed Elifnur Demir */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() =>
                    scrollToSection(page.toLowerCase().replace(" ", "-"))
                  }
                >
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {/* Removed Elifnur Demir */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() =>
                  scrollToSection(page.toLowerCase().replace(" ", "-"))
                }
                sx={{
                  m: 1,
                  display: "block",
                }}
              >
                <Typography variant="h5" fontWeight={600} color="text.primary">
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            color="inherit"
            sx={{ marginRight: 3 }}
          >
            {darkMode ? <DarkMode /> : <BrightnessHigh />}
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Elifnur Demir"
                  src={CuteProfile}
                  sx={{
                    backgroundColor: "white",
                    width: 50, // Increased the width
                    height: 50, // Increased the height
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
