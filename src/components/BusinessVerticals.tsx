import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const verticals = [
    {
        id: "ai",
        title: "Artificial Intelligence",
        shortTitle: "AI",
        description: "Sustainable and scalable ecosystem that empowers individuals, businesses, and institutions to make better, faster, and more informed decisions.",
        image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_skycraper_1.jpg?v=1764155867",
        link: "#"
    },
    {
        id: "fintech",
        title: "FinTech",
        shortTitle: "FinTech",
        description: "Unlocking India's Next Billion Users Through Accessible Digital Finance.",
        image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/image-gen_6.png?v=1763981803",
        link: "#"
    },
    {
        id: "tech-sports",
        title: "Sports Tech",
        shortTitle: "Sports Tech",
        description: "Creating Value Through Sports IP Ownership, Infrastructure Modernization, and Athlete Talent Development.",
        image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Cricket_2_82458840-b86a-4a65-b655-4ae3a99faafa.jpg?v=1764593070",
        link: "#"
    },
    {
        id: "esports",
        title: "Esports",
        shortTitle: "Esports",
        description: "A player-first ecosystem enabling athletes to compete, grow, and achieve global recognition.",
        image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/image-gen_5.png?v=1763981804",
        link: "#"
    },
    {
        id: "drone",
        title: "Drones",
        shortTitle: "Drones",
        description: "AI-powered autonomous drones with multi-sector applications in surveillance, security, and agriculture.",
        image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone.png?v=1764156328",
        link: "#"
    },
    {
        id: "semiconductor",
        title: "Semiconductor",
        shortTitle: "Semiconductor",
        description: "Powering the digital age with high-performance semiconductors. We design and manufacture the chips that drive modern electronics, from smartphones to supercomputers.",
        image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/AI_chip_2ea67124-1a98-48ff-84af-84a1ec062c97.jpg?v=1764593148",
        link: "#"
    },
];

const BusinessVerticals = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            // Only on desktop (screen width > 1024px)
            if (window.innerWidth <= 1024) return;

            // Check if section is fully visible
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Only activate if ENTIRE section is fully visible in viewport
            const isFullyVisible = rect.top >= 0 && rect.bottom <= viewportHeight;

            if (!isFullyVisible) return;

            // Prevent default scroll while in section
            if (activeIndex > 0 || (activeIndex === 0 && e.deltaY > 0)) {
                if (activeIndex < verticals.length - 1 || e.deltaY < 0) {
                    e.preventDefault();
                }
            }

            // Debounce scroll
            if (isScrolling) return;

            setIsScrolling(true);

            if (e.deltaY > 0) {
                // Scroll down - next item
                if (activeIndex < verticals.length - 1) {
                    setActiveIndex(prev => prev + 1);
                }
            } else {
                // Scroll up - previous item
                if (activeIndex > 0) {
                    setActiveIndex(prev => prev - 1);
                }
            }

            setTimeout(() => setIsScrolling(false), 800);
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [activeIndex, isScrolling]);

    return (
        <section ref={sectionRef} className="relative min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden bg-white text-white">
            {/* Background with Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    <motion.div
                        key={verticals[activeIndex].id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={verticals[activeIndex].image}
                            alt={verticals[activeIndex].title}
                            className="w-full h-full object-cover"
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Filters - Horizontal Slider for Mobile, Fixed for Desktop */}
            <div className="absolute top-0 left-0 right-0 z-40 flex justify-center px-4">
                <div className="w-full lg:w-auto overflow-x-auto scrollbar-hide">
                    <div className="inline-flex gap-3 lg:gap-4 bg-white/20 backdrop-blur-xl px-4 lg:px-6 py-2 lg:py-3 border border-white/30 shadow-lg mb-20 min-w-max lg:min-w-0">
                        {verticals.map((item, index) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                onClick={() => setActiveIndex(index)}
                                className={`relative px-3 lg:px-5 py-1.5 lg:py-2 transition-all duration-300 ${index === activeIndex ? 'scale-110' : 'hover:scale-105'
                                    }`}
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <span className={`text-sm lg:text-[1.2rem] font-semibold text-white uppercase tracking-wider whitespace-nowrap ${index === activeIndex ? 'drop-shadow-lg' : 'opacity-80'
                                        }`}>
                                        {item.shortTitle}
                                    </span>

                                    {/* Active indicator dot */}
                                    {index === activeIndex && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-1 lg:w-1.5 h-1 lg:h-1.5 rounded-full bg-white shadow-lg"
                                        />
                                    )}
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content - Right Aligned */}
            <div className="relative z-20 mx-auto px-4 md:px-12 lg:px-32 h-full flex items-center justify-center lg:justify-end max-w-[1800px]" style={{ marginTop: '200px' }}>
                <div className="w-full max-w-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={verticals[activeIndex].id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4 md:space-y-6 lg:space-y-10 text-center lg:text-right"
                        >
                            {/* Section Label */}
                            <div className="flex items-center justify-center lg:justify-end gap-3">
                                <span className="text-xs md:text-sm font-bold text-white uppercase tracking-[0.2em] lg:tracking-[0.3em]">
                                    Our Ventures
                                </span>
                                <div className="h-px w-8 md:w-12 bg-gradient-to-r from-white to-transparent" />
                            </div>

                            {/* Title */}
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-none tracking-wide text-white">
                                {verticals[activeIndex].title}
                            </h2>

                            {/* Description */}
                            <p className="text-base md:text-lg lg:text-2xl text-white/90 leading-relaxed">
                                {verticals[activeIndex].description}
                            </p>

                            {/* CTA */}
                            <motion.a
                                href={verticals[activeIndex].link}
                                whileHover={{ scale: 1.05 }}
                                className="inline-flex items-center gap-4 text-white font-bold text-lg md:text-lg group"
                            >
                                <span className="text-white">
                                    Explore {verticals[activeIndex].shortTitle}
                                </span>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 border-2 border-white flex items-center justify-center group-hover:bg-white/30 transition-all">
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                            </motion.a>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default BusinessVerticals;
