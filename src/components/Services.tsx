import { Brain, Shield, Target, Cpu, Gamepad2, Plane } from "lucide-react";
import { motion } from "framer-motion";

const ventures = [
  {
    icon: Brain,
    title: "Colab Intelligence",
    description: "Enterprise AI and machine learning solutions for defense, intelligence, and high-stakes decision-making.",
    ecosystem: "Tech",
    animation: "neural"
  },
  {
    icon: Plane,
    title: "Aegis Drones",
    description: "Autonomous aerial systems for surveillance, reconnaissance, and mission-critical operations.",
    ecosystem: "Tech",
    animation: "fly"
  },
  {
    icon: Shield,
    title: "Defense Systems",
    description: "Next-generation security and defense technologies for government and enterprise clients.",
    ecosystem: "Tech",
    animation: "shield"
  },
  {
    icon: Target,
    title: "Elite Sports Academy",
    description: "World-class training facilities and coaching programs developing the next generation of champions.",
    ecosystem: "Sports",
    animation: "target"
  },
  {
    icon: Gamepad2,
    title: "Colab Esports",
    description: "Professional esports organization, tournament platforms, and digital competition infrastructure.",
    ecosystem: "Sports",
    animation: "game"
  },
  {
    icon: Cpu,
    title: "Sports Tech Innovation",
    description: "Performance analytics, wearable technology, and data-driven athlete development systems.",
    ecosystem: "Sports",
    animation: "data"
  }
];

const Services = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container relative z-10 px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
              Our Portfolio
            </span>
          </div>
          <h2 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ventures</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio of companies driving innovation across sports and technology.
          </p>
        </div>

        {/* Ventures grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ventures.map((venture, index) => {
            // Get animation config for each venture
            const getIconAnimation = () => {
              switch(venture.animation) {
                case "neural":
                  return {
                    scale: [1, 1.15, 1],
                    filter: [
                      "drop-shadow(0 0 0px currentColor)",
                      "drop-shadow(0 0 8px currentColor)",
                      "drop-shadow(0 0 0px currentColor)"
                    ],
                  };
                case "fly":
                  return {
                    y: [0, -6, 0],
                    x: [0, 3, 0, -3, 0],
                    rotate: [0, 3, 0, -3, 0],
                  };
                case "shield":
                  return {
                    scale: [1, 1.1, 1],
                    filter: [
                      "drop-shadow(0 0 0px currentColor)",
                      "drop-shadow(0 0 10px currentColor)",
                      "drop-shadow(0 0 0px currentColor)"
                    ],
                  };
                case "target":
                  return {
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0, -5, 0],
                  };
                case "game":
                  return {
                    rotate: [0, -2, 2, -2, 2, 0],
                    scale: [1, 1.05, 1, 1.05, 1],
                  };
                case "data":
                  return {
                    scale: [1, 1.1, 1.05, 1.1, 1],
                    opacity: [1, 0.8, 1, 0.8, 1],
                  };
                default:
                  return {};
              }
            };

            const getAnimationDuration = () => {
              switch(venture.animation) {
                case "fly": return 4;
                case "game": return 0.8;
                default: return 2;
              }
            };

            return (
              <motion.div 
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  venture.ecosystem === "Tech" 
                    ? "bg-gradient-to-br from-secondary/20 to-transparent" 
                    : "bg-gradient-to-br from-primary/20 to-transparent"
                }`} />
                
                {/* Card content */}
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 h-full">
                  {/* Ecosystem badge */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      venture.ecosystem === "Tech"
                        ? "bg-secondary/10 text-secondary border border-secondary/20"
                        : "bg-primary/10 text-primary border border-primary/20"
                    }`}>
                      {venture.ecosystem}
                    </span>
                  </motion.div>
                  
                  {/* Animated Icon Container */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 relative ${
                      venture.ecosystem === "Tech"
                        ? "bg-gradient-to-br from-secondary/20 to-secondary/10"
                        : "bg-gradient-to-br from-primary/20 to-primary/10"
                    }`}
                    whileHover={{ 
                      scale: 1.15,
                      rotateY: 10,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Pulsing glow behind icon */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl ${
                        venture.ecosystem === "Tech" ? "bg-secondary/20" : "bg-primary/20"
                      }`}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    
                    {/* Animated Icon */}
                    <motion.div
                      animate={getIconAnimation()}
                      transition={{
                        duration: getAnimationDuration(),
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <venture.icon className={`w-8 h-8 ${
                        venture.ecosystem === "Tech" ? "text-secondary" : "text-primary"
                      }`} />
                    </motion.div>
                  </motion.div>
                  
                  <h3 className="font-serif font-bold text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {venture.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {venture.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
