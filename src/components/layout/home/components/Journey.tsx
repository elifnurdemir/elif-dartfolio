import { AppBar, Stack, Typography } from "@mui/material";
import { TimeLine } from "../../../utils/timeline/TimeLine";
import { myTimeline } from "./timeline_components/myTimeline";
import { useTheme } from "@mui/material/styles";
export const Journey = () => {
  const theme = useTheme();
  const lineheight = 312; //noktalar arasi mesafe

  return (
    <Stack direction={"column"} alignItems={"center"}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.background.paper,
          padding: 5,
          borderBottomLeftRadius: "75px",
          borderBottomRightRadius: "75px",
          width: "fit-content",
        }}
        elevation={0}
      >
        <Typography variant="h2" color={theme.palette.text.primary}>
          My Journey
        </Typography>
      </AppBar>
      <TimeLine items={myTimeline} lineheight={lineheight} />
    </Stack>
  );
};
