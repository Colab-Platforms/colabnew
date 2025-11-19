import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { Brain, Smartphone, Trophy, Gamepad2, Plane, Cpu, ChevronRight } from "lucide-react";

const Testing = () => {
  const [currentText, setCurrentText] = useState(0);
  const [activeSection, setActiveSection] = useState("ai");
  
  const texts = ["AI", "FinTech", "Sports", "Esports", "Drone", "Semiconductor"];
  
  const sections = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      icon: Brain,
      description: "Revolutionizing industries with cutting-edge AI solutions and machine learning technologies.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      color: "from-blue-500 to-cyan-500",
      align: "left"
    },
    {
      id: "fintech",
      title: "Financial Technology",
      icon: Smartphone,
      description: "Transforming financial services with innovative digital payment and banking solutions.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      color: "from-green-500 to-emerald-500",
      align: "right"
    },
    {
      id: "sports",
      title: "Sports Excellence",
      icon: Trophy,
      description: "Building world-class sports infrastructure and athlete development programs.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
      color: "from-orange-500 to-red-500",
      align: "left"
    },
    {
      id: "esports",
      title: "Esports Gaming",
      icon: Gamepad2,
      description: "Creating the future of competitive gaming and esports entertainment.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
      color: "from-purple-500 to-pink-500",
      align: "right"
    },
    {
      id: "drone",
      title: "Drone Technology",
      icon: Plane,
      description: "Pioneering autonomous drone systems for defense and commercial applications.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80",
      color: "from-indigo-500 to-blue-500",
      align: "left"
    },
    {
      id: "semiconductor",
      title: "Semiconductor Innovation",
      icon: Cpu,
      description: "Advancing chip technology and semiconductor manufacturing capabilities.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
      color: "from-yellow-500 to-orange-500",
      align: "right"
    }
  ];

  // Auto-rotate text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveSection(sectionId);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
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
              className="font-serif font-black text-7xl md:text-8xl lg:text-9xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-white mb-4">We Are</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {texts[currentText]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Building the future across multiple industries
            </motion.p>
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

        {/* Floating Navigation Tabs */}
        <motion.div
          className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col gap-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`group relative w-14 h-14 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-br from-primary to-secondary border-primary shadow-lg shadow-primary/50'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/30'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className={`w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    activeSection === section.id ? 'text-white' : 'text-foreground'
                  }`} />
                  
                  {/* Tooltip */}
                  <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="px-4 py-2 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 whitespace-nowrap">
                      <span className="text-sm font-bold text-white">{section.title}</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Sections */}
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isLeft = section.align === "left";

          return (
            <section
              key={section.id}
              id={section.id}
              className="relative min-h-screen flex items-center py-20"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="container relative z-10 px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto ${
                  isLeft ? '' : 'lg:grid-flow-dense'
                }`}>
                  
                  {/* Content */}
                  <motion.div
                    className={isLeft ? '' : 'lg:col-start-2'}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r ${section.color} bg-opacity-10 border border-current mb-8`}>
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-bold uppercase tracking-wider">
                        {section.id}
                      </span>
                    </div>

                    <h2 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                      <span className="block text-foreground">{section.title.split(' ')[0]}</span>
                      <span className={`block bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                        {section.title.split(' ').slice(1).join(' ')}
                      </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                      {section.description}
                    </p>

                    <motion.button
                      className={`group px-8 py-4 rounded-2xl bg-gradient-to-r ${section.color} text-white font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all`}
                      whileHover={{ scale: 1.05, gap: '1rem' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Explore {section.title}</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    className={isLeft ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}
                    initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="relative group">
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute -inset-4 bg-gradient-to-r ${section.color} rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      />
                      
                      {/* Image Container */}
                      <div className="relative rounded-3xl overflow-hidden border-2 border-white/10">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>

                      {/* Corner Accents */}
                      <div className={`absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 rounded-tl-3xl bg-gradient-to-br ${section.color}`} style={{ borderColor: 'currentColor' }} />
                      <div className={`absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 rounded-br-3xl bg-gradient-to-tl ${section.color}`} style={{ borderColor: 'currentColor' }} />
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}

        <Footer />
      </div>
    </>
  );
};

export default Testing;
