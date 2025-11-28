import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Accelerator = () => {
    return (
        <section className="bg-white dark:bg-background py-16 md:py-32 overflow-hidden transition-colors duration-300">
            <div className="w-full px-4 md:px-[80px]">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 md:mb-8 leading-tight tracking-wide transition-colors duration-300">
                            Accelerator:
                            <br />
                            Powering India’s Next
                            <br />
                            Wave of Tech Innovation.
                        </h2>

                        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-xl transition-colors duration-300">
                            At Colab, we’re not just supporting startups; we’re building the future with them. Through our accelerator program, we collaborate with bold, early-stage technology ventures across India, helping them turn powerful ideas into scalable, real-world solutions.
                        </p>

                        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 md:px-10 md:py-4 font-bold text-base md:text-lg transition-all duration-300 flex items-center gap-2 group">
                            Get in touch
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative mt-8 lg:mt-0"
                    >
                        {/* Image Container with Grayscale and Overlay */}
                        <div className="relative overflow-hidden h-[400px] md:h-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />

                            {/* Green Glow Effect to mimic the arrows' vibe */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 md:w-64 md:h-64 bg-green-500/20 rounded-full blur-[60px] md:blur-[100px] z-20" />

                            <img
                                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_xoqb7zxoqb7zxoqb.png?v=1764070390"
                                alt="Team Collaboration"
                                className="w-full h-full object-contain md:object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Accelerator;
