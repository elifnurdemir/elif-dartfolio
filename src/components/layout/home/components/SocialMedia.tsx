import {
  Box,
  Grid2,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRef } from "react";
import { SocialMediaPhone } from "../../../interface/SocialMediaPhone";
import { SwiperSlide, Swiper } from "swiper/react";
import "/node_modules/swiper/swiper.css";
import "/node_modules/swiper/modules/pagination.css";
import { Pagination } from "swiper/modules";
import {
  BatteryChargingFull,
  SignalCellular3Bar,
  SignalWifi3Bar,
} from "@mui/icons-material";
import MusicPlayer from "../../../utils/MusicPlayer";

interface SocialMediaButtonProps {
  label: string;
  link: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  label,
  link,
}) => {
  return (
    <Grid2 size={3}>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <IconButton size="small" onClick={() => window.open(link, "_blank")}>
          <img
            src={`/SocialMedia/Social=${label},Style=Original.png`}
            height={"38px"}
            alt={label}
            style={{
              objectFit: "contain",
              backgroundColor: "white",
              border: "2px solid white",
              borderRadius: "100%",
            }}
          />
        </IconButton>
        <Typography
          sx={{
            fontSize: "10px",
            color: "white",
            textShadow:
              "1px 1px 0px #333, -1px -1px 0px #333, -1px 1px 0px #333, 1px -1px 0px #333",
            userSelect: "none",
          }}
        >
          {label}
        </Typography>
      </Stack>
    </Grid2>
  );
};

export const SocialMedia = () => {
  const theme = useTheme();
  const sliderRef = useRef<HTMLDivElement>(null);

  const pagination = {
    dynamicBullets: true,
    renderBullet: function (_index: number, className: string) {
      return `
      <span class="${className}" style="background-color: #ffffffaa; border-radius: 50%; box-shadow: 0px 0px 2px #fff"></span>
    `;
    },
  };

  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  return (
    <Stack
      direction={"row"}
      alignItems={"stretch"}
      position={"relative"}
      justifyContent={"space-between"}
      ref={sliderRef}
      sx={{ height: "100%" }}
    >
      <Box
        width={"5vw"}
        minHeight={"100px"}
        sx={{ backgroundColor: "black", borderTopRightRadius: "50px" }}
      />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          height: "800px",
          padding: 20,
        }}
        flex={1}
      >
        <Typography variant="h1">Here is My Accounts</Typography>
        <Typography variant="h2">Follow Me! 😍</Typography>
      </Box>
      <SocialMediaPhone>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "20px", px: "14px" }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography sx={{ fontSize: 12 }} color="white">
              {hours}:{minutes}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={0.3}
          >
            <SignalCellular3Bar sx={{ color: "white", fontSize: 14 }} />
            <SignalWifi3Bar sx={{ color: "white", fontSize: 14 }} />
            <BatteryChargingFull sx={{ color: "white", fontSize: 14 }} />
          </Stack>
        </Stack>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={pagination}
          modules={[Pagination]}
        >
          <SwiperSlide style={{ height: "488px", width: "266px" }}>
            <Grid2 container sx={{ padding: 2 }} spacing={3}>
              <Grid2 size={12}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    backgroundColor: "white",
                    height: "36px",
                    borderRadius: "100px",
                  }}
                >
                  <IconButton
                    onClick={() =>
                      window.open("https://www.google.com", "_blank")
                    }
                  >
                    <img src={"/google.png"} />
                  </IconButton>
                  <Box flex={1} />
                  <IconButton
                    onClick={() =>
                      window.open("https://www.google.com", "_blank")
                    }
                  >
                    <img src={"/googlemic.png"} />
                  </IconButton>
                </Stack>
              </Grid2>

              <SocialMediaButton
                label="Behance"
                link="https://behance.net/elifnurdemir1"
              />
              <SocialMediaButton label="Dribbble" link="" />
              <SocialMediaButton
                label="Github"
                link="https://github.com/elifnurdemir"
              />
              <SocialMediaButton
                label="Medium"
                link="https://medium.com/@elifxnur118"
              />
              <SocialMediaButton
                label="LinkedIn"
                link="https://linkedin.com/in/elifnurdemir-elifnur-demir"
              />
              <Grid2 size={12} sx={{ visibility: "hidden" }}>
                space
              </Grid2>
              <Grid2 size={12} sx={{ visibility: "hidden" }}>
                space
              </Grid2>
              <MusicPlayer />
            </Grid2>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "488px",
              width: "266px",
            }}
          >
            <Grid2 container sx={{ padding: 2 }} spacing={3}>
              <SocialMediaButton
                label="Instagram"
                link="https://www.instagram.com/ifelselif/"
              />
              <SocialMediaButton
                label="Pinterest"
                link="https://pinterest.com/arrivederciao"
              />
              <SocialMediaButton
                label="Spotify"
                link="https://open.spotify.com/user/elifxnur118"
              />
              <SocialMediaButton
                label="Telegram"
                link="https://t.me/arrivederciao"
              />
              <SocialMediaButton
                label="YouTube"
                link="https://youtube.com/@arrivederciaoo"
              />
            </Grid2>
          </SwiperSlide>
        </Swiper>
        <Stack
          direction={"row"}
          alignItems={"center"}
          height={"50px"}
          justifyContent={"center"}
          spacing={1}
        >
          <IconButton>
            <img src={"/SocialMedia/phone.png"} height={"38px"} />
          </IconButton>
          <IconButton
            onClick={() =>
              (window.location.href = "mailto:elifdemircontact@gmail.com")
            }
          >
            <img src={"/SocialMedia/mail.png"} height={"38px"} />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://www.google.com", "_blank")}
          >
            <img
              src={"/SocialMedia/browser.png"}
              height={"38px"}
              alt="Browser"
            />
          </IconButton>

          <IconButton>
            <img src={"/SocialMedia/camera.png"} height={"38px"} />
          </IconButton>
        </Stack>
      </SocialMediaPhone>

      <Box
        width={"5vw"}
        minHeight={"100px"}
        sx={{ backgroundColor: "black", borderTopLeftRadius: "50px" }}
      />
    </Stack>
  );
};
