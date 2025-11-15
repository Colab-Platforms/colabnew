import { TrendingUp, FileText, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InvestorRelations = () => {
  const news = [
    {
      date: "Nov 06, 2025",
      title: "AI-Powered Search Engine Launch",
      type: "Press Release",
      link: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Press_Release_for_AI_powered_Search_Engine_06.11.2025.pdf?v=1762412961"
    },
    {
      date: "Nov 12, 2025",
      title: "Q2 Financial Performance Report",
      type: "Press Release",
      link: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/PR-_Q2_financial_Performance_30.09.2025_1.pdf?v=1763024349"
    },
    {
      date: "Oct 24, 2025",
      title: "Colab Semiconductor Private Limited",
      type: "Press Release",
      link: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Covering_letter_PR_24.10.2025_upload.pdf?v=1761302911"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
      <div className="container relative z-10 px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
              For Investors
            </span>
          </div>
          <h2 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
            Conglomerate
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparent reporting, consistent growth, and long-term value creation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Investor Relations */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-3xl p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-3xl text-foreground">
                  Investor Relations
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Access comprehensive financial reports, quarterly earnings, and strategic insights 
                into our diversified portfolio.
              </p>

              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-primary/30 hover:bg-primary/10"
                  onClick={() => window.location.href = '/investor-relations'}
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Annual Reports
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-primary/30 hover:bg-primary/10"
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Earnings Calendar
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-primary/30 hover:bg-primary/10"
                  onClick={() => window.open('https://www.screener.in/company/COLABPLAT/', '_blank')}
                >
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Stock Information
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-3xl p-10">
              <h3 className="font-serif font-bold text-3xl text-foreground mb-8">
                Latest News
              </h3>
              
              <div className="space-y-6">
                {news.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/item pb-6 border-b border-border/50 last:border-0 last:pb-0 cursor-pointer hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                        {item.type}
                      </span>
                    </div>
                    <h4 className="text-foreground font-semibold group-hover/item:text-primary transition-colors flex items-center gap-2">
                      {item.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </h4>
                  </a>
                ))}
              </div>

              <Button 
                variant="outline"
                className="w-full mt-8 border-secondary/30 hover:bg-secondary/10"
                onClick={() => window.location.href = '/investor-relations'}
              >
                View All News
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorRelations;
