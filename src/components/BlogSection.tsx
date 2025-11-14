import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Get only first 6 blog posts (latest)
  const displayPosts = blogPosts.slice(0, 6);

  // Auto-rotate blogs every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayPosts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [displayPosts.length]);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-primary/5 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">Latest Articles</span>
          </motion.div>
          
          <h2 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="block text-foreground">Insights &</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Updates
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest news, stories, and innovations from the world of sports and technology
          </p>
        </motion.div>

        {/* Split Layout - Image Left, Content Right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left - Featured Image */}
          <motion.div
            key={`image-${activeIndex}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl"
            onClick={() => window.location.href = `/blog/${displayPosts[activeIndex].slug}`}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={displayPosts[activeIndex].image}
              alt={blogPosts[activeIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ scale: 1.05 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <motion.span 
                className="inline-block px-4 py-2 bg-gradient-to-r from-primary/40 to-secondary/40 backdrop-blur-xl border border-primary/50 rounded-full text-sm font-bold text-white uppercase tracking-wider"
                whileHover={{ scale: 1.05 }}
              >
                {displayPosts[activeIndex].category || 'Blog'}
              </motion.span>
            </div>

            {/* Number Badge */}
            <div className="absolute top-6 right-6">
              <motion.div 
                className="w-14 h-14 bg-black/60 backdrop-blur-xl rounded-xl flex items-center justify-center border-2 border-primary/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-2xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  {(activeIndex + 1).toString().padStart(2, '0')}
                </span>
              </motion.div>
            </div>

            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
              }}
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            key={`content-${activeIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <h3 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
                {displayPosts[activeIndex].title}
              </h3>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {displayPosts[activeIndex].excerpt || displayPosts[activeIndex].title}
              </p>
            </div>

            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">{displayPosts[activeIndex].date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">{displayPosts[activeIndex].author}</span>
              </div>
            </div>
            
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg rounded-2xl w-fit shadow-lg"
              whileHover={{ gap: '1rem', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = `/blog/${displayPosts[activeIndex].slug}`}
            >
              <span>Read Full Article</span>
              <span className="text-2xl">→</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Thumbnail Grid Below */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayPosts.map((post, index) => (
            <motion.button
              key={post.slug}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`relative h-32 rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? 'ring-2 ring-primary shadow-xl shadow-primary/50' 
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Thumbnail Image */}
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-gradient-to-t from-black/80 to-black/20'
                  : 'bg-gradient-to-t from-black/90 to-black/40'
              }`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <span className={`text-xs font-bold uppercase tracking-wider w-fit px-2 py-1 rounded-full mb-2 ${
                  activeIndex === index
                    ? 'bg-primary/40 text-primary border border-primary/60'
                    : 'bg-white/10 text-white/70'
                }`}>
                  {post.category || 'Blog'}
                </span>
                
                <h4 className="text-xs font-black text-white line-clamp-2">
                  {post.title}
                </h4>
              </div>

              {/* Active Indicator */}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeBlog"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"
                />
              )}
            </motion.button>
          ))}
        </div>


      </div>
    </section>
  );
};

export default BlogSection;
