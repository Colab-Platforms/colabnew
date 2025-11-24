import { MoonStar, SunMedium } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = ({ className = "" }: { className?: string }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className={`p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-md border border-white/10
                ${theme === 'dark'
                    ? 'bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white shadow-orange-500/20'
                    : 'bg-white/80 text-gray-800 shadow-black/5'
                } ${className}`}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <SunMedium className="w-5 h-5" />
            ) : (
                <MoonStar className="w-5 h-5" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
