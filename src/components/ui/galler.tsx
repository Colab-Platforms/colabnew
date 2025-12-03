{/* galler.tsx */}
import { motion } from "framer-motion";

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
  },  {
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
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-white dark:bg-[#121212]">
      <motion.h1 
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center text-black dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
Media Showcase
      </motion.h1>
      <div className="flex overflow-hidden skew-x-[5deg] gap-4 w-full max-w-fit px-16">
        
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