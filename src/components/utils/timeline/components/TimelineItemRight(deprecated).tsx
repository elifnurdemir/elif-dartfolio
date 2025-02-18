import { Grid2, Typography } from "@mui/material";
import { Dot } from "./Dot";
import { Line } from "./Line";

interface TimelineItemProps {
  children?: React.ReactNode;
  date?: string;
  lineheight?: number;
}
export const TimelineItemRight: React.FC<TimelineItemProps> = ({
  children,
  date,
  lineheight,
}) => {
  return (
    <Grid2 container>
      <Grid2
        size={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"right"}
        textAlign={"right"}
      >
        {children}
      </Grid2>
      <Grid2
        size={2}
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Line lineheight={lineheight}>
          <Dot />
        </Line>
      </Grid2>
      <Grid2
        size={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"left"}
      >
        <Typography variant="h3">{date}</Typography>
      </Grid2>
    </Grid2>
  );
};
