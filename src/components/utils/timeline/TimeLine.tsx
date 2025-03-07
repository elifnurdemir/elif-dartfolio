import React from "react";
import { Grid2 } from "@mui/material";
import { TimelineItem } from "./components/TimelineItem";

// Define the type for the items prop
type Item = {
  content: React.ReactNode;
  position: "left" | "right";
  date: string; // Date as string in 'YYYY-MM-DD' format
};

type TimeLineProps = {
  items: Item[]; // The array of items will be passed as a prop
  lineheight: number;
};

export const TimeLine: React.FC<TimeLineProps> = ({ items, lineheight }) => {
  return (
    <Grid2 container>
      {items.map((item, index) => (
        <Grid2 size={12} key={index}>
          <TimelineItem
            position={item.position}
            lineheight={lineheight}
            date={item.date}
          >
            {item.content}
          </TimelineItem>
        </Grid2>
      ))}
    </Grid2>
  );
};
