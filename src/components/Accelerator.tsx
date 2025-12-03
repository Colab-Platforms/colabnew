import { ArrowUpRight } from "lucide-react";

const Accelerator = () => {
    return (
        <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden group cursor-pointer py-12 md:py-0">
            {/* Full Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Romanian_mergers_and_acquisitions_M_A_reached_an_estimated_total_value_of_USD_4_1bn.jpg?v=1764741328"
                    alt="Accelerator Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay - darker on hover, always visible on mobile */}
                <div className="absolute inset-0 bg-black/60 md:bg-black/40 md:group-hover:bg-black/70 transition-all duration-500" />
            </div>

            {/* Content - Always visible on mobile, hover on desktop */}
            <div className="relative z-10 text-center max-w-4xl px-4 md:px-8 lg:px-[50px] opacity-100 scale-100 md:opacity-0 md:scale-75 md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-500 ease-out pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 lg:mb-8 leading-tight">
                    Accelerator:
                    <br />
                    Powering India's Next
                    <br />
                    Wave of Tech Innovation.
                </h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 lg:mb-10 leading-relaxed">
                    At Colab, we're not just supporting startups; we're building the future with them. Through our accelerator program, we collaborate with bold, early-stage technology ventures across India, helping them turn powerful ideas into scalable, real-world solutions.
                </p>

                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 md:px-8 md:py-4 lg:px-10 font-bold text-base md:text-lg transition-all duration-300 inline-flex items-center gap-2 group/btn">
                    Get in touch
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};

export default Accelerator;
