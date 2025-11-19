import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Building2, MapPin, Home, School, Trophy, ArrowRight } from "lucide-react";

const SportsInfrastructure = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1508614999368-9260051292e5?w=1600&q=80" alt="Infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/20 border border-primary/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Building2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Facilities & Development</span>
            </motion.div>

            <motion.h1 
              className="font-serif font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-white">Sports</span>
              <span className="block text-primary">Infrastructure</span>
            </motion.h1>

            <motion.p 
              className="text-2xl text-white/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Building world-class sports infrastructure across India. Creating facilities that nurture talent and host world-class competitions.
            </motion.p>

            <motion.button
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white font-bold flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Home, label: "Training Centers", value: "25+" },
              { icon: Trophy, label: "Stadiums", value: "10+" },
              { icon: School, label: "Academies", value: "15+" },
              { icon: Building2, label: "Sports Complexes", value: "30+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center"
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

      {/* Locations Map */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Pan-India <span className="text-primary">Presence</span>
            </h2>
            <p className="text-xl text-muted-foreground">World-class facilities across major cities</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { city: "Mumbai", facilities: "5 Centers", image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&q=80" },
              { city: "Delhi", facilities: "8 Centers", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80" },
              { city: "Bangalore", facilities: "6 Centers", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80" },
            ].map((location, i) => (
              <motion.div
                key={i}
                className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <img src={location.image} alt={location.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-serif font-bold text-3xl text-white mb-1">{location.city}</h3>
                  <p className="text-white/80">{location.facilities}</p>
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

export default SportsInfrastructure;
