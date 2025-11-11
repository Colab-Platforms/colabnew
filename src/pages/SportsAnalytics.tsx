import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { TrendingUp, BarChart, Activity, Brain, Shield, Zap, ArrowRight } from "lucide-react";

const SportsAnalytics = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/20 border border-primary/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Performance Technology</span>
            </motion.div>

            <motion.h1 
              className="font-serif font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-foreground">Sports</span>
              <span className="block text-primary">Analytics</span>
            </motion.h1>

            <motion.p 
              className="text-2xl text-muted-foreground mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Data-driven insights powering athletic excellence. Advanced analytics for smarter decisions and better performance.
            </motion.p>

            <motion.button
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white font-bold flex items-center gap-2 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: BarChart, title: "Performance Tracking", desc: "Real-time athlete performance monitoring", color: "from-blue-500 to-cyan-500" },
              { icon: Brain, title: "Predictive Analytics", desc: "AI-powered performance predictions", color: "from-purple-500 to-pink-500" },
              { icon: Shield, title: "Injury Prevention", desc: "Proactive health monitoring", color: "from-green-500 to-emerald-500" },
              { icon: Activity, title: "Game Strategy", desc: "Data-driven tactical insights", color: "from-orange-500 to-red-500" },
              { icon: Zap, title: "Real-time Insights", desc: "Live performance analytics", color: "from-yellow-500 to-orange-500" },
              { icon: TrendingUp, title: "Progress Tracking", desc: "Long-term development analysis", color: "from-indigo-500 to-purple-500" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
                <feature.icon className="w-12 h-12 text-primary mb-4 relative z-10" />
                <h3 className="font-bold text-xl text-foreground mb-2 relative z-10">{feature.title}</h3>
                <p className="text-muted-foreground relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Advanced <span className="text-primary">Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground">Comprehensive performance insights at your fingertips</p>
          </motion.div>

          <motion.div
            className="relative aspect-video rounded-3xl overflow-hidden max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80" alt="Analytics Dashboard" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-serif font-bold text-4xl text-white mb-3">Real-time Analytics Dashboard</h3>
              <p className="text-white/80 text-xl">Track every metric that matters for peak performance</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportsAnalytics;
