import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: 'Elite Sports Academy',
    category: 'Sports',
    description: 'Building champions through world-class training',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80',
  },
  {
    id: 2,
    title: 'Colab Esports',
    category: 'Sports',
    description: 'Professional gaming infrastructure',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80',
  },
  {
    id: 3,
    title: 'Sports Tech Innovation',
    category: 'Sports',
    description: 'AI-powered performance analytics',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80',
  },
  {
    id: 4,
    title: 'Colab Intelligence',
    category: 'Technology',
    description: 'Enterprise AI solutions',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
  },
  {
    id: 5,
    title: 'Aegis Drones',
    category: 'Technology',
    description: 'Autonomous aerial systems',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80',
  },
  {
    id: 6,
    title: 'Defense Systems',
    category: 'Technology',
    description: 'Next-gen security solutions',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Dual ecosystem excellence
          </p>
        </motion.div>

        {/* Main Display - Large Featured + Thumbnails */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Featured Service */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden group cursor-pointer"
            onClick={() => window.location.href = `/${services[activeIndex].id}`}
          >
            {/* Image */}
            <motion.img
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ scale: 1.05 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  {services[activeIndex].category}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                  {services[activeIndex].title}
                </h3>
                <p className="text-xl md:text-2xl text-white/80 mb-6 max-w-2xl">
                  {services[activeIndex].description}
                </p>
                <motion.div
                  className="inline-flex items-center gap-3 text-white font-bold text-lg"
                  whileHover={{ gap: '1rem' }}
                >
                  <span>Explore Service</span>
                  <span className="text-2xl">→</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Number Badge */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-black/60 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
              <span className="text-3xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                {(activeIndex + 1).toString().padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* Thumbnail List */}
          <div className="lg:col-span-4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible scrollbar-hide">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative flex-shrink-0 w-full h-32 rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? 'ring-2 ring-primary shadow-lg shadow-primary/50' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                {/* Thumbnail Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-center">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider mb-1">
                    {service.category}
                  </span>
                  <h4 className="text-base font-black text-white">
                    {service.title}
                  </h4>
                </div>

                {/* Active Indicator */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeService"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-12"
        >
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? 'w-12 h-3 bg-gradient-to-r from-primary to-secondary'
                  : 'w-3 h-3 bg-gray-700 hover:bg-gray-600'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
