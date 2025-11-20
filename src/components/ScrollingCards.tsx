import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ventures = [
  {
    tagline: "AI Innovation",
    title: "Artificial Intelligence",
    excerpt: "Sustainable and scalable ecosystem that empowers individuals, businesses, and institutions to make better, faster, and more informed decisions.",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/search-engine-optimization-digital-marketing-proc-2024-12-07-03-49-59-utc.jpg?v=1763195283",
  },
  {
    tagline: "Financial Technology",
    title: "FinTech",
    excerpt: "Unlocking India's Next Billion Users Through Accessible Digital Finance with revolutionary payment platforms.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
  },
  {
    tagline: "Gaming Excellence",
    title: "Esports",
    excerpt: "A player-first ecosystem enabling athletes to compete, grow, and achieve global recognition in competitive gaming.",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-11-04_170025.png?v=1762255837",
  },
  {
    tagline: "Sports Innovation",
    title: "Tech Sports",
    excerpt: "Creating Value Through Sports IP Ownership, Infrastructure Modernization, and Athlete Talent Development.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
  },
  {
    tagline: "Aerial Systems",
    title: "Drone Technology",
    excerpt: "AI-powered autonomous drones with multi-sector applications in surveillance, security, and agriculture.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80",
  },
];

export default function ScrollingCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".c-card");
      const contents = gsap.utils.toArray<HTMLElement>(".c-card-content");
      const lastCardIndex = cards.length - 1;

      const lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: "center center",
      });

      cards.forEach((card, index) => {
        const scaleValue = index === lastCardIndex ? 1 : 0.9;
        const content = contents[index];

        // Card scale animation
        const scaleAnim = gsap.to(card, {
          scale: scaleValue,
          transformOrigin: "center top",
        });

        // Pin the card
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: () => lastCardST.start,
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          animation: scaleAnim,
          toggleActions: "restart none none reverse",
        });

        // Content animation - show only when card is centered
        const slideFrom = index % 4 < 2 ? -80 : 80;
        
        // Animate content when card reaches center
        gsap.fromTo(content,
          { opacity: 0, x: slideFrom },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: card,
              start: "center center+=20%",
              end: "center center",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-background">
      <section>
        <header className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-primary font-bold uppercase tracking-wider mb-4">Our Ventures</p>
          <h1 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Scroll Through Innovation
            </span>
          </h1>
          <div className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore our diverse portfolio of ventures spanning AI, FinTech, Esports, and cutting-edge technology platforms.
          </div>
        </header>

        <div className="l-cards w-full px-4 md:px-8">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className="c-card relative mt-5 w-full min-h-[90vh] overflow-hidden"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0">
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Overlay */}
              <div className="c-card-content relative z-10 h-full flex items-center">
                <div className={`w-full px-8 md:px-16 lg:px-24 ${
                  index % 4 < 2 ? 'ml-auto' : 'mr-auto'
                }`}>
                  <div className={`max-w-2xl ${
                    index % 4 < 2 ? 'ml-auto text-right' : 'mr-auto text-left'
                  }`}>
                    <h1 
                      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                      style={{ 
                        fontFamily: "'Aloevera Display', serif", 
                        letterSpacing: '2.1px',
                        textShadow: '0 2px 20px rgba(0,0,0,0.8)'
                      }}
                    >
                      {venture.title}
                    </h1>
                    <div className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                         style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
                    >
                      {venture.excerpt}
                    </div>
                    <div className={index % 4 < 2 ? 'flex justify-end' : ''}>
                      <a
                        href="#"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-2xl transition-all hover:scale-105"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-20" />
      </section>
    </div>
  );
}
