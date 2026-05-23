import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "10+", label: "Years of excellence", color: "#1B4D35" },
  { number: "500+", label: "Students guided", color: "#F5A623" },
  { number: "100%", label: "Personal attention", color: "#1B4D35" },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none opacity-[0.06]"
        style={{ background: "#1B4D35", filter: "blur(60px)" }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 rounded-full" style={{ background: "#F5A623" }} />
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: "#F5A623", fontFamily: "'Nunito', sans-serif" }}
              >
                Our Story
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'DM Serif Display', serif", color: "#1A1A1A" }}
            >
              A neighborhood center with a{" "}
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: "#1B4D35" }}>big</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 60 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path d="M2 6 Q15 2 30 5 Q45 8 58 4" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>{" "}
              heart
            </h2>

            <p
              className="text-lg mb-5 leading-relaxed"
              style={{ color: "#4A5568", fontFamily: "'Nunito', sans-serif" }}
            >
              Ask Institute was built on a simple belief — every child in Brindavanam deserves to understand, not just memorize. Tucked in the heart of Puducherry, we've been quietly doing the work that matters: sitting with students, clearing doubts, and watching the moment a concept finally clicks.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#4A5568", fontFamily: "'Nunito', sans-serif" }}
            >
              We go beyond rote memorization. Our philosophy: understand the core concept, practice with guidance, perform with confidence. When learning feels safe and structured, the results follow naturally.
            </p>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-6 p-6 rounded-2xl"
                style={{
                  background: i === 1 ? "#1B4D35" : "#FAFAF8",
                  border: `1.5px solid ${i === 1 ? "transparent" : "rgba(27,77,53,0.12)"}`,
                  boxShadow: "0 2px 16px rgba(27,77,53,0.06)",
                }}
              >
                <div
                  className="text-5xl font-bold leading-none flex-shrink-0 w-28"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: i === 1 ? "#F5A623" : "#1B4D35",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: i === 1 ? "rgba(250,250,248,0.85)" : "#1A1A1A",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
