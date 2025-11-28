import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ChevronRight, ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Import the investor data
import investorDataLocal from '../data/investorData.json';
import { fetchInvestorDocuments, InvestorCategory } from '../lib/investorFirebase';

interface Document {
  id?: number | string;
  head: string;
  link: string;
  quarter?: string;
}

interface Category {
  id: number;
  header: string;
  text: Document[];
}

const InvestorRelations = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<Category[]>(investorDataLocal);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle tab click and scroll
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    // Scroll to documents section smoothly
    setTimeout(() => {
      const documentsSection = document.getElementById('documents-display');
      if (documentsSection) {
        documentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Fetch investor documents from Firebase
  useEffect(() => {
    const loadInvestorData = async () => {
      try {
        setLoading(true);
        const firebaseData = await fetchInvestorDocuments();

        // Merge Firebase data with local data
        let allData;
        if (firebaseData.length > 0) {
          // Firebase data first, then local data
          allData = [...firebaseData, ...investorDataLocal];
        } else {
          // Use local data if Firebase is empty
          allData = investorDataLocal;
        }

        setCategories(allData);
      } catch (error) {
        console.error('Error loading investor data:', error);
        setCategories(investorDataLocal);
      } finally {
        setLoading(false);
      }
    };

    loadInvestorData();
  }, []);

  const filteredDocuments = categories[activeTab]?.text.filter((doc: Document) =>
    doc.head.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Group documents by quarter (only if quarter exists)
  const groupedByQuarter = filteredDocuments.reduce((acc: { [key: string]: Document[] }, doc) => {
    if (doc.quarter) {
      const quarter = doc.quarter;
      if (!acc[quarter]) {
        acc[quarter] = [];
      }
      acc[quarter].push(doc);
    }
    return acc;
  }, {});

  // Get documents without quarter
  const documentsWithoutQuarter = filteredDocuments.filter(doc => !doc.quarter);

  // Sort quarters (most recent first)
  const sortedQuarters = Object.keys(groupedByQuarter).sort((a, b) => {
    return b.localeCompare(a);
  });

  return (
    <>      <Header />
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] ">
        {/* Hero Banner Section */}
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070"
              alt="Business Background"
              className="w-full h-full object-cover"
            />
            {/* Solid Overlay */}
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-6 md:px-[30px] h-full flex items-center mt-12 md:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

              {/* Left: Heading */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Investor Relations
                </h1>
              </div>

              {/* Right: Brief Description */}
              <div className="text-white/90 text-base md:text-lg leading-relaxed">
                <p>
                  Invested in the world's leading streaming entertainment service with 193 million paid memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Content + Image Section */}
        <section className="py-20 bg-white dark:bg-[#0a0a0a]">
          <div className="container mx-auto px-6 md:px-[30px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Building India's Future Through Innovation
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Colab Platforms is committed to creating long-term value for our shareholders through strategic investments in cutting-edge technology, sports innovation, and digital transformation. Our diversified portfolio spans AI, FinTech, Esports, and Drone Technology.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a publicly listed company on BSE (Code: 542866), we maintain the highest standards of corporate governance and transparency, ensuring our investors have access to timely and accurate information.
                </p>
                <div className="flex gap-4 pt-4">
                  <a
                    href="#documents"
                    className="px-6 py-3 bg-[#7f01ff] dark:bg-[#ff4500] hover:opacity-90 text-white font-semibold transition-all"
                  >
                    View Documents
                  </a>
                  <a
                    href="https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/542866/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-[#7f01ff] dark:border-[#ff4500] text-[#7f01ff] dark:text-[#ff4500] hover:bg-[#7f01ff] dark:hover:bg-[#ff4500] hover:text-white font-semibold transition-all"
                  >
                    BSE Profile
                  </a>
                </div>
              </motion.div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] lg:h-[500px] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_z9pyo2z9pyo2z9py.png?v=1764057256"
                  alt="Business Analytics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#7f01ff]/10 dark:bg-[#ff4500]/10" />
              </motion.div>

            </div>
          </div>
        </section>

        {/* Main Content */}
        <div id="documents" className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="relative mx-auto">
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-black border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <FileText className="w-5 h-5 text-white/60" />
              </div>
            </div>
          </motion.div>

          {/* Investor Kits Grid */}
          <div className="relative mb-16 py-20 overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/90" />
            </div>

            {/* Content with Slider */}
            <div className="relative z-10 px-8 md:px-12 lg:px-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white dark:text-white">
                Investor Data
              </h2>

              {/* Slider Container with Left/Right Arrows */}
              <div className="relative flex items-center gap-4">
                {/* Left Arrow - Show only if not on first slide */}
                {currentSlide > 0 && (
                  <button
                    onClick={() => setCurrentSlide(prev => prev - 1)}
                    className="flex-shrink-0 bg-white dark:bg-gray-800 p-3 shadow-lg hover:scale-110 transition-transform"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>
                )}

                {/* Cards Grid - Show 12 cards at a time (2 rows of 6 cards each) */}
                <div className="flex-1 overflow-hidden">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {categories.slice(currentSlide * 12, Math.min((currentSlide + 1) * 12, categories.length)).map((category, index) => {
                      const actualIndex = currentSlide * 12 + index;
                      return (
                        <button
                          key={`${category.id}-${actualIndex}`}
                          onClick={() => handleTabClick(actualIndex)}
                          className={`group relative px-4 py-3 font-semibold text-sm transition-all overflow-hidden w-full ${activeTab === actualIndex
                            ? 'bg-[#7f01ff] dark:bg-[#ff4500] text-white shadow-2xl shadow-[#7f01ff]/50 dark:shadow-[#ff4500]/50 scale-105'
                            : 'bg-white dark:bg-gray-800/50 text-black dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:scale-105'
                            }`}
                        >
                          <span className="relative z-10">{category.header}</span>
                          {activeTab === actualIndex && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 bg-[#7f01ff] dark:bg-[#ff4500]"
                              initial={false}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Arrow - Show only if more cards exist */}
                {(currentSlide + 1) * 12 < categories.length && (
                  <button
                    onClick={() => setCurrentSlide(prev => prev + 1)}
                    className="flex-shrink-0 bg-white dark:bg-gray-800 p-3 shadow-lg hover:scale-110 transition-transform"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Documents Grid - Grouped by Quarter */}
          <div id="documents-display" className="scroll-mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {filteredDocuments.length > 0 ? (
                  <>
                    {/* Documents with Quarter - Grouped */}
                    {sortedQuarters.map((quarter) => (
                      <div key={quarter} className="space-y-4">
                        {/* Quarter Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-2 px-4 py-2 bg-[#7f01ff]/20 dark:bg-[#ff4500]/20 border border-[#7f01ff]/30 dark:border-[#ff4500]/30">
                            <svg className="w-5 h-5 text-[#7f01ff] dark:text-[#ff4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <h3 className="text-lg font-bold text-white">{quarter}</h3>
                          </div>
                          <div className="flex-1 h-px bg-primary/50"></div>
                          <span className="text-sm text-white/60">{groupedByQuarter[quarter].length} documents</span>
                        </div>

                        {/* Documents in this quarter */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {groupedByQuarter[quarter].map((doc) => (
                            <motion.a
                              key={doc.id}
                              href={doc.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="relative bg-black border border-white/10 p-6 hover:border-[#7f01ff]/50 dark:hover:border-[#ff4500]/50 transition-all">
                                <div className="flex items-start justify-between mb-4">
                                  <FileText className="w-8 h-8 text-[#7f01ff] dark:text-[#ff4500]" />
                                  <Download className="w-5 h-5 text-white/60 group-hover:text-[#7f01ff] dark:group-hover:text-[#ff4500] transition-colors" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#7f01ff] dark:group-hover:text-[#ff4500] transition-colors line-clamp-2">
                                  {doc.head}
                                </h3>
                                <div className="flex items-center text-sm text-white/70 group-hover:text-[#7f01ff] dark:group-hover:text-[#ff4500] transition-colors">
                                  <span>View Document</span>
                                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Documents without Quarter - No Section Header */}
                    {documentsWithoutQuarter.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {documentsWithoutQuarter.map((doc) => (
                          <motion.a
                            key={doc.id}
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#2b33da]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-black border border-white/10 p-6 hover:border-[#7f01ff]/50 dark:hover:border-[#ff4500]/50 transition-all">
                              <div className="flex items-start justify-between mb-4">
                                <FileText className="w-8 h-8 text-[#7f01ff] dark:text-[#ff4500]" />
                                <Download className="w-5 h-5 text-white/70 group-hover:text-[#7f01ff] dark:group-hover:text-[#ff4500] transition-colors" />
                              </div>
                              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#7f01ff] dark:group-hover:text-[#ff4500] transition-colors line-clamp-2">
                                {doc.head}
                              </h3>
                              <div className="flex items-center text-sm text-white/70 group-hover:text-[#7f01ff] dark:group-hover:text-[#ff4500] transition-colors">
                                <span>View Document</span>
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="col-span-full text-center py-12">
                    <FileText className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                    <p className="text-white/60 text-lg">No documents found</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Detailed Director Profiles with Images */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
                Leadership Team
              </h2>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1400px] mx-auto">
              {/* Puneet Singh Chadhok */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black overflow-hidden border border-white/10 hover:border-[#7f01ff]/50 dark:hover:border-[#ff4500]/50 transition-all"
              >
                {/* Image */}
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/WhatsApp_Image_2025-05-24_at_1.30.23_PM.jpg?v=1748237778"
                    alt="Puneet Singh Chadhok"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Puneet Singh Chadhok</h3>
                    <p className="text-base md:text-lg text-[#7f01ff] dark:text-[#ff4500] font-semibold">Managing Director</p>
                  </div>
                  <div className="h-1 w-24 bg-[#7f01ff] dark:bg-[#ff4500]" />
                  <p className="text-white/80 leading-relaxed text-base md:text-lg">
                    Puneet Singh Chadhok is a dynamic entrepreneur with diverse business interests spanning real estate, finance, entertainment, sports, and hospitality. As the founder of Clapstem Entertainment, he has produced award-winning films including Jal, a National Award-winning movie, and over 1000 hours of TV and digital content.
                  </p>
                  <p className="text-white/80 leading-relaxed text-base md:text-lg">
                    A passionate sports visionary, Puneet owns the Punjab De Sher team in Celebrity Cricket League and the Australia Champions franchise in the World Championship of Legends (WCL), featuring global cricket icons.
                  </p>
                </div>
              </motion.div>

              {/* Amardeep S Reen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-black backdrop-blur-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all"
              >
                {/* Image */}
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/WhatsApp_Image_2025-05-14_at_12.03.43_PM.jpg?v=1747205268"
                    alt="Amardeep S Reen"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Amardeep S Reen</h3>
                    <p className="text-base md:text-lg text-[#7f01ff] dark:text-[#ff4500] font-semibold">Executive Director</p>
                  </div>
                  <div className="h-1 w-24 bg-[#7f01ff] dark:bg-[#ff4500]" />
                  <p className="text-white/80 leading-relaxed text-base md:text-lg">
                    Amardeep S Reen is a seasoned entrepreneur and philanthropist with over two decades of experience across technology, sports, entertainment, and humanitarian work. A technocrat by training, he has held leadership roles in global tech and consulting firms before transitioning into sports management and film production.
                  </p>
                  <p className="text-white/80 leading-relaxed text-base md:text-lg">
                    As CEO of Punjab De Sher (CCL) and Australia Champions (WCL), and co-producer of acclaimed films like Torbaaz, Amardeep continues to bridge the worlds of sport and entertainment.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Board and Committee Details Section */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Board & Committee Details
              </h2>

            </div>

            {/* Board and KMPs */}
            <div className="bg-white dark:bg-black backdrop-blur-xl p-8 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Composition of Board and KMPs
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10">
                      <th className="text-left py-4 px-6 text-gray-900 dark:text-[#ff4500] font-bold text-2xl md:text-3xl">Name</th>
                      <th className="text-left py-4 px-6 text-gray-900 dark:text-[#ff4500] font-bold text-2xl md:text-3xl">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Mukesh Jadhav', designation: 'Chairman & Non-executive Director' },
                      { name: 'Puneet Singh Chadhok', designation: 'Managing Director' },
                      { name: 'Amardeep Singh', designation: 'Executive Director' },
                      { name: 'Rohit Singh', designation: 'Independent Director' },
                      { name: 'Chetan Shah', designation: 'Chief Financial Officer' },
                      { name: 'Ms. Ritu Jhamb', designation: 'Company Secretary & Compliance Officer' },
                    ].map((member, index) => (
                      <tr key={index} className="border-b border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-black/80 transition-colors">
                        <td className="py-4 px-6 text-gray-900 dark:text-white font-medium">{member.name}</td>
                        <td className="py-4 px-6 text-gray-700 dark:text-white/80">{member.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Committees Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Audit Committee */}
              <div className="bg-white dark:bg-black p-8 border border-gray-200 dark:border-white/10 hover:border-[#7f01ff]/50 dark:hover:border-[#ff4500]/50 transition-all shadow-lg hover:shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Audit Committee</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/80">
                    <span className="text-gray-900 dark:text-white font-medium">Rohit Singh</span>
                    <span className="px-4 py-2 bg-[#7f01ff]/20 dark:bg-[#ff4500]/20 text-[#7f01ff] dark:text-[#ff4500] text-sm font-semibold">Chairman</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/80">
                    <span className="text-gray-900 dark:text-white font-medium">Mukesh Jadhav</span>
                    <span className="px-4 py-2 bg-gray-200 dark:bg-gray-500/20 text-gray-700 dark:text-white/70 text-sm font-semibold">Member</span>
                  </div>
                </div>
              </div>

              {/* Nomination and Remuneration Committee */}
              <div className="bg-white dark:bg-black backdrop-blur-xl p-8 border border-gray-200 dark:border-white/10 hover:border-[#7f01ff]/50 dark:hover:border-[#ff4500]/50 transition-all shadow-lg hover:shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Nomination and Remuneration Committee</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/80">
                    <span className="text-gray-900 dark:text-white font-medium">Rohit Singh</span>
                    <span className="px-4 py-2 bg-[#7f01ff]/20 dark:bg-[#ff4500]/20 text-[#7f01ff] dark:text-[#ff4500] text-sm font-semibold">Chairman</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/80">
                    <span className="text-gray-900 dark:text-white font-medium">Mukesh Jadhav</span>
                    <span className="px-4 py-2 bg-gray-200 dark:bg-gray-500/20 text-gray-700 dark:text-white/70 text-sm font-semibold">Member</span>
                  </div>
                </div>
              </div>

              {/* Stakeholders Relationship Committee */}
              <div className="bg-white dark:bg-black backdrop-blur-xl p-8 border border-gray-200 dark:border-white/10 hover:border-[#7f01ff]/50 dark:hover:border-[#ff4500]/50 transition-all shadow-lg hover:shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Stakeholders Relationship Committee</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/80">
                    <span className="text-gray-900 dark:text-white font-medium">Mukesh Jadhav</span>
                    <span className="px-4 py-2 bg-[#7f01ff]/20 dark:bg-[#ff4500]/20 text-[#7f01ff] dark:text-[#ff4500] text-sm font-semibold">Chairman</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/80">
                    <span className="text-gray-900 dark:text-white font-medium">Rohit Singh</span>
                    <span className="px-4 py-2 bg-gray-200 dark:bg-gray-500/20 text-gray-700 dark:text-white/70 text-sm font-semibold">Member</span>
                  </div>
                </div>
              </div>

              {/* Grievance Redressal */}
              <div className="bg-white dark:bg-black backdrop-blur-xl p-8 border border-gray-200 dark:border-white/10 hover:border-[#7f01ff]/50 dark:hover:border-[#ff4500]/50 transition-all shadow-lg hover:shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Grievance Redressal Officer</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-black/80">
                    <div className="text-gray-900 dark:text-white font-medium mb-3">Mukesh Jadhav</div>
                    <div className="text-sm text-gray-700 dark:text-white/70 mb-2">Director</div>
                    <div className="flex flex-col gap-2">
                      <a href="tel:8828865429" className="text-[#7f01ff] dark:text-[#ff4500] hover:text-[#2b33da] dark:hover:text-[#ff6347] transition-colors">
                        📞 8828865429
                      </a>
                      <a href="mailto:cs@colabcloud.in" className="text-[#7f01ff] dark:text-[#ff4500] hover:text-[#2b33da] dark:hover:text-[#ff6347] transition-colors">
                        ✉️ cs@colabcloud.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Director Profiles */}
            <div className="bg-white dark:bg-black backdrop-blur-xl p-8 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Director Profiles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Mukesh Jadhav', designation: 'Non-executive Director', link: '/mukesh-jadhav.html' },
                  { name: 'Puneet Singh Chadhok', designation: 'Managing Director', link: '/puneet-singh-chadhok.html' },
                  { name: 'Rohit Singh', designation: 'Independent Director', link: '/rohit-singh.html' },
                  { name: 'Amardeep Singh', designation: 'Executive Director', link: '/amardeep-singh.html' },
                ].map((director, index) => (
                  <a
                    key={index}
                    href={director.link}
                    className="group relative p-6 bg-gray-50 dark:bg-black/80 border border-gray-200 dark:border-white/10 hover:border-[#7f01ff] dark:hover:border-[#ff4500] transition-all hover:scale-105 shadow-md hover:shadow-xl"
                  >
                    <div className="absolute inset-0 bg-[#7f01ff]/10 dark:bg-[#ff4500]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#7f01ff] dark:group-hover:text-[#ff4500] transition-colors">
                        {director.name}
                      </h4>
                      <p className="text-gray-700 dark:text-white/70">{director.designation}</p>
                      <div className="mt-4 flex items-center text-[#7f01ff] dark:text-[#ff4500] group-hover:text-[#2b33da] dark:group-hover:text-[#ff8c00] text-sm font-semibold transition-colors">
                        <span>View Profile</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InvestorRelations;


