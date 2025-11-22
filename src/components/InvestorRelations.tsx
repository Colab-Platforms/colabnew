import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, TrendingUp, TrendingDown, ChevronRight, Download, ChevronDown } from 'lucide-react';
import { fetchBSEStockData, formatCurrency, formatIndianNumber, StockData } from '../services/bseService';
import { fetchBSECompliance, formatDisplayDate, ComplianceDocument } from '../services/bseComplianceService';

const InvestorRelations = () => {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [complianceDocs, setComplianceDocs] = useState<ComplianceDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Fetch stock data from TwelveData API
        console.log('🔄 Fetching stock data from TwelveData API...');
        const stock = await fetchBSEStockData();
        console.log('📊 Stock data received:', stock);
        setStockData(stock);
        
        // Fetch compliance documents
        console.log('🔄 Fetching compliance documents...');
        const docs = await fetchBSECompliance();
        console.log('📄 Compliance docs loaded:', docs.length);
        setComplianceDocs(docs.slice(0, 5));
      } catch (error) {
        console.error('❌ Error loading investor data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    
    // Refresh every 5 minutes (to match cache duration)
    const interval = setInterval(loadData, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 1.5px, transparent 1.5px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        {/* Section header */}
        <div className="container mx-auto px-6 text-center max-w-4xl mb-20">
          <p className="text-primary font-medium text-lg mb-4 tracking-wide uppercase">
            For Investors
          </p>
          <h2 className="font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
            <span className="block text-foreground">Conglomerate</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparent Reporting, Consistent Growth, And Long-Term Value Creation.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="container mx-auto px-6 md:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left: BSE Compliance Documents */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-foreground">BSE Compliance</h3>
                <a
                  href="/bse-compliance"
                  className="text-primary hover:text-secondary transition-colors text-sm font-semibold flex items-center gap-1"
                >
                  View All
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Documents List */}
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              ) : complianceDocs.length > 0 ? (
                <div className="space-y-4">
                  {complianceDocs.map((doc) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-[#222222] hover:bg-[#2a2a2a] transition-all duration-300 p-6 rounded-xl border border-white/5 hover:border-primary/30 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">
                              {doc.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {formatDisplayDate(doc.date)}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {doc.subject}
                          </h4>
                          {doc.description && (
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {doc.description}
                            </p>
                          )}
                        </div>
                        {doc.pdfUrl && (
                          <a
                            href={doc.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                          >
                            <Download className="w-4 h-4 text-primary" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">No compliance documents available</p>
                </div>
              )}

              {/* View All Button */}
              <a
                href="/bse-compliance"
                className="block w-full py-4 bg-primary hover:bg-secondary text-white font-bold text-center rounded-xl transition-all duration-300 hover:scale-105"
              >
                View All Compliance Documents
              </a>
            </motion.div>

            {/* Right: Stock Data & Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Stock Price Card */}
              {stockData && stockData.currentPrice > 0 && (
                <div className="bg-gradient-to-br from-[#222222] to-[#1a1a1a] p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{stockData.symbol}</h3>
                      <p className="text-xs text-muted-foreground">Colab Platforms Ltd</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      stockData.status === 'open' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {stockData.status === 'open' ? 'LIVE' : 'CLOSED'}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-black text-foreground">
                      {formatCurrency(stockData.currentPrice)}
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-semibold ${
                      stockData.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stockData.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span>
                        {stockData.change >= 0 ? '+' : ''}{stockData.change.toFixed(2)} 
                        ({stockData.changePercent >= 0 ? '+' : ''}{stockData.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>

                  {/* All Stock Details - Collapsible */}
                  <div>
                    <button
                      onClick={() => setShowMoreDetails(!showMoreDetails)}
                      className="w-full flex items-center justify-between py-3 border-b border-white/10 hover:bg-white/5 transition-colors rounded-lg px-2"
                    >
                      <span className="text-sm text-muted-foreground">Stock Details</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showMoreDetails ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Expandable Stock Details */}
                    <AnimatePresence>
                      {showMoreDetails && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pt-3">
                            {/* Previous Close */}
                            <div className="flex items-center justify-between py-3 border-b border-white/10">
                              <span className="text-sm text-muted-foreground">Previous Close</span>
                              <span className="text-lg font-bold text-foreground">
                                {stockData.previousClose ? formatCurrency(stockData.previousClose) : '-'}
                              </span>
                            </div>

                            {/* Open */}
                            <div className="flex items-center justify-between py-3 border-b border-white/10">
                              <span className="text-sm text-muted-foreground">Open</span>
                              <span className="text-lg font-bold text-foreground">
                                {stockData.open ? formatCurrency(stockData.open) : '-'}
                              </span>
                            </div>

                            {/* High */}
                            <div className="flex items-center justify-between py-3 border-b border-white/10">
                              <span className="text-sm text-muted-foreground">High</span>
                              <span className="text-lg font-bold text-green-400">
                                {stockData.high ? formatCurrency(stockData.high) : '-'}
                              </span>
                            </div>

                            {/* Low */}
                            <div className="flex items-center justify-between py-3 border-b border-white/10">
                              <span className="text-sm text-muted-foreground">Low</span>
                              <span className="text-lg font-bold text-red-400">
                                {stockData.low ? formatCurrency(stockData.low) : '-'}
                              </span>
                            </div>

                            {/* Volume */}
                            <div className="flex items-center justify-between py-3 border-b border-white/10">
                              <span className="text-sm text-muted-foreground">Volume</span>
                              <span className="text-lg font-bold text-foreground">
                                {formatIndianNumber(stockData.volume)}
                              </span>
                            </div>

                            {/* Additional Details */}
                            <div className="pt-3 space-y-2 border-t border-white/10">
                              <div className="flex justify-between items-center py-2 bg-white/5 rounded-lg px-3">
                                <span className="text-xs text-muted-foreground">52 Week High</span>
                                <span className="text-sm font-semibold text-green-400">₹250.00</span>
                              </div>
                              <div className="flex justify-between items-center py-2 bg-white/5 rounded-lg px-3">
                                <span className="text-xs text-muted-foreground">52 Week Low</span>
                                <span className="text-sm font-semibold text-red-400">₹180.00</span>
                              </div>
                              <div className="flex justify-between items-center py-2 bg-white/5 rounded-lg px-3">
                                <span className="text-xs text-muted-foreground">Market Cap</span>
                                <span className="text-sm font-semibold text-foreground">₹500 Cr</span>
                              </div>
                              <div className="flex justify-between items-center py-2 bg-white/5 rounded-lg px-3">
                                <span className="text-xs text-muted-foreground">P/E Ratio</span>
                                <span className="text-sm font-semibold text-foreground">15.5</span>
                              </div>
                              <div className="flex justify-between items-center py-2 bg-white/5 rounded-lg px-3">
                                <span className="text-xs text-muted-foreground">Dividend Yield</span>
                                <span className="text-sm font-semibold text-foreground">2.5%</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-muted-foreground text-center">
                      {stockData.currentPrice > 0 && stockData.volume > 0 
                        ? '✅ Live data from TwelveData API • Updates every 5 min'
                        : '⚠️ Using fallback data - API unavailable'}
                    </p>
                    <p className="text-xs text-muted-foreground text-center mt-1">
                      Last updated: {new Date(stockData.lastUpdated).toLocaleTimeString('en-IN')}
                    </p>
                  </div>
                </div>
              )}

    

            
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorRelations;