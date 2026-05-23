import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const floatingSymbols = [
  { symbol: "π", x: "8%", y: "18%", size: "text-5xl", delay: 0, rotate: -12 },
  { symbol: "∑", x: "88%", y: "22%", size: "text-6xl", delay: 0.3, rotate: 8 },
  { symbol: "√", x: "15%", y: "68%", size: "text-4xl", delay: 0.6, rotate: -5 },
  { symbol: "∫", x: "80%", y: "60%", size: "text-5xl", delay: 0.2, rotate: 10 },
  { symbol: "²", x: "72%", y: "12%", size: "text-3xl", delay: 0.8, rotate: -8 },
  { symbol: "Δ", x: "5%", y: "42%", size: "text-3xl", delay: 0.5, rotate: 15 },
  { symbol: "λ", x: "92%", y: "78%", size: "text-4xl", delay: 0.4, rotate: -18 },
  { symbol: "∞", x: "50%", y: "82%", size: "text-3xl", delay: 0.7, rotate: 5 },
  { symbol: "θ", x: "25%", y: "88%", size: "text-3xl", delay: 0.9, rotate: -10 },
  { symbol: "α", x: "60%", y: "8%", size: "text-4xl", delay: 0.15, rotate: 12 },
];

function AtomDecoration({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <ellipse cx="40" cy="40" rx="38" ry="14" stroke="rgba(245,166,35,0.25)" strokeWidth="1.5" />
      <ellipse cx="40" cy="40" rx="38" ry="14" stroke="rgba(245,166,35,0.25)" strokeWidth="1.5" transform="rotate(60 40 40)" />
      <ellipse cx="40" cy="40" rx="38" ry="14" stroke="rgba(245,166,35,0.25)" strokeWidth="1.5" transform="rotate(120 40 40)" />
      <circle cx="40" cy="40" r="5" fill="rgba(245,166,35,0.5)" />
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set((e.clientX - cx) * 0.018);
      mouseY.set((e.clientY - cy) * 0.018);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #0f2d1e 0%, #1B4D35 55%, #1a3d29 100%)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(245,166,35,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Floating math symbols */}
      {floatingSymbols.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute select-none font-bold pointer-events-none ${s.size}`}
          style={{
            left: s.x,
            top: s.y,
            color: "rgba(245,166,35,0.18)",
            rotate: s.rotate,
            fontFamily: "'DM Serif Display', serif",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.7, 0.5, 0.7],
            scale: [0.5, 1, 0.95, 1],
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            opacity: { delay: s.delay + 0.8, duration: 1.2 },
            scale: { delay: s.delay + 0.8, duration: 1.2 },
            y: { delay: s.delay + 1.5, duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}

      {/* Atom decoration top-right */}
      <motion.div
        className="absolute top-16 right-16 w-28 h-28 opacity-30 pointer-events-none hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <AtomDecoration />
      </motion.div>

      {/* Atom decoration bottom-left */}
      <motion.div
        className="absolute bottom-28 left-12 w-20 h-20 opacity-20 pointer-events-none hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <AtomDecoration />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Animated @ logo mark */}
        <motion.div
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 160, damping: 18, delay: 0.1 }}
          className="mb-8 relative"
        >
          <div
            className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "2px solid rgba(245,166,35,0.4)",
              boxShadow: "0 0 60px rgba(245,166,35,0.15), inset 0 0 30px rgba(245,166,35,0.05)",
            }}
          >
            <motion.span
              className="text-5xl md:text-6xl font-bold"
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: "#F5A623",
                textShadow: "0 0 20px rgba(245,166,35,0.5)",
              }}
              animate={{ textShadow: ["0 0 20px rgba(245,166,35,0.3)", "0 0 40px rgba(245,166,35,0.7)", "0 0 20px rgba(245,166,35,0.3)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              @
            </motion.span>
          </div>

          {/* Orbiting dot */}
          <motion.div
            className="absolute w-3 h-3 rounded-full"
            style={{ background: "#F5A623", top: "50%", left: "50%", transformOrigin: "36px 0px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Institute name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2"
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#FAFAF8" }}
          >
            Ask Institute
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mb-6"
        >
          <span
            className="text-2xl md:text-3xl italic"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#F5A623" }}
          >
            ...And you get it!
          </span>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="text-lg md:text-xl mb-3 max-w-xl leading-relaxed"
          style={{ color: "rgba(250,250,248,0.65)", fontFamily: "'Nunito', sans-serif" }}
        >
          Where curiosity meets clarity — a neighborhood center in Puducherry where students truly understand, not just memorize.
        </motion.p>

        {/* Board badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {["CBSE", "ICSE", "State Board", "Grades 1–12"].map((b) => (
            <span
              key={b}
              className="px-3 py-1 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(245,166,35,0.12)",
                border: "1px solid rgba(245,166,35,0.35)",
                color: "#F5A623",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {b}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-8 py-4 rounded-full font-bold text-lg cursor-pointer"
            style={{
              background: "#F5A623",
              color: "#0f2d1e",
              fontFamily: "'Nunito', sans-serif",
              boxShadow: "0 8px 30px rgba(245,166,35,0.35)",
            }}
            data-testid="button-book-demo"
          >
            Book 2 Free Demo Classes
          </motion.a>
          <motion.a
            href="#programs"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-8 py-4 rounded-full font-semibold text-lg cursor-pointer"
            style={{
              background: "transparent",
              border: "2px solid rgba(250,250,248,0.3)",
              color: "rgba(250,250,248,0.85)",
              fontFamily: "'Nunito', sans-serif",
            }}
            data-testid="button-explore-programs"
          >
            Explore Programs
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAFAF8" />
        </svg>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(245,166,35,0.5)", fontFamily: "'Nunito', sans-serif" }}>
          scroll
        </span>
        <motion.div
          className="w-0.5 h-8 rounded-full"
          style={{ background: "rgba(245,166,35,0.3)" }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
