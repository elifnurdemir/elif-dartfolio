"use client";

import { useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalMotionBackground() {
  const { scrollYProgress } = useScroll();
  const theme = useTheme();
  // Dash array ve offset kullanarak hareket eden bir efekt oluştur
  const dashOffset = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Arkadaki Sabit Yol (Başlangıçta Görünmez) */}
        <motion.path
          d={pathData}
          fill="transparent"
          strokeWidth="8"
          stroke="transparent"
          strokeLinecap="round"
          opacity={0.2} // Hafif görünür hale getirdik
        />

        {/* Üzerinden Geçtiği Yol */}
        <motion.path
          d={pathData}
          fill="transparent"
          strokeWidth="50"
          stroke={theme.palette.primary.main} // Hareket eden yolun rengi
          strokeLinecap="round"
          strokeDasharray="100%" // Kesik çizgiyi tam bir hat olarak ayarla
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>
    </div>
  );
}

/**
 * ==============   Path Verisi   ================
 */
const pathData = `M 200 0 C 50 100 50 300 200 400 C 350 500 400 700 600 800`;
