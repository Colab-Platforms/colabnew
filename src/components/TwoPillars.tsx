import { Image as ImageIcon, Video, Play, Volume2, VolumeX, Camera, Film } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const TwoPillars = () => {
  const [mediaType, setMediaType] = useState<"photos" | "videos">("photos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mutedVideos, setMutedVideos] = useState<{ [key: number]: boolean }>({ 0: true, 1: true, 2: true });
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const photos = [
    { id: 1, title: "Championship Victory", image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone-flying-in-silhouette-against-the-blue-sky-2024-11-27-13-22-09-utc.jpg?v=1763195285" },
    { id: 2, title: "AI Innovation Lab", image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Introduction-to-semiconductors.png?v=1763195282" },
    { id: 3, title: "Team Excellence", image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/search-engine-optimization-digital-marketing-proc-2024-12-07-03-49-59-utc.jpg?v=1763195283" },
  ];

  const videos = [
    { id: 1, title: "Sports Training", video: "https://cdn.shopify.com/videos/c/o/v/d1679275f40a462d9763a8070550088a.mp4" },
    { id: 2, title: "Tech Innovation", video: "https://cdn.shopify.com/videos/c/o/v/e1fbe2c8b0d44eafa01926e3b3d74bbf.mp4" },
    { id: 3, title: "Team Culture", video: "https://cdn.shopify.com/videos/c/o/v/fb946f9b107d4ab8abdb7673406afca9.mp4" },
  ];

  const upcomingPhotos = [
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/sport-and-lifestyle-young-sporty-woman-with-ligh-2025-10-10-21-53-34-utc.jpg?v=1763195285",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  ];

  const upcomingVideos = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
  ];

  const toggleMute = (index: number) => {
    setMutedVideos(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.muted = !mutedVideos[index];
    }
  };

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  // Auto-rotate images/videos every 5 seconds
  useEffect(() => {
    const totalItems = mediaType === "photos" ? photos.length : videos.length;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 5000);
    return () => clearInterval(timer);
  }, [mediaType]);

  // Reset index when switching media type
  useEffect(() => {
    setCurrentIndex(0);
  }, [mediaType]);

  // Auto-play current video and pause others
  useEffect(() => {
    if (mediaType === "videos") {
      // Play current video
      const currentVideo = videoRefs.current[currentIndex];
      if (currentVideo) {
        currentVideo.play().catch(err => console.log("Auto-play prevented:", err));
      }

      // Pause all other videos
      Object.keys(videoRefs.current).forEach(key => {
        const index = parseInt(key);
        if (index !== currentIndex && videoRefs.current[index]) {
          videoRefs.current[index]!.pause();
        }
      });
    }
  }, [currentIndex, mediaType]);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 1.5px, transparent 1.5px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container relative z-10 px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">
              Visual Stories
            </span>
          </div>

          <h2 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Media Gallery
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our journey through captivating photos and engaging videos that showcase our innovation, passion, and excellence
          </p>
        </motion.div>

        {/* Photo/Video Toggle */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex p-2 rounded-2xl bg-white/5 border border-white/10">
            <button
              onClick={() => {
                setMediaType("photos");
                setCurrentIndex(0);
              }}
              className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                mediaType === "photos" ? "text-white" : "text-muted-foreground"
              }`}
            >
              {mediaType === "photos" && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl"
                  layoutId="mediaTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Photos
              </span>
            </button>

            <button
              onClick={() => {
                setMediaType("videos");
                setCurrentIndex(0);
              }}
              className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                mediaType === "videos" ? "text-white" : "text-muted-foreground"
              }`}
            >
              {mediaType === "videos" && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 rounded-xl"
                  layoutId="mediaTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Video className="w-5 h-5" />
                Videos
              </span>
            </button>
          </div>
        </motion.div>

        {/* Main Display */}
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {mediaType === "photos" ? (
              <motion.div
                key="photos-main"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative h-[500px] rounded-3xl overflow-hidden group"
              >
                <img 
                  src={photos[currentIndex].image} 
                  alt={photos[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-8 left-8">
                  <h3 className="font-serif font-black text-5xl text-white mb-2">
                    {photos[currentIndex].title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-primary" />
                    <span className="text-white/80">Photo {currentIndex + 1} of {photos.length}</span>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-8 right-8 flex gap-3">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? "w-12 bg-primary" 
                          : "w-3 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="videos-main"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative h-[500px] rounded-3xl overflow-hidden group"
              >
                <video
                  ref={(el) => { videoRefs.current[currentIndex] = el; }}
                  src={videos[currentIndex].video}
                  loop
                  muted={mutedVideos[currentIndex]}
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => togglePlayPause(currentIndex)}
                          className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Play className="w-7 h-7 text-white" fill="white" />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleMute(currentIndex)}
                          className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          {mutedVideos[currentIndex] ? (
                            <VolumeX className="w-7 h-7 text-white" />
                          ) : (
                            <Volume2 className="w-7 h-7 text-white" />
                          )}
                        </motion.button>
                      </div>

                      {/* Navigation Dots */}
                      <div className="flex gap-3">
                        {videos.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${
                              index === currentIndex 
                                ? "w-12 bg-secondary" 
                                : "w-3 bg-white/40 hover:bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="font-serif font-black text-5xl text-white mb-2">
                      {videos[currentIndex].title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Film className="w-5 h-5 text-secondary" />
                      <span className="text-white/80">Video {currentIndex + 1} of {videos.length}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Upcoming Content - 3 Cards */}
        <motion.div 
          className="max-w-7xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-black text-foreground mb-8 text-center">
            Coming Up Next
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {mediaType === "photos" ? (
              upcomingPhotos.map((photo, index) => {
                const actualIndex = (currentIndex + index + 1) % photos.length;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => setCurrentIndex(actualIndex)}
                    className="relative h-[250px] rounded-2xl overflow-hidden cursor-pointer group"
                  >
                    <img 
                      src={photos[actualIndex].image} 
                      alt={photos[actualIndex].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <ImageIcon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold">Click to View</span>
                      </div>
                      <p className="text-white text-xs">{photos[actualIndex].title}</p>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              upcomingVideos.map((_, index) => {
                const actualIndex = (currentIndex + index + 1) % videos.length;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => setCurrentIndex(actualIndex)}
                    className="relative h-[250px] rounded-2xl overflow-hidden cursor-pointer group"
                  >
                    <video
                      src={videos[actualIndex].video}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <Film className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-bold">Click to View</span>
                      </div>
                      <p className="text-white text-xs">{videos[actualIndex].title}</p>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoPillars;
