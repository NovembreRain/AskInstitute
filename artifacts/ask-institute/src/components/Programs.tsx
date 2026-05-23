import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookMarked, PenLine } from "lucide-react";

const programs = [
  {
    Icon: GraduationCap,
    title: "CBSE & ICSE",
    grades: "Grades 6–12",
    subjects: ["Maths", "Physics", "Chemistry", "Biology", "Social", "Applied Maths", "Accounts"],
    description: "Comprehensive curriculum with regular mock tests and personalized doubt-clearing. Handled by qualified ICSE & CBSE teachers.",
    accent: "#1B4D35",
    light: "rgba(27,77,53,0.07)",
    tagColor: "rgba(27,77,53,0.09)",
    tagText: "#1B4D35",
  },
  {
    Icon: BookMarked,
    title: "State Board",
    grades: "Grades 6–12",
    subjects: ["Maths", "Science", "Social Science", "Biology"],
    description: "Structured learning tailored to the state board syllabus, with special batches for 10th students and a rigorous test series.",
    accent: "#F5A623",
    light: "rgba(245,166,35,0.08)",
    tagColor: "rgba(245,166,35,0.14)",
    tagText: "#a06a00",
  },
  {
    Icon: PenLine,
    title: "Primary Foundation",
    grades: "Grades 1–5",
    subjects: ["Conceptual Maths", "Grammar", "Spoken English", "Handwriting"],
    description: "Building strong fundamentals early on. Fun, engaging, and nurturing — designed for the youngest learners to grow with confidence.",
    accent: "#1B4D35",
    light: "rgba(27,77,53,0.07)",
    tagColor: "rgba(27,77,53,0.09)",
    tagText: "#1B4D35",
  },
];

export default function Programs() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="programs" className="py-24 relative overflow-hidden" style={{ background: "#F2F5F2" }}>
      <div className="absolute left-0 top-0 w-1 h-full" style={{ background: "linear-gradient(to bottom, #1B4D35, #F5A623, #1B4D35)" }} />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#1B4D35" }} />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#1B4D35", fontFamily: "'Nunito', sans-serif" }}
            >
              What We Teach
            </span>
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#1B4D35" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1A1A1A" }}
          >
            Our Programs
          </h2>
          <p
            className="text-lg"
            style={{ color: "#4A5568", fontFamily: "'Nunito', sans-serif" }}
          >
            Structured courses for every board and grade — built to make concepts stick.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {programs.map((program, index) => {
            const { Icon } = program;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(null)}
                className="relative rounded-2xl overflow-hidden cursor-default"
                style={{
                  background: "#FFFFFF",
                  border: `1.5px solid ${hovered === index ? program.accent : "rgba(27,77,53,0.1)"}`,
                  boxShadow: hovered === index ? `0 12px 40px rgba(27,77,53,0.12)` : "0 2px 12px rgba(27,77,53,0.05)",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
                data-testid={`card-program-${index}`}
              >
                <div className="h-1.5 w-full" style={{ background: program.accent }} />

                <div className="p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: program.light }}
                    >
                      <Icon size={22} style={{ color: program.accent }} strokeWidth={1.5} />
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: program.tagColor, color: program.tagText, fontFamily: "'Nunito', sans-serif" }}
                    >
                      {program.grades}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "'DM Serif Display', serif", color: "#1A1A1A" }}
                  >
                    {program.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#4A5568", fontFamily: "'Nunito', sans-serif" }}
                  >
                    {program.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {program.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md"
                        style={{
                          background: program.tagColor,
                          color: program.tagText,
                          fontFamily: "'Nunito', sans-serif",
                        }}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
