import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Logo = () => (
  <div className="flex items-center gap-3">
    <div
      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg"
      style={{
        background: "#1B4D35",
        color: "#F5A623",
        fontFamily: "'DM Serif Display', serif",
        boxShadow: "0 0 0 2px rgba(245,166,35,0.25)",
      }}
    >
      @
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-bold text-lg leading-none" style={{ fontFamily: "'DM Serif Display', serif" }}>
        Ask Institute
      </span>
      <span className="italic text-xs mt-0.5" style={{ fontFamily: "'DM Serif Display', serif", color: "#F5A623" }}>
        ...And you get it!
      </span>
    </div>
  </div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Why Us", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: isScrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(27,77,53,0.1)" : "none",
        boxShadow: isScrolled ? "0 2px 20px rgba(27,77,53,0.08)" : "none",
        paddingTop: isScrolled ? "12px" : "20px",
        paddingBottom: isScrolled ? "12px" : "20px",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="hover:opacity-85 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold transition-colors relative group"
              style={{
                color: isScrolled ? "#1B4D35" : "rgba(250,250,248,0.85)",
                fontFamily: "'Nunito', sans-serif",
              }}
              data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
            >
              {link.name}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ background: "#F5A623" }}
              />
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-5 py-2.5 rounded-full text-sm font-bold cursor-pointer"
            style={{
              background: "#1B4D35",
              color: "#F5A623",
              fontFamily: "'Nunito', sans-serif",
            }}
            data-testid="button-nav-book-demo"
          >
            Book Free Demo
          </motion.a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 -mr-2 rounded-md"
          style={{ color: isScrolled ? "#1B4D35" : "#FAFAF8" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full border-b p-4 flex flex-col gap-3 md:hidden"
            style={{
              background: "rgba(250,250,248,0.97)",
              backdropFilter: "blur(12px)",
              borderColor: "rgba(27,77,53,0.1)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold p-2.5 rounded-lg transition-colors hover:bg-primary/5"
                style={{ color: "#1B4D35", fontFamily: "'Nunito', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="w-full text-center py-3 rounded-full font-bold text-sm"
              style={{ background: "#1B4D35", color: "#F5A623", fontFamily: "'Nunito', sans-serif" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Free Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
