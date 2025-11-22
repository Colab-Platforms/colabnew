import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";

import TwoPillars from "@/components/TwoPillars";
import BlogSection from "@/components/BlogSection";
import CTA from "@/components/CTA";
import InvestorRelations from "@/components/InvestorRelations";
import BusinessVerticals from "@/components/BusinessVerticals";
import AboutFuture from "@/components/AboutFuture";
import Accelerator from "@/components/Accelerator";

const Testing = () => {
  const [currentText, setCurrentText] = useState(0);

  const texts = ["ARTIFICIAL INTELLIGENCE", "FINTECH", "ESPORTS", "TECH ESPORTS", "SEMICONDUCTOR", "DRONES", "COLAB"];

  // Auto-rotate hero text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <InfinityCursor />
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="https://cdn.shopify.com/videos/c/o/v/6064f36abdd74e889b9d65606a5700ad.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>

          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="mb-8"
              style={{ fontFamily: "'Aloevera Display', serif", letterSpacing: '2.1px', fontWeight: 700 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-white mb-6 text-5xl md:text-8xl lg:text-9xl xl:text-[12rem]">We Are</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  className="block text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {texts[currentText]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* About Future Section */}
        <AboutFuture />

        {/* Business Verticals Section */}
        <BusinessVerticals />

 <BlogSection />
 <InvestorRelations />
 <Accelerator/>
        <TwoPillars />
       
       
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Testing;
