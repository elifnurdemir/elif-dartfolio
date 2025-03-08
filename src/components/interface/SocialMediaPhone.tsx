import { Box } from "@mui/material";
import { ReactNode } from "react";
import withoutNotch from "../../assets/withoutNotch.png";
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
          backgroundImage: `url(${withoutNotch})`,
          width: "583px",
          height: "899px",
          padding: "32px 246px 300px 70px",
          zIndex: 5,
        }}
      >
        <Box //Notch
          sx={{
            position: "absolute",
            backgroundImage: `url(${withNotch}) !important`,
            width: "450px",
            height: "900px",
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
            height: "568px",
            width: "266px",
            borderRadius: "30px",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
