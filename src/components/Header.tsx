import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Trophy, Gamepad2, Brain, Plane, Target, BarChart3, Settings, Lightbulb, Building2, Code2, Cpu, Smartphone, HelpCircle, DollarSign, Phone, Mail, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

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
    { name: 'Artificial Intelligence', icon: Brain, color: 'secondary', description: 'Machine learning solutions', link: '/ai-intelligence' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
          ? 'bg-black/95 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]'
          : 'bg-black/40'
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`fixed left-0 right-0 mx-auto z-50 w-[1200px] max-w-[95vw] backdrop-blur-2xl border border-gray-800 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden flex ${isScrolled ? 'top-24' : 'top-28'}`}
                    >
                      {/* Left Panel - Dark Gray #121212 */}
                      <div className="flex-1 bg-[#121212] p-4 flex flex-col justify-between relative overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10 flex gap-8">
                          {/* About Us Section */}
                          <div className="w-2/5">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 backdrop-blur-sm shadow-lg shadow-primary/5">
                                <Lightbulb className="w-6 h-6 text-primary" />
                              </div>
                              <h3 className="font-black text-2xl tracking-wide text-white">ABOUT US</h3>
                            </div>
                            <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 relative group cursor-pointer shadow-2xl hover:shadow-primary/20 transition-all duration-500 h-48">
                              <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                              >
                                <source src="https://cdn.shopify.com/videos/c/o/v/0f1825bbb9d34faeb9088e6ad984ad0d.mp4" type="video/mp4" />
                              </video>
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            </div>
                          </div>

                          {/* Grid Section */}
                          <div className="flex-1 grid grid-cols-2 gap-x-6 gap-y-4 content-start pt-2">
                            {businessVerticals.map((item, index) => (
                              <a key={index} href={item.link} className="flex items-center gap-4 group p-2 -ml-2 rounded-xl hover:bg-white/5 transition-all duration-300">
                                <item.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                                <div>
                                  <span className="block font-bold text-lg text-white group-hover:text-primary transition-colors">{item.name}</span>
                                  <span className="text-sm text-white/40 group-hover:text-white/70 transition-colors">{item.description}</span>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Partners - Scrolling Marquee (Inline) */}
                        <div className="relative z-10 mt-4 pt-4 border-t border-white/10 flex items-center gap-8 overflow-hidden">
                          <h4 className="font-black text-xl text-white whitespace-nowrap shrink-0 tracking-wider">OUR PARTNERS :</h4>
                          <div className="flex-1 overflow-hidden mask-linear-gradient">
                            <motion.div
                              className="flex gap-16 whitespace-nowrap items-center"
                              animate={{ x: [0, -1000] }}
                              transition={{
                                repeat: Infinity,
                                duration: 40,
                                ease: "linear"
                              }}
                            >
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className="flex gap-16 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                  <span className="font-black text-2xl text-white tracking-widest hover:text-primary transition-colors">HERTZ</span>
                                  <span className="font-black text-2xl text-white tracking-widest hover:text-secondary transition-colors">GROWTH</span>
                                  <span className="font-black text-2xl text-white tracking-widest hover:text-primary transition-colors">COMPANY</span>
                                  <span className="font-black text-2xl text-white tracking-widest hover:text-secondary transition-colors">FINANCE</span>
                                  <span className="font-black text-2xl text-white tracking-widest hover:text-primary transition-colors">TECHCORP</span>
                                </div>
                              ))}
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Right Panel - White */}
                      <div className="w-[400px] bg-white backdrop-blur-xl border-l border-gray-200 p-4 text-gray-900 relative shrink-0 flex flex-col">
                        <h3 className="font-black text-2xl mb-4 text-gray-900 tracking-wide uppercase border-b-4 border-primary/50 pb-3 inline-block">Locate Us</h3>

                        <div className="space-y-4 flex-1">
                          <div className="flex gap-6 group cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/5 group-hover:shadow-primary/30 border border-primary/20 group-hover:border-primary">
                              <Phone className="w-7 h-7" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary transition-colors">Talk To Us</h4>
                              <p className="text-base text-gray-600 font-medium group-hover:text-gray-800 transition-colors">+91 8976866292</p>
                              <p className="text-base text-gray-600 font-medium group-hover:text-gray-800 transition-colors">+91 1234567890</p>
                            </div>
                          </div>

                          <div className="flex gap-6 group cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-lg shadow-secondary/5 group-hover:shadow-secondary/30 border border-secondary/20 group-hover:border-secondary">
                              <Mail className="w-7 h-7" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-secondary transition-colors">Email Us</h4>
                              <p className="text-base text-gray-600 font-medium group-hover:text-gray-800 transition-colors">info@colabplatform.com</p>
                              <p className="text-base text-gray-600 font-medium group-hover:text-gray-800 transition-colors">support@colabplatform.com</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-gray-200">
                          <h4 className="font-bold text-lg mb-4 text-gray-700">Follow Us</h4>
                          <div className="flex gap-4">
                            <a href="https://x.com/ColabLtd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/10">
                              <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://www.youtube.com/@ColabPlatformsLimited" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 bg-gray-100 flex items-center justify-center hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FF0000]/20">
                              <Youtube className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/colab_platforms/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 bg-gray-100 flex items-center justify-center hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#E1306C]/20">
                              <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/company/colabplatformslimited/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 bg-gray-100 flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0077b5]/20">
                              <Linkedin className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/services"
                className="px-4 py-2 text-white/70 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 relative group rounded-lg hover:bg-white/5"
              >
                Services
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            </nav>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-black text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-500 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>Get Started</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>

            {/* Theme Toggle - Desktop */}
            <div className="hidden lg:block ml-4">
              <ThemeToggle />
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
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
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-40 lg:hidden bg-black/95 border-l border-white/10 shadow-2xl"
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

                {/* Services Mobile */}
                <a href="/services" className="text-2xl font-bold text-white hover:text-primary transition-colors">
                  Services
                </a>

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
