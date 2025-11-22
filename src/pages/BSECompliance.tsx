import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Search, Filter, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  fetchBSECompliance,
  getComplianceCategories,
  formatDisplayDate,
  downloadComplianceDocument,
  ComplianceDocument,
  ComplianceFilters
} from '../services/bseComplianceService';

const BSECompliance = () => {
  const [documents, setDocuments] = useState<ComplianceDocument[]>([]);
  const [filteredDocs, setFilteredDocs] = useState<ComplianceDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = getComplianceCategories();

  // Fetch compliance data
  useEffect(() => {
    loadComplianceData();
  }, []);

  // Filter documents when search or category changes
  useEffect(() => {
    filterDocuments();
  }, [searchTerm, selectedCategory, documents]);

  const loadComplianceData = async () => {
    try {
      setLoading(true);
      const data = await fetchBSECompliance();
      setDocuments(data);
      setFilteredDocs(data);
    } catch (error) {
      console.error('Error loading compliance data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterDocuments = () => {
    let filtered = [...documents];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(doc =>
        doc.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(doc =>
        doc.subject.toLowerCase().includes(searchLower) ||
        doc.description?.toLowerCase().includes(searchLower) ||
        doc.category.toLowerCase().includes(searchLower)
      );
    }

    setFilteredDocs(filtered);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-20">
        
        {/* Hero Section */}
        <div className="relative py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(93, 24, 78, 0.5) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5d184e]/10 border border-[#5d184e]/30 backdrop-blur-sm">
                <FileText className="w-4 h-4 text-[#5d184e]" />
                <span className="text-sm font-semibold text-[#5d184e]">BSE Code: 539528</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                <span className="block text-white mb-2">BSE Compliance</span>
                <span className="block bg-gradient-to-r from-[#5d184e] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Corporate Announcements
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Access all regulatory filings, corporate announcements, and compliance documents
                submitted to BSE India
              </p>
              
              {/* Note */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <span className="text-sm text-yellow-400">
                  Note: Displaying recent compliance documents. For complete filings, visit BSE India official website.
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search announcements, filings, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#5d184e] transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-xl text-white hover:border-[#5d184e] transition-colors whitespace-nowrap"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#5d184e] to-purple-600 text-white shadow-lg shadow-[#5d184e]/50'
                      : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50 border border-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-gray-400">
                Showing <span className="text-white font-semibold">{filteredDocs.length}</span> documents
              </p>
              <button
                onClick={loadComplianceData}
                className="text-[#5d184e] hover:text-purple-400 text-sm font-medium transition-colors"
              >
                Refresh Data
              </button>
            </div>
          </motion.div>

          {/* Documents List */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-4 border-[#5d184e] border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-gray-400">Loading compliance documents...</p>
              </div>
            </div>
          ) : filteredDocs.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {filteredDocs.map((doc, index) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-[#5d184e]/50 transition-all"
                  >
                    <div className="flex items-start justify-between gap-6">
                      {/* Left: Icon and Content */}
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-xl bg-[#5d184e]/10 border border-[#5d184e]/30 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-[#5d184e]" />
                        </div>

                        <div className="flex-1 space-y-2">
                          {/* Category Badge */}
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-[#5d184e]/20 border border-[#5d184e]/30 rounded-lg text-xs font-semibold text-[#5d184e]">
                              {doc.category}
                            </span>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDisplayDate(doc.date)}
                            </span>
                          </div>

                          {/* Subject */}
                          <h3 className="text-lg font-semibold text-white group-hover:text-[#5d184e] transition-colors">
                            {doc.subject}
                          </h3>

                          {/* Description */}
                          {doc.description && (
                            <p className="text-gray-400 text-sm line-clamp-2">
                              {doc.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {doc.pdfUrl && (
                          <button
                            onClick={() => downloadComplianceDocument(doc)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#5d184e]/10 border border-[#5d184e]/30 rounded-lg hover:bg-[#5d184e]/20 hover:border-[#5d184e]/50 transition-all group/btn"
                          >
                            <Download className="w-4 h-4 text-[#5d184e]" />
                            <span className="text-sm text-white">Download</span>
                          </button>
                        )}
                        <a
                          href={`https://www.bseindia.com/corporates/ann.html?scrip=539528`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-[#5d184e]" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No documents found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}

          {/* BSE Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a
              href="https://www.bseindia.com/corporates/ann.html?scrip=539528"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5d184e] to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              <span>View All on BSE India</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BSECompliance;
