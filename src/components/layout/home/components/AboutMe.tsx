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
        borderRadius:20 ,
        textAlign: "center",
        boxShadow: "0px -5px 25px #00000055",
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
          fontWeight:600,
           // Centers the text
        }}
      >
        Hi, I'm a frontend developer who loves building smooth, user-friendly
        web experiences. Always striving to create intuitive and visually
        appealing applications.
        <br /> <br />
        When I'm not coding, you'll find me exploring new design trends,
        optimizing performance, or experimenting with creative animations. I
        believe great interfaces tell a story—and I aim to make that story as
        seamless as possible.
      </Typography>
    </Box>
  );
};
