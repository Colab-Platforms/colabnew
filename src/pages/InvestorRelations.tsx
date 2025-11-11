import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import the investor data
import investorData from '../data/investorData.json';

interface Document {
  id: number;
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

  const categories: Category[] = investorData;

  const filteredDocuments = categories[activeTab]?.text.filter((doc: Document) =>
    doc.head.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-20">
      {/* Hero Section with Company Info */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Main Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Colab Platforms – A Public Company Powering India's{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sports-Tech Revolution
                </span>
              </h1>
              
              <div className="space-y-3">
                <p className="text-lg md:text-xl text-gray-300">
                  <span className="font-semibold text-white">Listed on BSE</span> | BSE Code: 539528
                </p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  Building India's first end-to-end sports innovation ecosystem across tech, data, 
                  athlete management, e-commerce, and immersive content.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#documents"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-center hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 hover:scale-105"
                >
                  Investor Relations
                </a>
                <a
                  href="https://www.screener.in/company/542866/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 text-white font-bold text-center hover:bg-gray-700/50 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                >
                  Stock Details
                </a>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/a-photograph-of-a-futuristic-sports-stad_2wNIVFRmSSCb2q2FS3PuWg_mq95yDUrS6COdFWwJSR7Qg.jpg?v=1746784021"
                  alt="Futuristic Sports Stadium"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="documents" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <FileText className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {category.header}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <motion.a
                  key={doc.id}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="w-8 h-8 text-blue-400" />
                      <Download className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {doc.head}
                    </h3>
                    {doc.quarter && (
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm">
                        {doc.quarter}
                      </span>
                    )}
                    <div className="mt-4 flex items-center text-sm text-gray-500 group-hover:text-blue-400 transition-colors">
                      <span>View Document</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <FileText className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No documents found</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Detailed Director Profiles with Images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {/* Puneet Singh Chadhok */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/WhatsApp_Image_2025-05-24_at_1.30.23_PM.jpg?v=1748237778"
                      alt="Puneet Singh Chadhok"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Puneet Singh Chadhok</h3>
                    <p className="text-xl text-blue-400 font-semibold">Managing Director</p>
                  </div>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <p className="text-gray-300 leading-relaxed text-justify">
                    Puneet Singh Chadhok is a dynamic entrepreneur with diverse business interests spanning real estate, finance, entertainment, sports, and hospitality. As the founder of Clapstem Entertainment, he has produced award-winning films including Jal, a National Award-winning movie, and over 1000 hours of TV and digital content.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-justify">
                    A passionate sports visionary, Puneet owns the Punjab De Sher team in Celebrity Cricket League and the Australia Champions franchise in the World Championship of Legends (WCL), featuring global cricket icons. With a proven track record of turning innovative ideas into thriving enterprises, Puneet brings strategic foresight, cross-industry expertise, and a collaborative mindset to drive Colab's mission of transforming the sports ecosystem through technology.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Amardeep S Reen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/WhatsApp_Image_2025-05-14_at_12.03.43_PM.jpg?v=1747205268"
                      alt="Amardeep S Reen"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Amardeep S Reen</h3>
                    <p className="text-xl text-purple-400 font-semibold">Executive Director</p>
                  </div>
                  <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  <p className="text-gray-300 leading-relaxed text-justify">
                    Amardeep S Reen is a seasoned entrepreneur and philanthropist with over two decades of experience across technology, sports, entertainment, and humanitarian work. A technocrat by training, he has held leadership roles in global tech and consulting firms before transitioning into sports management and film production. He has managed elite sports talent and collaborated with legends across cricket, wrestling, and cinema.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-justify">
                    As CEO of Punjab De Sher (CCL) and Australia Champions (WCL), and co-producer of acclaimed films like Torbaaz, Amardeep continues to bridge the worlds of sport and entertainment. Through his philanthropic initiatives during the COVID-19 pandemic and as founder of ASR Foundation, he has demonstrated a deep commitment to social impact and nation-building.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Board and Committee Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Board & Committee Details
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          {/* Board and KMPs */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              Composition of Board and KMPs
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-6 text-blue-400 font-bold text-lg">Name</th>
                    <th className="text-left py-4 px-6 text-blue-400 font-bold text-lg">Designation</th>
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
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 px-6 text-white font-medium">{member.name}</td>
                      <td className="py-4 px-6 text-gray-300">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Committees Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Audit Committee */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold mb-6 text-blue-400">Audit Committee</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-white font-medium">Rohit Singh</span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-semibold">Chairman</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-white font-medium">Mukesh Jadhav</span>
                  <span className="px-4 py-2 bg-gray-500/20 text-gray-400 rounded-lg text-sm font-semibold">Member</span>
                </div>
              </div>
            </div>

            {/* Nomination and Remuneration Committee */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold mb-6 text-purple-400">Nomination and Remuneration Committee</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-white font-medium">Rohit Singh</span>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-semibold">Chairman</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-white font-medium">Mukesh Jadhav</span>
                  <span className="px-4 py-2 bg-gray-500/20 text-gray-400 rounded-lg text-sm font-semibold">Member</span>
                </div>
              </div>
            </div>

            {/* Stakeholders Relationship Committee */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-pink-500/50 transition-all">
              <h3 className="text-xl font-bold mb-6 text-pink-400">Stakeholders Relationship Committee</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-white font-medium">Mukesh Jadhav</span>
                  <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-lg text-sm font-semibold">Chairman</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-white font-medium">Rohit Singh</span>
                  <span className="px-4 py-2 bg-gray-500/20 text-gray-400 rounded-lg text-sm font-semibold">Member</span>
                </div>
              </div>
            </div>

            {/* Grievance Redressal */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-green-500/50 transition-all">
              <h3 className="text-xl font-bold mb-6 text-green-400">Grievance Redressal Officer</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-xl">
                  <div className="text-white font-medium mb-3">Mukesh Jadhav</div>
                  <div className="text-sm text-gray-400 mb-2">Director</div>
                  <div className="flex flex-col gap-2">
                    <a href="tel:8828865429" className="text-blue-400 hover:text-blue-300 transition-colors">
                      📞 8828865429
                    </a>
                    <a href="mailto:cs@colabcloud.in" className="text-blue-400 hover:text-blue-300 transition-colors">
                      ✉️ cs@colabcloud.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Director Profiles */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
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
                  className="group relative p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {director.name}
                    </h4>
                    <p className="text-gray-400">{director.designation}</p>
                    <div className="mt-4 flex items-center text-blue-400 text-sm font-semibold">
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
