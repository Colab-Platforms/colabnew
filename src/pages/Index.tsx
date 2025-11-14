import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import VideoShowcase from "@/components/VideoShowcase";
import TwoPillars from "@/components/TwoPillars";
import Services from "@/components/Services";
import BlogSection from "@/components/BlogSection";
import InvestorRelations from "@/components/InvestorRelations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AnimatedSection = ({ 
  children, 
  direction = "left" 
}: { 
  children: React.ReactNode; 
  direction?: "left" | "right" 
}) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0"
          : direction === "left"
          ? "opacity-0 -translate-x-20"
          : "opacity-0 translate-x-20"
      }`}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />
      <Hero />
         <AnimatedSection direction="left">
        <Services />
      </AnimatedSection>
      <AnimatedSection direction="left">
        <Mission />
      </AnimatedSection>
      <AnimatedSection direction="right">
        <VideoShowcase />
      </AnimatedSection>
      <AnimatedSection direction="left">
        <TwoPillars />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <BlogSection />
      </AnimatedSection>
   
      <AnimatedSection direction="right">
        <InvestorRelations />
      </AnimatedSection>
      <AnimatedSection direction="right">
        <CTA />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
