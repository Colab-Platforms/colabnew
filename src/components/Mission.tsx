import indiaFuture from "@/assets/india-future.jpg";
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Mission = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate vertical lines with varied properties for attractive look
  const lineCount = 50;
  const lines = Array.from({ length: lineCount }, (_, i) => ({
    id: i,
    x: (i / lineCount) * 100,
    delay: Math.random() * 5, // Random delays for staggered appearance
    color: i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'hybrid',
    speed: 6 + Math.random() * 4, // Slower speeds: 6-10 seconds
    thickness: i % 7 === 0 ? 1.5 : i % 5 === 0 ? 1.2 : 1, // Thicker lines: 1-1.5px
    intensity: 0.3 + Math.random() * 0.4, // Random intensity 0.3-0.7
    endPoint: i % 4 === 0 ? 80 + Math.random() * 40 : 60 + Math.random() * 30, // Some lines go further (80-120%), others 60-90%
  }));

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background with image */}
      <div className="absolute inset-0">
        <img 
          src={indiaFuture} 
          alt="India's digital future" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Flowing Vertical Lines - Right Side Background Effect */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 lg:w-2/5 h-full pointer-events-none">
        {lines.map((line) => {
          const distance = isHovering
            ? Math.sqrt(
                Math.pow(mousePosition.x - (line.x / 100) * (sectionRef.current?.offsetWidth || 0), 2) +
                Math.pow(mousePosition.y - (sectionRef.current?.offsetHeight || 0) / 2, 2)
              )
            : 1000;

          const disperseStrength = Math.max(0, 120 - distance) / 120;
          const disperseAngle = Math.atan2(
            mousePosition.y - (sectionRef.current?.offsetHeight || 0) / 2,
            mousePosition.x - (line.x / 100) * (sectionRef.current?.offsetWidth || 0)
          );
          
          const disperseX = isHovering ? -Math.cos(disperseAngle) * disperseStrength * 50 : 0;

          const baseIntensity = line.intensity;
          
          return (
            <motion.div
              key={line.id}
              className="absolute"
              style={{
                left: `${line.x}%`,
                width: `${line.thickness}px`,
                height: '80%',
                top: '-80%',
                background:
                  line.color === 'primary'
                    ? `linear-gradient(to bottom, transparent 0%, rgba(168, 85, 247, ${baseIntensity * 0.3}) 10%, rgba(168, 85, 247, ${baseIntensity * 0.6}) 30%, rgba(168, 85, 247, ${baseIntensity}) 50%, rgba(168, 85, 247, ${baseIntensity * 0.6}) 70%, rgba(168, 85, 247, ${baseIntensity * 0.3}) 90%, transparent 100%)`
                    : line.color === 'secondary'
                    ? `linear-gradient(to bottom, transparent 0%, rgba(6, 182, 212, ${baseIntensity * 0.3}) 10%, rgba(6, 182, 212, ${baseIntensity * 0.6}) 30%, rgba(6, 182, 212, ${baseIntensity}) 50%, rgba(6, 182, 212, ${baseIntensity * 0.6}) 70%, rgba(6, 182, 212, ${baseIntensity * 0.3}) 90%, transparent 100%)`
                    : `linear-gradient(to bottom, transparent 0%, rgba(168, 85, 247, ${baseIntensity * 0.3}) 10%, rgba(6, 182, 212, ${baseIntensity * 0.5}) 35%, rgba(168, 85, 247, ${baseIntensity * 0.7}) 50%, rgba(6, 182, 212, ${baseIntensity * 0.5}) 65%, rgba(168, 85, 247, ${baseIntensity * 0.3}) 90%, transparent 100%)`,
                boxShadow:
                  line.color === 'primary'
                    ? `0 0 ${2 + line.thickness}px rgba(168, 85, 247, ${baseIntensity * 0.3})`
                    : line.color === 'secondary'
                    ? `0 0 ${2 + line.thickness}px rgba(6, 182, 212, ${baseIntensity * 0.3})`
                    : `0 0 ${2 + line.thickness}px rgba(168, 85, 247, ${baseIntensity * 0.2}), 0 0 ${2 + line.thickness}px rgba(6, 182, 212, ${baseIntensity * 0.2})`,
                filter: `blur(0.1px)`,
              }}
              animate={{
                y: ['0%', `${line.endPoint}%`],
                opacity: [0, 0.2, 0.5, 0.8, 1, 0.8, 0.5, 0.2, 0],
                x: disperseX,
                scaleX: isHovering && disperseStrength > 0.3 ? 1 + disperseStrength * 2 : 1,
              }}
              transition={{
                y: {
                  duration: line.speed,
                  repeat: Infinity,
                  delay: line.delay,
                  ease: 'linear',
                },
                opacity: {
                  duration: line.speed,
                  repeat: Infinity,
                  delay: line.delay,
                  ease: 'easeInOut',
                  times: [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.9, 1],
                },
                x: {
                  duration: 0.5,
                  ease: 'easeOut',
                },
                scaleX: {
                  duration: 0.3,
                  ease: 'easeOut',
                },
              }}
            />
          );
        })}
      </div>
      
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Badge */}
          <div className="text-center">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
                About Colab Platforms
              </span>
            </div>
          </div>
          
          {/* Main Statement */}
          <div className="text-center space-y-8">
            <h2 className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl leading-tight text-foreground">
              Colab Platforms is a{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                diversified technology conglomerate
              </span>
              , building the integrated ecosystems that will define India's future.
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From our foundational sports network to our deep-tech ventures in AI, the digital 
              economy and aerospace—we build platforms that unlock human potential.
            </p>
          </div>

          {/* Key pillars grid with animated cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-8">
            {/* Sports Foundation Card */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 h-full group-hover:scale-105 transform">
                {/* Animated icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-all duration-500">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="font-serif font-black text-2xl text-white mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  Sports Foundation
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed text-center font-medium">
                  Integrated sports ecosystem powering India's athletic excellence
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            {/* Deep Technology Card */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border-2 border-secondary/30 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-500 h-full group-hover:scale-105 transform">
                {/* Animated icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-all duration-500">
                  <svg className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="font-serif font-black text-2xl text-white mb-4 text-center group-hover:text-secondary transition-colors duration-300">
                  Deep Technology
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed text-center font-medium">
                  AI, aerospace, and defense systems defining the future
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-1 w-full bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            {/* Digital Economy Card */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-500 h-full group-hover:scale-105 transform">
                {/* Animated icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-all duration-500">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="font-serif font-black text-2xl text-white mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  Digital Economy
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed text-center font-medium">
                  Platforms enabling India's digital transformation
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
