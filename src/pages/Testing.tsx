import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";

import TwoPillars from "@/components/TwoPillars";
import BlogSection from "@/components/BlogSection";
import CTA from "@/components/CTA";
import { ChevronRight } from "lucide-react";

const Testing = () => {
  const [currentText, setCurrentText] = useState(0);
  const [activeSection, setActiveSection] = useState("ai");
  const [showTabs, setShowTabs] = useState(true);
  
  const texts = ["ARTIFICIAL INTELLIGENCE1", "FINTECH1", "ESPORTS", "TECH ESPORTS", "SEMICONDUCTOR", "DRONES", "COLAB"];
  
  const sections = [
    {
      id: "ai",
      label: "AI",
      title: "Amish Intelligence11",
      description: "Sustainable and scalable ecosystem that empowers individuals, businesses, and institutions to make better, faster, and more informed decisions.",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/search-engine-optimization-digital-marketing-proc-2024-12-07-03-49-59-utc.jpg?v=1763195283",
      color: "from-blue-500 to-cyan-500",
      align: "left"
    },
    {
      id: "fintech",
      label: "FINTECH",
      title: "FINTECH",
      description: "Unlocking India’s Next Billion Users Through Accessible Digital Finance.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      color: "from-green-500 to-emerald-500",
      align: "left"
    },
     {
      id: "esports",
      label: "ESPORTS",
      title: "ESPORTS",
      description: "A player-first ecosystem enabling athletes to compete, grow, and achieve global recognition",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-11-04_170025.png?v=1762255837",
      color: "from-purple-500 to-pink-500",
      align: "right"
    },
    {
      id: "sports",
      label: "TECH SPORTS",
      title: "Sports Excellence",
      description: "Creating Value Through Sports IP Ownership, Infrastructure Modernization, and Athlete Talent Development.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
      color: "from-orange-500 to-red-500",
      align: "right"
    },
    
    {
      id: "drone",
      label: "DRONE",
      title: "Drone Technology",
      description: "AI-powered autonomous drones with multi-sector applications in surveillance, security, and agriculture.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80",
      color: "from-indigo-500 to-blue-500",
      align: "left"
    },
    {
      id: "semiconductor",
      label: "SEMICONDUCTOR",
      title: "Semiconductor Innovation",
      description: "Powering India’s semiconductor future with long-term value creation.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
      color: "from-yellow-500 to-orange-500",
      align: "left"
    }
  ];

  // Auto-rotate text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to section - perfectly centered
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
      
      window.scrollTo({
        top: middle,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Track active section on scroll and hide tabs on footer and after content sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPosition = scrollY + windowHeight / 2;
      
      // Get last content section (semiconductor)
      const lastContentSection = document.getElementById('semiconductor');
      const footerSection = document.querySelector('footer');
      
      // Check if we've scrolled past the last content section
      let isPastContent = false;
      if (lastContentSection) {
        const lastSectionBottom = lastContentSection.offsetTop + lastContentSection.offsetHeight;
        isPastContent = scrollY > lastSectionBottom - windowHeight * 0.3;
      }
      
      // Check if we're in footer section
      let isInFooter = false;
      if (footerSection) {
        const footerTop = footerSection.offsetTop;
        isInFooter = scrollY + windowHeight > footerTop;
      }
      
      // Show tabs only on hero and content sections, hide after that
      setShowTabs(!isPastContent && !isInFooter);
      
      // Track active section
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <InfinityCursor />
        <Header />

        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://cdn.shopify.com/videos/c/o/v/6064f36abdd74e889b9d65606a5700ad.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>

          {/* Hero Content */}
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
                  className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
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

          {/* Scroll Indicator */}
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

        {/* Navigation Tabs - Modern Clean Design */}
        <motion.div
          className="fixed right-8 top-1/3 -translate-y-1/2 z-40 hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: showTabs ? 1 : 0,
            x: showTabs ? 0 : 50
          }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: showTabs ? 'auto' : 'none' }}
        >
          <div className="space-y-1">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative block w-full"
                whileHover={{ x: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Clean tab design without numbers */}
                <div className="relative">
                  {/* Background layer */}
                  <div className={`px-5 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-white/15 backdrop-blur-md'
                      : 'bg-white/5 backdrop-blur-sm hover:bg-white/10'
                  }`}>
                    
                    {/* Label only */}
                    <span className={`text-sm font-semibold tracking-wide transition-colors ${
                      activeSection === section.id
                        ? 'text-white'
                        : 'text-white/50 group-hover:text-white/80'
                    }`}>
                      {section.label}
                    </span>
                  </div>
                  
                  {/* Active border on right side */}
                  <motion.div
                    className="absolute right-0 top-0 bottom-0 w-1 bg-amber-400 rounded-l-full"
                    initial={{ scaleY: 0 }}
                    animate={{ 
                      scaleY: activeSection === section.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Sections - Full Background Banners */}
        {sections.map((section) => {
          const isLeft = section.align === "left";

          return (
            <section
              key={section.id}
              id={section.id}
              className="relative min-h-screen flex items-center"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  isLeft 
                    ? 'bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-transparent'
                    : 'bg-gradient-to-l from-slate-900/70 via-slate-800/50 to-transparent'
                }`} />
              </div>

              <div className="container relative z-10 px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto`}>
                  
                  {/* Content without Background */}
                  <motion.div
                    className={isLeft ? '' : 'lg:order-2'}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r ${section.color} bg-opacity-20 backdrop-blur-xl border border-white/20 mb-8`}>
                      <span className="text-sm font-bold uppercase tracking-wider text-white">
                        {section.label}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight text-white" style={{ fontFamily: "'Aloevera Display', serif", letterSpacing: '2.1px', fontWeight: 700 }}>
                      {section.title}
                    </h2>

                    <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                      {section.description}
                    </p>

                    <motion.button
                      className={`group px-4 py-2 md:px-6 md:py-3 rounded-xl bg-gradient-to-r ${section.color} text-white font-semibold text-sm md:text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all`}
                      whileHover={{ scale: 1.05, gap: '0.75rem' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Explore {section.title}</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>

                  {/* Empty space for alternating layout */}
                  <div className={isLeft ? 'lg:order-2' : 'lg:order-1'} />

                </div>
              </div>
            </section>
          );
        })}

        {/* Two Pillars Section */}
        <TwoPillars />

        {/* Blog Section */}
        <BlogSection />

      

        {/* CTA Section */}
        <CTA />

        <Footer />
      </div>
    </>
  );
};

export default Testing;
