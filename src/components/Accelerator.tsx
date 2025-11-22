import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Accelerator = () => {
    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden">
            <div className="w-full px-[80px]">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight tracking-wide">
                            Accelerator:
                            <br />
                            Collaborating With
                            <br />
                            Startups.
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-xl">
                            At Colab, we're not just investing in companies, we're shaping the future. By collaborating with forward thinking startups, we aim to create smarter, more personalized solutions that improve lives.
                        </p>

                        <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-10 py-4 font-bold text-lg transition-all duration-300 flex items-center gap-2 group">
                            Get in touch
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Image Container with Grayscale and Overlay */}
                        <div className="relative rounded-lg overflow-hidden max-h-[700px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />

                            {/* Green Glow Effect to mimic the arrows' vibe */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/20 rounded-full blur-[100px] z-20" />

                            <img
                                src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Vision_Image.jpg?v=1738913950"
                                alt="Team Collaboration"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Accelerator;
