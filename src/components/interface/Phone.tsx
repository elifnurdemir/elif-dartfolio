import { Stack, Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import PhoneImg from "../../assets/Phone.png";
import flutter from "../../assets/flutter.svg";
import kotlin from "../../assets/kotlin.svg";
import swift from "../../assets/swift.svg";
import cuteProfile from "../../assets/CuteProfile.png";
export const Phone = () => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative" }}>
      <Stack
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        sx={{
          backgroundImage: `url(${PhoneImg}) !important`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "775px",
          width: "389px",
          overflow: "hidden",
          filter: "drop-shadow(-70px 0px 30px rgba(0, 0, 0, 0.5))",
        }}
        direction={"column"}
        alignItems={"center"}
        pt={20}
        gap={8}
      >
        <Avatar
          alt="Elifnur Demir"
          src={cuteProfile}
          sx={{
            width: 164,
            height: 164,
            border: `5px solid ${theme.palette.primary.main}`,
          }}
        />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            height={"64px"}
            src={flutter}
            style={{ cursor: "pointer" }}
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            height={"64px"}
            src={swift}
            style={{ cursor: "pointer" }}
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            height={"64px"}
            src={kotlin}
            style={{ cursor: "pointer" }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
