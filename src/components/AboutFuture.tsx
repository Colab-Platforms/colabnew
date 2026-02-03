import { motion } from "framer-motion";
import { useState } from "react";

const AboutFuture = () => {
  const [activeTab, setActiveTab] = useState('innovation');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const tabs = [
    { id: 'innovation', label: 'Innovation' },
    { id: 'collaboration', label: 'Collaboration' },
    { id: 'execution', label: 'Execution' }
  ];

  const tabContent = {
    innovation: {
      description: "Our multi-vertical innovation approach empowers us to design intelligent, scalable, and industry-defining technologies. From Artificial Intelligence to Semiconductors, Fintech, Sports & Gaming, and Drone Manufacturing, we experiment, prototype, test, and refine until every solution delivers real-world impact.",
      features: [
        'Future-proof technology thinking across AI, fintech, semiconductors, gaming & drones.',
        'Research-driven decision frameworks for high-precision product development.',
        'Intuitive UI/UX for cross-industry applications.',
        'Scalable system architecture & intelligent automation.',
        'Integration-ready platforms designed for global scale.'
      ]
    },
    collaboration: {
      description: "We collaborate as one integrated team—uniting strategy, engineering, research, and design across our diverse technology verticals. Our goal: build solutions that move industries forward and create long-term value.",
      features: [
        'Cross-discipline teamwork across AI, fintech, semiconductors, gaming, and drone engineering.',
        'Transparent, continuous communication from concept to deployment.',
        'Team-driven problem solving guided by data, insights, and industry expertise.',
        'Real-time updates & collaborative feedback loops for faster decision-making.',
        'Co-innovation mindset to build future-ready solutions with partners.'
      ]
    },
    execution: {
      description: "We turn ideas into high-performing, future-ready products by combining clean engineering, rigorous testing, and precision execution across all our technology verticals. ",
      features: [
        'Fast, reliable implementation across software, hardware & embedded systems.',
        'Continuous improvement cycles driven by data, user insights & evolving market needs.',
        'Performance-optimized builds tailored for scale, speed, and real-world conditions.',
        'Deployment-ready architecture designed for scalability and long-term stability.',
        'Engineering excellence standards for AI models, fintech platforms, semiconductor design & drone systems.'
      ]
    }
  };

  const images = [
    { src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone_rand_d.png?v=1770100406", alt: "Business analytics" },
    { src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/fan_engaing_app.png?v=1770100406", alt: "Professional woman" },
    { src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/espodt.png?v=1770100406", alt: "Man working on laptop" },
    { src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/colanb_ai.png?v=1770100405", alt: "Team meeting" }
  ];

  return (
    <section className="w-full bg-white dark:bg-[#121212] py-16 md:py-24">
      <div className="w-full px-4 md:px-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="text-sm font-semibold tracking-wider uppercase dark:text-white">Mission And Goals</span>
                </div>
                <svg className="w-5 h-5 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6"
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
              Transforming Bold Ideas Into<br />
               Future-Ready Technology Experiences.<br />
               
              </motion.h2>
            </div>

            {/* Tabs */}
            <div className="flex gap-0 border-b-2 border-gray-300 dark:border-gray-700 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-3 text-lg md:text-xl lg:text-2xl font-semibold transition-all duration-300 relative whitespace-nowrap ${activeTab === tab.id
                      ? 'text-black dark:text-white'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                    }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7f01ff] to-[#2b33da] dark:from-orange-500 dark:to-red-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Description - Changes based on active tab */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {tabContent[activeTab as keyof typeof tabContent].description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4">
              {tabContent[activeTab as keyof typeof tabContent].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7f01ff] to-[#2b33da] dark:from-orange-500 dark:to-red-600 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto justify-center"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Side - Images Grid */}
          <div className="relative h-[400px] md:h-[520px] mt-8 lg:mt-0">
            {hoveredImage !== null ? (
              // Full expanded image view
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full overflow-hidden"
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={images[hoveredImage].src}
                  alt={images[hoveredImage].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            ) : (
              // Grid view
              <div className="grid grid-cols-2 gap-4 h-full">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative h-full overflow-hidden cursor-pointer group"
                    onMouseEnter={() => setHoveredImage(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFuture;
