import { Activity, Cpu } from "lucide-react";
const sportsImage = "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Close_up_basketball_rim_backdrop.jpg?v=1762857865"; // Running athlete
const techImage = "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Holographic_Personal_AI_Orbs_Your_Future_Smart_Assistant.jpg?v=1762857865"; // AI/Tech

const TwoPillars = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Modern Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Dot Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 1.5px, transparent 1.5px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Subtle Diagonal Lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(6, 182, 212, 0.15) 60px, rgba(6, 182, 212, 0.15) 61px)',
          }}
        />
      </div>
      
      {/* Animated Gradient Orbs with Movement */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '1s'
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section header with sports energy */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-6 md:mb-8">
            <span className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 text-xs md:text-sm font-black text-white backdrop-blur-md uppercase tracking-wider md:tracking-widest">
              ⚡ Two Ecosystems, One Vision
            </span>
          </div>
        <h2
  className="font-sans font-black text-2xl md:text-3xl lg:text-5xl mb-6 leading-tight uppercase tracking-tight"
  style={{ fontFamily: "'Playfair Display', serif" }}
>
            <span className="block text-white drop-shadow-2xl">
              The Twin Pillars
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Of Power
            </span>
          </h2>
          <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </div>
        </div>

        {/* The Two Pillars - Sports-inspired cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Sports Ecosystem - Bold Card */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50" />
            
            <div className="relative bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl border-4 border-primary/40 rounded-2xl overflow-hidden hover:border-primary/60 transition-all duration-500 h-full group-hover:scale-[1.02] transform">
              {/* Background image - More visible */}
              <div className="absolute inset-0 opacity-50 group-hover:opacity-60 transition-opacity duration-500">
                <img 
                  src={sportsImage} 
                  alt="Sports ecosystem visualization" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-black/60 to-black/70" />
              </div>

              {/* Diagonal accent stripe */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent transform rotate-45 translate-x-16 -translate-y-16" />

              <div className="relative p-6 sm:p-8 md:p-10">
                {/* Special badge with sports flair */}
                <div className="mb-4 md:mb-6">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-primary/30 border-2 border-primary/50 text-[10px] md:text-xs font-black text-white backdrop-blur-md uppercase tracking-wider inline-block">
                    🏆 India's Only Fully Integrated Sports Ecosystem
                  </span>
                </div>

                {/* Large icon with glow */}
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl bg-primary/20 border-2 border-primary/40 mb-6 md:mb-8 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <Activity className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" strokeWidth={2.5} />
                </div>
                
                <h3 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-white uppercase tracking-tight leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  The Sports
                  <span className="block text-primary">Ecosystem</span>
                </h3>
                
                <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed font-medium">
                  Empowering athletes, academies, and sports organizations with world-class 
                  infrastructure, coaching, and technology. From grassroots development to 
                  elite performance, we architect pathways to greatness.
                </p>
              
                {/* Key ventures with bold styling */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3 group/item">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.5)] flex-shrink-0" />
                    <span className="text-sm md:text-base text-white font-bold group-hover/item:text-primary transition-colors">Colab Sports Management</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 group/item">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.5)] flex-shrink-0" />
                    <span className="text-sm md:text-base text-white font-bold group-hover/item:text-primary transition-colors">Elite Training Academies</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 group/item">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.5)] flex-shrink-0" />
                    <span className="text-sm md:text-base text-white font-bold group-hover/item:text-primary transition-colors">Sports Tech Integration</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 group/item">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.5)] flex-shrink-0" />
                    <span className="text-sm md:text-base text-white font-bold group-hover/item:text-primary transition-colors">Esports & Digital Competition</span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 md:mt-8 h-1 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full" />
              </div>
            </div>
          </div>

          {/* Tech Ecosystem - Bold Card */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50" />
            
            <div className="relative bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl border-4 border-secondary/40 rounded-2xl overflow-hidden hover:border-secondary/60 transition-all duration-500 h-full group-hover:scale-[1.02] transform">
              {/* Background image - More visible */}
              <div className="absolute inset-0 opacity-50 group-hover:opacity-60 transition-opacity duration-500">
                <img 
                  src={techImage} 
                  alt="Technology innovation visualization" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-black/60 to-black/70" />
              </div>

              {/* Diagonal accent stripe */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/30 to-transparent transform rotate-45 translate-x-16 -translate-y-16" />

              <div className="relative p-6 sm:p-8 md:p-10">
                {/* Large icon with glow */}
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl bg-secondary/20 border-2 border-secondary/40 mb-6 md:mb-8 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <Cpu className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-secondary" strokeWidth={2.5} />
                </div>
                
                <h3 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-white uppercase tracking-tight leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Future-Forged
                  <span className="block text-secondary">Technology</span>
                </h3>
                
                <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed font-medium">
                  Pioneering AI-driven intelligence, autonomous systems, and advanced defense 
                  technologies. We build the tools that secure nations, automate the complex, 
                  and redefine what's possible.
                </p>
              
                {/* Key ventures with bold styling */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3 group/item">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(6,182,212,0.5)] flex-shrink-0" />
                    <span className="text-sm md:text-base text-white font-bold group-hover/item:text-secondary transition-colors">Colab Intelligence (AI & ML)</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 group/item">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(6,182,212,0.5)] flex-shrink-0" />
                    <span className="text-sm md:text-base text-white font-bold group-hover/item:text-secondary transition-colors">Aegis Defense Systems</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 group/item">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(6,182,212,0.5)] flex-shrink-0" />
                    <span className="text-sm md:text-base text-white font-bold group-hover/item:text-secondary transition-colors">Autonomous Drone Technology</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 group/item">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(6,182,212,0.5)] flex-shrink-0" />
                    <span className="text-sm md:text-base text-white font-bold group-hover/item:text-secondary transition-colors">Enterprise AI Solutions</span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 md:mt-8 h-1 w-full bg-gradient-to-r from-secondary via-secondary/50 to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoPillars;
