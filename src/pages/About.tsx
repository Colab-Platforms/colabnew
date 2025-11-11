import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Brain, Shield, Plane, Cpu, Smartphone, Target, Gamepad2, Zap, Globe, Rocket, Users, TrendingUp, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState<"sports" | "tech">("sports");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />
      
      {/* Hero Section - Clean & Bold */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />

        {/* Floating Images */}
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 rounded-3xl overflow-hidden opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80" alt="Sports" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 w-40 h-40 rounded-3xl overflow-hidden opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80" alt="Technology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 w-56 h-56 rounded-3xl overflow-hidden opacity-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" alt="Innovation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 w-44 h-44 rounded-3xl overflow-hidden opacity-20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" alt="Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent" />
        </motion.div>

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">About Us</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-8">
                <span className="block text-foreground">Building India's</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                  Future
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
                A diversified technology conglomerate architecting integrated ecosystems across sports excellence and cutting-edge technology.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center gap-12 mb-12">
                {[
                  { value: "15+", label: "Active Ventures" },
                  { value: "2", label: "Core Ecosystems" },
                  { value: "Global", label: "Presence" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex flex-col items-center gap-2 text-muted-foreground"
              >
                <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
                <ArrowRight className="w-4 h-4 rotate-90" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story - Two Column */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Heading */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Story</span>
                </div>
                <h2 className="font-serif font-black text-5xl md:text-6xl leading-tight mb-6">
                  Two Worlds.{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    One Vision.
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Colab Platforms was founded on a singular belief: that India's future would be shaped by those who could bridge the physical and digital worlds.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We saw an opportunity to build not just companies, but entire ecosystems that would define how India competes, innovates, and leads on the global stage.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From our foundational sports network to our deep-tech ventures in AI, defense, and aerospace—we architect platforms that unlock human potential and technological possibility.
                </p>

                {/* Key Points */}
                <div className="space-y-3 pt-6">
                  {[
                    "Integrated ecosystem approach",
                    "Long-term infrastructure investment",
                    "World-class operational excellence",
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Tabs - Interactive */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Ecosystems</span>
              </div>
              <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
                Dual <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Powerhouses</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Two integrated platforms driving India's competitive advantage across sports and technology.
              </p>
            </motion.div>

            {/* Tab Switcher */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex gap-2 p-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
                <button
                  onClick={() => setActiveTab("sports")}
                  className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    activeTab === "sports"
                      ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  Sports Ecosystem
                </button>
                <button
                  onClick={() => setActiveTab("tech")}
                  className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    activeTab === "tech"
                      ? "bg-gradient-to-r from-secondary to-secondary/80 text-white shadow-lg scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  Tech Ecosystem
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === "sports" ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { 
                      icon: Target, 
                      title: "Elite Training", 
                      desc: "World-class academies and coaching programs developing the next generation of champions.",
                      color: "primary"
                    },
                    { 
                      icon: Gamepad2, 
                      title: "Esports", 
                      desc: "Professional gaming organization, tournament platforms, and digital competition infrastructure.",
                      color: "primary"
                    },
                    { 
                      icon: Cpu, 
                      title: "Sports Tech", 
                      desc: "Performance analytics, wearable technology, and data-driven athlete development systems.",
                      color: "primary"
                    },
                    { 
                      icon: Zap, 
                      title: "Management", 
                      desc: "Athlete representation, career development, and brand partnerships.",
                      color: "primary"
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-primary/50 transition-all duration-500 h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <motion.div
                        className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <item.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      
                      <h3 className="relative font-serif font-bold text-xl mb-3 text-foreground">{item.title}</h3>
                      <p className="relative text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      icon: Brain, 
                      title: "Artificial Intelligence", 
                      desc: "Enterprise AI and machine learning solutions for defense, intelligence, and high-stakes decision-making.",
                      color: "secondary"
                    },
                    { 
                      icon: Shield, 
                      title: "Defense Systems", 
                      desc: "Next-generation security and defense technologies protecting national interests.",
                      color: "secondary"
                    },
                    { 
                      icon: Plane, 
                      title: "Autonomous Drones", 
                      desc: "Cutting-edge aerial systems for surveillance, reconnaissance, and mission-critical operations.",
                      color: "secondary"
                    },
                    { 
                      icon: Cpu, 
                      title: "Semiconductors", 
                      desc: "Advanced chip design and manufacturing capabilities powering next-gen computing.",
                      color: "secondary"
                    },
                    { 
                      icon: Smartphone, 
                      title: "FinTech", 
                      desc: "Revolutionary financial technology platforms enabling digital payments and financial inclusion.",
                      color: "secondary"
                    },
                    { 
                      icon: Rocket, 
                      title: "Aerospace", 
                      desc: "Space technology and satellite systems pushing the boundaries of what's possible.",
                      color: "secondary"
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-secondary/50 transition-all duration-500 h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <motion.div
                        className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <item.icon className="w-7 h-7 text-secondary" />
                      </motion.div>
                      
                      <h3 className="relative font-serif font-bold text-xl mb-3 text-foreground">{item.title}</h3>
                      <p className="relative text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach - Clean Cards */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Approach</span>
              </div>
              <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
                How We <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Build</span>
              </h2>
            </motion.div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  number: "01",
                  title: "Ecosystem Thinking",
                  desc: "We don't build isolated products. We architect integrated ecosystems where each venture strengthens the others, creating compounding value.",
                },
                {
                  icon: TrendingUp,
                  number: "02",
                  title: "Long-Term Vision",
                  desc: "We invest in infrastructure and capabilities that will define India's competitive advantage for decades, not quarters.",
                },
                {
                  icon: Award,
                  number: "03",
                  title: "Operational Excellence",
                  desc: "From sports academies to AI systems, we obsess over execution. Strategy is nothing without world-class operations.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative p-10 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-primary/50 transition-all duration-500 h-full">
                    {/* Number */}
                    <div className="text-7xl font-black text-primary/10 mb-4">{item.number}</div>
                    
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    
                    <h3 className="font-serif font-bold text-2xl mb-4 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision - Final Statement */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
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

            <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <p className="text-2xl font-bold text-foreground">
                We architect ambition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
