import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: 'Intelligent Enterprise Platforms',
    category: 'Sports',
    description: 'AI systems that automate operations and power smarter decisions.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80',
  },
  {
    id: 2,
    title: 'Immersive Digital Experiences',
    category: 'Sports',
    description: 'Gaming and engagement platforms built for high user interaction.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80',
  },
  {
    id: 3,
    title: 'Smart Infra & Performance Systems',
    category: 'Sports',
    description: 'Tech-enabled sports and urban solutions for better performance.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80',
  },
  {
    id: 4,
    title: 'Autonomous & Aviation Systems',
    category: 'Technology',
    description: 'Advanced drones and aerial technologies for commercial and security use.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
  },
  {
    id: 5,
    title: 'Fintech & Digital Transactions',
    category: 'Technology',
    description: 'Secure digital tools for seamless payments and recharges.',
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
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
      
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
             Unified Technology Ecosystem
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
           One platform powering intelligence, experiences, and innovation.
          </p>
        </motion.div>

        {/* Split Layout - Sports & Technology */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Sports Ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
           

            {services.filter(s => s.category === 'Sports').map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ x: 12, scale: 1.02 }}
                className="group cursor-pointer relative"
              >
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-black text-primary">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-base md:text-lg mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <motion.div
                      className="inline-flex items-center gap-2 text-primary font-bold text-sm"
                      whileHover={{ gap: '0.75rem' }}
                    >
                      <span>Explore Service</span>
                      <span className="text-xl">→</span>
                    </motion.div>
                  </div>
                </div>
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
           

            {services.filter(s => s.category === 'Technology').map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ x: 12, scale: 1.02 }}
                className="group cursor-pointer relative"
              >
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-black text-secondary">
                      {(index + 4).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-base md:text-lg mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <motion.div
                      className="inline-flex items-center gap-2 text-secondary font-bold text-sm"
                      whileHover={{ gap: '0.75rem' }}
                    >
                      <span>Explore Service</span>
                      <span className="text-xl">→</span>
                    </motion.div>
                  </div>
                </div>
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
      
         
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
