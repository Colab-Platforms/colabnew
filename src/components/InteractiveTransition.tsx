import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveTransition = () => {
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

  // Generate line positions - more lines for denser effect
  const lineCount = 60;
  const lines = Array.from({ length: lineCount }, (_, i) => ({
    id: i,
    x: (i / lineCount) * 100,
    delay: (i * 0.05) % 3, // Staggered delays for continuous flow
    color: i % 2 === 0 ? 'primary' : 'secondary',
    speed: 3 + (i % 3), // Varying speeds
  }));

  return (
    <section className="relative h-[600px] overflow-hidden bg-transparent pointer-events-none">
      {/* Right-aligned container for lines - in background */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 lg:w-2/5 h-full">
        <div
          ref={sectionRef}
          className="relative w-full h-full pointer-events-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Subtle Flowing Vertical Lines - Background Effect */}
          <div className="absolute inset-0">
            {lines.map((line) => {
              // Calculate distance from cursor for disperse effect
              const distance = isHovering
                ? Math.sqrt(
                    Math.pow(mousePosition.x - (line.x / 100) * (sectionRef.current?.offsetWidth || 0), 2) +
                    Math.pow(mousePosition.y - (sectionRef.current?.offsetHeight || 0) / 2, 2)
                  )
                : 1000;

              const disperseStrength = Math.max(0, 150 - distance) / 150;
              const disperseAngle = Math.atan2(
                mousePosition.y - (sectionRef.current?.offsetHeight || 0) / 2,
                mousePosition.x - (line.x / 100) * (sectionRef.current?.offsetWidth || 0)
              );
              
              // Calculate disperse direction (away from cursor)
              const disperseX = isHovering ? -Math.cos(disperseAngle) * disperseStrength * 60 : 0;
              const disperseY = isHovering ? -Math.sin(disperseAngle) * disperseStrength * 30 : 0;

              return (
                <motion.div
                  key={line.id}
                  className="absolute w-[0.5px]"
                  style={{
                    left: `${line.x}%`,
                    height: '150%',
                    top: '-150%',
                    background:
                      line.color === 'primary'
                        ? 'linear-gradient(to bottom, transparent 0%, rgba(168, 85, 247, 0.12) 20%, rgba(168, 85, 247, 0.2) 40%, rgba(168, 85, 247, 0.12) 60%, transparent 100%)'
                        : 'linear-gradient(to bottom, transparent 0%, rgba(6, 182, 212, 0.12) 20%, rgba(6, 182, 212, 0.2) 40%, rgba(6, 182, 212, 0.12) 60%, transparent 100%)',
                    boxShadow:
                      line.color === 'primary'
                        ? '0 0 3px rgba(168, 85, 247, 0.15)'
                        : '0 0 3px rgba(6, 182, 212, 0.15)',
                  }}
                  animate={{
                    y: ['0%', '250%'],
                    opacity: [0, 0.5, 0.7, 0.5, 0],
                    x: disperseX,
                    translateY: disperseY,
                  }}
                  transition={{
                    y: {
                      duration: line.speed + 2,
                      repeat: Infinity,
                      delay: line.delay,
                      ease: 'linear',
                    },
                    opacity: {
                      duration: line.speed + 2,
                      repeat: Infinity,
                      delay: line.delay,
                      ease: 'easeInOut',
                    },
                    x: {
                      duration: 0.6,
                      ease: 'easeOut',
                    },
                    translateY: {
                      duration: 0.6,
                      ease: 'easeOut',
                    },
                  }}
                />
              );
            })}
          </div>

          {/* Very subtle glow effect on hover */}
          {isHovering && (
            <motion.div
              className="absolute rounded-full pointer-events-none blur-3xl"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                width: 300,
                height: 300,
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.06), rgba(6, 182, 212, 0.06), transparent)',
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default InteractiveTransition;
