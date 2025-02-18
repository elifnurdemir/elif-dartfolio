import React, { useState, useRef } from "react";
import {
  Box,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Grid2,
} from "@mui/material";
import { PlayArrow, Pause, SkipNext, SkipPrevious } from "@mui/icons-material";
import BillieMp3 from "../../assets/music/Billie Eilish - TV.mp3";
import BillieImg from "../../assets/music/Billie Eilish - TV.mp3";
import PowerwolfMp3 from "../../assets/music/Powerwolf - Army of the Night.mp3";
import PowerwofImg from "../../assets/music/Powerwolf - Army of the Night.jpg";
import ShouseMp3 from "../../assets/music/Shouse - Love Tonight.mp3";
import ShouseImg from "../../assets/music/Shouse - Love Tonight.png";
const songs = [
  {
    title: "Army of the Night",
    artist: "Powerwolf",
    src: PowerwolfMp3,
    album: PowerwofImg,
  },
  {
    title: "Love Tonight",
    artist: "Shouse",
    src: ShouseMp3,
    album: ShouseImg,
  },
  {
    title: "TV",
    artist: "Billie Eilish",
    src: BillieMp3,
    album: BillieImg,
  },
];

const MusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(new Audio(songs[0].src));

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.src = songs[currentSongIndex].src;
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    audioRef.current.src = songs[nextIndex].src;
    if (isPlaying) audioRef.current.play();
  };

  const handlePrevious = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    audioRef.current.src = songs[prevIndex].src;
    if (isPlaying) audioRef.current.play();
  };

  return (
    <Grid2
      size={12}
      sx={{
        display: "flex",
        alignItems: "stretch",
        backgroundColor: "#33333333",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          backgroundColor: "#222",
          flex: 1,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: "12px", color: "white" }}>
            {songs[currentSongIndex].title}
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#888" }}>
            {songs[currentSongIndex].artist}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton aria-label="previous" onClick={handlePrevious}>
            <SkipPrevious fontSize="small" sx={{ color: "white" }} />
          </IconButton>
          <IconButton aria-label="play/pause" onClick={handlePlayPause}>
            {isPlaying ? (
              <Pause sx={{ color: "white" }} />
            ) : (
              <PlayArrow sx={{ color: "white" }} />
            )}
          </IconButton>
          <IconButton aria-label="next" onClick={handleNext}>
            <SkipNext fontSize="small" sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 107 }}
        image={songs[currentSongIndex].album}
        alt="Live from space album cover"
      />
    </Grid2>
  );
};

export default MusicPlayer;
