import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Target, Trophy, Users, TrendingUp, Award, Zap, ArrowRight, CheckCircle2, Star, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

const Sports = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Growth Consultancy",
      heading: "Strategic Growth & Development",
      description: "Our comprehensive growth consultancy services are designed to identify opportunities and implement strategies that drive sustainable expansion in the sports ecosystem.",
      paragraphs: [
        "We analyze market trends and leverage data to position your organization for long-term success. Our approach involves a deep dive into your current operations, identifying bottlenecks, and unlocking new revenue streams.",
        "By partnering with us, you gain access to a wealth of industry knowledge and a network of experts dedicated to elevating your sports venture to new heights."
      ],
      points: [
        "Market Trend Analysis",
        "Revenue Stream Identification",
        "Operational Optimization",
        "Strategic Partnerships"
      ],
      images: [
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80"
      ],
      bottomContent: "Experience a transformation that goes beyond just numbers. We build a culture of excellence that permeates every level of your organization.",
      extraParagraphs: [
        "Our team works tirelessly to ensure that every strategy implemented aligns perfectly with your organizational goals. We believe in a hands-on approach, guiding you through every step of the transformation process.",
        "With a focus on sustainable growth, we help you build a legacy that stands the test of time. Join us in redefining what's possible in the world of sports."
      ],
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80"
    },
    {
      title: "Boosted Efficiency",
      heading: "Maximize Operational Efficiency",
      description: "Streamline your operations with our proven methodologies. We help sports organizations and athletes optimize their workflows, reduce waste, and enhance productivity.",
      paragraphs: [
        "Efficiency is the cornerstone of any successful sports organization. We implement cutting-edge technology and process improvements to ensure that your team operates like a well-oiled machine.",
        "From athlete management systems to logistical coordination, we cover all aspects of operations to minimize downtime and maximize performance."
      ],
      points: [
        "Workflow Optimization",
        "Waste Reduction",
        "Technology Integration",
        "Performance Tracking"
      ],
      images: [
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
        "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&q=80"
      ],
      bottomContent: "Achieve more with less. Our efficiency solutions are designed to free up resources so you can focus on what truly matters—winning.",
      extraParagraphs: [
        "By optimizing your operations, we help you unlock hidden potential within your organization. Our methods are proven to reduce costs and improve overall performance.",
        "Let us help you create a leaner, more agile organization that is ready to take on any challenge. Efficiency is not just a goal; it's a mindset we cultivate."
      ],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
    },
    {
      title: "Cashflow Optimization",
      heading: "Financial Health & Sustainability",
      description: "Ensure the financial stability of your sports venture with our expert cashflow optimization strategies. We provide insights into revenue generation and cost management.",
      paragraphs: [
        "Financial sustainability is vital for longevity in the sports industry. We help you navigate the complexities of financial planning, ensuring that your cash flow remains positive and robust.",
        "Our experts assist in identifying profitable investment opportunities and managing costs effectively without compromising on quality or performance."
      ],
      points: [
        "Revenue Generation",
        "Cost Management",
        "Investment Planning",
        "Financial Stability"
      ],
      images: [
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
      ],
      bottomContent: "Secure your future with a solid financial foundation. We empower you to make informed financial decisions that drive growth.",
      extraParagraphs: [
        "Financial stability is the bedrock of any successful venture. We provide you with the insights and tools needed to maintain a healthy cash flow.",
        "Our experts are dedicated to helping you make smart financial decisions that will secure your organization's future. Let's build a prosperous future together."
      ],
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"
    },
    {
      title: "Budget Supervision",
      heading: "Precision in Resource Allocation",
      description: "Effective budget supervision is crucial for success. Our team assists in planning, monitoring, and controlling financial resources.",
      paragraphs: [
        "Every penny counts when you're aiming for the top. We provide rigorous budget supervision to ensure that resources are allocated efficiently and effectively towards your athletic goals.",
        "Our transparent reporting and monitoring systems give you complete control over your finances, allowing for real-time adjustments and strategic decision-making."
      ],
      points: [
        "Resource Allocation",
        "Financial Monitoring",
        "Cost Control",
        "Transparent Reporting"
      ],
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800&q=80"
      ],
      bottomContent: "Take control of your financial destiny. Our budget supervision services ensure that your financial resources are always aligned with your strategic objectives.",
      extraParagraphs: [
        "Effective budget management is key to achieving your strategic objectives. We help you allocate resources where they matter most.",
        "With our supervision, you can rest assured that your finances are in good hands. We provide transparency and accountability at every level."
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
    },
    {
      title: "Recruitment Support",
      heading: "Building Winning Teams",
      description: "Talent is the backbone of any sports organization. We offer specialized recruitment support to help you identify, attract, and retain top-tier athletes.",
      paragraphs: [
        "Finding the right talent is an art and a science. We leverage our extensive network and advanced scouting methods to bring you athletes and staff who not only have the skills but also fit your culture.",
        "We support you through every step of the recruitment process, from initial identification to contract negotiation and onboarding."
      ],
      points: [
        "Talent Identification",
        "Scouting Network",
        "Cultural Fit Assessment",
        "Contract Negotiation"
      ],
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"
      ],
      bottomContent: "Build a legacy with the right people. Our recruitment support ensures that you have the best team to achieve your vision.",
      extraParagraphs: [
        "Finding the right talent is crucial for success. We help you build a team that shares your vision and values.",
        "Our recruitment process is designed to identify individuals who will contribute to your culture of excellence. Let's build a winning team together."
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Decision Streamlining",
      heading: "Data-Driven Decision Making",
      description: "Make informed decisions with confidence. We provide the tools and frameworks needed to simplify complex decision-making processes.",
      paragraphs: [
        "In the fast-paced world of sports, hesitation can be costly. We equip you with data-driven insights and decision-making frameworks that allow you to act quickly and confidently.",
        "Our streamlined processes reduce complexity, ensuring that you can focus on strategy and execution rather than getting bogged down in analysis paralysis."
      ],
      points: [
        "Data Analytics",
        "Decision Frameworks",
        "Agility & Speed",
        "Strategic Focus"
      ],
      images: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
      ],
      bottomContent: "Empower your leadership with clarity. Our decision streamlining services give you the confidence to lead with precision.",
      extraParagraphs: [
        "In a fast-paced environment, making quick and informed decisions is essential. We provide the frameworks you need to act with confidence.",
        "Our goal is to empower your leadership team with the data and insights they need to lead effectively. Streamline your decision-making process today."
      ],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
    }
  ];

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

            <h1 className="font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-6" style={{ fontFamily: '"Alovera Display"' }}>
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

      {/* Why Choose Us - Interactive Tabs */}
      <section className="relative py-32 overflow-hidden bg-white dark:bg-black/50">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Dynamic Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative lg:col-span-9"
            >
              {/* Main Image */}
              <div className="overflow-hidden aspect-video mb-10 shadow-2xl shadow-primary/10">
                <img
                  src={features[activeTab].image}
                  alt={features[activeTab].heading}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main Heading */}
              <h2 className="font-black text-4xl md:text-5xl mb-8 leading-tight" style={{ fontFamily: '"Alovera Display"' }}>
                {features[activeTab].heading}
              </h2>

              {/* Text and Points Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  {features[activeTab].paragraphs.map((para, i) => (
                    <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="bg-primary/5 rounded-3xl p-8">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2" style={{ fontFamily: '"Alovera Display"' }}>
                    <Star className="w-5 h-5 text-primary" />
                    Key Highlights
                  </h3>
                  <ul className="space-y-4">
                    {features[activeTab].points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-foreground/80 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Side-by-Side Images */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {features[activeTab].images.map((img, i) => (
                  <div key={i} className="overflow-hidden aspect-[4/3] shadow-xl shadow-primary/5 group">
                    <img
                      src={img}
                      alt={`${features[activeTab].title} ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Content */}
              <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-8 rounded-r-2xl mb-8">
                <p className="text-xl font-medium text-foreground/90 italic">
                  "{features[activeTab].bottomContent}"
                </p>
              </div>

              {/* Extra Paragraphs */}
              <div className="space-y-6">
                {features[activeTab].extraParagraphs.map((para, i) => (
                  <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

            </motion.div>

            {/* Right Column: Tabs & Form */}
            <div className="space-y-12 lg:col-span-3">
              {/* Tabs */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left px-8 py-5 font-bold text-lg transition-all duration-300 flex items-center justify-between group ${activeTab === index
                      ? "bg-primary text-white shadow-lg shadow-primary/25 scale-[1.02]"
                      : "bg-primary/5 text-foreground hover:bg-primary/10"
                      }`}
                    whileHover={{ x: 5 }}
                  >
                    {feature.title}
                    {activeTab === index && (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Contact Form */}
              <div className="bg-primary/5 p-8 md:p-10">
                <h3 className="font-bold text-3xl mb-8" style={{ fontFamily: '"Alovera Display"' }}>Say, Hello !</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 focus:outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 focus:outline-none transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Your Number*"
                    className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 focus:outline-none transition-all"
                  />
                  <textarea
                    placeholder="Additional Message*"
                    rows={3}
                    className="w-full px-6 py-4 bg-white dark:bg-white/5 border border-transparent focus:border-primary/50 focus:outline-none transition-all resize-none"
                  />
                  <button className="w-full py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Programs - Enhanced with Images */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-black text-5xl md:text-6xl mb-6" style={{ fontFamily: '"Alovera Display"' }}>
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
                <div className="relative h-96 overflow-hidden mb-6">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div className="w-14 h-14 bg-primary/90 flex items-center justify-center mb-4" whileHover={{ rotate: 360 }}>
                      <program.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-3xl text-white mb-2" style={{ fontFamily: '"Alovera Display"' }}>{program.title}</h3>
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
            <h2 className="font-black text-5xl md:text-6xl mb-6" style={{ fontFamily: '"Alovera Display"' }}>
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
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-4xl font-black text-primary">{item.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <div className="flex items-center gap-4 mb-3">
                    <item.icon className="w-8 h-8 text-primary" />
                    <h3 className="font-bold text-3xl" style={{ fontFamily: '"Alovera Display"' }}>{item.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
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
            <h2 className="font-black text-5xl md:text-6xl mb-6" style={{ fontFamily: '"Alovera Display", sans-serif' }}>
              Ready to Start Your <span className="text-primary">Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join India's premier sports ecosystem and unlock your full potential.
            </p>
            <motion.button
              className="px-10 py-5 bg-primary text-white font-bold text-lg flex items-center gap-3 mx-auto"
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
