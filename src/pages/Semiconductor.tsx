import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Cpu, Zap, Layers, Box, ArrowRight, CheckCircle2, Shield, Microscope, Rocket, Users, TrendingUp, Award, Settings, Eye } from "lucide-react";

const Semiconductor = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero - Minimal Clean */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10" />
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2306b6d4\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-8" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <Cpu className="w-4 h-4 text-secondary" />
                <span className="text-sm font-bold text-secondary uppercase">Semiconductor Technology</span>
              </motion.div>

              <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-9xl leading-[0.9] mb-8">
                <span className="block text-foreground">Powering</span>
                <span className="block text-secondary">Tomorrow</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Advanced chip design and manufacturing building India's semiconductor independence.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[
                  { value: "5nm", label: "Process Node" },
                  { value: "10B+", label: "Transistors" },
                  { value: "99.9%", label: "Yield Rate" },
                ].map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                    <div className="text-4xl font-black text-secondary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground uppercase">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process - Step by Step */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Manufacturing <span className="text-secondary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From silicon wafer to finished chip - our precision manufacturing journey
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {[
              { 
                step: "01", 
                title: "Wafer Preparation", 
                desc: "Ultra-pure silicon wafers prepared in cleanroom environment with atomic-level precision",
                icon: Layers,
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
              },
              { 
                step: "02", 
                title: "Photolithography", 
                desc: "Advanced UV light patterns circuit designs onto wafer surface with nanometer accuracy",
                icon: Eye,
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
              },
              { 
                step: "03", 
                title: "Etching & Doping", 
                desc: "Chemical processes create transistor structures and modify electrical properties",
                icon: Zap,
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80"
              },
              { 
                step: "04", 
                title: "Testing & Packaging", 
                desc: "Rigorous quality control and protective packaging for final chip delivery",
                icon: Shield,
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"
              },
            ].map((process, i) => (
              <motion.div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                    <img src={process.image} alt={process.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent" />
                    <motion.div className="absolute top-8 right-8 w-20 h-20 rounded-2xl bg-secondary/90 flex items-center justify-center" whileHover={{ rotate: 360 }}>
                      <process.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="absolute bottom-8 left-8">
                      <div className="text-8xl font-black text-white/20">{process.step}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="text-6xl font-black text-secondary/20 mb-4">{process.step}</div>
                  <h3 className="font-serif font-black text-4xl mb-6">{process.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology - Chip Specifications */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Chip <span className="text-secondary">Specifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology powering next-generation computing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { label: "Process Node", value: "5nm", icon: Cpu },
              { label: "Transistor Count", value: "10B+", icon: Layers },
              { label: "Clock Speed", value: "5.0 GHz", icon: Zap },
              { label: "Power Efficiency", value: "95%", icon: TrendingUp },
              { label: "Die Size", value: "100mm²", icon: Box },
              { label: "Operating Temp", value: "-40°C to 125°C", icon: Settings },
            ].map((spec, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6" whileHover={{ rotate: 360 }}>
                  <spec.icon className="w-7 h-7 text-secondary" />
                </motion.div>
                <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">{spec.label}</div>
                <div className="text-4xl font-black text-secondary">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance - Testing Process */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Quality <span className="text-secondary">Assurance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rigorous testing ensures every chip meets the highest standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Microscope, title: "Wafer Testing", desc: "Automated optical inspection at every manufacturing stage", tests: "1000+ checks per wafer" },
              { icon: Zap, title: "Electrical Testing", desc: "Comprehensive electrical parameter validation", tests: "99.9% accuracy" },
              { icon: Shield, title: "Stress Testing", desc: "Extreme condition testing for reliability", tests: "1000+ hours" },
              { icon: Award, title: "Final Validation", desc: "Complete functional verification before shipping", tests: "100% tested" },
            ].map((qa, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6" whileHover={{ rotate: 360, scale: 1.1 }}>
                  <qa.icon className="w-8 h-8 text-secondary" />
                </motion.div>
                <h3 className="font-serif font-bold text-2xl mb-3">{qa.title}</h3>
                <p className="text-muted-foreground mb-4">{qa.desc}</p>
                <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
                  <span className="text-sm font-bold text-secondary">{qa.tests}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - Where Chips Are Used */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Chip <span className="text-secondary">Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powering innovation across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { 
                title: "AI & Machine Learning", 
                desc: "High-performance computing for neural networks",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
                icon: Cpu
              },
              { 
                title: "Mobile Devices", 
                desc: "Power-efficient processors for smartphones",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
                icon: Zap
              },
              { 
                title: "Automotive", 
                desc: "Advanced chips for autonomous vehicles",
                image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
                icon: Rocket
              },
              { 
                title: "Data Centers", 
                desc: "Server-grade processors for cloud computing",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
                icon: Layers
              },
              { 
                title: "IoT Devices", 
                desc: "Low-power chips for connected devices",
                image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80",
                icon: Settings
              },
              { 
                title: "Defense Systems", 
                desc: "Military-grade secure processors",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
                icon: Shield
              },
            ].map((app, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-80 rounded-3xl overflow-hidden">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div className="w-14 h-14 rounded-2xl bg-secondary/90 flex items-center justify-center mb-4" whileHover={{ rotate: 360 }}>
                      <app.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="font-serif font-bold text-3xl text-white mb-2">{app.title}</h3>
                    <p className="text-white/80">{app.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Lab - R&D Showcase */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Innovation <span className="text-secondary">Lab</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pushing the boundaries of semiconductor technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80" alt="Innovation Lab" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-serif font-black text-4xl mb-6">Research & Development</h3>
              <p className="text-xl text-muted-foreground mb-8">
                Our state-of-the-art R&D facility is where tomorrow's chip technology is born today.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Next-Gen Process Nodes", value: "3nm & beyond" },
                  { label: "Research Scientists", value: "200+" },
                  { label: "Patents Filed", value: "500+" },
                  { label: "Annual R&D Investment", value: "$100M+" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="text-2xl font-black text-secondary">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership - Collaboration Opportunities */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="w-20 h-20 text-secondary mx-auto mb-8" />
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Partnership <span className="text-secondary">Opportunities</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join us in building India's semiconductor ecosystem. We're looking for strategic partners, investors, and innovators.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Technology Partners", desc: "Collaborate on R&D" },
                { title: "Manufacturing Partners", desc: "Scale production" },
                { title: "Investment Partners", desc: "Fund innovation" },
              ].map((partner, i) => (
                <motion.div
                  key={i}
                  className="p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-bold text-xl mb-2">{partner.title}</h4>
                  <p className="text-muted-foreground">{partner.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="px-10 py-5 rounded-2xl bg-secondary text-white font-bold text-lg flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Partnership
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Semiconductor;
