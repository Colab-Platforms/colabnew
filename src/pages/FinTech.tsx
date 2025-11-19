import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Smartphone, CreditCard, Shield, TrendingUp, Users, Zap, ArrowRight, CheckCircle2, Lock, Globe, BarChart3, Wallet, Star, Play, DollarSign, Eye } from "lucide-react";

const FinTech = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-8" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Smartphone className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold text-secondary uppercase">Financial Technology</span>
            </motion.div>

            <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
              <span className="block text-foreground">Digital</span>
              <span className="block text-secondary">Finance</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Revolutionary platforms enabling digital payments and financial inclusion across India.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button className="px-8 py-4 rounded-2xl bg-secondary text-white font-bold flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                Get Started Free <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm text-foreground font-bold border border-border flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <Play className="w-5 h-5" /> Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features - Platform Capabilities */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Platform <span className="text-secondary">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage digital payments and financial operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { 
                icon: CreditCard, 
                title: "Digital Payments", 
                desc: "Instant, secure transactions with multiple payment methods",
                features: ["UPI Integration", "Card Processing", "Wallet Support", "QR Payments"]
              },
              { 
                icon: Wallet, 
                title: "Digital Wallet", 
                desc: "Store money securely and pay with a single tap",
                features: ["Instant Transfers", "Bill Payments", "Recharge", "Cashback"]
              },
              { 
                icon: BarChart3, 
                title: "Analytics Dashboard", 
                desc: "Real-time insights into your financial transactions",
                features: ["Transaction Reports", "Spending Analysis", "Revenue Tracking", "Custom Reports"]
              },
              { 
                icon: Users, 
                title: "Multi-User Access", 
                desc: "Team collaboration with role-based permissions",
                features: ["User Roles", "Access Control", "Activity Logs", "Team Management"]
              },
              { 
                icon: Globe, 
                title: "Global Reach", 
                desc: "Accept payments from anywhere in the world",
                features: ["Multi-Currency", "International Cards", "Forex Support", "Global Compliance"]
              },
              { 
                icon: Zap, 
                title: "Instant Settlement", 
                desc: "Get your money faster with instant settlements",
                features: ["Same-Day Settlement", "Auto-Reconciliation", "Real-time Updates", "Fast Payouts"]
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6" whileHover={{ rotate: 360, scale: 1.1 }}>
                  <feature.icon className="w-8 h-8 text-secondary" />
                </motion.div>
                <h3 className="font-serif font-bold text-2xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.desc}</p>
                <div className="space-y-2">
                  {feature.features.map((item, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security - How We Protect Data */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Bank-Grade <span className="text-secondary">Security</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your data and transactions are protected with military-grade encryption
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Lock, title: "256-bit Encryption", desc: "All data encrypted end-to-end", metric: "100% Secure" },
              { icon: Shield, title: "PCI DSS Compliant", desc: "Certified payment security standards", metric: "Level 1" },
              { icon: CheckCircle2, title: "Two-Factor Auth", desc: "Additional layer of security", metric: "2FA Enabled" },
              { icon: Eye, title: "Fraud Detection", desc: "AI-powered real-time monitoring", metric: "99.9% Accuracy" },
            ].map((security, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6" whileHover={{ rotate: 360 }}>
                  <security.icon className="w-10 h-10 text-secondary" />
                </motion.div>
                <h3 className="font-serif font-bold text-2xl mb-3">{security.title}</h3>
                <p className="text-muted-foreground mb-4">{security.desc}</p>
                <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
                  <span className="text-sm font-bold text-secondary">{security.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration - Easy Setup Process */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Easy <span className="text-secondary">Integration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple setup process
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              { step: "01", title: "Sign Up", desc: "Create your account in under 2 minutes with basic business details", icon: Users, time: "2 min" },
              { step: "02", title: "Verify KYC", desc: "Complete quick verification process with automated document checks", icon: CheckCircle2, time: "5 min" },
              { step: "03", title: "Integrate API", desc: "Add our payment gateway with simple code snippets and plugins", icon: Zap, time: "10 min" },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="relative flex gap-8 items-start mb-16 last:mb-0"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {i < 2 && <div className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-secondary to-secondary/20" />}
                
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 border-2 border-secondary/30 flex items-center justify-center">
                  <span className="text-4xl font-black text-secondary">{step.step}</span>
                </div>

                <div className="flex-1 pt-4">
                  <div className="flex items-center gap-4 mb-3">
                    <step.icon className="w-8 h-8 text-secondary" />
                    <h3 className="font-serif font-bold text-3xl">{step.title}</h3>
                    <div className="ml-auto px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                      <span className="text-sm font-bold text-secondary">{step.time}</span>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-2xl font-bold text-foreground mb-4">Total Setup Time: <span className="text-secondary">~17 minutes</span></p>
            <p className="text-muted-foreground">Start accepting payments today!</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing - Transparent Plans */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Transparent <span className="text-secondary">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, honest pricing with no hidden fees
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "₹0",
                period: "/month",
                desc: "Perfect for small businesses",
                features: ["Up to 100 transactions", "Basic analytics", "Email support", "Standard settlement"],
                cta: "Start Free",
                popular: false
              },
              {
                name: "Professional",
                price: "₹999",
                period: "/month",
                desc: "For growing businesses",
                features: ["Unlimited transactions", "Advanced analytics", "Priority support", "Instant settlement", "Custom branding", "API access"],
                cta: "Get Started",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "For large organizations",
                features: ["Everything in Pro", "Dedicated account manager", "Custom integrations", "SLA guarantee", "White-label solution", "24/7 phone support"],
                cta: "Contact Sales",
                popular: false
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-secondary/20 to-secondary/10 border-secondary scale-105' 
                    : 'bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/40'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-white text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-serif font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-black text-secondary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-4 rounded-2xl font-bold ${
                    plan.popular 
                      ? 'bg-secondary text-white' 
                      : 'bg-secondary/10 text-secondary border border-secondary/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - User Reviews */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Trusted by <span className="text-secondary">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers say about us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Rajesh Kumar", 
                role: "E-commerce Owner", 
                company: "ShopKart",
                quote: "Increased our conversion rate by 40% with seamless payment experience. Best decision ever!",
                rating: 5
              },
              { 
                name: "Priya Sharma", 
                role: "CFO", 
                company: "TechStart Inc",
                quote: "The analytics dashboard gives us real-time insights. Settlement is instant. Highly recommended!",
                rating: 5
              },
              { 
                name: "Amit Patel", 
                role: "Restaurant Chain Owner", 
                company: "FoodHub",
                quote: "Easy integration, great support team, and transparent pricing. Perfect for our business needs.",
                rating: 5
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-xl mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-secondary font-medium">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo - Interactive Showcase */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <DollarSign className="w-20 h-20 text-secondary mx-auto mb-8" />
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              See It In <span className="text-secondary">Action</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Experience our platform with an interactive demo. No credit card required.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { value: "10K+", label: "Active Merchants" },
                { value: "₹500Cr+", label: "Processed Monthly" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl font-black text-secondary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="px-10 py-5 rounded-2xl bg-secondary text-white font-bold text-lg flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6" />
                Watch Live Demo
              </motion.button>
              <motion.button
                className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-sm text-foreground font-bold text-lg border border-border flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
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

export default FinTech;
