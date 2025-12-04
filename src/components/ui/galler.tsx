{/* galler.tsx */}
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CardItem = {
  title: string;
  img: string;
};

const cards: CardItem[] = [
  {
    title: "Team Club",
    img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2025-08-28_at_7.16.45_PM_1.jpg?v=1756448712",
  },
  {
    title: "Sports",
    img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-09-06_160107.png?v=1757154699",
  },
  {
    title: "BGMI",
    img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-12-03_122119.png?v=1764745034",
  },
  {
    title: "Participation",
    img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2025-09-06_at_1.01.50_PM.jpg?v=1757162370",
  },
  {
    title: "CS-2",
    img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-12-03_115705.png?v=1764744793",
  },
];

export default function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="md:min-h-screen flex flex-col items-center justify-start p-6 bg-white dark:bg-[#121212]">
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center text-black dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Media Showcase
      </motion.h1>

      {/* Mobile Carousel View */}
      <div className="md:hidden w-full max-w-md mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] w-full overflow-hidden"
          >
            <img
              src={cards[currentIndex].img}
              alt={cards[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-500/90 to-purple-500/90 dark:from-orange-500/90 dark:to-red-600/90 text-white px-6 py-4 text-center">
              <h3 className="text-2xl font-bold">{cards[currentIndex].title}</h3>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 dark:bg-white/20 hover:bg-black/70 dark:hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 dark:bg-white/20 hover:bg-black/70 dark:hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-indigo-500 dark:bg-orange-500"
                  : "w-2 bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View - Original Design */}
      <div className="hidden md:flex overflow-hidden skew-x-[5deg] gap-4 w-full max-w-fit px-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              group relative h-[75vmin] flex-1 transition-all duration-1000 ease-in-out 
              hover:flex-[10] 
            "
          >
            <img
              src={card.img}
              alt={card.title}
              className="
                w-full h-full object-cover transition-all duration-1000 
                grayscale group-hover:grayscale-0 
              "
            />

            {/* Title */}
            <div
              className="
                absolute bottom-0 left-0 
                bg-indigo-500/75 dark:bg-gradient-to-r dark:from-orange-500 dark:to-red-600 text-black dark:text-white px-2 py-2 text-lg font-medium whitespace-nowrap 
                origin-top-left rotate-[-90deg]
                transition-all duration-500 
                group-hover:text-white group-hover:bg-black/50 dark:group-hover:bg-white/20
                group-hover:top-[calc(100%-2.5rem)] group-hover:rotate-0 group-hover:skew-x-[-5deg]
                skew-x-0 min-w-full text-center 
              "
            >
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
