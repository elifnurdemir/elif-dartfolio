import { Box } from "@mui/material";
import { ReactNode } from "react";
import withNotch from "../../assets/withNotch.png";
import cuteElif from "../../assets/CuteElif.png";
type Props = {
  children: ReactNode;
};

export const SocialMediaPhone = ({ children }: Props) => {
  return (
    <Box position={"relative"}>
      <Box //PHONE
        sx={{
          backgroundImage: `url(${withNotch})`,
          width: "450px",
          height: "920px",
          zIndex: 5,

          p: 2,
        }}
      >
        <Box //Notch
          sx={{
            position: "absolute",
            backgroundImage: `url(${withNotch}) !important`,
            width: "450px",
            height: "920px",
            top: 0,
            left: 0,
            zIndex: 5,
            pointerEvents: "none", // This makes the box not block interactions with elements behind it
          }}
        />
        <Box //SCREEN
          sx={{
            background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${cuteElif})`,
            backgroundColor: "black",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "888px",
            width: "418px",
            borderRadius: "80px",
            py: 3,
            px: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
