import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Brain, Shield, Plane, Cpu, Smartphone, Target, Gamepad2, Zap, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Brain,
      title: "Colab Intelligence",
      category: "AI & Machine Learning",
      description: "Enterprise AI and machine learning solutions for defense, intelligence, and high-stakes decision-making. Our AI systems power critical operations across government and enterprise sectors.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      color: "secondary",
      features: ["Neural Networks", "Deep Learning", "Predictive Analytics", "Computer Vision"]
    },
    {
      id: 2,
      icon: Shield,
      title: "Defense Systems",
      category: "Security & Defense",
      description: "Next-generation security and defense technologies protecting national interests. From surveillance to threat detection, we build systems that keep nations safe.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      color: "secondary",
      features: ["Surveillance Tech", "Threat Detection", "Cyber Security", "Strategic Defense"]
    },
    {
      id: 3,
      icon: Plane,
      title: "Aegis Drones",
      category: "Autonomous Systems",
      description: "Cutting-edge aerial systems for surveillance, reconnaissance, and mission-critical operations. Our drones operate in the most challenging environments.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
      color: "secondary",
      features: ["Autonomous Flight", "Reconnaissance", "Surveillance", "Mission Critical"]
    },
    {
      id: 4,
      icon: Cpu,
      title: "Semiconductors",
      category: "Chip Technology",
      description: "Advanced chip design and manufacturing capabilities powering the next generation of computing. Building India's semiconductor independence.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      color: "secondary",
      features: ["Chip Design", "Manufacturing", "R&D", "Innovation"]
    },
    {
      id: 5,
      icon: Smartphone,
      title: "FinTech Solutions",
      category: "Financial Technology",
      description: "Revolutionary financial technology platforms enabling digital payments, banking, and financial inclusion across India's diverse population.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      color: "secondary",
      features: ["Digital Payments", "Banking", "Financial Inclusion", "Blockchain"]
    },
    {
      id: 6,
      icon: Target,
      title: "Elite Sports Academy",
      category: "Sports Training",
      description: "World-class training facilities and coaching programs developing the next generation of champions. From grassroots to elite performance.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      color: "primary",
      features: ["Elite Coaching", "World-class Facilities", "Performance Analytics", "Career Development"]
    },
    {
      id: 7,
      icon: Gamepad2,
      title: "Colab Esports",
      category: "Digital Competition",
      description: "Professional esports organization, tournament platforms, and digital competition infrastructure. Leading India's esports revolution.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      color: "primary",
      features: ["Pro Gaming", "Tournaments", "Streaming", "Team Management"]
    },
    {
      id: 8,
      icon: Zap,
      title: "Sports Tech",
      category: "Performance Technology",
      description: "Performance analytics, wearable technology, and data-driven athlete development systems. Technology meets athletic excellence.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      color: "primary",
      features: ["Wearables", "Analytics", "Data Science", "Performance Tracking"]
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? 'rgba(168, 85, 247, 0.3)' : 'rgba(6, 182, 212, 0.3)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Services</span>
            </motion.div>

            <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
              <span className="block text-foreground">What We</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                Build
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              From AI-powered defense systems to world-class sports academies—we build the platforms that define India's future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services - Alternating Layout with Images */}
      <section className="relative py-20 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Image Side */}
                    <motion.div
                      className={`relative ${isEven ? '' : 'lg:col-start-2'}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${
                          service.color === 'primary' 
                            ? 'from-primary/40 to-transparent' 
                            : 'from-secondary/40 to-transparent'
                        }`} />
                        
                        {/* Animated Border */}
                        <motion.div
                          className={`absolute inset-0 rounded-3xl border-4 ${
                            service.color === 'primary' ? 'border-primary' : 'border-secondary'
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Floating Icon */}
                        <motion.div
                          className={`absolute top-8 right-8 w-20 h-20 rounded-2xl bg-gradient-to-br ${
                            service.color === 'primary'
                              ? 'from-primary/90 to-primary/70'
                              : 'from-secondary/90 to-secondary/70'
                          } backdrop-blur-sm flex items-center justify-center shadow-2xl`}
                          animate={{
                            y: hoveredService === service.id ? [0, -10, 0] : 0,
                            rotate: hoveredService === service.id ? [0, 5, -5, 0] : 0,
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </motion.div>

                        {/* Number Badge */}
                        <div className="absolute bottom-8 left-8">
                          <div className={`text-8xl font-black ${
                            service.color === 'primary' ? 'text-primary/20' : 'text-secondary/20'
                          }`}>
                            0{service.id}
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <motion.div
                        className={`absolute -z-10 inset-0 rounded-3xl blur-3xl ${
                          service.color === 'primary' 
                            ? 'bg-primary/20' 
                            : 'bg-secondary/20'
                        }`}
                        animate={{
                          scale: hoveredService === service.id ? 1.1 : 1,
                          opacity: hoveredService === service.id ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Content Side */}
                    <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      {/* Category Badge */}
                      <motion.div
                        className="inline-block"
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                          service.color === 'primary'
                            ? 'bg-primary/10 border border-primary/20'
                            : 'bg-secondary/10 border border-secondary/20'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                          } animate-pulse`} />
                          <span className={`text-sm font-bold uppercase tracking-wider ${
                            service.color === 'primary' ? 'text-primary' : 'text-secondary'
                          }`}>
                            {service.category}
                          </span>
                        </div>
                      </motion.div>

                      {/* Title */}
                      <motion.h2
                        className="font-serif font-black text-4xl md:text-5xl lg:text-6xl leading-tight"
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <span className="text-foreground">{service.title}</span>
                      </motion.h2>

                      {/* Description */}
                      <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Features List */}
                      <motion.div
                        className="grid grid-cols-2 gap-3 pt-4"
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        {service.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className={`flex items-center gap-2 px-4 py-3 rounded-xl ${
                              service.color === 'primary'
                                ? 'bg-primary/5 border border-primary/10'
                                : 'bg-secondary/5 border border-secondary/10'
                            }`}
                            whileHover={{ scale: 1.05, x: 5 }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                            }`} />
                            <span className="text-sm font-medium text-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                      >
                        <motion.button
                          className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white ${
                            service.color === 'primary'
                              ? 'bg-gradient-to-r from-primary to-primary/80'
                              : 'bg-gradient-to-r from-secondary to-secondary/80'
                          } shadow-lg hover:shadow-xl transition-all duration-300`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Divider Line */}
                  {index < services.length - 1 && (
                    <motion.div
                      className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Ready to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transform?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's build the future together. Get in touch to explore how our services can power your ambitions.
            </p>
            <motion.button
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-primary to-secondary shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
