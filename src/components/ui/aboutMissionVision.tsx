import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <>
      {/* OUR MISSION */}
      <section className="relative bg-[#F7F7F7] py-20 md:py-[172px] text-center">
        <div className="container relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-19px tracking-widest text-gray-500 uppercase mb-6 font-display"
          >
            Our Mission
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 font-display"
          >
            To develop scalable technology platforms across high-growth
            industries and deliver sustainable long-term value through
            technology-led transformation.
          </motion.h2>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="py-20 md:py-32 bg-white dark:bg-[#121212]">
        <div className="container">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <img
              src="https://plcorp-cdn.pinelabs.com/2025/07/Image-scaled.webp"
              alt="Digital commerce experience"
              className="w-full h-[180px] md:h-[580px] object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-10 md:mt-20 max-w-5xl"
          >
            <p className="text-19px tracking-widest text-gray-500 uppercase mb-6 font-display">
              Our Vision
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 dark:text-white font-display">
              To be a future-ready, <br />    
              multi-sector technology conglomerate driving digital and <br />
              industrial innovation at scale.
            </h2>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
