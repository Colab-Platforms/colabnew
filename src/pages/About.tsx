import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeroSection from "@/components/ui/about_hero";
import MissionVision from "@/components/ui/aboutMissionVision";

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Company Info & Quotes data
  const companyInfo = [
    {
      // quote: "Building India's future through integrated technology and sports ecosystems",
      // stat: "15+",
      // statLabel: "Active Ventures",
      description:
        "At Colab Platforms, our vision is to build leadership across high-growth sectors including Artificial Intelligence, Blockchain, Semiconductors, Fintech, Drones, and Sports & Gaming. By integrating these future-focused verticals into a unified ecosystem, we are creating a scalable, innovation-driven platform designed for long-term value creation. Our strategy is aligned with India’s accelerating digital and industrial transformation, positioning Colab Platforms to evolve into a next-generation technology conglomerate delivering sustainable growth, diversified opportunities, and strong stakeholder returns.",
    },
    // {
    //   quote: "Architecting platforms that unlock human potential and technological possibility",
    //   stat: "₹500Cr+",
    //   statLabel: "Portfolio Value",
    //   description: "Our diversified portfolio spans cutting-edge technology ventures and world-class sports properties, positioning us at the intersection of India's most dynamic growth sectors."
    // },
    // {
    //   quote: "From the stadium to the stars, from the playing field to the battlefield",
    //   stat: "Global",
    //   statLabel: "Presence",
    //   description: "With operations spanning sports leagues, technology ventures, and defense systems, we're building the infrastructure that will power India's rise as a global superpower."
    // },
    // {
    //   quote: "We don't build isolated products. We architect integrated ecosystems",
    //   stat: "2",
    //   statLabel: "Core Ecosystems",
    //   description: "Our dual ecosystem approach combines sports excellence with deep-tech innovation, creating compounding value where each venture strengthens the others."
    // },
    // {
    //   quote: "Long-term infrastructure investment for decades, not quarters",
    //   stat: "10+",
    //   statLabel: "Years Experience",
    //   description: "Led by visionary entrepreneurs with proven track records in entertainment, sports, and technology, we invest in capabilities that will define India's competitive advantage."
    // }
  ];

  // Auto-rotate company info
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % companyInfo.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(timer);
  }, [companyInfo.length]);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-foreground">
        <InfinityCursor />
        <Header />
        {/* Hero Section – Parallax Image Banner - Mobile Responsive */}
        // MOBILE-RESPONSIVE VERSION // Optimized for mobile, tablet, and
        desktop with adaptive animations
        <HeroSection />
        <MissionVision />
        {/* Transforming Vision - FAQ Style Section */}
        {/* Vision - Final Statement */}
        {/* <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
          <div className="container relative z-10 px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-8"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
              </motion.div>

              <h2 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl mb-8">
                Building for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Billions</span>
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
                Our mission is simple: build the integrated platforms that will power India's rise as a global superpower.
              </p>

              <p className="text-lg text-muted-foreground/80 mb-8">
                From the stadium to the stars. From the playing field to the battlefield.
              </p>

              <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <p className="text-2xl font-bold text-foreground">
                  We architect ambition.
                </p>
              </div>
            </motion.div>
          </div>
        </section> */}
        {/* Your Business Goals Section */}
        <section className="relative py-20 ovTestimonial section - Ye content?erflow-hidden bg-white dark:bg-[#121212]">
          <div className="container relative z-10 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Heading Section - 2 Column Layout */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Left - Heading */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Director Note's
                  </h2>
                </motion.div>

                {/* Right - Description */}
                {/* <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Dictum ultrices porttitor amet nec sollicitudin mi molestie adipiscing netus. Lorem at ac ut morbi ullamcorper molestie lacus loren ipsum dummy text provide happy
                  </p>
                </motion.div> */}
              </div>

              {/* Image with Testimonial Card - Mobile Responsive Layout */}
              <div className="relative">
                {/* Desktop Layout - Image with Overlapping Card */}
                <div className="hidden lg:block">
                  {/* Main Image - Larger Size */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-2xl"
                  >
                    <div className="relative overflow-hidden shadow-2xl h-[610px]">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/puneet_ji.png?v=1770288443"
                        alt="Business Professional"
                        className="w-full h-[650px] object-fit "
                      />
                    </div>
                  </motion.div>

                  {/* Floating Testimonial Card - Overlapping Image */}
                  <div className="absolute top-20 right-0 lg:right-10 max-w-2xl">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="bg-white dark:bg-black p-10 shadow-2xl relative overflow-hidden"
                      style={{ marginLeft: "-120px" }}
                    >
                      {/* Subtle Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2b33da]/5 via-[#7f01ff]/5 to-[#ec4899]/5 dark:from-[#dc2626]/5 dark:via-[#ff4500]/5 dark:to-[#ff6b35]/5 pointer-events-none" />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Quote Icon */}
                        <div className="mb-6">
                          <svg
                            className="w-12 h-12 text-[#2b33da]/20 dark:text-[#ff4500]/20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>

                        {/* Quote Text */}
                        {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                          "{companyInfo[currentTestimonial].quote}"
                        </h3> */}

                        {/* Stat Display */}
                        {/* <div className="flex items-baseline gap-3 mb-6">
                          <div className="text-5xl font-black bg-gradient-to-r from-[#2b33da] to-[#7f01ff] dark:from-[#dc2626] dark:to-[#ff4500] bg-clip-text text-transparent">
                            {companyInfo[currentTestimonial].stat}
                          </div>
                          <div className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
                            {companyInfo[currentTestimonial].statLabel}
                          </div>
                        </div> */}

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-10">
                          {companyInfo[currentTestimonial].description}
                        </p>

                        {/* Navigation Arrows */}
                        {/* <div className="flex justify-end gap-2">
                          <button
                            onClick={() =>
                              setCurrentTestimonial(
                                (prev) =>
                                  (prev - 1 + companyInfo.length) %
                                  companyInfo.length,
                              )
                            }
                            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-[#2b33da] dark:hover:bg-[#ff4500] hover:text-white transition-colors flex items-center justify-center"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() =>
                              setCurrentTestimonial(
                                (prev) => (prev + 1) % companyInfo.length,
                              )
                            }
                            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-[#2b33da] dark:hover:bg-[#ff4500] hover:text-white transition-colors flex items-center justify-center"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div> */}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Mobile & Tablet Layout - Stacked */}
                <div className="block lg:hidden space-y-8">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="relative overflow-hidden shadow-xl">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/puneet_ji.png?v=1770288443"
                        alt="Business Professional"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Testimonial Card - Below Image */}
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="bg-white dark:bg-black p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden rounded-lg"
                  >
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2b33da]/5 via-[#7f01ff]/5 to-[#ec4899]/5 dark:from-[#dc2626]/5 dark:via-[#ff4500]/5 dark:to-[#ff6b35]/5 pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <div className="mb-4 sm:mb-6">
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#2b33da]/20 dark:text-[#ff4500]/20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Quote Text */}
                      {/* <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                        "{companyInfo[currentTestimonial].quote}"
                      </h3> */}

                      {/* Stat Display */}
                      {/* <div className="flex items-baseline gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-[#2b33da] to-[#7f01ff] dark:from-[#dc2626] dark:to-[#ff4500] bg-clip-text text-transparent">
                          {companyInfo[currentTestimonial].stat}
                        </div>
                        <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-semibold">
                          {companyInfo[currentTestimonial].statLabel}
                        </div>
                      </div> */}

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 md:mb-10">
                        {companyInfo[currentTestimonial].description}
                      </p>

                      {/* Navigation Arrows */}
                      {/* <div className="flex justify-center sm:justify-end gap-2">
                        <button
                          onClick={() =>
                            setCurrentTestimonial(
                              (prev) =>
                                (prev - 1 + companyInfo.length) %
                                companyInfo.length,
                            )
                          }
                          className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-[#2b33da] dark:hover:bg-[#ff4500] hover:text-white transition-colors flex items-center justify-center rounded-lg"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() =>
                            setCurrentTestimonial(
                              (prev) => (prev + 1) % companyInfo.length,
                            )
                          }
                          className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-[#2b33da] dark:hover:bg-[#ff4500] hover:text-white transition-colors flex items-center justify-center rounded-lg"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div> */}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default About;
