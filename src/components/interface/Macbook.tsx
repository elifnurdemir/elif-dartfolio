import { Stack, Avatar, Box } from "@mui/material";
import { motion } from "motion/react";
import { useTheme } from "@mui/material/styles";

type Props = {};

export const Macbook = (props: Props) => {
  const theme = useTheme();
  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      sx={{
        backgroundImage: `url("/Macbook.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        aspectRatio: "2020/1374",
        width: "90vh",
        overflow: "hidden",
        position: "absolute",
        backgroundPositionX: "200px",
        backgroundPositionY: "5px",
        right: "0",
        bottom: "0",
      }}
      border={"1px solid red"}
      direction={"column"}
      alignItems={"center"}
      pt={"1.3%"}
      gap={5}
    >
      <Box
        sx={{
          backgroundColor: "transparent",
          height: "100%",

          marginLeft: "0px",
        }}
      >
        frontend developer
      </Box>
    </Stack>
  );
};
