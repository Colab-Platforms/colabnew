import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowRight, FileText, Download } from 'lucide-react';
import { fetchBSEStockData, formatCurrency, formatIndianNumber, StockData } from '../services/bseService';
import { fetchBSECompliance, formatDisplayDate, ComplianceDocument } from '../services/bseComplianceService';

const InvestorRelations = () => {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [complianceDocs, setComplianceDocs] = useState<ComplianceDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const stock = await fetchBSEStockData();
        setStockData(stock);
        const docs = await fetchBSECompliance();
        setComplianceDocs(docs.slice(0, 3));
      } catch (error) {
        console.error('❌ Error loading investor data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    const interval = setInterval(loadData, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 md:py-32 overflow-hidden bg-white dark:bg-[#121212]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80" 
          alt="Financial Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-[#121212] dark:via-[#121212]/95 dark:to-[#121212]" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-[50px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
        
          <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            <motion.span 
              className="block text-black dark:text-black"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Conglomerate
            </motion.span>
            <motion.span 
              className="block mt-2 text-black dark:text-black"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Intelligence
            </motion.span>
          </h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transparent Reporting, Consistent Growth, And Long-Term Value Creation.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Stock Performance Card with Image */}
          {stockData && stockData.currentPrice > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden group"
            >
              {/* Background Image */}
              <div className="absolute inset-0 dark:hidden">
                <img 
                  src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80"
                  alt="Stock Market"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
              </div>

              {/* White Background for Dark Mode */}
              <div className="absolute inset-0 hidden dark:block bg-white" />

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white dark:text-black mb-1">{stockData.symbol}</h3>
                    <p className="text-sm text-white/60 dark:text-gray-600">Colab Platforms Ltd</p>
                  </div>
                  <div className={`px-3 py-1 text-xs font-bold ${stockData.status === 'open' ? 'bg-green-500/20 text-green-400 dark:bg-green-100 dark:text-green-700' : 'bg-gray-500/20 text-gray-400 dark:bg-gray-100 dark:text-gray-700'}`}>
                    {stockData.status === 'open' ? 'LIVE' : 'CLOSED'}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-5xl font-black text-white dark:text-black mb-2">
                    {formatCurrency(stockData.currentPrice)}
                  </div>
                  <div className={`flex items-center gap-2 text-lg font-bold ${stockData.change >= 0 ? 'text-green-400 dark:text-green-600' : 'text-red-400 dark:text-red-600'}`}>
                    {stockData.change >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    <span>
                      {stockData.change >= 0 ? '+' : ''}{stockData.change.toFixed(2)} ({stockData.changePercent >= 0 ? '+' : ''}{stockData.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>

                {/* Stock Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 dark:bg-gray-50 backdrop-blur-sm p-4 border border-white/10 dark:border-gray-200">
                    <p className="text-xs text-white/60 dark:text-gray-600 mb-1">Open</p>
                    <p className="text-lg font-bold text-white dark:text-black">{stockData.open ? formatCurrency(stockData.open) : '-'}</p>
                  </div>
                  <div className="bg-white/5 dark:bg-gray-50 backdrop-blur-sm p-4 border border-white/10 dark:border-gray-200">
                    <p className="text-xs text-white/60 dark:text-gray-600 mb-1">High</p>
                    <p className="text-lg font-bold text-white dark:text-black">{stockData.high ? formatCurrency(stockData.high) : '-'}</p>
                  </div>
                  <div className="bg-white/5 dark:bg-gray-50 backdrop-blur-sm p-4 border border-white/10 dark:border-gray-200">
                    <p className="text-xs text-white/60 dark:text-gray-600 mb-1">Low</p>
                    <p className="text-lg font-bold text-white dark:text-black">{stockData.low ? formatCurrency(stockData.low) : '-'}</p>
                  </div>
                </div>

                <p className="text-xs text-white/40 dark:text-gray-500 text-center">
                  Last updated: {new Date(stockData.lastUpdated).toLocaleTimeString('en-IN')}
                </p>
              </div>
            </motion.div>
          )}

          {/* Compliance Documents with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 dark:hidden">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="Documents"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/75 to-primary/80" />
            </div>

            {/* White Background for Dark Mode */}
            <div className="absolute inset-0 hidden dark:block bg-white" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white dark:text-black">BSE Compliance</h3>
                <a href="/investor-relations" className="text-white dark:text-black hover:text-white/80 dark:hover:text-black/80 transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>

              {loading ? (
                <div className="flex items-center justify-center flex-1">
                  <div className="w-8 h-8 border-4 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                </div>
              ) : complianceDocs.length > 0 ? (
                <div className="space-y-4 flex-1">
                  {complianceDocs.map((doc) => (
                    <div
                      key={doc.id}
                      className="bg-white/10 dark:bg-gray-50 backdrop-blur-sm p-4 border border-white/20 dark:border-gray-200 hover:bg-white/20 dark:hover:bg-gray-100 transition-all duration-300 group/doc"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-white dark:text-black flex-shrink-0 mt-1" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 bg-white/20 dark:bg-gray-200 text-white dark:text-black text-xs font-semibold">
                              {doc.category}
                            </span>
                            <span className="text-xs text-white/60 dark:text-gray-600">
                              {formatDisplayDate(doc.date)}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-white dark:text-black line-clamp-2 group-hover/doc:text-white/90 dark:group-hover/doc:text-black/90">
                            {doc.subject}
                          </h4>
                        </div>
                        {doc.pdfUrl && (
                          <a
                            href={doc.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 dark:bg-gray-200 hover:bg-white/20 dark:hover:bg-gray-300 transition-colors"
                          >
                            <Download className="w-4 h-4 text-white dark:text-black" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center flex-1">
                  <p className="text-white/60 dark:text-gray-600">No documents available</p>
                </div>
              )}

              <a
                href="/investor-relations"
                className="mt-6 block w-full py-3 bg-white text-primary dark:bg-gradient-to-r dark:from-orange-500 dark:to-red-600 dark:text-white font-bold text-center hover:bg-white/90 dark:hover:from-orange-600 dark:hover:to-red-700 transition-all duration-300"
              >
                View All Documents
              </a>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default InvestorRelations;
