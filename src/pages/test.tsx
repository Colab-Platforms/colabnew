import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import Hero from "@/components/Hero";



import CTA from "@/components/CTA";
import InvestorRelations from "@/components/InvestorRelations";
import BusinessVerticals from "@/components/BusinessVerticals";
import AboutFuture from "@/components/AboutFuture";
import Accelerator from "@/components/Accelerator";



const Test = () => {
  const [currentText, setCurrentText] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const textData = [
    { text: "ESPORTS", duration: 5000 },
    { text: "ARTIFICIAL INTELLIGENCE", duration: 4180 },
    { text: "SEMICONDUCTOR", duration: 5000 },
    { text: "SPORTS TECH", duration: 3130 },
    { text: "DRONE", duration: 5120 },
    { text: "FINTECH", duration: 2210 },
    { text: "COLAB", duration: 3190 }
  ];

  // Handle text rotation with custom durations
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentText((prev) => (prev + 1) % textData.length);
    }, textData[currentText].duration);

    return () => clearTimeout(timer);
  }, [currentText]);

  // Scroll animation for clip-path
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / (windowHeight * 0.5), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <InfinityCursor />
        <Header />

        {/* Hero Section - Clean Video Only */}
        <Hero />

        {/* About Future Section */}
        <AboutFuture />

        {/* Business Verticals Section */}
        <BusinessVerticals/>


              <InvestorRelations /> 
        <Accelerator />
 
   


        <CTA />

        <Footer />
      </div>
    </>
  );
};

export default Test;
