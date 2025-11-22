// BSE Stock Widget Component
// Direct links to live stock data (iframe blocked by CSP)

import { ExternalLink, TrendingUp, BarChart3 } from 'lucide-react';

const BSEStockWidget = () => {
  return (
    <div className="w-full space-y-4">
      {/* Quick Access Buttons */}
      <div className="space-y-3">
        {/* BSE India */}
        <a
          href="https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colabplat/542866/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl hover:from-primary/30 hover:to-secondary/30 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">BSE India</p>
              <p className="text-xs text-muted-foreground">Live Price & Charts</p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
        </a>

        {/* NSE India */}
        <a
          href="https://www.nseindia.com/get-quotes/equity?symbol=COLAB"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 rounded-xl hover:from-secondary/30 hover:to-primary/30 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">NSE India</p>
              <p className="text-xs text-muted-foreground">Real-time Quotes</p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Screener */}
        <a
          href="https://www.screener.in/company/542866/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-black/30 border border-white/10 rounded-xl hover:bg-black/40 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Screener</p>
              <p className="text-xs text-muted-foreground">Detailed Analysis</p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Stock Info */}
      <div className="bg-black/30 rounded-xl p-4 text-center">
        <p className="text-xs text-muted-foreground mb-2">Colab Platforms Ltd</p>
        <div className="flex items-center justify-center gap-4 text-xs">
          <span className="text-foreground">BSE: <span className="font-bold text-primary">542866</span></span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">ISIN: INE317W01030</p>
      </div>
    </div>
  );
};

export default BSEStockWidget;
