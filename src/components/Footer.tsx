import { Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp, Send } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-background pt-12">
      <footer className="relative bg-[#050505] text-white rounded-t-[5rem] overflow-hidden font-sans">
        {/* Background Pattern - Abstract Waves & Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Main Gradient Mesh */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen" />

          {/* SVG Wave Pattern Simulation */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-20" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="url(#lineGradient)" strokeWidth="1" fill="none" opacity="0.3" />
              </pattern>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7f01ff" />
                <stop offset="100%" stopColor="#2b33da" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Curved lines effect */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(127, 1, 255, 0.1) 10px, rgba(43, 51, 218, 0.1) 11px)`
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 lg:px-12">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
            {/* Brand */}
            <div className="max-w-md">
              <div className="mb-6">
                <h3 className="font-black text-3xl md:text-4xl mb-3 uppercase tracking-tight">
                  <span className="text-white">Colab</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Platforms</span>
                </h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Two ecosystems. One vision. Building India's future through sports excellence and cutting-edge technology.
              </p>
            </div>

            {/* Newsletter */}
            <div className="w-full max-w-md">
              <h3 className="text-2xl font-bold mb-4 text-white">Register For Our Updates!</h3>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-6 pr-16 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 aspect-square bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg flex items-center justify-center transition-all shadow-lg shadow-primary/20">
                  <Send className="w-5 h-5 -ml-1" />
                </button>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-5 h-5 border border-white/30 rounded flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                  {/* Checkbox visual */}
                </div>
                <span className="text-sm text-gray-400">I acknowledge all the Terms & Conditions</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* Middle Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Stay Tuned */}
            <div className="lg:col-span-3">
              <h4 className="text-xl font-bold mb-6 text-white">Stay Tuned</h4>
              <div className="flex gap-4">
                <SocialLink href="https://x.com/ColabLtd" icon={<Twitter className="w-5 h-5" />} />
                <SocialLink href="https://www.youtube.com/@ColabPlatformsLimited" icon={<Youtube className="w-5 h-5" />} />
                <SocialLink href="https://www.instagram.com/colab_platforms/" icon={<Instagram className="w-5 h-5" />} />
                <SocialLink href="https://www.linkedin.com/company/colabplatformslimited/" icon={<Linkedin className="w-5 h-5" />} />
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Column title="Business Verticals">
                <LinkItem href="/ai-intelligence">Artificial Intelligence</LinkItem>
                <LinkItem href="/fintech">FinTech</LinkItem>
                <LinkItem href="/sports">Sports</LinkItem>
                <LinkItem href="/esports">Esports</LinkItem>
                <LinkItem href="/drones">Drones</LinkItem>
                <LinkItem href="/semiconductor">Semiconductor</LinkItem>
              </Column>

              <Column title="Quick Links">
                <LinkItem href="/">Home</LinkItem>
                <LinkItem href="/about">About</LinkItem>
                <LinkItem href="/gallery">Gallery</LinkItem>
                <LinkItem href="/blog">Blog</LinkItem>
                <LinkItem href="/investor-relations">Investors</LinkItem>
              </Column>

              <Column title="Contact Us">
                <li className="text-gray-400 text-sm mb-4 flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="mt-1.5">techcolabplatform@gmail.com</span>
                </li>
                <li className="text-gray-400 text-sm mb-4 flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="mt-1.5">+91 8976866292</span>
                </li>
                <li className="text-gray-400 text-sm mb-4 flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="mt-1.5">202, Takshashila Building, Samant Estate, JP Road, Goregaon East Mumbai 400063</span>
                </li>
              </Column>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © 2025 Colab Platform. All Rights Reserved
            </p>

            <div className="flex items-center gap-6 md:gap-12">
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-white/20">|</span>
                <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
              </div>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg flex items-center justify-center transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300"
  >
    {icon}
  </a>
);

const Column = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div>
    <h4 className="text-lg font-bold mb-6 text-white">{title}</h4>
    <ul className="space-y-3">
      {children}
    </ul>
  </div>
);

const LinkItem = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
      {children}
    </a>
  </li>
);

export default Footer;
