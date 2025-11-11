import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, User, ArrowRight, TrendingUp, Tag, Search, Filter } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts", count: 24 },
    { id: "sports", label: "Sports", count: 8 },
    { id: "technology", label: "Technology", count: 6 },
    { id: "business", label: "Business", count: 5 },
    { id: "lifestyle", label: "Lifestyle", count: 5 },
  ];

  const featuredPost = {
    title: "The Future of Sports Technology: AI and Analytics Revolution",
    excerpt: "Exploring how artificial intelligence and advanced analytics are transforming the sports industry, from athlete performance to fan engagement.",
    author: "Rajesh Kumar",
    date: "Nov 10, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
    tags: ["AI", "Sports Tech", "Analytics"]
  };

  const blogPosts = [
    {
      id: 1,
      title: "Building India's Sports Infrastructure: A Vision for 2030",
      excerpt: "How world-class facilities are shaping the future of Indian sports and nurturing the next generation of champions.",
      author: "Priya Sharma",
      date: "Nov 8, 2024",
      readTime: "6 min read",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=600&q=80",
      tags: ["Infrastructure", "Development"]
    },
    {
      id: 2,
      title: "The Rise of Esports in India: From Hobby to Career",
      excerpt: "Exploring the explosive growth of competitive gaming and how it's creating new opportunities for young talent.",
      author: "Amit Patel",
      date: "Nov 6, 2024",
      readTime: "5 min read",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
      tags: ["Esports", "Gaming"]
    },
    {
      id: 3,
      title: "Athlete Management in the Digital Age",
      excerpt: "How technology is revolutionizing athlete representation, brand partnerships, and career development.",
      author: "Sneha Reddy",
      date: "Nov 4, 2024",
      readTime: "7 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      tags: ["Management", "Digital"]
    },
    {
      id: 4,
      title: "Sports Content Creation: Engaging the Next Generation",
      excerpt: "Strategies for creating compelling sports content that resonates with modern audiences across platforms.",
      author: "Vikram Singh",
      date: "Nov 2, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      tags: ["Content", "Media"]
    },
    {
      id: 5,
      title: "The Business of Sports IP: Maximizing Brand Value",
      excerpt: "Understanding intellectual property rights and how athletes can leverage their brand for long-term success.",
      author: "Ananya Gupta",
      date: "Oct 30, 2024",
      readTime: "8 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
      tags: ["IP", "Branding"]
    },
    {
      id: 6,
      title: "Nutrition and Performance: What Elite Athletes Eat",
      excerpt: "A deep dive into the dietary habits and nutrition strategies of world-class athletes.",
      author: "Dr. Meera Joshi",
      date: "Oct 28, 2024",
      readTime: "5 min read",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
      tags: ["Nutrition", "Health"]
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero Section - Magazine Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.05) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">Our Blog</span>
              </motion.div>

              <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
                <span className="block text-foreground">Stories &</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Insights</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Exploring the intersection of sports, technology, and innovation. Your source for industry insights and inspiring stories.
              </p>
            </motion.div>

            {/* Featured Post - Large Hero Card */}
            <motion.div
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative h-[600px]">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-8 left-8">
                  <div className="px-4 py-2 rounded-full bg-primary/90 backdrop-blur-md border border-white/20">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Featured</span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="max-w-4xl">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-xl text-white/90 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-white/80">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="text-sm font-medium">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar - Sticky */}
      <section className="relative py-8 overflow-hidden sticky top-20 z-40 bg-background/95 backdrop-blur-2xl border-b border-border/50">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-2xl font-bold transition-all duration-300 overflow-hidden ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeCategory === category.id ? (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                      layoutId="activeCategory"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                  )}
                  
                  <span className="relative z-10 flex items-center gap-2">
                    {category.label}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeCategory === category.id 
                        ? "bg-white/20" 
                        : "bg-white/10"
                    }`}>
                      {category.count}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center gap-2">
              <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <Search className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <Filter className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid - Masonry Style */}
      <section className="relative py-20 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-md border border-white/20">
                        <span className="text-xs font-bold text-white uppercase">{post.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag, j) => (
                        <span key={j} className="px-2 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{post.author}</div>
                          <div className="text-xs text-muted-foreground">{post.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-primary to-secondary shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Posts
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase">Stay Updated</span>
            </div>

            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Never Miss <span className="text-primary">an Update</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              Subscribe to our newsletter for the latest insights, stories, and industry trends delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none text-foreground placeholder:text-muted-foreground"
              />
              <motion.button
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Join 10,000+ subscribers. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
