import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Users, TrendingUp, Award } from "lucide-react";
import { useState, useEffect } from 'react';

const Mission = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipCount, setFlipCount] = useState(0);

  // Auto-switch layout every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
      setFlipCount(prev => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10 px-6 lg:px-8">
        {/* Who We Are Section */}
        <motion.div
          className="max-w-7xl mx-auto mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Images Grid with Auto-Switching Layout */}
            <div className="relative h-[700px]">
              <AnimatePresence mode="wait">
                {!isFlipped ? (
                  // Layout 1: Original (Left-Right)
                  <motion.div
                    key="layout1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={`layout1-top-${flipCount}`}
                        className="absolute top-0 left-0 w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-full h-full">
                          <img src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone-flying-in-silhouette-against-the-blue-sky-2024-11-27-13-22-09-utc.jpg?v=1763195285" alt="Cricket" className="w-full h-full object-cover" />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={`layout1-bottom-${flipCount}`}
                        className="absolute bottom-0 right-0 w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-full h-full">
                          <img src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Tech_Sports.jpg?v=1763126929" alt="Esports" className="w-full h-full object-cover" />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={`layout1-center-${flipCount}`}
                        className="absolute bottom-[32%] left-[30%] w-[45%] h-[45%] rounded-3xl overflow-hidden shadow-2xl z-10"
                        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        whileHover={{ scale: 1.1, zIndex: 20 }}
                      >
                        <div className="w-full h-full">
                          <img src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ESports_1.jpg?v=1763126929" alt="AI Technology" className="w-full h-full object-cover" />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  // Layout 2: Flipped (Right-Left) - Different images on second flip with smooth slide transitions
                  <motion.div
                    key="layout2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={`layout2-top-${flipCount}`}
                        className="absolute top-0 right-0 w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-full h-full">
                          <img 
                            src={flipCount >= 2 ? "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Fintech.jpg?v=1763126929" : "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80"} 
                            alt={flipCount >= 2 ? "Fintech" : "Cricket"} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={`layout2-bottom-${flipCount}`}
                        className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-full h-full">
                          <img 
                            src={flipCount >= 2 ? "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Fintech_copy.jpg?v=1763126929" : "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"} 
                            alt={flipCount >= 2 ? "Semiconductor Technology" : "Esports"} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={`layout2-center-${flipCount}`}
                        className="absolute bottom-[32%] right-[30%] w-[45%] h-[45%] rounded-3xl overflow-hidden shadow-2xl z-10"
                        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        whileHover={{ scale: 1.1, zIndex: 20 }}
                      >
                        <div className="w-full h-full">
                          <img 
                            src={flipCount >= 2 ? "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80" : "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80"} 
                            alt={flipCount >= 2 ? "Drone Technology" : "AI Technology"} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Who We Are</span>
              </div>

              <h2 className="font-serif font-black text-5xl md:text-6xl mb-6 leading-tight">
                Building India's <span className="text-primary">Future</span>
              </h2>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Colab Platforms is a diversified technology conglomerate, building the integrated ecosystems that will define India's future.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From AI innovation to fintech enablement, autonomous technologies, and immersive digital experiences, we create a unified ecosystem that drives progress across sectors.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, label: "15+ Ventures", color: "primary" },
                  { icon: Award, label: "6 Ecosystems", color: "secondary" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
                    whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.3)" }}
                  >
                    <stat.icon className={`w-6 h-6 text-${stat.color} mb-2`} />
                    <div className="text-2xl font-black text-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision & Mission - Timeline Style */}
        <div className="max-w-6xl mx-auto">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Icon Column */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-secondary/30 to-secondary/10 border-2 border-secondary/30 flex items-center justify-center">
                  <Target className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
                </div>
              </motion.div>

              {/* Content Column */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-secondary to-transparent rounded-full" />
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary">Our Mission</h3>
                </div>

                <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-6 md:mb-8 font-medium">
                To develop scalable platforms powered by AI, intelligent infrastructure, and next-gen technologies that strengthen India’s competitive edge across industries
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { title: "Innovation", desc: "Acceleration" },
                    { title: "Intelligence", desc: "Automation" },
                    { title: "Infrastructure", desc: "Scalability" },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="relative group"
                    >
                      <div className="p-4 md:p-6 border-l-4 border-secondary/50 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                        <div className="text-base md:text-lg font-black text-secondary mb-1">{point.title}</div>
                        <div className="text-sm text-muted-foreground">{point.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-24">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 md:flex-row-reverse">
              {/* Icon Column */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/30 flex items-center justify-center">
                  <Eye className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
              </motion.div>

              {/* Content Column */}
              <div className="flex-1 text-left md:text-right">
                <div className="flex items-center gap-4 mb-6 md:justify-end">
                  <div className="h-1 w-16 md:w-20 bg-gradient-to-r md:bg-gradient-to-l from-primary to-transparent rounded-full md:order-2" />
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary md:order-1">Our Vision</h3>
                </div>

                <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-6 md:mb-8 font-medium">
                  To position India at the forefront of global innovation by developing interconnected ecosystems across AI, fintech, semiconductors, autonomous systems, and digital experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { title: "Innovation", desc: "Leadership" },
                    { title: "Ecosystems", desc: "Integration" },
                    { title: "Technologies", desc: "Transformation" },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="relative group"
                    >
                      <div className="p-4 md:p-6 border-l-4 md:border-l-0 md:border-r-4 border-primary/50 bg-primary/5 hover:bg-primary/10 transition-colors text-left md:text-right">
                        <div className="text-base md:text-lg font-black text-primary mb-1">{point.title}</div>
                        <div className="text-sm text-muted-foreground">{point.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Mission;


