import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Brain, Cpu, Eye, Zap, Shield, TrendingUp, CheckCircle2, ArrowRight, Play, Lock, Rocket, BarChart3, Users, Code, Database } from "lucide-react";

const AIIntelligence = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background" />
        
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 backdrop-blur-sm mb-6" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Brain className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold text-secondary uppercase">AI & Machine Learning</span>
            </motion.div>

            <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
              <span className="block text-foreground">Intelligence</span>
              <span className="block text-secondary">Redefined</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Enterprise AI solutions powering defense, intelligence, and mission-critical decision-making.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button className="px-8 py-4 rounded-2xl bg-secondary text-white font-bold flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                Explore Solutions <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm text-foreground font-bold border border-border flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <Play className="w-5 h-5" /> Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits - Why Choose Our AI */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Why Choose <span className="text-secondary">Our AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade artificial intelligence built for mission-critical operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Shield, title: "Military-Grade Security", desc: "Bank-level encryption and compliance with defense standards" },
              { icon: Zap, title: "Real-Time Processing", desc: "Lightning-fast inference with 99.9% uptime guarantee" },
              { icon: TrendingUp, title: "Scalable Architecture", desc: "From startup to enterprise, scales with your needs" },
              { icon: Brain, title: "Continuous Learning", desc: "Models that improve over time with your data" },
            ].map((benefit, i) => (
              <motion.div key={i} className="p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-500" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }}>
                <motion.div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6" whileHover={{ rotate: 360, scale: 1.1 }}>
                  <benefit.icon className="w-8 h-8 text-secondary" />
                </motion.div>
                <h3 className="font-serif font-bold text-2xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - Real-World Applications */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Real-World <span className="text-secondary">Applications</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {[
              { icon: Shield, title: "Defense Intelligence", desc: "AI-powered threat detection and strategic intelligence analysis for national security operations.", impact: "95% faster threat identification", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
              { icon: Eye, title: "Computer Vision", desc: "Advanced visual recognition systems for surveillance, threat detection, and automated analysis.", impact: "99.9% accuracy rate", image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80" },
              { icon: Cpu, title: "Predictive Analytics", desc: "Machine learning models forecasting outcomes and optimizing strategic decision-making.", impact: "60% cost reduction", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
              { icon: Zap, title: "Process Automation", desc: "Intelligent automation reducing operational costs and improving efficiency across organizations.", impact: "80% less downtime", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
            ].map((useCase, i) => (
              <motion.div key={i} className="group relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
                  <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <motion.div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-secondary/90 backdrop-blur-sm flex items-center justify-center" whileHover={{ rotate: 360 }}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/40 inline-flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-bold text-white">{useCase.impact}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif font-bold text-3xl mb-3">{useCase.title}</h3>
                <p className="text-lg text-muted-foreground">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Powered By <span className="text-secondary">Advanced Tech</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading tools and frameworks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["TensorFlow", "PyTorch", "Kubernetes", "Docker", "Python", "CUDA", "OpenCV", "Scikit-learn", "Apache Spark", "Redis", "PostgreSQL", "MongoDB"].map((tech, i) => (
              <motion.div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.05, y: -5 }}>
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <span className="font-bold text-foreground">{tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - How We Implement */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Implementation <span className="text-secondary">Process</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business challenges and AI opportunities", icon: Eye },
              { step: "02", title: "Design", desc: "Architecting custom AI solutions tailored to your needs", icon: Code },
              { step: "03", title: "Development", desc: "Building and training models with your data", icon: Cpu },
              { step: "04", title: "Deployment", desc: "Seamless integration into your existing systems", icon: Rocket },
              { step: "05", title: "Optimization", desc: "Continuous monitoring and improvement", icon: TrendingUp },
            ].map((item, i) => (
              <motion.div key={i} className="relative flex gap-8 items-start mb-16 last:mb-0" initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                {i < 4 && <div className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-secondary to-secondary/20" />}
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 border-2 border-secondary/30 flex items-center justify-center">
                  <span className="text-4xl font-black text-secondary">{item.step}</span>
                </div>
                <div className="flex-1 pt-4">
                  <div className="flex items-center gap-4 mb-3">
                    <item.icon className="w-8 h-8 text-secondary" />
                    <h3 className="font-serif font-bold text-3xl">{item.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Success <span className="text-secondary">Stories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { company: "Defense Ministry", result: "95% faster threat detection", industry: "Government" },
              { company: "Tech Corp", result: "60% cost reduction", industry: "Enterprise" },
              { company: "FinServ Inc", result: "99.9% fraud prevention", industry: "Finance" },
            ].map((story, i) => (
              <motion.div key={i} className="p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
                <BarChart3 className="w-12 h-12 text-secondary mb-4" />
                <h4 className="font-bold text-2xl mb-2">{story.company}</h4>
                <p className="text-sm text-secondary font-medium mb-4">{story.industry}</p>
                <p className="text-3xl font-black text-secondary">{story.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Database className="w-20 h-20 text-secondary mx-auto mb-8" />
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Calculate Your <span className="text-secondary">ROI</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              See how AI can transform your operations and bottom line
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Cost Savings", value: "60%" },
                { label: "Efficiency Gain", value: "80%" },
                { label: "Revenue Growth", value: "45%" },
              ].map((metric, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                  <div className="text-4xl font-black text-secondary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
            <motion.button className="px-10 py-5 rounded-2xl bg-secondary text-white font-bold text-lg flex items-center gap-3 mx-auto" whileHover={{ scale: 1.05 }}>
              Schedule Consultation <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIIntelligence;
