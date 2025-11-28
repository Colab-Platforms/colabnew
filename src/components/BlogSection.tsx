import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Static blog posts for Colab Platforms announcements
const posts = [
  {
    title: "Colab Platforms plans to expand into the Trillion-dollar Tech Intelligence landscape.",
    category: "Announcement",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_skycraper_1.jpg?v=1764155867",
    excerpt: "Colab Platforms is set to broaden its horizons into the trillion-dollar tech intelligence market, aiming to lead innovation and insights.",
    date: "01st October 2025 ",
    author: "Colab Team",
    slug: "colab-tech-intelligence",
    link: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Press_Release__01.10.2025.pdf?v=1759476023",
  },
  {
    title: "Colab Platforms Limited to incorporate ‘Colab Semiconductor Pvt. Ltd.’ a Wholly owned Subsidiary to tap into India’s US $52 billion Semiconductor Market.",
    category: "Announcement",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/blu_chip.png?v=1764156319",
    excerpt: "Launching a new subsidiary to capture the booming Indian semiconductor market valued at $52B.",
    date: "24th October 2025 ",
    author: "Colab Team",
    slug: "colab-semiconductor",
    link: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Covering_letter_PR_24.10.2025_upload.pdf?v=1761302911",
  },
  {
    title: "Colab Platforms to Launch Revolutionary ‘AI-Powered Search Engine’, A Smarter, Superior Alternative to Traditional Search.",
    category: "Announcement",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_c58ilic58ilic58i_1.png?v=1764069440",
    excerpt: "Introducing a next-gen AI search engine that outperforms traditional search with smarter results.",
    date: "06th November 2025",
    author: "Colab Team",
    slug: "colab-ai-search",
    link: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Press_Release_for_AI_powered_Search_Engine_06.11.2025.pdf?v=1762412961",
  },
  {
    title: "Colab Platforms Limited and RRP Drones Innovation Private Limited (a ‘RRP Group Company’)",
    category: "Announcement",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone.png?v=1764156328",
    excerpt: "Strategic partnership with RRP Drones to innovate drone technology and services.",
    date: "06th November 2025",
    author: "Colab Team",
    slug: "colab-rrp-partnership",
    link: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Press_Release_for_AI_powered_Search_Engine_06.11.2025.pdf?v=1762412961",
  },
];

const BlogSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate posts every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activePost = posts[activeIndex];

  return (
    <section className="relative py-16 md:py-32 bg-white dark:bg-background overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 md:px-[50px]">
        {/* Announcements Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-wide transition-colors duration-300">Announcements</h2>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left Image */}
          <motion.div
            key={`image-${activeIndex}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[250px] md:h-[400px] lg:h-[600px] overflow-hidden group cursor-pointer shadow-2xl"
            onClick={() => window.location.href = activePost.link}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={activePost.image}
              alt={activePost.title}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ scale: 1.05 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            key={`content-${activeIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4 leading-tight font-bold" style={{ letterSpacing: '1px' }}>
                {activePost.title}
              </h3>
              <p className="text-xl md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                {activePost.excerpt}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-base md:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">{activePost.date}</span>
              </div>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">{activePost.author}</span>
              </div>
            </div>
            <motion.button
              className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg md:text-lg w-fit shadow-lg"
              whileHover={{ gap: '1rem', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = activePost.link}
            >
              <span>Read Full Article</span>
              <span className="text-xl md:text-2xl">→</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Thumbnail Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <motion.button
              key={post.slug}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`relative h-64 xl:h-80 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'ring-2 ring-primary shadow-xl shadow-primary/50' : 'opacity-70 hover:opacity-100'}`}
            >
              <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
