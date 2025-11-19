import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Cpu, ChevronDown } from 'lucide-react';

const HeroNew = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Split Background - Sports (Left) & Technology (Right) */}
      <div className="absolute inset-0">
        {/* Sports Side - Orange Gradient */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-orange-600/20 via-black to-black transition-all duration-1000">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,167,0,0.15),transparent_50%)]" />
          {/* Sports Visual Elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute top-20 left-20"
            >
              <Trophy className="w-32 h-32 text-orange-500" />
            </motion.div>
          </div>
        </div>
        
        {/* Technology Side - Blue Gradient */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-blue-600/20 via-black to-black transition-all duration-1000">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,113,255,0.15),transparent_50%)]" />
          {/* Tech Visual Elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute top-20 right-20"
            >
              <Cpu className="w-32 h-32 text-blue-500" />
            </motion.div>
          </div>
        </div>
        
        {/* Center Divider Line with Glow */}
        <div className="absolute inset-y-0 left-1/2 w-px">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent blur-sm" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-400 mb-6 font-light"
          >
            Two Ecosystems. One Vision.
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-orange-400 via-white to-blue-400 bg-clip-text text-transparent">
              The Twin Pillars of Innovation:
            </span>
            <br />
            <span className="text-white">Sports & Technology</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Empowering India's future through two unified ecosystems — where athletic excellence meets technological brilliance.
          </motion.p>

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Colab Platforms is redefining the future by building parallel ecosystems that shape India's next great revolution. 
            From empowering athletes and esports creators to driving deep-tech breakthroughs in AI, Drones, Semiconductors, 
            and Fintech — we bridge performance with innovation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#sports-ecosystem"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,167,0,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Explore Sports Ecosystem
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="#tech-ecosystem"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,113,255,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                Explore Technology Ecosystem
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-sm text-gray-400 uppercase tracking-wider">Scroll to discover our dual impact</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroNew;
