import { Typography, Box } from "@mui/material";
import React from "react";

export const myTimeline: {
  content: React.ReactNode;
  position: "left" | "right";
  date: string;
}[] = [
  {
    content: (
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Born! 👶🎂
      </Typography>
    ),
    position: "left",
    date: "2000",
  },
  {
    content: (
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Started Studying Opticianry 👓📖
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          Kırklareli University
        </Typography>
      </Box>
    ),
    position: "right",
    date: "October 2018",
  },
  {
    content: (
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Erasmus+ Experience ✈️🌍
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          Explored new cultures and opportunities
        </Typography>
      </Box>
    ),
    position: "left",
    date: "April 2017",
  },
  {
    content: (
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Graduated from Opticianry 🎓👀
        </Typography>
      </Box>
    ),
    position: "right",
    date: "March 2021",
  },
  {
    content: (
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Started Studying Computer Programming 💻🚀
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          Istanbul University - Associate Degree
        </Typography>
      </Box>
    ),
    position: "left",
    date: "October 2023",
  },
  {
    content: (
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Earned Cybersecurity Fundamentals Certificate 🔒🛡️
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          IBM & Kodluyoruz
        </Typography>
      </Box>
    ),
    position: "right",
    date: "November 2024",
  },
  {
    content: (
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Completed Agile Project Management Course 📊📅
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          HP LIFE
        </Typography>
      </Box>
    ),
    position: "left",
    date: "October 2024",
  },
  {
    content: (
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Became an Expert in Emerging Tech 🚀🤖
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          IBM Explore Emerging Tech Badge
        </Typography>
      </Box>
    ),
    position: "right",
    date: "October 2024",
  },
  {
    content: (
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Earned CyberStart Certificate 🕵️‍♂️💻
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          IBM & Kodluyoruz
        </Typography>
      </Box>
    ),
    position: "left",
    date: "January 2025",
  },
  {
    content: (
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Mobile App Development Workshop 📱🔥
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          Hi-Kod 2.0
        </Typography>
      </Box>
    ),
    position: "right",
    date: "February 2025",
  },
  {
    content: (
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Expected Graduation 🎓🎉
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          Istanbul University - Computer Programming
        </Typography>
      </Box>
    ),
    position: "left",
    date: "June 2025",
  },
];
