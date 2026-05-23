import React from "react";
import { motion } from "framer-motion";
import { Users, MessageSquare, BookOpen, Clock, Wind, Home as HomeIcon } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Personal Attention",
    description: "Small batch sizes ensure every student gets the focus they need to truly understand.",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "Regular Feedback",
    description: "Weekly progress updates and open parent-teacher communication keep everyone in the loop.",
    highlight: false,
  },
  {
    icon: BookOpen,
    title: "Mock Test Series",
    description: "Rigorous practice tests to eliminate exam fear and sharpen time management skills.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Batches shaped around school schedules, after-school activities, and family routines.",
    highlight: true,
  },
  {
    icon: Wind,
    title: "A/C Classrooms",
    description: "Cool, well-lit, distraction-free spaces where the only thing heating up is curiosity.",
    highlight: false,
  },
  {
    icon: HomeIcon,
    title: "Home Tuition",
    description: "Expert tutors who come to you — one-on-one, at your convenience, in your own space.",
    highlight: false,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: "#F5A623", filter: "blur(80px)", transform: "translate(-30%, 30%)" }}
      />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#F5A623" }} />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#F5A623", fontFamily: "'Nunito', sans-serif" }}
            >
              Why We're Different
            </span>
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#F5A623" }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1A1A1A" }}
          >
            The Ask Difference
          </h2>
          <p
            className="text-lg"
            style={{ color: "#4A5568", fontFamily: "'Nunito', sans-serif" }}
          >
            More than tuition — a complete support system for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                className="relative p-6 rounded-2xl overflow-hidden group"
                style={{
                  background: feature.highlight ? "#1B4D35" : "#FAFAF8",
                  border: feature.highlight ? "none" : "1.5px solid rgba(27,77,53,0.1)",
                  boxShadow: "0 2px 12px rgba(27,77,53,0.05)",
                }}
                data-testid={`card-feature-${index}`}
              >
                {/* Gold dot accent top-right */}
                <div
                  className="absolute top-5 right-5 w-2 h-2 rounded-full opacity-40"
                  style={{ background: feature.highlight ? "#F5A623" : "#1B4D35" }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: feature.highlight ? "rgba(245,166,35,0.15)" : "rgba(27,77,53,0.08)",
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: feature.highlight ? "#F5A623" : "#1B4D35" }}
                  />
                </div>

                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: feature.highlight ? "#FAFAF8" : "#1A1A1A",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: feature.highlight ? "rgba(250,250,248,0.7)" : "#4A5568",
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
