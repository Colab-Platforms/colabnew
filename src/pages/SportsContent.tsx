import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Video, Play, Film, Tv, Radio, Camera, ArrowRight, Eye, Clock } from "lucide-react";

const SportsContent = () => {
  const contentTypes = [
    { title: "Live Streaming", desc: "24/7 live sports coverage", icon: Radio, count: "500+ Events", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80" },
    { title: "Documentaries", desc: "Inspiring athlete stories", icon: Film, count: "50+ Films", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" },
    { title: "Highlights", desc: "Best moments daily", icon: Tv, count: "Daily Updates", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80" },
    { title: "Behind The Scenes", desc: "Exclusive access", icon: Camera, count: "100+ Videos", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero - Video Platform Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20">
            <source src="https://cdn.shopify.com/videos/c/o/v/3995f055b81e4fcf8b17e21bd37f9e30.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/20 border border-primary/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Video className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Media & Broadcasting</span>
            </motion.div>

            <motion.h1 
              className="font-serif font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-white">Sports</span>
              <span className="block text-primary">Content</span>
            </motion.h1>

            <motion.p 
              className="text-2xl text-white/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Creating compelling sports content that inspires millions. From live streaming to documentaries, we tell the stories that matter.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white font-bold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Play className="w-5 h-5" />
                Watch Now
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-bold hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
              >
                Explore Content
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Types - Large Cards */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {contentTypes.map((type, i) => (
              <motion.div
                key={i}
                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </motion.div>
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-md flex items-center justify-center">
                      <type.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                      <span className="text-sm font-bold text-white">{type.count}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-4xl text-white mb-2">{type.title}</h3>
                    <p className="text-white/80 text-lg">{type.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Eye, value: "10M+", label: "Monthly Views" },
              { icon: Video, value: "5K+", label: "Videos" },
              { icon: Clock, value: "24/7", label: "Live Coverage" },
              { icon: Film, value: "50+", label: "Documentaries" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-3xl bg-primary/5 border border-primary/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportsContent;
