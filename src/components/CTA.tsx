import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/b0377f723848466d9662436e2eabdc99.mp4" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute  from-background/95 via-background/90 to-background/85" />
      </div>
      
      {/* Dramatic gradient overlay */}
      <div className="absolute  from-primary/20 via-secondary/10 to-transparent" />
      <div className="absolute  bg-gradient-mesh opacity-30" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
              Ready to Transform?
            </span>
          </div>
          
          <h2 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            Ready to Build
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Future?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Partner with a conglomerate that operates at the intersection of excellence and innovation.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8"
            >
              Explore Our Ecosystems
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 text-lg px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Schedule a Meeting
            </Button>
          </div>
    
        </div>
      </div>
    </section>
  );
};

export default CTA;
