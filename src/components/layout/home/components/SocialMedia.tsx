import {
  Box,
  Button,
  Grid2,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
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
import Browser from "../../../../assets/SocialMedia/contact.png";
import Camera from "../../../../assets/SocialMedia/safari.png";
import Mail from "../../../../assets/SocialMedia/messages.png";
import Phone from "../../../../assets/SocialMedia/apple.png";
import Behance from "../../../../assets/SocialMedia/behance.png";
import Dribbble from "../../../../assets/SocialMedia/dribble.png";
import Github from "../../../../assets/SocialMedia/github.png";
import Instagram from "../../../../assets/SocialMedia/instagram.png";
import LinkedIn from "../../../../assets/SocialMedia/linkedin.png";
import Medium from "../../../../assets/SocialMedia/medium.png";
import Pinterest from "../../../../assets/SocialMedia/pinterest.png";
import Spotify from "../../../../assets/SocialMedia/spotify.png";
import Telegram from "../../../../assets/SocialMedia/telegram.png";
import YouTube from "../../../../assets/SocialMedia/youtube.png";
import Google from "../../../../assets/google.png";
import GoogleMic from "../../../../assets/googlemic.png";

interface SocialMediaButtonProps {
  label: string;
  link: string;
  source: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  label,
  link,
  source,
}) => {
  return (
    <Grid2 size={12 / 5}>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <IconButton onClick={() => window.open(link, "_blank")}>
          <img
            src={source}
            height={"48px"}
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
            fontSize: "body2",
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
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return (
    <Stack alignItems={"center"} justifyContent={"center"} spacing={10} pt={10}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography variant="h2" textAlign={"center"} gutterBottom>
          Here is My Accounts
        </Typography>
        <Typography variant="h3" textAlign={"center"}>
          Follow Me! 😍
        </Typography>
      </Box>
      <Box>
        <SocialMediaPhone>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ height: "20px", px: 4 }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography variant="body1" color="white">
                {formattedHours}:{formattedMinutes}
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
            <SwiperSlide style={{ height: "758px" }}>
              <Grid2 container sx={{ padding: 2 }} spacing={3}>
                <Grid2 size={12} mx={1} mt={1}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    component={Button}
                    onClick={() =>
                      window.open("https://www.google.com", "_blank")
                    }
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      height: "42px",
                      borderRadius: "100px",
                    }}
                  >
                    <IconButton
                      onClick={() =>
                        window.open("https://www.google.com", "_blank")
                      }
                    >
                      <img src={Google} />
                    </IconButton>
                    <Box flex={1} />
                    <IconButton
                      onClick={() =>
                        window.open("https://www.google.com", "_blank")
                      }
                    >
                      <img src={GoogleMic} />
                    </IconButton>
                  </Stack>
                </Grid2>

                <SocialMediaButton
                  label="Behance"
                  link="https://behance.net/elifnurdemir1"
                  source={Behance}
                />
                <SocialMediaButton label="Dribbble" link="" source={Dribbble} />
                <SocialMediaButton
                  label="Github"
                  link="https://github.com/elifnurdemir"
                  source={Github}
                />
                <SocialMediaButton
                  label="Medium"
                  link="https://medium.com/@elifxnur118"
                  source={Medium}
                />
                <SocialMediaButton
                  label="LinkedIn"
                  link="https://linkedin.com/in/elifnurdemir-elifnur-demir"
                  source={LinkedIn}
                />
                <Grid2 size={12} sx={{ visibility: "hidden" }}>
                  space
                </Grid2>
                <Grid2 size={12} sx={{ visibility: "hidden" }}>
                  space
                </Grid2>
                <Grid2 size={12} sx={{ visibility: "hidden" }}>
                  space
                </Grid2>
                <Grid2 size={12} sx={{ visibility: "hidden" }}>
                  space
                </Grid2>
                <Grid2 size={12} sx={{ visibility: "hidden" }}>
                  space
                </Grid2>
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
                height: "708px",
              }}
            >
              <Grid2 container sx={{ padding: 2 }} spacing={3}>
                <SocialMediaButton
                  label="Instagram"
                  link="https://www.instagram.com/ifelselif/"
                  source={Instagram}
                />
                <SocialMediaButton
                  label="Pinterest"
                  link="https://pinterest.com/arrivederciao"
                  source={Pinterest}
                />
                <SocialMediaButton
                  label="Spotify"
                  link="https://open.spotify.com/user/elifxnur118"
                  source={Spotify}
                />
                <SocialMediaButton
                  label="Telegram"
                  link="https://t.me/arrivederciao"
                  source={Telegram}
                />
                <SocialMediaButton
                  label="YouTube"
                  link="https://youtube.com/@arrivederciaoo"
                  source={YouTube}
                />
              </Grid2>
            </SwiperSlide>
          </Swiper>
          <Stack
            direction={"row"}
            alignItems={"center"}
            height={"50px"}
            justifyContent={"center"}
            spacing={2}
          >
            <IconButton>
              <img src={Phone} height={"48px"} />
            </IconButton>
            <IconButton
              onClick={() =>
                (window.location.href = "mailto:elifdemircontact@gmail.com")
              }
            >
              <img src={Mail} height={"48px"} />
            </IconButton>
            <IconButton
              onClick={() => window.open("https://www.google.com", "_blank")}
            >
              <img src={Browser} height={"48px"} alt="Browser" />
            </IconButton>

            <IconButton>
              <img src={Camera} height={"48px"} />
            </IconButton>
          </Stack>
        </SocialMediaPhone>
      </Box>
    </Stack>
  );
};
