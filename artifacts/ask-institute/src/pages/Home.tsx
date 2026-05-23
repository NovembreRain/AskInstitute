import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import SpecialOffer from "@/components/SpecialOffer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingSymbols from "@/components/FloatingSymbols";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col w-full overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <FloatingSymbols />
      <Navbar />
      <main className="flex-1 w-full relative" style={{ zIndex: 2 }}>
        <Hero />
        <AboutUs />
        <Gallery />
        <Programs />
        <Testimonials />
        <WhyChooseUs />
        <SpecialOffer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
