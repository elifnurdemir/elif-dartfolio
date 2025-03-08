import { Stack, Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import PhoneImg from "../../assets/YeniTelefon.png";
import flutter from "../../assets/flutter.svg";
import kotlin from "../../assets/kotlin.svg";
import swift from "../../assets/swift.svg";
import cuteProfile from "../../assets/CuteProfile.png";
import { LightSwitch } from "./LightSwitch";
type LigthSwitchProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Phone = ({ darkMode, setDarkMode }: LigthSwitchProps) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", height: "775px", width: "389px" }}>
      <Stack
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        sx={{
          position: "absolute",
          top: "22%",
          height: "775px",
          width: "350px",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 1,
            backdropFilter: "blur(10px)", // Blur efekti
            zIndex: 0, // Arkada kalmasını sağlıyoruz
            pointerEvents: "none",
            borderRadius: "100px !important",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${PhoneImg})`, // Görüntüyü After’a ekledik
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            zIndex: 1, // Asıl içerikten önce ama blur'dan sonra olmalı
            pointerEvents: "none",
          },
        }}
        direction={"column"}
        alignItems={"center"}
        pt={20}
        spacing={8}
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
        <LightSwitch setDarkMode={setDarkMode} darkMode={darkMode} />
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
            style={{ cursor: "pointer", zIndex: 1 }}
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            height={"64px"}
            src={swift}
            style={{ cursor: "pointer", zIndex: 1 }}
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            height={"64px"}
            src={kotlin}
            style={{ cursor: "pointer", zIndex: 1 }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
