import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 md:pb-40 bg-white dark:bg-[#121212]">
      {/* Header Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
        >
          Building India’s  <br />
          Next-Generation Technology Enterprise.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4"
        >
          Diversified technology conglomerate aligned with India’s innovation-driven growth vision.
        </motion.p>
      </div>

      {/* MOBILE-RESPONSIVE Image Gallery */}
      <div className="relative mt-12 md:mt-24">
        
        {/* Mobile: Native Scroll Carousel with All 6 Cards */}
        <MobileCarousel />

        {/* Tablet: 2 Column Grid */}
        <TabletGrid />

        {/* Desktop: Horizontal Flex Layout */}
        <DesktopFlex />
      </div>
    </section>
  );
}

// Mobile Carousel Component - Shows all 6 cards
function MobileCarousel() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/High_Quality_Laptop_Mockup.png?v=1770199634",
      alt: "Colab AI",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/gamer.png?v=1770199634",
      alt: "Colab Esports",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/sport_tech.png?v=1770199633",
      alt: "Tech Sport",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone_eda34ef4-7465-4658-adfa-95f7faf923b3.png?v=1770199696",
      alt: "Drones Technology",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/fintech.png?v=1770199634",
      alt: "FinTech Solutions",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/semi_con.png?v=1770199634",
      alt: "Semiconductor Technology",
    }
    
  ];

  // Detect current slide on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth - 16; // Adjusted for new padding
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(Math.max(0, Math.min(images.length - 1, newIndex)));
      }, 150);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [images.length]);

  // Scroll to specific index
  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = container.offsetWidth - 16; // Adjusted for new padding
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className="block md:hidden relative px-6">
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 snap-center snap-always"
            style={{ width: 'calc(100vw - 48px)' }} // Increased padding for better visibility
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <div className="relative overflow-hidden shadow-xl">
              {/* Shimmer Skeleton */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
                style={{ backgroundSize: '200% 100%' }}
                animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image */}
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-[280px] sm:h-[320px] object-cover relative z-10"
                initial={{ filter: "blur(20px)", opacity: 0 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.1 + 0.2,
                  ease: "easeOut"
                }}
                loading="lazy"
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-20"
                initial={{ x: '-100%' }}
                whileInView={{ x: '200%' }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.1 + 0.5,
                  ease: "easeInOut"
                }}
              />
              
              {/* Title Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-30">
                <div className="bg-black/80 backdrop-blur-md px-4 py-3 border border-white/20">
                  <p className="text-white font-semibold text-sm sm:text-base">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={() => scrollToIndex(currentIndex - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-black/60 backdrop-blur-md text-white p-3 transition-all hover:bg-black/80 active:scale-95"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {currentIndex < images.length - 1 && (
        <button
          onClick={() => scrollToIndex(currentIndex + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-black/60 backdrop-blur-md text-white p-3 transition-all hover:bg-black/80 active:scale-95"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index: number) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-8 bg-gray-900 dark:bg-white' 
                : 'w-2 bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {/* <div className="mt-4 mx-auto max-w-xs">
        <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gray-900 dark:bg-white"
            animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
          {currentIndex + 1} / {images.length}
        </p>
      </div> */}
    </div>
  );
}

