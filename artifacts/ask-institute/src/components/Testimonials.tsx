import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "The conceptual clarity my son gained here in Physics is remarkable. He used to fear the subject, but now he genuinely enjoys solving problems. The teachers are incredibly patient.",
    author: "Priya Rajan",
    role: "Parent of Class 10 Student",
    initial: "P",
    color: "#1B4D35",
  },
  {
    text: "I joined Ask Institute for my 12th board preparation. The mock tests were exactly like the real board exams, which completely removed my exam anxiety. I scored 94%!",
    author: "Karthik S.",
    role: "Class 12 CBSE Student",
    initial: "K",
    color: "#F5A623",
  },
  {
    text: "Finding a good tuition center in Brindavanam was tough until we found Ask Institute. The personal attention they give every student is what sets them apart. Truly worth it.",
    author: "Dr. Meenakshi",
    role: "Parent of Class 8 Student",
    initial: "M",
    color: "#1B4D35",
  },
  {
    text: "Maths finally makes sense to me! The way they break down complex formulas into simple steps — the tagline is so true. I scored 95% in my finals.",
    author: "Ananya V.",
    role: "Class 10 ICSE Student",
    initial: "A",
    color: "#F5A623",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(() => emblaApi?.scrollNext(), 4500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 overflow-hidden relative" style={{ background: "#F2F5F2" }}>
      {/* Green side accent */}
      <div className="absolute right-0 top-0 w-1 h-full" style={{ background: "linear-gradient(to bottom, #F5A623, #1B4D35, #F5A623)" }} />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#1B4D35" }} />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#1B4D35", fontFamily: "'Nunito', sans-serif" }}
            >
              Voices from our community
            </span>
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#1B4D35" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1A1A1A" }}
          >
            Word of Mouth
          </h2>
          <p style={{ color: "#4A5568", fontFamily: "'Nunito', sans-serif" }}>
            Parents and students share what Ask Institute has meant to them.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_50%] px-3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="h-full p-8 rounded-2xl relative"
                    style={{
                      background: "#FFFFFF",
                      border: "1.5px solid rgba(27,77,53,0.1)",
                      boxShadow: "0 2px 16px rgba(27,77,53,0.05)",
                    }}
                    data-testid={`card-testimonial-${index}`}
                  >
                    {/* Large quote mark */}
                    <div
                      className="text-7xl font-bold leading-none mb-2 -mt-2"
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        color: t.color === "#F5A623" ? "rgba(245,166,35,0.15)" : "rgba(27,77,53,0.1)",
                      }}
                    >
                      "
                    </div>

                    <p
                      className="text-base leading-relaxed mb-8"
                      style={{ color: "#4A5568", fontFamily: "'Nunito', sans-serif" }}
                    >
                      {t.text}
                    </p>

                    <div className="flex items-center gap-3 mt-auto">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{
                          background: t.color,
                          color: t.color === "#F5A623" ? "#1B4D35" : "#FAFAF8",
                          fontFamily: "'DM Serif Display', serif",
                        }}
                      >
                        {t.initial}
                      </div>
                      <div>
                        <div
                          className="font-bold text-sm"
                          style={{ color: "#1A1A1A", fontFamily: "'Nunito', sans-serif" }}
                        >
                          {t.author}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "#4A5568", fontFamily: "'Nunito', sans-serif" }}
                        >
                          {t.role}
                        </div>
                      </div>

                      {/* Color accent corner */}
                      <div
                        className="ml-auto w-2 h-8 rounded-full"
                        style={{ background: t.color, opacity: 0.5 }}
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                background: "#1B4D35",
                color: "#FAFAF8",
              }}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: selectedIndex === i ? "24px" : "8px",
                    height: "8px",
                    background: selectedIndex === i ? "#1B4D35" : "rgba(27,77,53,0.2)",
                  }}
                  data-testid={`button-testimonial-dot-${i}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                background: "#1B4D35",
                color: "#FAFAF8",
              }}
              data-testid="button-testimonial-next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
