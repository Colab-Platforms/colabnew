import { Activity, Cpu, ArrowRight, Trophy, Brain, Zap, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TwoPillars = () => {
  const [activeEcosystem, setActiveEcosystem] = useState<"sports" | "tech">("sports");
  const [currentSlide, setCurrentSlide] = useState(0);

  const sportsSlides = [
    {
      title: "Elite Sports Training",
      subtitle: "World-Class Academies",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
      icon: Trophy,
    },
    {
      title: "Esports Revolution",
      subtitle: "Professional Gaming",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
      icon: Target,
    },
    {
      title: "Sports Technology",
      subtitle: "Performance Analytics",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
      icon: Zap,
    },
  ];

  const techSlides = [
    {
      title: "Artificial Intelligence",
      subtitle: "Machine Learning Solutions",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      icon: Brain,
    },
    {
      title: "Defense Systems",
      subtitle: "Advanced Security",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      icon: Zap,
    },
    {
      title: "Autonomous Drones",
      subtitle: "Aerial Innovation",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80",
      icon: Target,
    },
  ];

  const currentSlides = activeEcosystem === "sports" ? sportsSlides : techSlides;

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlides.length]);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 1.5px, transparent 1.5px)',
            backgroundSize: '50px 50px'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(6, 182, 212, 0.15) 60px, rgba(6, 182, 212, 0.15) 61px)',
          }}
        />
      </div>

      <div className="container relative z-10 px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">
              Our Ecosystems
            </span>
          </div>

          <h2 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="block text-foreground">Empowering Athletes and </span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tech Innovators
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Empowering India’s future by uniting sports excellence with technological innovation.
          </p>
        </motion.div>

        {/* Ecosystem Toggle */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex p-2 rounded-2xl bg-white/5 border border-white/10">
            <button
              onClick={() => {
                setActiveEcosystem("sports");
                setCurrentSlide(0);
              }}
              className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeEcosystem === "sports" ? "text-white" : "text-muted-foreground"
              }`}
            >
              {activeEcosystem === "sports" && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Sports Ecosystem
              </span>
            </button>

            <button
              onClick={() => {
                setActiveEcosystem("tech");
                setCurrentSlide(0);
              }}
              className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeEcosystem === "tech" ? "text-white" : "text-muted-foreground"
              }`}
            >
              {activeEcosystem === "tech" && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 rounded-xl"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                Tech Ecosystem
              </span>
            </button>
          </div>
        </motion.div>

        {/* Carousel Banner */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeEcosystem}-${currentSlide}`}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background Image */}
                <img 
                  src={currentSlides[currentSlide].image} 
                  alt={currentSlides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container px-6 lg:px-8">
                    <div className="max-w-3xl">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {/* Icon Badge */}
                        <motion.div 
                          className={`inline-flex w-20 h-20 rounded-3xl ${
                            activeEcosystem === "sports" ? "bg-primary" : "bg-secondary"
                          } shadow-2xl items-center justify-center mb-6`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {(() => {
                            const IconComponent = currentSlides[currentSlide].icon;
                            return <IconComponent className="w-10 h-10 text-white" strokeWidth={2.5} />;
                          })()}
                        </motion.div>

                        {/* Subtitle */}
                        <div className={`inline-block px-4 py-2 rounded-full ${
                          activeEcosystem === "sports" ? "bg-primary/20" : "bg-secondary/20"
                        } backdrop-blur-md border ${
                          activeEcosystem === "sports" ? "border-primary/30" : "border-secondary/30"
                        } mb-4`}>
                          <span className="text-sm font-bold text-white uppercase tracking-wider">
                            {currentSlides[currentSlide].subtitle}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif font-black text-6xl md:text-7xl text-white mb-8 leading-tight">
                          {currentSlides[currentSlide].title}
                        </h3>

                        {/* CTA Button */}
                        <motion.button
                          className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white ${
                            activeEcosystem === "sports" 
                              ? "bg-primary hover:bg-primary/90" 
                              : "bg-secondary hover:bg-secondary/90"
                          } shadow-2xl transition-all`}
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Explore More
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              {currentSlides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? `w-12 ${activeEcosystem === "sports" ? "bg-primary" : "bg-secondary"}` 
                      : "w-3 bg-white/40 hover:bg-white/60"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Ventures Grid */}
        <motion.div 
          className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {activeEcosystem === "sports" ? (
            <>
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.4)" }}
              >
                <Trophy className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-xl text-foreground mb-2">Elite Training</h4>
                <p className="text-muted-foreground text-sm">World-class coaching and facilities</p>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.4)" }}
              >
                <Target className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-xl text-foreground mb-2">Athlete Management</h4>
                <p className="text-muted-foreground text-sm">Career development and branding</p>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.4)" }}
              >
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-xl text-foreground mb-2">Sports Tech</h4>
                <p className="text-muted-foreground text-sm">Performance analytics and innovation</p>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
                whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.4)" }}
              >
                <Brain className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-bold text-xl text-foreground mb-2">AI Solutions</h4>
                <p className="text-muted-foreground text-sm">Machine learning and automation</p>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
                whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.4)" }}
              >
                <Zap className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-bold text-xl text-foreground mb-2">Defense Tech</h4>
                <p className="text-muted-foreground text-sm">Advanced security systems</p>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
                whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.4)" }}
              >
                <Target className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-bold text-xl text-foreground mb-2">Autonomous Systems</h4>
                <p className="text-muted-foreground text-sm">Drones and robotics</p>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TwoPillars;
