import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Company Info & Quotes data
  const companyInfo = [
    {
      quote: "Building India's future through integrated technology and sports ecosystems",
      stat: "15+",
      statLabel: "Active Ventures",
      description: "Colab Platforms operates across multiple high-growth sectors including AI, FinTech, Esports, Defense Technology, and Sports Management, creating synergies that drive innovation and growth."
    },
    {
      quote: "Architecting platforms that unlock human potential and technological possibility",
      stat: "₹500Cr+",
      statLabel: "Portfolio Value",
      description: "Our diversified portfolio spans cutting-edge technology ventures and world-class sports properties, positioning us at the intersection of India's most dynamic growth sectors."
    },
    {
      quote: "From the stadium to the stars, from the playing field to the battlefield",
      stat: "Global",
      statLabel: "Presence",
      description: "With operations spanning sports leagues, technology ventures, and defense systems, we're building the infrastructure that will power India's rise as a global superpower."
    },
    {
      quote: "We don't build isolated products. We architect integrated ecosystems",
      stat: "2",
      statLabel: "Core Ecosystems",
      description: "Our dual ecosystem approach combines sports excellence with deep-tech innovation, creating compounding value where each venture strengthens the others."
    },
    {
      quote: "Long-term infrastructure investment for decades, not quarters",
      stat: "10+",
      statLabel: "Years Experience",
      description: "Led by visionary entrepreneurs with proven track records in entertainment, sports, and technology, we invest in capabilities that will define India's competitive advantage."
    }
  ];

  // Auto-rotate company info
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % companyInfo.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(timer);
  }, [companyInfo.length]);

  const services = [
    {
      title: "Business Growth Catalyst",
      desc: "Use receiving acco growin number of currencies and get paid lik",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
    },
    {
      title: "Profitability Maximizers",
      desc: "Use receiving acco growin number of currencies and get paid lik",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "Efficiency Experts",
      desc: "Use receiving acco growin number of currencies and get paid lik",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
    },
    {
      title: "Strategic Planning",
      desc: "Use receiving acco growin number of currencies and get paid lik",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
    },
    {
      title: "Market Analysis",
      desc: "Use receiving acco growin number of currencies and get paid lik",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
    },
    {
      title: "Global Expansion",
      desc: "Use receiving acco growin number of currencies and get paid lik",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
    }
  ];

  // Mobile auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  // Array of business images
  const businessImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
  ];

  // Scroll-based image change
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageChangeThreshold = 300; // Change image every 300px scroll
      const newIndex = Math.floor(scrollPosition / imageChangeThreshold) % businessImages.length;
      setCurrentImageIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [businessImages.length]);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-foreground">
        <InfinityCursor />
        <Header />

        {/* Hero Section - Mobile Responsive */}
        <section className="relative min-h-screen md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-4 bg-gradient-to-br from-[#1e2340] via-[#2f33d8]/10 to-[#1a1d2e] dark:from-[#121212] dark:via-[#ff4500]/5 dark:to-[#121212]">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2f33d8]/5 via-transparent to-[#7f01ff]/5 dark:from-[#dc2626]/5 dark:via-transparent dark:to-[#ff4500]/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(47,51,216,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(255,69,0,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(127,1,255,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.08),transparent_50%)]" />
          </div>

          <div className="container relative z-10 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center flex flex-col items-center justify-center"
              >
                {/* Main Heading */}
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
                  <span className="block text-white">Revolutionizing the</span>
                  <span className="block text-white">
                    Unique <span className="text-[#2b33da] dark:text-[#ff4500]">Business</span> Landscape
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto mb-12 leading-relaxed px-4">
                  A business consultant is a professional who provides expert advice and guidance to businesses on various aspects such
                </p>

                {/* Business Image - Responsive */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative w-full max-w-6xl mx-auto px-4"
                >
                  <div
                    className="relative overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] shadow-xl"
                  >
                    <motion.img
                      key={currentImageIndex}
                      src={businessImages[currentImageIndex]}
                      alt="Business Team Meeting"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                    {/* Image indicator dots */}
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
                      {businessImages.map((_, index) => (
                        <div
                          key={index}
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 transition-all duration-300 ${index === currentImageIndex
                            ? 'bg-[#7f01ff] dark:bg-[#ff4500] w-6 md:w-8'
                            : 'bg-white/50'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Services - Hover Reveal Slider */}
        <section className="relative py-32 bg-white dark:bg-[#121212] overflow-hidden">
          <div className="container relative z-10 px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
                Your Business Goals with <br className="hidden md:block" />
                the Confidence
              </h2>
            </div>
          </div>

          {/* Desktop Hover Slider Container */}
          <div className="hidden md:block container relative z-10 px-6 lg:px-8">
            <div
              className="max-w-7xl mx-auto overflow-hidden py-10"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="flex w-full"
                animate={{ x: isHovered ? "-100%" : "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* First Set of 3 Cards */}
                <div className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                  {services.slice(0, 3).map((service, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group h-full flex flex-col"
                    >
                      <div className="overflow-hidden h-72 mb-8 shadow-sm">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#2b33da] dark:group-hover:text-[#ff4500] transition-colors">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Second Set of 3 Cards */}
                <div className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                  {services.slice(3, 6).map((service, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group h-full flex flex-col"
                    >
                      <div className="overflow-hidden h-72 mb-8 shadow-sm">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#2b33da] dark:group-hover:text-[#ff4500] transition-colors">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Auto-Slider Container */}
          <div className="block md:hidden container relative z-10 px-1">
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-6 shadow-lg mx-2">
              <div className="overflow-hidden h-64 mb-6 shadow-sm">
                <img
                  src={services[currentMobileSlide].image}
                  alt={services[currentMobileSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                key={currentMobileSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{services[currentMobileSlide].title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {services[currentMobileSlide].desc}
                </p>
              </motion.div>

              {/* Mobile Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {services.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 transition-all duration-300 ${idx === currentMobileSlide ? 'w-6 bg-gradient-to-r from-[#2b33da] to-[#7f01ff] dark:from-[#dc2626] dark:to-[#ff4500]' : 'w-1.5 bg-gray-200 dark:bg-gray-700'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Your Business Goals Section */}
        <section className="relative py-20 ovTestimonial section - Ye content?erflow-hidden bg-white dark:bg-[#121212]">
          <div className="container relative z-10 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Heading Section - 2 Column Layout */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Left - Heading */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Your Business Goals<br />a Confidence
                  </h2>
                </motion.div>

                {/* Right - Description */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Dictum ultrices porttitor amet nec sollicitudin mi molestie adipiscing netus. Lorem at ac ut morbi ullamcorper molestie lacus loren ipsum dummy text provide happy
                  </p>
                </motion.div>
              </div>

              {/* Image with Testimonial Card - Below Heading */}
              <div className="relative">
                {/* Main Image - Larger Size */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative max-w-2xl"
                >
                  <div className="relative overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80"
                      alt="Business Professional"
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                </motion.div>

                {/* Floating Testimonial Card - Overlapping Image */}
                {/* Animated Info Card Container */}
                <div className="absolute top-20 right-0 lg:right-10 max-w-2xl">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="bg-white dark:bg-black p-10 shadow-2xl relative overflow-hidden"
                    style={{ marginLeft: '-120px' }}
                  >
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2b33da]/5 via-[#7f01ff]/5 to-[#ec4899]/5 dark:from-[#dc2626]/5 dark:via-[#ff4500]/5 dark:to-[#ff6b35]/5 pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <svg className="w-12 h-12 text-[#2b33da]/20 dark:text-[#ff4500]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Quote Text */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        "{companyInfo[currentTestimonial].quote}"
                      </h3>

                      {/* Stat Display */}
                      <div className="flex items-baseline gap-3 mb-6">
                        <div className="text-5xl font-black bg-gradient-to-r from-[#2b33da] to-[#7f01ff] dark:from-[#dc2626] dark:to-[#ff4500] bg-clip-text text-transparent">
                          {companyInfo[currentTestimonial].stat}
                        </div>
                        <div className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
                          {companyInfo[currentTestimonial].statLabel}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-10">
                        {companyInfo[currentTestimonial].description}
                      </p>

                      {/* Navigation Arrows */}
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => setCurrentTestimonial((prev) => (prev - 1 + companyInfo.length) % companyInfo.length)}
                          className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-[#2b33da] dark:hover:bg-[#ff4500] hover:text-white transition-colors flex items-center justify-center"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => setCurrentTestimonial((prev) => (prev + 1) % companyInfo.length)}
                          className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-[#2b33da] dark:hover:bg-[#ff4500] hover:text-white transition-colors flex items-center justify-center"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transforming Vision - FAQ Style Section */}
        <section className="relative overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - White Background */}
            <div className="bg-white py-32 px-6 lg:px-12">
              <div className="max-w-2xl mx-auto lg:ml-auto">
                {/* Left Side - Heading & Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Main Heading */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                    Transforming Vision<br />
                    into Reality Together
                  </h2>

                  {/* Image Card with Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative bg-gray-100 overflow-hidden mt-8"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                      alt="Business Professional"
                      className="w-full object-cover"
                      style={{ height: '30rem' }}
                    />
                    
                    {/* Floating Stats Card */}
                    <div className="absolute bottom-6 right-6 bg-white p-6 shadow-2xl">
                      <div className="text-5xl font-black text-[#2b33da] mb-1">10K+</div>
                      <div className="text-sm text-gray-600 font-semibold">
                        Client<br />Review
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Dark Background #121212 */}
            <div className="py-32 px-6 lg:px-12">
              <div className="max-w-3xl mx-auto lg:mr-auto">
                {/* Right Side - Accordion Questions */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4 mt-32"
                >
                  {[
                    {
                      question: "What services do you offer?",
                      answer: "At the heart of our consulting approach lies a dedication to understanding your unique needs, fostering collaboration At the heart of our consulting approach lies a dedication"
                    },
                    {
                      question: "How long does complete a project?",
                      answer: "Project timelines vary based on scope and complexity. Typically, projects range from 2-6 months, with clear milestones and deliverables throughout."
                    },
                    {
                      question: "How much does with your agency?",
                      answer: "Our pricing is customized based on your specific needs and project scope. We offer flexible engagement models to suit different budgets and requirements."
                    },
                    {
                      question: "Where a Branding Consultantis?",
                      answer: "We work with clients globally, with offices in major cities. Our team is equipped to collaborate remotely or on-site based on your preferences."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <details open={index === 0} className="dark:bg-black bg-white overflow-hidden border border-black dark:border-gray-800 dark:hover:border-[#ff4500]/30 hover:border-blue-600 transition-all">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                          <span className="text-xl font-bold dark:text-white text-gray-900 dark:group-hover:text-[#ff4500] group-hover:text-blue-600 transition-colors">
                            {item.question}
                          </span>
                          <div className="w-10 h-10 rounded-full dark:bg-gradient-to-r dark:from-[#dc2626] dark:to-[#ff4500] bg-blue-600 flex items-center justify-center flex-shrink-0 ml-4">
                            <svg className="w-5 h-5 text-white transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </summary>
                        <div className="px-6 pb-6 text-lg dark:text-gray-400 text-600 leading-relaxed">
                          {item.answer}
                        </div>
                      </details>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision - Final Statement */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
          <div className="container relative z-10 px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-8"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
              </motion.div>

              <h2 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl mb-8">
                Building for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Billions</span>
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
                Our mission is simple: build the integrated platforms that will power India's rise as a global superpower.
              </p>

              <p className="text-lg text-muted-foreground/80 mb-8">
                From the stadium to the stars. From the playing field to the battlefield.
              </p>

              <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <p className="text-2xl font-bold text-foreground">
                  We architect ambition.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
