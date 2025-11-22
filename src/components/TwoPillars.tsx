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
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Background Pattern - Removed */}

      <div className="relative z-10 w-full" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
        {/* Header & Toggle */}
        <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-end mb-16 min-h-[80px]">
          {/* Centered Heading */}
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 text-center mb-8 md:mb-0 z-0">
            <h2 className="text-5xl md:text-7xl font-semibold text-black">
              Gallery
            </h2>
          </div>

          {/* Right Side Toggle */}
          <div className="flex items-center gap-8 z-10 relative">
            <button
              onClick={() => {
                setMediaType("photos");
                setCurrentIndex(0);
              }}
              className={`text-4xl md:text-4xl transition-all duration-300 ${mediaType === "photos" ? "text-black font-bold" : "text-black/40 font-medium hover:text-black"
                }`}
            >
              Images
            </button>
            <button
              onClick={() => {
                setMediaType("videos");
                setCurrentIndex(0);
              }}
              className={`text-4xl md:text-4xl transition-all duration-300 ${mediaType === "videos" ? "text-black font-bold" : "text-black/40 font-medium hover:text-black"
                }`}
            >
              Videos
            </button>
          </div>
        </div>

        {/* Main Display - Hidden on Mobile */}
        <motion.div
          className="w-full hidden md:block"
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
                className="relative h-[700px] overflow-hidden group"
              >
                <img
                  src={photos[currentIndex].image}
                  alt={photos[currentIndex].title}
                  className="w-full h-full object-cover"
                />



                {/* Navigation Dots */}
                <div className="absolute bottom-8 right-8 flex gap-3">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
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
                className="relative h-[700px] overflow-hidden group"
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
                            className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                              ? "w-12 bg-secondary"
                              : "w-3 bg-white/40 hover:bg-white/60"
                              }`}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="font-black text-5xl text-white mb-2" style={{ letterSpacing: '2.1px' }}>
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
          className="w-full mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >


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
                    className="relative h-[400px] overflow-hidden cursor-pointer group"
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

                      </div>

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
                    className="relative h-[400px] overflow-hidden cursor-pointer group"
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
