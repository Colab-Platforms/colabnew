import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Users, FileText, Handshake, TrendingUp, Star, Target, ArrowRight } from "lucide-react";

const AthleteManagement = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=80" alt="Athletes" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        </div>

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/20 border border-primary/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Career Development</span>
            </motion.div>

            <motion.h1 
              className="font-serif font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-white">Athlete</span>
              <span className="block text-primary">Management</span>
            </motion.h1>

            <motion.p 
              className="text-2xl text-white/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive athlete management services from contract negotiations to brand partnerships. Guiding athletes to reach their full potential.
            </motion.p>

            <motion.button
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white font-bold flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: FileText, emoji: "📝", title: "Contract Negotiation", desc: "Best deals for athletes" },
              { icon: Handshake, emoji: "🤝", title: "Brand Partnerships", desc: "Strategic endorsements" },
              { icon: TrendingUp, emoji: "📈", title: "Career Planning", desc: "Long-term success" },
              { icon: Star, emoji: "✨", title: "Personal Branding", desc: "Build your legacy" },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="text-5xl mb-4">{service.emoji}</div>
                <h3 className="font-bold text-xl text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AthleteManagement;
