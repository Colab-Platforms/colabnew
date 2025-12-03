import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll animation for V-shape clip-path
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
    <section 
      className="relative min-h-screen w-full overflow-hidden transition-all duration-300"
      style={{
        clipPath: `polygon(0 0, 100% 0, 100% ${Math.min(92 + (scrollProgress * 8), 100)}%, 50% ${Math.max(100 - (scrollProgress * 8), 100)}%, 0 ${Math.min(92 + (scrollProgress * 8), 100)}%)`
      }}
    >
      <video
        src="https://cdn.shopify.com/videos/c/o/v/3121f2913188422ab0c86639b1e5b6c8.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-screen object-cover"
      />

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
