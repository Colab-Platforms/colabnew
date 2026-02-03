import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

// Get top 4 blog posts
const cards = blogPosts.slice(0, 4).map((post) => ({
  id: post.slug,
  label: post.category || "Blog",
  title: post.title,
  description:
    post.excerpt ||
    post.content.substring(0, 150).replace(/<[^>]*>/g, "") + "...",
  image: post.image,
  slug: post.slug,
}));

const Empowerment: React.FC = () => {
  return (
    <section className="py-90 mt-32 bg-white dark:bg-[#121212] relative overflow-hidden">
      <div className="w-full px-4 md:px-[50px] mt-90">
        {/* Section Heading - Word by Word Animation */}
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-black dark:text-white mb-16 leading-tight">
          {["Latest", "Insights", "&"].map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
          <br />
          {["Industry", "Updates"].map((word, index) => (
            <motion.span
              key={index + 3}
              className="inline-block mr-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: (index + 3) * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ card, index }: { card: (typeof cards)[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${card.slug}`);
  };

  return (
    <motion.div
      className="relative h-[400px] md:h-full w-full overflow-hidden cursor-pointer group "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${card.image})` }}
      />

      {/* Dark Overlay on Hover */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* Vertical Label (Always Visible) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-3/4 bg-black/40 backdrop-blur-md  flex items-center justify-center border border-white/10 z-10 transition-all duration-300 group-hover:bg-black/80 group-hover:h-full group-hover:left-0 group-hover:rounded-none group-hover:w-full group-hover:bg-opacity-90">
        {/* This container expands to fill the card on hover to become the background for text */}
      </div>

      {/* Vertical Text Label (Visible when NOT hovered) */}
      {/* <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-3/4 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-white font-Alovera text-xl tracking-widest uppercase -rotate-90 whitespace-nowrap">
                    {card.label}
                </span>
            </div> */}

      <div
        className={`font-display absolute left-4 top-1/2 -translate-y-1/2 w-12 h-3/4 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
      >
        <span className="text-white text-xl tracking-widest uppercase -rotate-90 whitespace-nowrap">
          {card.label}
        </span>
      </div>

      {/* Content (Visible on Hover) */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center p-8 z-30 text-center transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h3 className="text-3xl font-bold text-white mb-4 font-['Alovera Display']">
          {card.title}
        </h3>
        <p className="text-gray-200 text-lg leading-relaxed font-['Alovera Display'] max-w-md">
          {card.description}
        </p>
        <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#7f01ff] to-[#2b33da] dark:from-orange-500 dark:to-red-600 rounded-full" />
      </div>
    </motion.div>
  );
};

export default Empowerment;
