import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Plane, Eye, Shield, ArrowRight, CheckCircle2, Award, Users, BookOpen, Settings, TrendingUp, Radio } from "lucide-react";

const Drones = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero - Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background" />
        
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-6" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <Plane className="w-4 h-4 text-secondary" />
                <span className="text-sm font-bold text-secondary uppercase">Autonomous Drones</span>
              </motion.div>

              <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
                <span className="block text-foreground">Sky</span>
                <span className="block text-secondary">Dominance</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Cutting-edge aerial systems for surveillance, reconnaissance, and mission-critical operations.
              </p>

              <motion.button className="px-8 py-4 rounded-2xl bg-secondary text-white font-bold flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                Explore Systems
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80" alt="Drones" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities - Horizontal Scroll Style */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              What Our Drones <span className="text-secondary">Can Do</span>
            </h2>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-24">
            {[
              {
                icon: Eye,
                title: "24/7 Surveillance",
                desc: "Continuous monitoring with thermal imaging and night vision capabilities for round-the-clock security.",
                image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&q=80",
                stats: ["4K Resolution", "Thermal Imaging", "30km Range"]
              },
              {
                icon: Radio,
                title: "Autonomous Flight",
                desc: "AI-powered navigation systems enabling fully autonomous missions without human intervention.",
                image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
                stats: ["GPS Precision", "Obstacle Avoidance", "Auto Return"]
              },
              {
                icon: Shield,
                title: "Defense Operations",
                desc: "Military-grade systems designed for reconnaissance, border patrol, and tactical operations.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
                stats: ["Encrypted Comms", "Stealth Mode", "Weather Resistant"]
              },
            ].map((capability, i) => (
              <motion.div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                    <img src={capability.image} alt={capability.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent" />
                    <motion.div className="absolute top-8 right-8 w-20 h-20 rounded-2xl bg-secondary/90 flex items-center justify-center" whileHover={{ rotate: 360 }}>
                      <capability.icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="font-serif font-black text-5xl mb-6">{capability.title}</h3>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{capability.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {capability.stats.map((stat, j) => (
                      <div key={j} className="px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20">
                        <span className="text-sm font-bold text-secondary">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications - Grid Table Style */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Technical <span className="text-secondary">Specifications</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              { category: "Flight Performance", specs: [
                { label: "Max Speed", value: "120 km/h" },
                { label: "Flight Time", value: "45 minutes" },
                { label: "Max Altitude", value: "5,000 meters" },
                { label: "Range", value: "30 km" },
              ]},
              { category: "Camera & Sensors", specs: [
                { label: "Camera Resolution", value: "4K @ 60fps" },
                { label: "Thermal Imaging", value: "640x512 px" },
                { label: "Gimbal Stabilization", value: "3-axis" },
                { label: "Night Vision", value: "Yes" },
              ]},
              { category: "System & Control", specs: [
                { label: "GPS Accuracy", value: "±0.5 meters" },
                { label: "Obstacle Detection", value: "360° sensors" },
                { label: "Communication", value: "Encrypted" },
                { label: "Battery Type", value: "LiPo 6S" },
              ]},
            ].map((section, i) => (
              <motion.div
                key={i}
                className="mb-12 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-serif font-bold text-3xl mb-6 text-secondary">{section.category}</h3>
                <div className="space-y-4">
                  {section.specs.map((spec, j) => (
                    <motion.div
                      key={j}
                      className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-lg text-muted-foreground">{spec.label}</span>
                      <span className="text-2xl font-black text-secondary">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - Image Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Real-World <span className="text-secondary">Applications</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Border Surveillance", desc: "Secure national borders with 24/7 monitoring", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" },
              { title: "Disaster Response", desc: "Rapid assessment and rescue operations", image: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=600&q=80" },
              { title: "Infrastructure Inspection", desc: "Safe inspection of bridges, towers, pipelines", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80" },
              { title: "Agriculture Monitoring", desc: "Crop health analysis and precision farming", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80" },
            ].map((app, i) => (
              <motion.div
                key={i}
                className="group relative h-96 rounded-3xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-serif font-bold text-4xl text-white mb-3">{app.title}</h3>
                  <p className="text-white/80 text-lg">{app.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance - Timeline */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Safety & <span className="text-secondary">Compliance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fully compliant with DGCA regulations and international standards
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: "DGCA Certified", desc: "All drones comply with Indian aviation regulations" },
                { icon: CheckCircle2, title: "Insurance Covered", desc: "Comprehensive liability coverage included" },
                { icon: Award, title: "ISO Certified", desc: "Quality management system certification" },
                { icon: Settings, title: "Regular Maintenance", desc: "Scheduled inspections and updates" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center" whileHover={{ rotate: 360 }}>
                    <item.icon className="w-8 h-8 text-secondary" />
                  </motion.div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training - Certification Program */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <BookOpen className="w-16 h-16 text-secondary mb-8" />
                <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
                  Pilot <span className="text-secondary">Certification</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Comprehensive training program to become a certified drone pilot
                </p>

                <div className="space-y-6">
                  {[
                    { phase: "Theory", duration: "2 weeks", topics: "Aviation rules, weather, safety protocols" },
                    { phase: "Simulator", duration: "1 week", topics: "Virtual flight training and scenarios" },
                    { phase: "Practical", duration: "2 weeks", topics: "Real drone operations and missions" },
                    { phase: "Certification", duration: "1 day", topics: "Final exam and license issuance" },
                  ].map((phase, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                        <span className="text-xl font-black text-secondary">{i + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-xl">{phase.phase}</h4>
                          <span className="text-sm text-secondary font-bold">{phase.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{phase.topics}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80" alt="Training" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-4xl font-black text-white mb-2">5 Weeks</div>
                    <div className="text-white/80">Complete Certification Program</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Management - Enterprise CTA */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <Users className="w-20 h-20 text-secondary mx-auto mb-8" />
              <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
                Enterprise <span className="text-secondary">Fleet Management</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Manage multiple drones, pilots, and missions from a single dashboard
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: TrendingUp, title: "Real-time Tracking", desc: "Monitor all drones simultaneously" },
                { icon: Settings, title: "Automated Scheduling", desc: "Plan and execute missions efficiently" },
                { icon: Shield, title: "Compliance Reports", desc: "Automated regulatory documentation" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="text-center p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <feature.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.button
                className="px-10 py-5 rounded-2xl bg-secondary text-white font-bold text-lg flex items-center gap-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Enterprise Demo
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Drones;
