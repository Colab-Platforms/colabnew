import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Target, Trophy, Users, TrendingUp, Award, Zap, ArrowRight, CheckCircle2, Star, Calendar, MapPin } from "lucide-react";

const Sports = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero - Split Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=80" alt="Sports" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>

        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase">Sports Excellence</span>
            </motion.div>

            <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
              <span className="block text-white">Building</span>
              <span className="block text-primary">Champions</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8">
              India's only fully integrated sports ecosystem—from grassroots development to elite performance.
            </p>

            <motion.button className="px-8 py-4 rounded-2xl bg-primary text-white font-bold flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Benefits */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Why <span className="text-primary">Choose Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support system designed to maximize athletic potential
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Trophy, title: "World-Class Coaching", desc: "Learn from Olympic medalists and international champions" },
              { icon: Target, title: "Personalized Training", desc: "Custom programs tailored to your goals and abilities" },
              { icon: Users, title: "Community Support", desc: "Train alongside motivated athletes in a positive environment" },
              { icon: TrendingUp, title: "Career Growth", desc: "Professional pathways from grassroots to elite level" },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-serif font-bold text-2xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs - Enhanced with Images */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Our <span className="text-primary">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs for every level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { 
                icon: Trophy, 
                title: "Elite Training", 
                desc: "Advanced coaching for competitive athletes",
                features: ["Olympic-level coaches", "Performance analytics", "Mental conditioning"],
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80" 
              },
              { 
                icon: Users, 
                title: "Academy Network", 
                desc: "Grassroots to professional development",
                features: ["Age-group programs", "Talent identification", "Scholarship opportunities"],
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80" 
              },
              { 
                icon: Award, 
                title: "Athlete Management", 
                desc: "Career development and representation",
                features: ["Brand partnerships", "Contract negotiation", "Career planning"],
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" 
              },
            ].map((program, i) => (
              <motion.div 
                key={i} 
                className="group relative" 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                whileHover={{ y: -10 }}
              >
                <div className="relative h-96 rounded-3xl overflow-hidden mb-6">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div className="w-14 h-14 rounded-2xl bg-primary/90 flex items-center justify-center mb-4" whileHover={{ rotate: 360 }}>
                      <program.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="font-serif font-bold text-3xl text-white mb-2">{program.title}</h3>
                    <p className="text-white/80 mb-4">{program.desc}</p>
                    
                    <div className="space-y-2">
                      {program.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Steps */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Your Journey to <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to start your athletic transformation
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              { step: "01", title: "Assessment", desc: "Comprehensive evaluation of your current abilities, goals, and potential", icon: Target },
              { step: "02", title: "Custom Plan", desc: "Personalized training program designed by expert coaches for your specific needs", icon: Calendar },
              { step: "03", title: "Training", desc: "Intensive coaching sessions with world-class facilities and equipment", icon: Zap },
              { step: "04", title: "Progress", desc: "Regular monitoring, analytics, and adjustments to maximize your growth", icon: TrendingUp },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative flex gap-8 items-start mb-16 last:mb-0"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Connecting Line */}
                {i < 3 && (
                  <div className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/20" />
                )}

                {/* Step Number */}
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-4xl font-black text-primary">{item.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <div className="flex items-center gap-4 mb-3">
                    <item.icon className="w-8 h-8 text-primary" />
                    <h3 className="font-serif font-bold text-3xl">{item.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - Testimonials */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Success <span className="text-primary">Stories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Priya Sharma", sport: "Athletics", achievement: "National Gold Medalist", quote: "The training program transformed my performance completely." },
              { name: "Rahul Verma", sport: "Cricket", achievement: "IPL Player", quote: "Best coaching and facilities I've experienced in my career." },
              { name: "Ananya Singh", sport: "Badminton", achievement: "State Champion", quote: "From beginner to champion in just 2 years!" },
            ].map((story, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">"{story.quote}"</p>
                <div>
                  <h4 className="font-bold text-xl mb-1">{story.name}</h4>
                  <p className="text-sm text-primary font-medium">{story.sport} • {story.achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Full Width */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: "500+", label: "Athletes Trained", icon: Users },
              { value: "50+", label: "Medals Won", icon: Trophy },
              { value: "20+", label: "Sports Covered", icon: Target },
              { value: "15", label: "Training Centers", icon: MapPin },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20" 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-6xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Ready to Start Your <span className="text-primary">Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join India's premier sports ecosystem and unlock your full potential.
            </p>
            <motion.button
              className="px-10 py-5 rounded-2xl bg-primary text-white font-bold text-lg flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              Book Free Trial
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sports;
