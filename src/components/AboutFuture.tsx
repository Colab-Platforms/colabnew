import { motion } from "framer-motion";

const AboutFuture = () => {
    return (
        <section className="w-full bg-background py-24 px-6 border-b border-white/10">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl"
                >
                    <span className="text-xl md:text-2xl text-primary mb-6 block tracking-wide font-medium">About Us</span>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-10 leading-[0.9] tracking-tight">
                        Ready To Build<br />Your Future?
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                        Partner with a conglomerate that operates at the intersection of excellence and innovation.
                    </p>
                    <button className="bg-gradient-to-r from-[#7f01ff] to-[#2b33da] text-white px-10 py-5 text-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(127,1,255,0.3)] hover:shadow-[0_0_30px_rgba(127,1,255,0.5)]">
                        Explore Our Ecosystem
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutFuture;
