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
        padding: { xs: "64px 16px" }, // Adjust padding for mobile
        borderRadius: 3,
        textAlign: "center",
        boxShadow: "0px -5px 25px #00000055",
      }}
    >
      <Typography
        variant="h1"
        color={theme.palette.text.secondary}
        gutterBottom
        sx={{ fontSize: { xs: "2rem", sm: "3rem" } }} // Adjust font size for mobile
      >
        About Me
      </Typography>

      <Typography
        variant="h4"
        color={theme.palette.text.secondary}
        sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }} // Adjust font size for mobile
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
