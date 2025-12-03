import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Video, Play, Sparkles, Grid3x3, LayoutGrid } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All", icon: LayoutGrid },
    { id: "sports", label: "Sports", icon: ImageIcon },
    { id: "tech", label: "Technology", icon: Grid3x3 },
    { id: "events", label: "Events", icon: Sparkles },
  ];

  const galleryItems = [
    { id: 1, type: "image", category: "sports", title: "Championship Victory", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80" },
    { id: 2, type: "image", category: "tech", title: "AI Lab Innovation", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80" },
    { id: 3, type: "video", category: "events", title: "Tech Summit 2024", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80" },
    { id: 4, type: "image", category: "sports", title: "Team Celebration", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" },
    { id: 5, type: "image", category: "sports", title: "Training Excellence", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80" },
    { id: 6, type: "video", category: "tech", title: "Drone Testing", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80" },
    { id: 7, type: "image", category: "events", title: "Product Launch", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80" },
    { id: 8, type: "image", category: "tech", title: "Office Culture", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" },
    { id: 9, type: "image", category: "sports", title: "Victory Moment", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80" },
    { id: 10, type: "image", category: "tech", title: "Semiconductor Lab", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80" },
    { id: 11, type: "image", category: "events", title: "Conference Hall", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80" },
    { id: 12, type: "image", category: "sports", title: "Athletes Training", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80" },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Bento Grid pattern - defines varying sizes for cards
  const getBentoClass = (index: number) => {
    const patterns = [
      "md:col-span-2 md:row-span-2", // Large //1
      "md:col-span-1 md:row-span-1", // Small //2
      "md:col-span-1 md:row-span-2", // Tall  //3
      "md:col-span-2 md:row-span-1", // Wide  //4
      "md:col-span-1 md:row-span-2", // Small //5
      "md:col-span-2 md:row-span-2", // Tall  //6
      "md:col-span-2 md:row-span-1", // Wide  //7
      "md:col-span-1 md:row-span-1", // Small  //8
      "md:col-span-2 md:row-span-2", // Large  //9
      "md:col-span-1 md:row-span-1", // Small //10
      "md:col-span-1 md:row-span-1", // Small  //11
      "md:col-span-2 md:row-span-1", // Wide   //12
    ];
    return patterns[index % patterns.length];
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <InfinityCursor />
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          
          <div className="container relative z-10 px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">
                  Visual Stories
                </span>
              </motion.div>

              <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight">
                <span className="block text-foreground">Our</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Gallery
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore our journey through moments of innovation, excellence, and achievement
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="relative py-12">
          <div className="container px-6 lg:px-8">
            <motion.div
              className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {filters.map((filter, i) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`group px-8 py-4 font-bold text-lg transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50'
                      : 'bg-white/5 border border-white/10 text-foreground hover:bg-white/10 hover:border-primary/30'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <filter.icon className="w-5 h-5" />
                    <span>{filter.label}</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Gallery */}
        <section className="relative py-20">
          <div className="container px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-[280px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >   
                {filteredItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    className={`group relative overflow-hidden cursor-pointer ${getBentoClass(i)}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedImage(item.id)}
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay / background change on toggle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Video Icon */}
                    {item.type === "video" && (
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border-2 border-white/40 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </motion.div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        {item.type === "video" ? (
                          <Video className="w-4 h-4 text-secondary" />
                        ) : (
                          <ImageIcon className="w-4 h-4 text-primary" />
                        )}
                        <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* No Results */}
            {filteredItems.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">No items found</h3>
                <p className="text-muted-foreground">Try selecting a different filter</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-6xl w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  ✕
                </button>
                <img
                  src={galleryItems.find(item => item.id === selectedImage)?.image}
                  alt="Selected"
                  className="w-full h-auto rounded-3xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;