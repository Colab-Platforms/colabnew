import { motion } from "framer-motion";

const AboutFuture = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24 border-b border-white/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto md:mx-0 text-left md:text-left"
        >
          <span className="text-xl md:text-2xl text-primary mb-4 md:mb-6 block tracking-wide font-medium">About Us</span>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-foreground mb-6 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tight">
            Technology That<br />Builds Nations.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Transforming high-potential industries with tech-driven solutions.
          </p>
          <a
            href="/about"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(127,1,255,0.3)] dark:shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(127,1,255,0.5)] dark:hover:shadow-[0_0_30px_rgba(255,69,0,0.5)]"
          >
            Explore Our Ecosystem
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutFuture;
