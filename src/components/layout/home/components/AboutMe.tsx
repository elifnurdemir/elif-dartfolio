import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const AboutMe = () => {
  const theme = useTheme();

  return (
    <Box
      id="about-me"
      sx={{
        backgroundColor: theme.palette.primary.main,
        zIndex: 3,
        position: "relative",
        padding: { xs: "80px 16px", sm: "64px 32px" }, // Padding for mobile and larger screens
        borderRadius: 20,
        textAlign: "center",
        margin: "0 auto", // Ensures the section is centered
        maxWidth: "1200px", // Limits the width to improve readability on large screens
      }}
    >
      <Typography
        variant="h1"
        color={theme.palette.text.primary} // Changed text color to black
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", sm: "4rem" },
          marginBottom: "40px", // Space between title and content
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="h4"
        color={theme.palette.text.primary} // Text color set to black
        sx={{
          fontSize: { xs: "1rem", sm: "2rem" },
          lineHeight: 1.75, // Increased line height for better readability
          maxWidth: "900px", // Limits the width of the text for better readability
          margin: "0 auto",
          fontWeight: 600,
          // Centers the text
        }}
      >
       As a passionate software developer, I love crafting innovative solutions across frontend, mobile apps, and UI/UX design. My coding journey began in 2024, and it's been an incredible adventure so far. Currently, I'm pursuing a degree in Computer Programming at Istanbul University, where I'm delving into React, Flutter, and full-stack development.
        <br /> <br />
        My mission is to create applications that are both functional and life-enhancing. Outside of coding, you can find me practicing yoga, exploring design concepts, or engaging with tech communities. Let's collaborate and build something amazing together! 





      </Typography>
    </Box>
  );
};
