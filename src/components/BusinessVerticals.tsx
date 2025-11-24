import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const verticals = [
    {
        id: "ai",
        title: "Artificial Intelligence",
        shortTitle: "AI",
        description: "Sustainable and scalable ecosystem that empowers individuals, businesses, and institutions to make better, faster, and more informed decisions.",
        image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_skycraper.png?v=1763981802",
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
        title: "Sports",
        shortTitle: "Sports",
        description: "Creating Value Through Sports IP Ownership, Infrastructure Modernization, and Athlete Talent Development.",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2070",
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
        image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=2070",
        link: "#"
    },
    {
        id: "semiconductor",
        title: "Semiconductor",
        shortTitle: "Semiconductor",
        description: "Powering the digital age with high-performance semiconductors. We design and manufacture the chips that drive modern electronics, from smartphones to supercomputers.",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=2070",
        link: "#"
    },
];

const BusinessVerticals = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            {/* Mobile Filters - Above everything */}
            <div className="lg:hidden relative z-30 pt-4 px-4 bg-black">
                <div className="w-full overflow-x-auto pb-3 scrollbar-hide">
                    <div className="flex gap-2 pb-1">
                        {verticals.map((item, index) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setActiveIndex(index)}
                                className={`text-left py-2 px-4 rounded-full transition-all duration-300 group relative overflow-hidden whitespace-nowrap flex-shrink-0 ${index === activeIndex
                                    ? 'bg-white/20 backdrop-blur-xl border border-white/30'
                                    : 'bg-black/20 hover:bg-white/10'
                                    }`}
                            >
                                <div className="flex items-center gap-2 relative z-10">
                                    <span className={`text-base font-bold transition-all duration-300 ${index === activeIndex ? 'text-white' : 'text-white/80'}`}>
                                        {item.shortTitle}
                                    </span>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="relative min-h-[70vh] lg:min-h-screen w-full overflow-hidden bg-white text-white">
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
                            {/* Dark Gradient Overlay - Left to Right */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 lg:to-transparent" />
                            {/* Additional Dark Overlay for Better Readability */}
                            <div className="absolute inset-0 bg-black/20" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Main Content */}
                <div className="relative z-20 mx-auto px-4 md:px-12 lg:px-32 h-full flex items-center py-8 lg:py-20 max-w-[1800px]">
                    <div className="w-full">
                        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-32 xl:gap-48 items-start lg:items-center">

                            {/* Content */}
                            <div className="space-y-8 md:space-y-12 order-1 lg:order-1">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={verticals[activeIndex].id}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 30 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-6 md:space-y-10"
                                    >
                                        {/* Section Label */}
                                        <div className="flex items-center gap-3">
                                            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-white to-transparent" />
                                            <span className="text-sm md:text-sm font-bold text-white uppercase tracking-[0.3em]">
                                                Our Ventures
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-wide text-white">
                                            {verticals[activeIndex].title}
                                        </h2>

                                        {/* Description */}
                                        <p className="text-xl md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl">
                                            {verticals[activeIndex].description}
                                        </p>

                                        {/* CTA */}
                                        <motion.a
                                            href={verticals[activeIndex].link}
                                            whileHover={{ x: 10 }}
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

                            {/* Desktop Navigation List */}
                            <div className="hidden lg:block relative order-2 w-full">
                                {/* Decorative Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                                <div className="pl-12 space-y-3">
                                    {verticals.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => setActiveIndex(index)}
                                            onMouseEnter={() => setActiveIndex(index)}
                                            className={`w-full text-left py-6 px-8 rounded-2xl transition-all duration-300 group relative overflow-hidden ${index === activeIndex
                                                ? 'bg-white/10 backdrop-blur-xl'
                                                : 'hover:bg-white/5'
                                                }`}
                                        >
                                            {/* Active Indicator */}
                                            {index === activeIndex && (
                                                <motion.div
                                                    layoutId="activeBar"
                                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-white rounded-full"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}

                                            <div className="flex items-center justify-between relative z-10">
                                                <span className="text-2xl font-bold transition-all duration-300 text-white">
                                                    {item.shortTitle}
                                                </span>
                                                <ArrowRight className={`w-5 h-5 transition-all duration-300 ${index === activeIndex
                                                    ? 'text-white translate-x-2'
                                                    : 'text-white/20 group-hover:text-white/40 group-hover:translate-x-1'
                                                    }`} />
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BusinessVerticals;
