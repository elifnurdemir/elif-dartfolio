import { Grid2, Typography } from "@mui/material";
import { Dot } from "./Dot";
import { Line } from "./Line";
import { motion } from "motion/react";

interface TimelineItemProps {
  children?: React.ReactNode;
  date?: string;
  lineheight?: number;
  position?: "left" | "right"; // ✅ Eklenen prop
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  date,
  lineheight,
  position = "left", // Varsayılan olarak "left" olacak
}) => {
  const isLeft = position === "left"; // Pozisyonu kontrol et

  return (
    <Grid2
      container
      component={motion.div}
      spacing={5}
      whileInView={{ opacity: 1, y: 0 }} // Göründüğünde animasyonu başlat
      initial={{ opacity: 0, y: 50 }} // Başlangıçta görünmez ve alttan gelir
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {isLeft ? (
        <Grid2
          size={5}
          display="flex"
          alignItems="center"
          justifyContent="right"
          textAlign="right"
        >
          <Typography variant="h4">{date}</Typography>
        </Grid2>
      ) : (
        <Grid2
          size={5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"right"}
          textAlign={"right"}
        >
          {children}
        </Grid2>
      )}

      <Grid2
        size={2}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Line lineheight={lineheight}>
          <Dot />
        </Line>
      </Grid2>

      <Grid2 size={5} display="flex" alignItems="center" justifyContent="left">
        {isLeft ? (
          <Grid2
            size={5}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"left"}
          >
            {children}
          </Grid2>
        ) : (
          <Typography variant="h4">{date}</Typography>
        )}
      </Grid2>
    </Grid2>
  );
};
