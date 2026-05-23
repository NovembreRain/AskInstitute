import React from "react";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#0f2d1e" }} className="text-white pt-14 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
                style={{
                  border: "2px solid rgba(245,166,35,0.4)",
                  color: "#F5A623",
                  fontFamily: "'DM Serif Display', serif",
                  background: "rgba(245,166,35,0.08)",
                }}
              >
                @
              </div>
              <div>
                <div className="font-bold text-lg leading-none" style={{ fontFamily: "'DM Serif Display', serif", color: "#FAFAF8" }}>
                  Ask Institute
                </div>
                <div className="italic text-xs mt-0.5" style={{ fontFamily: "'DM Serif Display', serif", color: "#F5A623" }}>
                  ...And you get it!
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(250,250,248,0.5)", fontFamily: "'Nunito', sans-serif" }}>
              Empowering students in Puducherry to achieve academic excellence through concept-driven, heart-led teaching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-5"
              style={{ color: "#F5A623", fontFamily: "'Nunito', sans-serif" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Gallery", href: "#gallery" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(250,250,248,0.5)", fontFamily: "'Nunito', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-5"
              style={{ color: "#F5A623", fontFamily: "'Nunito', sans-serif" }}
            >
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:9994901111"
                className="flex items-center gap-3 text-sm group"
                style={{ color: "rgba(250,250,248,0.7)", fontFamily: "'Nunito', sans-serif" }}
                data-testid="link-footer-phone"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,166,35,0.12)" }}
                >
                  <Phone size={14} style={{ color: "#F5A623" }} />
                </div>
                <span className="group-hover:text-white transition-colors">9994901111</span>
              </a>
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(250,250,248,0.7)", fontFamily: "'Nunito', sans-serif" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(245,166,35,0.12)" }}
                >
                  <MapPin size={14} style={{ color: "#F5A623" }} />
                </div>
                <span>No. 23, 8th cross, Brindavanam,<br />Puducherry 605013</span>
              </div>

              {/* Admissions badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-2 w-fit"
                style={{
                  background: "rgba(245,166,35,0.12)",
                  border: "1px solid rgba(245,166,35,0.3)",
                }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F5A623" }} />
                <span
                  className="text-xs font-bold"
                  style={{ color: "#F5A623", fontFamily: "'Nunito', sans-serif" }}
                >
                  Admissions Open
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{
            borderTop: "1px solid rgba(250,250,248,0.08)",
            color: "rgba(250,250,248,0.3)",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          <p>&copy; {new Date().getFullYear()} Ask Institute. All rights reserved.</p>
          <p>Center for Excellence in Maths and Science, Puducherry</p>
        </div>
      </div>
    </footer>
  );
}
