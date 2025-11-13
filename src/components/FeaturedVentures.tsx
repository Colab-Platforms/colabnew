import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Venture {
  id: string;
  title: string;
  category: 'sports' | 'technology';
  tagline: string;
  story: string;
  impact: string;
  stats: string;
  image: string;
}

const ventures: Venture[] = [
  {
    id: 'esports-arena',
    title: 'Colab Esports Arena',
    category: 'sports',
    tagline: "India's Next-Gen Competitive Gaming Hub",
    story: 'Imagine a space where every gamer, from bedroom enthusiasts to professional esports athletes, has access to world-class infrastructure. Colab Esports Arena is not just a platform—it\'s a movement. We\'re building the backbone of India\'s esports revolution, connecting grassroots tournaments with professional leagues, creating pathways for talent, and establishing India as a global esports powerhouse.',
    impact: 'Empowering the next generation of Indian gamers',
    stats: '10,000+ Active Gamers | 500+ Tournaments | 50+ Professional Teams',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80'
  },
  {
    id: 'athlete-hub',
    title: 'Athlete Data Hub',
    category: 'sports',
    tagline: 'End-to-End Athlete Analytics Platform',
    story: 'Every athlete has a story written in data. The Athlete Data Hub transforms raw performance metrics into actionable intelligence. Using AI-powered analytics, we track biomechanics, nutrition, recovery, and mental performance across multiple sports disciplines. Coaches get real-time insights, athletes understand their bodies better, and scouts discover hidden talent through data-driven profiles.',
    impact: 'Revolutionizing how athletes train and perform',
    stats: '500+ Athletes Tracked | 1M+ Data Points Daily | 20+ Sports Covered',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80'
  },
  {
    id: 'sports-marketplace',
    title: 'Sports Marketplace',
    category: 'sports',
    tagline: 'Connecting Fans, Athletes, and Brands',
    story: 'The relationship between fans and athletes has never been more direct. Sports Marketplace creates an ecosystem where fans access exclusive content, athletes monetize their personal brand authentically, and sponsors find genuine partnerships. From limited edition merchandise to virtual meet-and-greets, we\'re redefining sports commerce for the digital age.',
    impact: 'Building direct athlete-fan connections',
    stats: '1M+ Engaged Fans | 200+ Athlete Partners | ₹50Cr+ Transactions',
    image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=1200&q=80'
  },
  {
    id: 'ai-lab',
    title: 'Colab AI Lab',
    category: 'technology',
    tagline: 'Machine Intelligence Powering Performance',
    story: 'At the intersection of artificial intelligence and human performance lies unprecedented potential. Our AI Lab develops neural networks that understand athletic movement, predict injury risks, optimize training loads, and even provide real-time tactical coaching. We\'re not just analyzing data—we\'re creating intelligent systems that amplify human capability.',
    impact: 'Unlocking human potential through AI',
    stats: '100M+ Data Points Processed | 50+ AI Models | 99.2% Accuracy',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80'
  },
  {
    id: 'drone-network',
    title: 'Drone Command Network',
    category: 'technology',
    tagline: 'Integrated Aerial Intelligence Systems',
    story: 'Sports broadcasting is being reimagined from the sky. Our autonomous drone network captures events from angles previously impossible, providing 360° coverage, real-time tactical analysis, and cinematic quality footage. From cricket matches to marathons, our drones don\'t just record—they understand the game, tracking players, predicting plays, and delivering insights that change how we experience sports.',
    impact: 'Transforming sports broadcasting and analysis',
    stats: '100+ Events Covered | 50TB+ Footage | 20+ Broadcast Partners',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80'
  },
  {
    id: 'fintech-core',
    title: 'Fintech Infrastructure Core',
    category: 'technology',
    tagline: 'Unified Digital Payment Ecosystem',
    story: 'The sports economy runs on trust and speed. Our Fintech Infrastructure Core provides the secure, scalable backbone for billions in digital transactions. From instant athlete payouts to fan micropayments, from sponsorship settlements to prize distributions—we handle it all. Built on blockchain technology with bank-grade security, we\'re creating the financial rails for the future of sports.',
    impact: 'Powering the digital sports economy',
    stats: '₹500Cr+ Processed | 50+ Platform Integrations | <1s Transaction Time',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80'
  }
];

const FeaturedVenturesNew = () => {
  const [activeTab, setActiveTab] = useState<'sports' | 'technology'>('sports');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredVentures = ventures.filter(v => v.category === activeTab);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full text-sm font-bold text-primary uppercase tracking-wider"
          >
            Our Ventures
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="text-white">Projects That Define</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              The Future
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
            Discover the ventures shaping India's sports and technology landscape
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-24"
        >
          <div className="relative inline-flex bg-black/40 backdrop-blur-2xl rounded-2xl p-1.5 border border-white/10">
            <motion.div
              className="absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r from-primary to-secondary"
              animate={{
                left: activeTab === 'sports' ? '0.375rem' : '50%',
                right: activeTab === 'sports' ? '50%' : '0.375rem'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            
            <button
              onClick={() => setActiveTab('sports')}
              className={`relative z-10 px-10 py-4 rounded-xl font-bold text-lg transition-colors ${
                activeTab === 'sports' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Sports Ventures
            </button>
            
            <button
              onClick={() => setActiveTab('technology')}
              className={`relative z-10 px-10 py-4 rounded-xl font-bold text-lg transition-colors ${
                activeTab === 'technology' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Technology Ventures
            </button>
          </div>
        </motion.div>

        {/* Ventures Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-32"
          >
            {filteredVentures.map((venture, index) => (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl blur-3xl"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Image Section - 5 columns */}
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <motion.div
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={venture.image}
                        alt={venture.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Number Badge */}
                      <div className="absolute top-6 left-6 w-14 h-14 bg-black/80 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/10">
                        <span className="text-2xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>

                      {/* Stats Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                        <p className="text-xs text-gray-400 font-mono">{venture.stats}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Section - 7 columns */}
                  <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Tagline */}
                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="text-sm font-bold text-primary uppercase tracking-wider"
                    >
                      {venture.tagline}
                    </motion.p>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl md:text-5xl font-black text-white leading-tight"
                    >
                      {venture.title}
                    </motion.h3>

                    {/* Story */}
                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-lg text-gray-300 leading-relaxed"
                    >
                      {venture.story}
                    </motion.p>

                    {/* Impact */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-3 pt-4"
                    >
                      <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Impact</p>
                        <p className="text-lg font-semibold text-white">{venture.impact}</p>
                      </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.a
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      href={`#${venture.id}`}
                      className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:gap-4 transition-all duration-300 group"
                    >
                      Explore This Venture
                      <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                    </motion.a>
                  </div>
                </div>

                {/* Divider Line */}
                {index < filteredVentures.length - 1 && (
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <a
            href="/ventures"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-2xl font-bold text-xl text-white hover:scale-105 hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-300"
          >
            View All Ventures
            <span className="text-2xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVenturesNew;
