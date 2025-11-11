import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Award, Shield, TrendingUp, FileText, Briefcase, DollarSign, ArrowRight } from "lucide-react";

const SportsIP = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/20 border border-primary/30 mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Intellectual Property</span>
              </motion.div>

              <h1 className="font-serif font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] mb-8">
                <span className="block text-foreground">Sports</span>
                <span className="block text-primary">IP</span>
              </h1>

              <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
                Managing and monetizing sports intellectual property rights. Maximizing brand value through strategic IP management and licensing.
              </p>

              <motion.button
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white font-bold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div 
              className="relative h-[600px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80" alt="Sports IP" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {[
              { icon: Shield, title: "Brand Management", desc: "Building and protecting athlete brands with strategic positioning" },
              { icon: FileText, title: "Licensing", desc: "Strategic licensing partnerships for maximum revenue" },
              { icon: Briefcase, title: "Rights Management", desc: "Media and commercial rights optimization" },
              { icon: DollarSign, title: "Monetization", desc: "Revenue optimization through smart IP strategies" },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="flex gap-8 p-8 rounded-3xl bg-primary/5 border border-primary/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-lg text-muted-foreground">{service.desc}</p>
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

export default SportsIP;
