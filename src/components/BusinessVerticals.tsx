import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const verticals = [
    {
        id: "ai",
        title: "Artificial Intelligence",
        shortTitle: "AI",
        description: "Pioneering the future with advanced AI solutions that transform industries and enhance human capabilities. We leverage machine learning and neural networks to solve complex problems.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2070",
        link: "#"
    },
    {
        id: "fintech",
        title: "FinTech",
        shortTitle: "FinTech",
        description: "Revolutionizing financial services through cutting-edge technology. From blockchain to digital banking, we are reshaping how the world manages, invests, and transacts money.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
        link: "#"
    },
    {
        id: "esports",
        title: "Esports",
        shortTitle: "Esports",
        description: "Elevating competitive gaming to new heights. We support the esports ecosystem with world-class tournaments, team management, and fan engagement platforms.",
        image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80&w=2070",
        link: "#"
    },
    {
        id: "tech-sports",
        title: "Tech Sports",
        shortTitle: "Sports Tech",
        description: "Merging athleticism with innovation. Our sports tech solutions improve athlete performance, fan experiences, and game analytics using state-of-the-art sensors and data.",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2070",
        link: "#"
    },
    {
        id: "drone",
        title: "Drone Technology",
        shortTitle: "Drones",
        description: "Unlocking the skies with next-generation drone technology. From logistics to surveillance, our aerial solutions offer precision, efficiency, and new perspectives.",
        image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=2070",
        link: "#"
    },
    {
        id: "semiconductor",
        title: "Semiconductor",
        shortTitle: "Chips",
        description: "Powering the digital age with high-performance semiconductors. We design and manufacture the chips that drive modern electronics, from smartphones to supercomputers.",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=2070",
        link: "#"
    },
    {
        id: "colab",
        title: "Colab",
        shortTitle: "Colab",
        description: "Building the future through strategic investments and partnerships. We bring together innovation, technology, and talent to create transformative solutions across multiple industries.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
        link: "#"
    }
];

const BusinessVerticals = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white text-white">
            {/* Background with Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    <motion.div
                        key={verticals[activeIndex].id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={verticals[activeIndex].image}
                            alt={verticals[activeIndex].title}
                            className="w-full h-full object-cover"
                        />
                        {/* Dark Gradient Overlay - Left to Right */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                        {/* Additional Dark Overlay for Better Readability */}
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Main Content */}
            <div className="relative z-20 mx-auto px-8 lg:px-32 min-h-screen flex items-center py-20 max-w-[1800px]">
                <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-48 lg:gap-96 items-center">

                        {/* Left: Content */}
                        <div className="space-y-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={verticals[activeIndex].id}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-12"
                                >
                                    {/* Section Label */}
                                    <div className="flex items-center gap-3">
                                        <div className="h-px w-12 bg-gradient-to-r from-white to-transparent" />
                                        <span className="text-sm font-bold text-white uppercase tracking-[0.3em]">
                                            Our Ventures
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-wide text-white">
                                        {verticals[activeIndex].title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-xl md:text-2xl text-white leading-relaxed max-w-xl">
                                        {verticals[activeIndex].description}
                                    </p>

                                    {/* CTA */}
                                    <motion.a
                                        href={verticals[activeIndex].link}
                                        whileHover={{ x: 10 }}
                                        className="inline-flex items-center gap-4 text-white font-bold text-lg group"
                                    >
                                        <span className="text-white">
                                            Explore {verticals[activeIndex].shortTitle}
                                        </span>
                                        <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white flex items-center justify-center group-hover:bg-white/30 transition-all">
                                            <ArrowRight className="w-5 h-5 text-white" />
                                        </div>
                                    </motion.a>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right: Navigation List */}
                        <div className="relative">
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
                                            {/* Title - White Text */}
                                            <span className="text-xl md:text-2xl font-bold transition-all duration-300 text-white">
                                                {item.title}
                                            </span>

                                            {/* Arrow */}
                                            <ArrowRight className={`w-5 h-5 transition-all duration-300 ${index === activeIndex
                                                ? 'text-white translate-x-2'
                                                : 'text-white/20 group-hover:text-white/40 group-hover:translate-x-1'
                                                }`} />
                                        </div>

                                        {/* Hover Gradient */}
                                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessVerticals;
