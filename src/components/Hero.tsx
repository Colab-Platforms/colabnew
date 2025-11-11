import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion, Variants } from 'framer-motion';

const Hero = () => {

  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/3995f055b81e4fcf8b17e21bd37f9e30.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
      </div>

      {/* Modern Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Dot Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Diagonal Lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(6, 182, 212, 0.1) 35px, rgba(6, 182, 212, 0.1) 36px)',
          }}
        />
      </div>

    
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
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
      
      <div className="container relative z-10 px-6 lg:px-8 py-20">
        <div className="max-w-7xl">
          {/* Left-aligned content */}
          <motion.div 
            className="space-y-8 max-w-3xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="inline-block">
              <span className="px-4 py-2 rounded-full bg-aeon-primary/10 border border-aeon-primary/20 text-sm font-medium text-aeon-primary backdrop-blur-sm">
                Technology Conglomerate
              </span>
            </motion.div>
            
            <motion.h1 
              variants={item}
              className="font-serif font-black text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter"
            >
              <span className="block text-white drop-shadow-2xl">
                We Architect
              </span>
              <span className="block mt-3 bg-gradient-to-r from-[#a855f7] via-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent animate-gradient" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>
                Ambition.
              </span>
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-2xl md:text-3xl text-aeon-light/90 max-w-2xl leading-relaxed font-medium"
            >
              Two Worlds. One Vision.
              <span className="block mt-3 text-xl text-aeon-gray">
                Building India's Future, from the Stadium to the Stars.
              </span>
            </motion.p>
            
            <motion.div 
              variants={item}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-aeon-primary to-aeon-primary-dark hover:shadow-aeon-glow transition-all duration-500 text-lg px-8"
              >
                <span className="relative z-10 flex items-center">
                  Explore Our Ecosystems
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-aeon-secondary/20 to-aeon-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group relative overflow-hidden border-aeon-primary/30 hover:bg-aeon-primary/5 hover:border-aeon-primary/50 text-lg px-8"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-4 w-4" /> Watch Video
                </span>
              </Button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              variants={item}
              className="grid grid-cols-3 gap-4 pt-8 text-sm text-aeon-gray"
            >
              <div className="p-4 bg-aeon-dark/50 backdrop-blur-sm rounded-xl border border-aeon-dark/30 hover:border-aeon-primary/30 transition-colors">
                <div className="text-2xl font-bold text-aeon-light">15+</div>
                <div>Active Ventures</div>
              </div>
              <div className="p-4 bg-aeon-dark/50 backdrop-blur-sm rounded-xl border border-aeon-dark/30 hover:border-aeon-primary/30 transition-colors">
                <div className="text-2xl font-bold text-aeon-light">2</div>
                <div>Core Ecosystems</div>
              </div>
              <div className="p-4 bg-aeon-dark/50 backdrop-blur-sm rounded-xl border border-aeon-dark/30 hover:border-aeon-primary/30 transition-colors">
                <div className="text-2xl font-bold text-aeon-light">Global</div>
                <div>Presence</div>
              </div>
            </motion.div>
          </motion.div>
          

        </div>
      </div>


    </section>
  );
};

export default Hero;
