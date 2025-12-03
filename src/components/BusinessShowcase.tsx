import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BusinessShowcase.css';

interface BusinessCategory {
    id: string;
    name: string;
    image: string;
    mainImage: string;
    tags: string[];
}

const businessCategories: BusinessCategory[] = [
    {
        id: 'esports',
        name: 'Esports',
        image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/image-gen_5.png?v=1763981804',
        mainImage: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/image-gen_5.png?v=1763981804',
        tags: ['Gaming Tournaments', 'Professional Teams', 'Streaming Platforms', 'Gaming Arena']
    },
    {
        id: 'ai',
        name: 'Artificial Intelligence',
        image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_skycraper_1.jpg?v=1764155867',
        mainImage: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_skycraper_1.jpg?v=1764155867',
        tags: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing']
    },
    {
        id: 'semiconductor',
        name: 'Semiconductor',
        image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/AI_chip_2ea67124-1a98-48ff-84af-84a1ec062c97.jpg?v=1764593148',
        mainImage: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/AI_chip_2ea67124-1a98-48ff-84af-84a1ec062c97.jpg?v=1764593148',
        tags: ['Chip Design', 'Fabrication', 'IoT Solutions', 'Advanced Materials']
    },
    {
        id: 'drone',
        name: 'Drone',
        image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone.png?v=1764156328',
        mainImage: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone.png?v=1764156328',
        tags: ['Aerial Surveillance', 'Delivery Systems', 'Agricultural Drones', 'Defense Applications']
    },
    {
        id: 'sportstech',
        name: 'Sports Tech',
        image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Cricket_2_82458840-b86a-4a65-b655-4ae3a99faafa.jpg?v=1764593070',
        mainImage: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Cricket_2_82458840-b86a-4a65-b655-4ae3a99faafa.jpg?v=1764593070',
        tags: ['Performance Analytics', 'Wearable Technology', 'Virtual Training', 'Fan Engagement']
    },
    {
        id: 'fintech',
        name: 'FinTech',
        image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/image-gen_6.png?v=1763981803',
        mainImage: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/image-gen_6.png?v=1763981803',
        tags: ['Digital Payments', 'Blockchain', 'Cryptocurrency', 'Financial Analytics']
    }
];

const BusinessShowcase: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'verticals' | 'listed'>('verticals');
    const [selectedCategory, setSelectedCategory] = useState<BusinessCategory>(businessCategories[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleCategoryClick = (category: BusinessCategory) => {
        if (category.id !== selectedCategory.id) {
            setIsTransitioning(true);
            setTimeout(() => {
                setSelectedCategory(category);
                setIsTransitioning(false);
            }, 300);
        }
    };

    // Auto-rotate categories every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setSelectedCategory((prevCategory) => {
                    const currentIndex = businessCategories.findIndex(cat => cat.id === prevCategory.id);
                    const nextIndex = (currentIndex + 1) % businessCategories.length;
                    return businessCategories[nextIndex];
                });
                setIsTransitioning(false);
            }, 300);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="business-showcase bg-white dark:bg-black">
            <div className="showcase-container">
                {/* Header */}
                <div className="showcase-header">
                    <motion.h1 
                        className="showcase-title text-black dark:text-white"
                        initial={{ opacity: 0, y: -50, letterSpacing: '0.5em' }}
                        whileInView={{ opacity: 1, y: 0, letterSpacing: '0.05em' }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        VERTICALS
                    </motion.h1>
                </div>

                {/* Content Grid */}
                <div className="showcase-content">
                    {/* Mobile Slider */}
                    <div className="md:hidden relative h-[500px] w-full mb-8 block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory.id}
                                className="absolute inset-0 w-full h-full overflow-hidden shadow-2xl"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <img
                                    src={selectedCategory.image}
                                    alt={selectedCategory.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        {selectedCategory.name}
                                    </h3>
                                    <div className="flex items-center text-[#7f01ff] dark:text-orange-500 font-bold">
                                        <span>Explore Vertical</span>
                                        <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Indicators */}
                        <div className="absolute bottom-4 right-8 flex gap-2 z-10">
                            {businessCategories.map((cat) => (
                                <div
                                    key={cat.id}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${cat.id === selectedCategory.id ? 'w-8 bg-[#7f01ff] dark:bg-gradient-to-r dark:from-orange-500 dark:to-red-600' : 'w-2 bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Left Grid - Category Cards */}
                    <div className="category-grid hidden md:grid">
                        {businessCategories.map((category, index) => (
                            <div
                                key={category.id}
                                className={`category-card ${selectedCategory.id === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="category-image-wrapper">
                                    <img src={category.image} alt={category.name} className="category-image" />
                                    <div className="category-overlay"></div>
                                </div>
                                <div className="category-content">
                                    <h3 className="category-name">{category.name}</h3>
                                    <svg className="category-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Main Featured Image */}
                    <div className="featured-section hidden md:block">
                        <div className={`featured-image-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
                            <img
                                src={selectedCategory.mainImage}
                                alt={selectedCategory.name}
                                className="featured-image"
                            />
                            <div className="featured-overlay"></div>

                            {/* Explore More Button */}
                            <button className="explore-button bg-gradient-to-br from-[#7f01ff] to-[#2b33da] dark:from-orange-500 dark:to-red-600">
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
        </div>
    );
};

export default BusinessShowcase;
