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
    <section className="relative py-16 md:py-32 overflow-hidden bg-background">
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
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl mb-12 md:mb-20">
          <p className="text-primary font-medium text-lg md:text-lg mb-3 md:mb-4 tracking-wide uppercase">
            For Investors
          </p>
          <h2 className="font-semibold text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-6">
            <span className="block text-foreground">Conglomerate</span>
            <span className="block mt-1 md:mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-xl md:text-xl text-muted-foreground px-4">
            Transparent Reporting, Consistent Growth, And Long-Term Value Creation.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="container mx-auto px-4 md:px-[30px]">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-6 items-stretch">

            {/* Left: BSE Compliance Documents */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col space-y-6 gap-2"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2 md:mb-6">
                <h3 className="text-3xl md:text-3xl font-bold text-foreground">BSE Compliance</h3>
                <a
                  href="/investor-relations"
                  className="text-primary hover:text-secondary transition-colors text-base font-semibold flex items-center gap-1"
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
                  {complianceDocs.slice(0, 1).map((doc) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-black hover:bg-black/80 transition-all duration-300 p-6 md:p-10 border border-white/10 hover:border-primary/30 group w-full lg:max-w-[90%] min-h-[50px] flex flex-col justify-center"
                    >
                      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0 w-full">
                          <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-3">
                            <span className="px-2 py-1 md:px-3 bg-primary/20 text-primary text-xs md:text-xs font-semibold">
                              {doc.category}
                            </span>
                            <span className="text-sm md:text-sm text-white/60">
                              {formatDisplayDate(doc.date)}
                            </span>
                          </div>
                          <h4 className="text-lg md:text-lg font-semibold text-white group-hover:text-primary transition-colors line-clamp-3 mb-2 md:mb-3">
                            {doc.subject}
                          </h4>
                          {doc.description && (
                            <p className="text-base text-white/70 line-clamp-2">
                              {doc.description}
                            </p>
                          )}
                        </div>
                        {doc.pdfUrl && (
                          <a
                            href={doc.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 md:p-3 bg-primary/10 hover:bg-primary/20 transition-colors mt-2 md:mt-0 self-end md:self-start"
                          >
                            <Download className="w-4 h-4 md:w-5 md:h-5 text-primary" />
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
              <div className="mt-4 md:mt-8 w-full lg:max-w-[90%]">
                <a
                  href="/investor-relations"
                  className="block w-full py-3 md:py-4 bg-primary hover:bg-secondary text-white font-bold text-center transition-all duration-300 hover:scale-105 text-base md:text-base"
                >
                  View All Compliance Documents
                </a>
              </div>
            </motion.div>

            {/* Right: Stock Data & Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[450px] flex flex-col space-y-6 flex-shrink-0"
            >
              {/* Stock Price Card */}
              {stockData && stockData.currentPrice > 0 && (
                <div className="bg-black p-6 md:p-10 border border-white/10 mt-8 lg:mt-16 min-h-[90px] flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-xl font-bold text-white">{stockData.symbol}</h3>
                      <p className="text-xs md:text-xs text-white/60">Colab Platforms Ltd</p>
                    </div>
                    <div className={`px-2 py-1 text-xs md:text-xs font-semibold ${stockData.status === 'open'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-gray-500/20 text-gray-400'
                      }`}>
                      {stockData.status === 'open' ? 'LIVE' : 'CLOSED'}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl md:text-3xl font-black text-white">
                      {formatCurrency(stockData.currentPrice)}
                    </div>
                    <div className={`flex items-center gap-1 text-sm md:text-sm font-semibold ${stockData.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                      {stockData.change >= 0 ? <TrendingUp className="w-3 h-3 md:w-4 md:h-4" /> : <TrendingDown className="w-3 h-3 md:w-4 md:h-4" />}
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
                      className="w-full flex items-center justify-between py-2 md:py-3 border-b border-white/10 hover:bg-white/5 transition-colors px-2"
                    >
                      <span className="text-sm md:text-sm text-white">Stock Details</span>
                      <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 text-white transition-transform ${showMoreDetails ? 'rotate-180' : ''}`} />
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
                          <div className="space-y-2 md:space-y-3 pt-2 md:pt-3">
                            {/* Previous Close */}
                            <div className="flex items-center justify-between py-2 md:py-3 border-b border-white/10">
                              <span className="text-sm md:text-sm text-white/70">Previous Close</span>
                              <span className="text-lg md:text-lg font-bold text-white">
                                {stockData.previousClose ? formatCurrency(stockData.previousClose) : '-'}
                              </span>
                            </div>

                            {/* Open */}
                            <div className="flex items-center justify-between py-2 md:py-3 border-b border-white/10">
                              <span className="text-sm md:text-sm text-white/70">Open</span>
                              <span className="text-lg md:text-lg font-bold text-white">
                                {stockData.open ? formatCurrency(stockData.open) : '-'}
                              </span>
                            </div>

                            {/* High */}
                            <div className="flex items-center justify-between py-2 md:py-3 border-b border-white/10">
                              <span className="text-sm md:text-sm text-white/70">High</span>
                              <span className="text-lg md:text-lg font-bold text-white">
                                {stockData.high ? formatCurrency(stockData.high) : '-'}
                              </span>
                            </div>

                            {/* Low */}
                            <div className="flex items-center justify-between py-2 md:py-3 border-b border-white/10">
                              <span className="text-sm md:text-sm text-white/70">Low</span>
                              <span className="text-lg md:text-lg font-bold text-white">
                                {stockData.low ? formatCurrency(stockData.low) : '-'}
                              </span>
                            </div>

                            {/* Volume */}
                            <div className="flex items-center justify-between py-2 md:py-3">
                              <span className="text-sm md:text-sm text-white/70">Volume</span>
                              <span className="text-lg md:text-lg font-bold text-white">
                                {formatIndianNumber(stockData.volume)}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    {stockData.currentPrice === 0 || stockData.volume === 0 ? (
                      <p className="text-[10px] md:text-xs text-white/50 text-center">
                        ⚠️ Using fallback data - API unavailable
                      </p>
                    ) : null}
                    <p className="text-[10px] md:text-xs text-white/50 text-center mt-1">
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
