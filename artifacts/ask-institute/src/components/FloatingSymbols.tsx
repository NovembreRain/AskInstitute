import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const symbols = [
  { symbol: "π", size: 28, x: 4, y: 12, delay: 0, duration: 9, rotate: -8 },
  { symbol: "∑", size: 34, x: 91, y: 8, delay: 1.2, duration: 11, rotate: 7 },
  { symbol: "√", size: 24, x: 7, y: 38, delay: 0.5, duration: 10, rotate: -5 },
  { symbol: "∫", size: 30, x: 94, y: 45, delay: 2.1, duration: 12, rotate: 10 },
  { symbol: "²", size: 20, x: 78, y: 22, delay: 0.8, duration: 8, rotate: -12 },
  { symbol: "Δ", size: 22, x: 3, y: 62, delay: 1.5, duration: 13, rotate: 15 },
  { symbol: "λ", size: 26, x: 88, y: 70, delay: 0.3, duration: 9.5, rotate: -18 },
  { symbol: "∞", size: 22, x: 52, y: 90, delay: 2.8, duration: 11, rotate: 5 },
  { symbol: "θ", size: 20, x: 18, y: 82, delay: 1.9, duration: 10.5, rotate: -10 },
  { symbol: "α", size: 24, x: 63, y: 6, delay: 0.6, duration: 8.5, rotate: 12 },
  { symbol: "Ω", size: 22, x: 36, y: 95, delay: 3.2, duration: 12, rotate: -6 },
  { symbol: "μ", size: 20, x: 82, y: 88, delay: 2.4, duration: 9, rotate: 8 },
];

export default function FloatingSymbols() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {symbols.map((s, i) => (
        <motion.div
          key={i}
          className="absolute select-none font-bold"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            fontSize: `${s.size}px`,
            color: "#1B4D35",
            opacity: 0,
            rotate: s.rotate,
            fontFamily: "'DM Serif Display', serif",
          }}
          animate={{
            opacity: [0, 0.22, 0.18, 0.22, 0],
            y: [0, -18, 0, 18, 0],
            x: [0, 6, 0, -6, 0],
          }}
          transition={{
            opacity: {
              delay: s.delay + 1.5,
              duration: s.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              delay: s.delay + 1.5,
              duration: s.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              delay: s.delay + 1.5,
              duration: s.duration * 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
}
