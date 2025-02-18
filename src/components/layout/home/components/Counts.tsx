import { Grid2, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { useState, useEffect, useRef, forwardRef } from "react";

export const Counts = forwardRef<HTMLDivElement>((_props, ref) => {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const localRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/elifnurdemir/repos?per_page=100`
        );
        if (Array.isArray(response.data)) {
          setRepoCount(response.data.length);
        }
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchRepoCount();
  }, []);

  useEffect(() => {
    if (ref && "current" in ref) {
      ref.current = localRef.current;
    }
  }, [ref]);

  const stats = [
    {
      value: repoCount + "+",
      label: "Projects",
    },
    { value: "10+", label: "Certificates" },
    { value: "170+", label: "Algorithms Solves" },
  ];
  return (
    <Grid2
      container
      p={4}
      sx={{ backgroundColor: theme.palette.background.paper }}
      spacing={4}
      borderRadius={10}
      marginX={10}
      ref={localRef}
    >
      {stats.map((stat, index) => (
        <Grid2
          key={index}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ backgroundColor: theme.palette.background.default }}
          p={3}
          size={{ xs: 12, md: 4 }}
          borderRadius={5}
        >
          <Typography variant="h1" mb={1} textAlign="center">
            {stat.value}
          </Typography>
          <Typography variant="h3" textAlign="center">
            {stat.label}
          </Typography>
        </Grid2>
      ))}
    </Grid2>
  );
});
