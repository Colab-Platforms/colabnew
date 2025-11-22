import { Linkedin, Twitter, Instagram, Youtube, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-black text-3xl md:text-4xl mb-3 uppercase tracking-tight">
                <span className="text-white">Colab</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Platform</span>
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
            
            <p className="text-white/70 text-base md:text-lg mb-6 max-w-md leading-relaxed font-medium">
              Two ecosystems. One vision. Building India's future through sports excellence and cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a href="mailto:info@colabplatform.com" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">techcolabplatform@gmail.com</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-white/60 hover:text-secondary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/10 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">+91 8976866292</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">202, Takshashila Building, Samant Estate, JP Road, Behind Sai Veg Hotel Goregaon East Mumbai 400063</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/colabplatformslimited/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all group">
                <Linkedin className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://x.com/ColabLtd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/10 hover:border-secondary/30 transition-all group">
                <Twitter className="w-5 h-5 text-white/60 group-hover:text-secondary transition-colors" />
              </a>
              <a href="https://www.instagram.com/colab_platforms/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all group">
                <Instagram className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61558652640097" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/10 hover:border-secondary/30 transition-all group">
                <Facebook className="w-5 h-5 text-white/60 group-hover:text-secondary transition-colors" />
              </a>
              <a href="https://www.youtube.com/@ColabPlatformsLimited" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/10 hover:border-secondary/30 transition-all group">
                <Youtube className="w-5 h-5 text-white/60 group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-6 text-primary flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">About</span>
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Gallery</span>
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Blog</span>
                </a>
              </li>
              <li>
                <a href="/investor-relations" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Investors</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Sports Services */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-6 text-secondary flex items-center gap-2">
              <div className="w-1 h-4 bg-secondary rounded-full" />
              Sports Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/sports-marketplace" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Sports Marketplace</span>
                </a>
              </li>
              <li>
                <a href="/sports-content" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Sports Content</span>
                </a>
              </li>
              <li>
                <a href="/sports-ip" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Sports IP</span>
                </a>
              </li>
              <li>
                <a href="/athlete-management" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Athlete Management</span>
                </a>
              </li>
              <li>
                <a href="/sports-infrastructure" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Sports Infrastructure</span>
                </a>
              </li>
              <li>
                <a href="/sports-analytics" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Sports Analytics</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm font-medium">
              © 2024 Colab Platform. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-primary transition-colors font-medium">Privacy Policy</a>
              <span className="text-white/20">•</span>
              <a href="#" className="text-white/50 hover:text-primary transition-colors font-medium">Terms of Service</a>
              <span className="text-white/20">•</span>
              <a href="#" className="text-white/50 hover:text-primary transition-colors font-medium">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2" />
    </footer>
  );
};

export default Footer;
