import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden transition-all duration-300"
      style={{
        clipPath: `polygon(0 0, 100% 0, 100% ${Math.min(92 + (scrollProgress * 8), 100)}%, 50% ${Math.max(100 - (scrollProgress * 8), 100)}%, 0 ${Math.min(92 + (scrollProgress * 8), 100)}%)`
      }}
    >
      {/* Desktop Video */}
      <video
        src="https://cdn.shopify.com/videos/c/o/v/e9d5b59e5af24b3681475a9ae23a0172.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden md:block w-full h-screen object-cover"
      />

      {/* Mobile Video */}
      <video
        src="https://cdn.shopify.com/videos/c/o/v/955c3faa369840ca828e3b9540662247.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="md:hidden w-full h-screen object-cover"
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
