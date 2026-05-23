import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classroom1 from "@assets/WhatsApp_Image_2026-05-05_at_01.24.13_(3)_1777925655834.jpeg";
import classroom2 from "@assets/WhatsApp_Image_2026-05-05_at_01.24.13_(2)_1777925655835.jpeg";
import gallery1 from "../assets/gallery-1.png";
import gallery2 from "../assets/gallery-2.png";

const images = [
  { src: classroom1, alt: "Students at work — Ask Institute classroom", span: "md:col-span-2" },
  { src: gallery1, alt: "Learning in session", span: "" },
  { src: gallery2, alt: "Focused study time", span: "" },
  { src: classroom2, alt: "Teacher guiding students", span: "md:col-span-2" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#F5A623" }} />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#F5A623", fontFamily: "'Nunito', sans-serif" }}
            >
              Life at Ask Institute
            </span>
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#F5A623" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1A1A1A" }}
          >
            Inside Our Classrooms
          </h2>
          <p style={{ color: "#4A5568", fontFamily: "'Nunito', sans-serif", fontSize: "1.05rem" }}>
            Warm, focused, and alive with learning — this is where the magic happens.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 22 } }}
              onClick={() => setLightbox(image.src)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span}`}
              style={{
                aspectRatio: image.span ? "16/9" : "4/3",
                boxShadow: "0 4px 24px rgba(27,77,53,0.1)",
              }}
              data-testid={`img-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-end p-5"
                style={{ background: "linear-gradient(to top, rgba(27,77,53,0.75) 0%, transparent 60%)" }}
              >
                <span
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {image.alt}
                </span>
              </div>
              {/* Corner accent */}
              <div
                className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "#F5A623" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-6 cursor-pointer"
            style={{ background: "rgba(15,45,30,0.92)", zIndex: 100 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.5)" }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
