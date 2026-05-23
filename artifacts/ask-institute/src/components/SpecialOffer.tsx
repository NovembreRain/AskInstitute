import React from "react";
import { motion } from "framer-motion";

export default function SpecialOffer() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ background: "#FAFAF8" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #F5A623 0%, #e8950f 100%)",
            boxShadow: "0 20px 60px rgba(245,166,35,0.3)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div
            className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "rgba(27,77,53,0.12)" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
            <div className="flex-1 text-center md:text-left">
              {/* Big badge */}
              <div className="inline-flex items-center gap-3 mb-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
                  style={{
                    background: "#1B4D35",
                    color: "#F5A623",
                    fontFamily: "'DM Serif Display', serif",
                    boxShadow: "0 4px 20px rgba(27,77,53,0.3)",
                  }}
                >
                  2
                </div>
                <div className="text-left">
                  <div
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "rgba(27,77,53,0.7)", fontFamily: "'Nunito', sans-serif" }}
                  >
                    Completely
                  </div>
                  <div
                    className="text-3xl font-bold leading-none"
                    style={{ fontFamily: "'DM Serif Display', serif", color: "#1B4D35" }}
                  >
                    Free
                  </div>
                </div>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
                style={{ fontFamily: "'DM Serif Display', serif", color: "#1B4D35" }}
              >
                Demo Classes before you decide
              </h2>
              <p
                className="text-base max-w-lg leading-relaxed"
                style={{ color: "rgba(27,77,53,0.75)", fontFamily: "'Nunito', sans-serif" }}
              >
                Experience our teaching methodology first. Two full classes, zero commitment. Come see why students say the tagline is true — you'll get it.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-10 py-4 rounded-full font-bold text-lg cursor-pointer block"
                style={{
                  background: "#1B4D35",
                  color: "#F5A623",
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: "0 8px 30px rgba(27,77,53,0.4)",
                }}
                data-testid="button-claim-demo"
              >
                Claim Free Demo
              </motion.a>
              <p
                className="text-xs text-center"
                style={{ color: "rgba(27,77,53,0.6)", fontFamily: "'Nunito', sans-serif" }}
              >
                No registration fee. No strings attached.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
