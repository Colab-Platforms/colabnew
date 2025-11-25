import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "https://cdn.shopify.com/videos/c/o/v/cc2faf9b69b24dc9a15bc8920fbe5524.mp4",
    "https://cdn.shopify.com/videos/c/o/v/a4e715aa7db741c699cb7dbb578c5ba7.mp4"
  ];

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

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
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
      style={{ backgroundImage: 'none' }}
    >
      {/* Full Background Video - ONLY */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          key={currentVideoIndex}
          src={videos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onEnded={handleVideoEnd}
          onError={(e) => {
            console.error('Video failed to load:', e);
            console.log('Trying to load:', videos[currentVideoIndex]);
          }}
        />
      </div>

      <div className="container relative z-20 px-6 lg:px-8 py-20" style={{ background: 'transparent' }}>
        <div className="max-w-7xl">
          {/* Left-aligned content */}
          <motion.div
            className="space-y-8 max-w-3xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-white backdrop-blur-sm">
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
              <span className="block mt-3 text-white drop-shadow-2xl">
                Ambition.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-2xl md:text-3xl text-white/90 max-w-2xl leading-relaxed font-medium"
            >
              Technology That Builds Nations.
              <span className="block mt-3 text-xl text-white/70">
                Transforming high-potential industries with tech-driven solutions.
              </span>
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-aeon-primary to-aeon-primary-dark hover:shadow-aeon-glow transition-all duration-500 text-lg px-8"
                onClick={() => window.location.href = '/about'}
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
                className="group relative overflow-hidden border-white/30 hover:bg-white/5 hover:border-white/50 text-lg px-8 text-white"
                onClick={() => {
                  const videoSection = document.querySelector('section:has(video[src*="1c8e4ef7e1324b52afec67e7b6ee4c7a"])');
                  if (videoSection) {
                    videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-4 w-4" /> Watch Video
                </span>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-4 pt-8 text-sm text-white/60"
            >
              <div className="p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
                <div className="text-2xl font-bold text-white">15+</div>
                <div>Active Ventures</div>
              </div>
              <div className="p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
                <div className="text-2xl font-bold text-white">6</div>
                <div>Core Ecosystems</div>
              </div>
              <div className="p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
                <div className="text-2xl font-bold text-white">Global</div>
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
