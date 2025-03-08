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
        left: "50%",
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Arkadaki Sabit Yol (Başlangıçta Görünmez) */}

        {/* Üzerinden Geçtiği Yol */}
        <motion.path
          d={pathData}
          fill="transparent"
          strokeWidth="50"
          stroke={theme.palette.primary.main} // Hareket eden yolun rengi
          strokeLinecap="round"
          strokeDasharray="115%" // Kesik çizgiyi tam bir hat olarak ayarla
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>
    </div>
  );
}

/**
 * ==============   Path Verisi   ================
 */
const pathData = `m 50 0 c 50 350 576 -136 576 364 c -7 227 -75 273 -261 273 c -703 -17 19 331 -12 991`;
