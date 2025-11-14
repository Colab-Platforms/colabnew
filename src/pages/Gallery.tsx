import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Video, Award, Users, Calendar, MapPin, Play, Sparkles } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All", count: 24 },
    { id: "sports", label: "Sports", count: 8 },
    { id: "tech", label: "Technology", count: 6 },
    { id: "events", label: "Events", count: 5 },
    { id: "team", label: "Team", count: 5 },
  ];

  const galleryItems = [
    { id: 1, type: "image", category: "sports", title: "Championship Victory", date: "March 2024", location: "Mumbai", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80" },
    { id: 2, type: "image", category: "tech", title: "AI Lab Innovation", date: "Feb 2024", location: "Bangalore", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
    { id: 3, type: "video", category: "events", title: "Tech Summit 2024", date: "Jan 2024", location: "Delhi", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", duration: "4:32" },
    { id: 4, type: "image", category: "team", title: "Team Celebration", date: "March 2024", location: "Pune", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" },
    { id: 5, type: "image", category: "sports", title: "Training Excellence", date: "Feb 2024", location: "Chennai", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" },
    { id: 6, type: "video", category: "tech", title: "Drone Testing", date: "March 2024", location: "Hyderabad", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80", duration: "3:15" },
    { id: 7, type: "image", category: "events", title: "Product Launch", date: "Jan 2024", location: "Mumbai", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80" },
    { id: 8, type: "image", category: "team", title: "Office Culture", date: "Feb 2024", location: "Bangalore", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" },
    { id: 9, type: "image", category: "sports", title: "Victory Moment", date: "March 2024", location: "Kolkata", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80" },
    { id: 10, type: "image", category: "tech", title: "Semiconductor Lab", date: "Feb 2024", location: "Pune", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero - Full Width Split */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div 
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8"
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(var(--primary), 0)', '0 0 0 10px rgba(var(--primary), 0)'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">Visual Stories</span>
              </motion.div>

              <h1 className="font-serif font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] mb-8">
                <motion.span 
                  className="block text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Our
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    backgroundPosition: ['0% center', '200% center'],
                  }}
                  transition={{ 
                    opacity: { delay: 0.4 },
                    y: { delay: 0.4 },
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }
                  }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  Gallery
                </motion.span>
              </h1>

              <motion.p 
                className="text-2xl md:text-3xl text-muted-foreground mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Capturing moments that define our <span className="text-primary font-bold">innovation</span>, <span className="text-secondary font-bold">passion</span>, and <span className="text-foreground font-bold">excellence</span>
              </motion.p>

              {/* Quick Stats */}
              <motion.div 
                className="flex flex-wrap gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { value: "500+", label: "Photos", icon: ImageIcon },
                  { value: "50+", label: "Videos", icon: Video },
                  { value: "100+", label: "Events", icon: Award },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Image Collage */}
            <motion.div 
              className="relative h-[600px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Large Image */}
              <motion.div 
                className="absolute top-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
              </motion.div>

              {/* Medium Image */}
              <motion.div 
                className="absolute bottom-0 left-0 w-2/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent" />
              </motion.div>

              {/* Small Image */}
              <motion.div 
                className="absolute top-1/3 left-1/4 w-1/3 h-1/3 rounded-3xl overflow-hidden shadow-2xl z-10"
                whileHover={{ scale: 1.1, zIndex: 20 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&q=80" alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-1/4 right-1/4 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-3xl font-black text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Moments</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Navigation - Sticky */}
      <section className="relative py-8 overflow-hidden sticky top-20 z-40 bg-background/95 backdrop-blur-2xl border-b border-border/50">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`group relative px-6 py-3 rounded-2xl font-bold transition-all duration-300 overflow-hidden ${
                    activeFilter === filter.id
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background */}
                  {activeFilter === filter.id ? (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                      layoutId="activeFilter"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                  )}
                  
                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    {filter.label}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeFilter === filter.id 
                        ? "bg-white/20" 
                        : "bg-white/10"
                    }`}>
                      {filter.count}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5">
              <span className="text-sm text-muted-foreground">Showing {filteredItems.length} items</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery - NO CARDS! */}
      <section className="relative py-20 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="grid grid-cols-12 gap-4 max-w-7xl mx-auto auto-rows-[200px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredItems.map((item, i) => {
                // Dynamic grid spans for Bento layout
                const spans = [
                  { col: "col-span-12 md:col-span-7", row: "row-span-2" },
                  { col: "col-span-12 md:col-span-5", row: "row-span-1" },
                  { col: "col-span-12 md:col-span-5", row: "row-span-1" },
                  { col: "col-span-12 md:col-span-4", row: "row-span-2" },
                  { col: "col-span-12 md:col-span-8", row: "row-span-1" },
                  { col: "col-span-12 md:col-span-6", row: "row-span-2" },
                  { col: "col-span-12 md:col-span-6", row: "row-span-1" },
                  { col: "col-span-12 md:col-span-4", row: "row-span-1" },
                  { col: "col-span-12 md:col-span-8", row: "row-span-2" },
                  { col: "col-span-12 md:col-span-12", row: "row-span-1" },
                ];
                const span = spans[i % spans.length];

                return (
                  <motion.div
                    key={item.id}
                    className={`group relative ${span.col} ${span.row} rounded-3xl overflow-hidden cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    whileHover={{ scale: 1.02, zIndex: 10 }}
                  >
                    {/* Image */}
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredItem === item.id ? 1 : 0.7 }}
                      >
                        <motion.div
                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center"
                          whileHover={{ scale: 1.2 }}
                        >
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      {/* Top Bar */}
                      <div className="flex items-start justify-between">
                        <motion.div
                          className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                        >
                          <span className="text-xs font-bold text-white uppercase tracking-wider">{item.category}</span>
                        </motion.div>

                        {item.type === "video" && (
                          <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                            <span className="text-xs font-bold text-white">{item.duration}</span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Info */}
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h3 className="font-serif font-bold text-2xl md:text-3xl text-white mb-3 leading-tight">
                            {item.title}
                          </h3>
                          
                          <div className="flex items-center gap-4 text-sm text-white/80">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              <span>{item.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(var(--primary-rgb), 0.2) 0%, transparent 70%)',
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Event - Full Width Split */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
              {/* Left Content - 2 cols */}
              <motion.div 
                className="lg:col-span-2 flex flex-col justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6 w-fit">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">Featured Event</span>
                </div>
                
                <h2 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-6">
                  <span className="block text-foreground">Annual</span>
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tech Summit</span>
                  <span className="block text-foreground">2024</span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our biggest event bringing together innovators, athletes, and industry leaders for three days of inspiration.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Calendar, label: "March 15-17, 2024" },
                    { icon: MapPin, label: "Mumbai, India" },
                    { icon: Users, label: "5000+ Attendees" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg font-medium text-foreground">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Event Gallery
                </motion.button>
              </motion.div>

              {/* Right Images - 3 cols */}
              <motion.div 
                className="lg:col-span-3 grid grid-cols-2 gap-4 h-[600px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Large Image */}
                <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden group cursor-pointer">
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                      alt="Tech Summit Main"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-serif font-bold text-3xl text-white mb-2">Main Stage</h3>
                      <p className="text-white/80">Keynote presentations and panel discussions</p>
                    </div>
                  </div>
                </div>

                {/* Small Images */}
                {[
                  { img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80", title: "Networking" },
                  { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80", title: "Workshops" },
                ].map((item, i) => (
                  <div key={i} className="rounded-3xl overflow-hidden group cursor-pointer">
                    <div className="relative w-full h-full">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h4 className="font-bold text-xl text-white">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase - Horizontal Scroll */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
              <Video className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold text-secondary uppercase tracking-wider">Video Collection</span>
            </div>
            <h2 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl mb-6">
              Watch Our <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Relive the most memorable moments through our curated video highlights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Championship Victory", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80" },
              { title: "Behind The Scenes", duration: "5:20", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" },
              { title: "Innovation Lab Tour", duration: "4:15", thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" },
            ].map((video, i) => (
              <motion.div
                key={i}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                    <span className="text-sm font-bold text-white">{video.duration}</span>
                  </div>
                </div>

                {/* Info Bar */}
                <div className="p-6 bg-gradient-to-b from-background to-white/5">
                  <h3 className="font-serif font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;