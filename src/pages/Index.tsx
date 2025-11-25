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
import ThemeToggle from "@/components/ThemeToggle";

const Testing = () => {
  const [currentText, setCurrentText] = useState(0);

  const texts = ["ARTIFICIAL INTELLIGENCE", "FINTECH", "ESPORTS", "TECH ESPORTS", "SEMICONDUCTOR", "DRONES"];

  // Auto-rotate hero text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <InfinityCursor />
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
          {/* Background Video with Enhanced Overlay */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.video
                key={currentText}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.4, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5 }}
              >
                <source src={[
                  "https://cdn.shopify.com/videos/c/o/v/cc2faf9b69b24dc9a15bc8920fbe5524.mp4", // AI - Neural Network
                  "https://cdn.shopify.com/videos/c/o/v/cc2faf9b69b24dc9a15bc8920fbe5524.mp4", // FinTech - Digital Finance
                  "https://cdn.shopify.com/videos/c/o/v/a4e715aa7db741c699cb7dbb578c5ba7.mp4", // Esports - Gaming
                  "https://cdn.shopify.com/videos/c/o/v/a4e715aa7db741c699cb7dbb578c5ba7.mp4", // Tech Esports
                  "https://cdn.shopify.com/videos/c/o/v/cc2faf9b69b24dc9a15bc8920fbe5524.mp4", // Semiconductor - Circuit
                  "https://cdn.shopify.com/videos/c/o/v/a4e715aa7db741c699cb7dbb578c5ba7.mp4"  // Drones - Flying
                ][currentText]} type="video/mp4" />
              </motion.video>
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-20">
            <div className="max-w-4xl mx-auto">

              {/* Main Heading - Our Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-semibold leading-[1.1]  text-center">
                  Our Expertise
                </h1>
              </motion.div>

              {/* Rotating Industry Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center gap-4 mb-12"
              >
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentText}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {texts[currentText]}
                  </motion.span>
                </AnimatePresence>
                <div className="h-1 w-16 bg-gradient-to-l from-primary to-secondary rounded-full" />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed text-center mb-12"
              >
                Unified Technology Ecosystem
                One platform powering intelligence, experiences, and innovation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <a
                  href="#ventures"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Explore Ecosystem</span>
                  <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>

                <a
                  href="/investor-relations"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                >
                  <span>Investor Relations</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/30 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* About Future Section */}
        <AboutFuture />

        {/* Business Verticals Section */}
        <BusinessVerticals />

        <BlogSection />
        <InvestorRelations />
        <Accelerator />
        <TwoPillars />


        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Testing;
