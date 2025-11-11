import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import AIIntelligence from "./pages/AIIntelligence";
import Sports from "./pages/Sports";
import Semiconductor from "./pages/Semiconductor";
import FinTech from "./pages/FinTech";
import Esports from "./pages/Esports";
import Drones from "./pages/Drones";
import SportsMarketplace from "./pages/SportsMarketplace";
import SportsContent from "./pages/SportsContent";
import SportsIP from "./pages/SportsIP";
import AthleteManagement from "./pages/AthleteManagement";
import SportsInfrastructure from "./pages/SportsInfrastructure";
import SportsAnalytics from "./pages/SportsAnalytics";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import InvestorRelations from "./pages/InvestorRelations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ai-intelligence" element={<AIIntelligence />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/semiconductor" element={<Semiconductor />} />
          <Route path="/fintech" element={<FinTech />} />
          <Route path="/esports" element={<Esports />} />
          <Route path="/drones" element={<Drones />} />
          
          {/* Sports Services Pages */}
          <Route path="/sports-marketplace" element={<SportsMarketplace />} />
          <Route path="/sports-content" element={<SportsContent />} />
          <Route path="/sports-ip" element={<SportsIP />} />
          <Route path="/athlete-management" element={<AthleteManagement />} />
          <Route path="/sports-infrastructure" element={<SportsInfrastructure />} />
          <Route path="/sports-analytics" element={<SportsAnalytics />} />
          
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Investor Relations */}
          <Route path="/investor-relations" element={<InvestorRelations />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
