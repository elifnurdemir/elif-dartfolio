"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const transition = { duration: 4, ease: "easeInOut" };

export default function GlobalMotionBackground() {
  const { scrollYProgress } = useScroll();

  // Path uzunluğunu scroll'a bağla
  const offsetDistance = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
        {/* Arkadaki Sabit Yol */}
        <motion.path
          d="M 200 0 C 50 100 50 300 200 400 C 350 500 400 700 600 800"
          fill="transparent"
          strokeWidth="8"
          stroke="gray"
          strokeLinecap="round"
          initial={{ pathLength: 1 }}
        />

        {/* Üzerinden Geçtiği Yol */}
        <motion.path
          d="M 200 0 C 50 100 50 300 200 400 C 350 500 400 700 600 800"
          fill="transparent"
          strokeWidth="8"
          stroke="var(--hue-6-transparent)" // Hareket eden yolun rengi
          strokeLinecap="round"
          strokeDasharray="100%" // Kesik çizgiyi tam bir hat olarak ayarla
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>

      {/* Hareket Eden Kutu */}
      <motion.div
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#4ff0b7",
          borderRadius: 10,
          position: "absolute",
          top: 0,
          left: 0,
          offsetPath: `path("M 200 0 C 50 100 50 300 200 400 C 350 500 400 700 600 800")`,
          offsetDistance,
        }}
        transition={transition}
      />
    </div>
  );
}
