import { Box, useTheme } from "@mui/material";

export const Dot = () => {
  const theme = useTheme();
  return (
    <Box
      position={"absolute"}
      sx={{
        width: "128px",
        height: "128px",
        borderRadius: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box
        position={"absolute"}
        sx={{
          width: "74px",
          height: "74px",
          borderRadius: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: theme.palette.background.default,
        }}
      ></Box>
    </Box>
  );
};