// Tablet Grid Component
function TabletGrid() {
  const images = [
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone_eda34ef4-7465-4658-adfa-95f7faf923b3.png?v=1770199696",
      alt: "Drones Technology",
      height: "h-[320px]"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/fintech.png?v=1770199634",
      alt: "FinTech Solutions",
      height: "h-[320px]"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/semi_con.png?v=1770199634",
      alt: "Semiconductor Technology",
      height: "h-[320px]"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/High_Quality_Laptop_Mockup.png?v=1770199634",
      alt: "AI Technology",
      height: "h-[320px]"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/gamer.png?v=1770199634",
      alt: "Gaming & Esports",
      height: "h-[320px]"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/sport_tech.png?v=1770199633",
      alt: "Sports Technology",
      height: "h-[320px]"
    }
  ];

  return (
    <div className="hidden lg:hidden md:grid md:grid-cols-2 gap-4 px-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative group cursor-pointer"
          initial={{ 
            opacity: 0, 
            y: 60,
            scale: 0.9 
          }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1 
          }}
          viewport={{ 
            once: true, 
            margin: "-60px" 
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          whileHover={{
            y: -8,
            transition: { duration: 0.3 }
          }}
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            {/* Shimmer Skeleton */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
              style={{ backgroundSize: '200% 100%' }}
              animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Image */}
            <motion.img
              src={image.src}
              alt={image.alt}
              className={`w-full ${image.height} object-cover relative z-10`}
              initial={{ filter: "blur(20px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1 + 0.2,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                filter: "brightness(1.1)",
                transition: { duration: 0.5 }
              }}
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-30"
              initial={{ x: '-100%' }}
              whileInView={{ x: '200%' }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                delay: index * 0.1 + 0.5,
                ease: "easeInOut"
              }}
            />

            {/* Title - Slide up on hover */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4 z-30"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-black/80 backdrop-blur-md px-4 py-2.5 border border-white/20">
                <p className="text-white font-semibold text-sm">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Desktop Flex Component
function DesktopFlex() {
  const images = [

    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/High_Quality_Laptop_Mockup.png?v=1770199634",
      alt: "AI Technology",
      className: "",
      height: "h-[400px]"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/gamer.png?v=1770199634",
      alt: "Gaming & Esports",
      className: "mt-20",
      height: "h-[400px]"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone_eda34ef4-7465-4658-adfa-95f7faf923b3.png?v=1770199696",
      alt: "Drones Technology",
      className: "",
      height: "h-[400px]"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/sport_tech.png?v=1770199633",
      alt: "Sports Technology",
      className: "mt-20",
      height: "h-[400px]"
    },
   
    
    
     
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/fintech.png?v=1770199634",
      alt: "FinTech Solutions",
      className: "",
      height: "h-[400px]"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/semi_con.png?v=1770199634",
      alt: "Semiconductor Technology",
      className: "mt-20",
      height: "h-[420px]"
    }
    
  ];

  return (
    <div className="hidden lg:flex justify-center px-8 xl:px-[10rem] gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`${image.className} flex-1 transition-all duration-1000 ease-in-out hover:flex-[10] cursor-pointer group`}
          initial={{ 
            opacity: 0, 
            y: 80,
            scale: 0.85 
          }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1 
          }}
          viewport={{ 
            once: true, 
            margin: "-80px" 
          }}
          transition={{
            duration: 0.75,
            delay: index * 0.12,
            ease: [0.22, 0.61, 0.36, 1],
            opacity: { duration: 0.6 },
          }}
          whileHover={{
            y: -12,
            transition: { 
              duration: 0.35,
              ease: "easeOut" 
            }
          }}
        >
          <div className="relative overflow-hidden">
            {/* Shimmer Skeleton */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
              style={{ backgroundSize: '200% 100%' }}
              animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Image */}
            <motion.img
              src={image.src}
              alt={image.alt}
              className={`w-full ${image.height} object-cover relative z-10`}
              initial={{ 
                filter: "blur(20px) brightness(1.1)",
                opacity: 0 
              }}
              whileInView={{ 
                filter: "blur(0px) brightness(1)",
                opacity: 1 
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.12 + 0.2,
                ease: "easeOut"
              }}
              style={{
                transition: 'all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)'
              }}
              loading="lazy"
              decoding="async"
            />

            {/* Hover Scale Effect */}
            <div className="absolute inset-0 z-20 transition-transform duration-700 group-hover:scale-105">
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full ${image.height} object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                style={{ filter: 'brightness(1.1)' }}
              />
            </div>

            {/* Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none z-30"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-40"
              initial={{ x: '-100%' }}
              whileInView={{ x: '200%' }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: index * 0.12 + 0.5,
                ease: "easeInOut"
              }}
            />

            {/* Title Overlay */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 text-white z-50"
              initial={{ y: 30, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.4,
                ease: [0.22, 0.61, 0.36, 1]
              }}
            >
              <div className="bg-black/70 backdrop-blur-md px-4 py-3 border border-white/20 shadow-xl">
                <p className="text-sm font-medium tracking-wide">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}