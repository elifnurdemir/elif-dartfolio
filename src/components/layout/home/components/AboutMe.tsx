import { Box, Typography, Stack, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const AboutMe = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        zIndex: 3,
        position: "relative",
        padding: "64px 256px",
        borderRadius: 3,
        textAlign: "center",
        boxShadow: "0px -5px 25px #00000055",
      }}
    >
      <Typography
        variant="h1"
        color={theme.palette.text.secondary}
        gutterBottom
      >
        About Me
      </Typography>

      <Typography variant="h4" color={theme.palette.text.secondary}>
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
