import { Typography, Box } from "@mui/material";
import React from "react";

export const myTimeline: {
  content: React.ReactNode;
  position: "left" | "right";
  date: string;
}[] = [
  {
    content: <Typography variant="h4">Started Learning Programming</Typography>,
    position: "left",
    date: "2024 Ocak",
  },
  {
    content: (
      <Box>
        <Typography variant="h4">Completed Frontend Bootcamp</Typography>
        <Typography variant="body1">React, JavaScript, HTML, CSS</Typography>
      </Box>
    ),
    position: "right",
    date: "2024 Şubat",
  },
  {
    content: (
      <Box>
        <Typography variant="h4">Mobile Development Journey</Typography>
        <Typography variant="body1">
          Started learning React Native & Flutter
        </Typography>
      </Box>
    ),
    position: "left",
    date: "2024 Mart",
  },
  {
    content: (
      <Box>
        <Typography variant="h4">
          Google Associate Android Developer Certificate
        </Typography>
        <Typography variant="body1">
          Validated skills in Android app development
        </Typography>
      </Box>
    ),
    position: "right",
    date: "2024 Nisan",
  },
  {
    content: (
      <Box>
        <Typography variant="h4">
          Completed Full-Stack Developer Course
        </Typography>
        <Typography variant="body1">Backend with Node.js & Express</Typography>
      </Box>
    ),
    position: "left",
    date: "2024 Mayıs",
  },
  {
    content: (
      <Box>
        <Typography variant="h4">Achieved AWS Certified Developer</Typography>
        <Typography variant="body1">
          Cloud computing & serverless applications
        </Typography>
      </Box>
    ),
    position: "right",
    date: "2024 Haziran",
  },
];
