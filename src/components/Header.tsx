import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Trophy, Gamepad2, Brain, Plane, Target, BarChart3, Settings, Lightbulb, Building2, Code2, Cpu, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessVerticals = [
    { name: 'Sports', icon: Trophy, color: 'primary', description: 'Elite training & management', link: '/sports' },
    { name: 'AI Intelligence', icon: Brain, color: 'secondary', description: 'Machine learning solutions', link: '/ai-intelligence' },
    { name: 'Semiconductors', icon: Cpu, color: 'secondary', description: 'Chip technology', link: '/semiconductor' },
    { name: 'FinTech', icon: Smartphone, color: 'secondary', description: 'Digital finance', link: '/fintech' },
    { name: 'Esports', icon: Gamepad2, color: 'primary', description: 'Professional gaming', link: '/esports' },
    { name: 'Drones', icon: Plane, color: 'secondary', description: 'Autonomous systems', link: '/drones' },
  ];

  const sportsServices = [
    { name: 'Sports Marketplace', icon: Target, color: 'primary', description: 'E-commerce platform', link: '/sports-marketplace' },
    { name: 'Sports Content', icon: BarChart3, color: 'primary', description: 'Media & broadcasting', link: '/sports-content' },
    { name: 'Sports IP', icon: Settings, color: 'primary', description: 'Intellectual property', link: '/sports-ip' },
    { name: 'Athlete Management', icon: Lightbulb, color: 'primary', description: 'Career development', link: '/athlete-management' },
    { name: 'Sports Infrastructure', icon: Building2, color: 'primary', description: 'Facilities & development', link: '/sports-infrastructure' },
    { name: 'Sports Analytics', icon: Code2, color: 'primary', description: 'Performance technology', link: '/sports-analytics' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/minimal-logo-effect-for-footer-unscreen-ezgif.com-crop_1.gif?v=1744289888"
                  alt="Colab Platform"
                  className="relative h-16 w-16 md:h-20 md:w-20 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <a
                href="/"
                className="px-4 py-2 text-white/70 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 relative group rounded-lg hover:bg-white/5"
              >
                Home
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>

              <a
                href="/about"
                className="px-4 py-2 text-white/70 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 relative group rounded-lg hover:bg-white/5"
              >
                About
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>

              <a
                href="/gallery"
                className="px-4 py-2 text-white/70 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 relative group rounded-lg hover:bg-white/5"
              >
                Gallery
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>

              <a
                href="/blog"
                className="px-4 py-2 text-white/70 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 relative group rounded-lg hover:bg-white/5"
              >
                Blog
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>

              <a
                href="/investor-relations"
                className="px-4 py-2 text-white/70 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 relative group rounded-lg hover:bg-white/5"
              >
                Investors
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>

              {/* Business Verticals Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('business')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-white/70 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-1 group rounded-lg hover:bg-white/5">
                  Business Verticals
                  <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${activeDropdown === 'business' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'business' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[600px] bg-black backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden"
                    >
                      {/* Header */}
                      <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-primary/10 to-secondary/10">
                        <h3 className="text-sm font-black uppercase tracking-wider text-white">Business Verticals</h3>
                        <p className="text-xs text-white/60 mt-1">Explore our diverse portfolio</p>
                      </div>
                      
                      {/* Grid */}
                      <div className="p-4 grid grid-cols-2 gap-3">
                        {businessVerticals.map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <a
                              key={index}
                              href={item.link}
                              className={`group relative p-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                                item.color === 'primary' 
                                  ? 'border-primary/20 hover:border-primary/50 hover:bg-primary/5' 
                                  : 'border-secondary/20 hover:border-secondary/50 hover:bg-secondary/5'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`p-2 rounded-xl ${
                                  item.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                                }`}>
                                  <IconComponent className={`w-5 h-5 ${
                                    item.color === 'primary' ? 'text-primary' : 'text-secondary'
                                  }`} />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                                    {item.name}
                                  </h4>
                                  <p className="text-xs text-white/50 mt-1">{item.description}</p>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sports Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-white/70 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-1 group rounded-lg hover:bg-white/5">
                  Sports Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[600px] bg-black backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden"
                    >
                      {/* Header */}
                      <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-primary/10 to-primary/5">
                        <h3 className="text-sm font-black uppercase tracking-wider text-white">Sports Services</h3>
                        <p className="text-xs text-white/60 mt-1">Comprehensive sports ecosystem solutions</p>
                      </div>
                      
                      {/* Grid */}
                      <div className="p-4 grid grid-cols-2 gap-3">
                        {sportsServices.map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <a
                              key={index}
                              href={item.link}
                              className="group relative p-4 rounded-2xl border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-xl bg-primary/10">
                                  <IconComponent className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                                    {item.name}
                                  </h4>
                                  <p className="text-xs text-white/50 mt-1">{item.description}</p>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-black text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-500 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>Get Started</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-40 lg:hidden bg-black/95 backdrop-blur-xl border-l border-white/10 shadow-2xl"
          >
            <div className="flex flex-col h-full pt-24 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-6">
                <a href="/" className="text-2xl font-bold text-white hover:text-primary transition-colors">
                  Home
                </a>
                <a href="/about" className="text-2xl font-bold text-white hover:text-primary transition-colors">
                  About
                </a>
                <a href="/gallery" className="text-2xl font-bold text-white hover:text-primary transition-colors">
                  Gallery
                </a>
                <a href="/blog" className="text-2xl font-bold text-white hover:text-primary transition-colors">
                  Blog
                </a>
                <a href="/investor-relations" className="text-2xl font-bold text-white hover:text-primary transition-colors">
                  Investors
                </a>

                {/* Business Verticals Mobile */}
                <div>
                  <h3 className="text-xl font-black text-primary mb-4">Business Verticals</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {businessVerticals.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <a
                          key={index}
                          href={item.link}
                          className="flex items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-primary/10 transition-colors"
                        >
                          <IconComponent className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium text-white">{item.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Sports Services Mobile */}
                <div>
                  <h3 className="text-xl font-black text-primary mb-4">Sports Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {sportsServices.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <a
                          key={index}
                          href={item.link}
                          className="flex items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-primary/10 transition-colors"
                        >
                          <IconComponent className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium text-white">{item.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <a href="/contact" className="mt-6 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg block text-center">
                  Get Started
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
