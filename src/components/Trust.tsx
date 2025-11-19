import { Shield, Award, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption"
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Recognized by Gartner and Forrester"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "100+ AI specialists and researchers"
  },
  {
    icon: Zap,
    title: "Proven Results",
    description: "Average 3x ROI in first year"
  }
];

const Trust = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-6xl mb-6">
            Trusted by Industry
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the world's most innovative companies in their AI transformation journey
          </p>
        </div>
        
        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
   
      </div>
    </section>
  );
};

export default Trust;
