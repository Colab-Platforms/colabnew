import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Users, TrendingUp, Award } from "lucide-react";

const Mission = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10 px-6 lg:px-8">
        {/* Who We Are Section */}
        <motion.div
          className="max-w-7xl mx-auto mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Images Grid */}
            <div className="relative h-[600px]">
              <motion.div 
                className="absolute top-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80" alt="Cricket" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
              </motion.div>

              <motion.div 
                className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80" alt="Esports" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent" />
              </motion.div>

              <motion.div 
                className="absolute top-1/3 left-1/3 w-2/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.1, zIndex: 20 }}
              >
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80" alt="AI Technology" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40" />
              </motion.div>
            </div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Who We Are</span>
              </div>

              <h2 className="font-serif font-black text-5xl md:text-6xl mb-6 leading-tight">
                Building India's <span className="text-primary">Future</span>
              </h2>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Colab Platforms is a diversified technology conglomerate, building the integrated ecosystems that will define India's future.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From our foundational sports network to our deep-tech ventures in AI, defense, and we architect platforms that unlock human potential and technological possibility.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, label: "15+ Ventures", color: "primary" },
                  { icon: Award, label: "2 Ecosystems", color: "secondary" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
                    whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.3)" }}
                  >
                    <stat.icon className={`w-6 h-6 text-${stat.color} mb-2`} />
                    <div className="text-2xl font-black text-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision & Mission - Side by Side */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" alt="Vision" className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-serif font-black text-4xl mb-6 text-foreground">
                  Our <span className="text-primary">Vision</span>
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To architect India's leadership in sports excellence and cutting-edge technology, creating integrated ecosystems that empower a billion dreams.
                </p>

                <div className="space-y-3">
                  {[
                    "Global sports powerhouse",
                    "Technology innovation leader",
                    "Integrated ecosystem builder",
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative h-full p-10 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10">
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" alt="Mission" className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                </div>

                <h3 className="font-serif font-black text-4xl mb-6 text-foreground">
                  Our <span className="text-secondary">Mission</span>
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To build world-class platforms that unlock human potential through sports excellence and technological innovation, creating lasting value for India and the world.
                </p>

                <div className="space-y-3">
                  {[
                    "Empower athletes & innovators",
                    "Build sustainable ecosystems",
                    "Drive national transformation",
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
