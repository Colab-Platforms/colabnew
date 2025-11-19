import { motion } from "framer-motion";
import { useState } from "react";

interface Service {
  id: string;
  title: string;
  ecosystem: 'Sports' | 'Technology';
  tagline: string;
  story: string;
  whatWeDo: string[];
  impact: string;
  image: string;
}

const services: Service[] = [
  {
    id: 'sports-academy',
    title: 'Elite Sports Academy',
    ecosystem: 'Sports',
    tagline: 'Developing Champions Through Science & Dedication',
    story: 'Excellence isn\'t born—it\'s built. Our Elite Sports Academy combines world-class coaching with cutting-edge sports science to transform raw talent into championship performance. From grassroots development to Olympic preparation, we create environments where athletes don\'t just train—they evolve.',
    whatWeDo: [
      'Olympic-standard training facilities across multiple disciplines',
      'Personalized coaching from international experts',
      'Sports science integration: biomechanics, nutrition, psychology',
      'Talent identification and development programs'
    ],
    impact: 'Training the next generation of Indian sporting heroes',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80'
  },
  {
    id: 'esports-platform',
    title: 'Colab Esports',
    ecosystem: 'Sports',
    tagline: 'Building India\'s Esports Ecosystem',
    story: 'Gaming is no longer just entertainment—it\'s a career, a passion, and a global phenomenon. Colab Esports is creating the infrastructure for India\'s esports revolution. From professional teams to grassroots tournaments, from streaming platforms to player development, we\'re building an ecosystem where gamers become champions.',
    whatWeDo: [
      'Professional esports teams competing globally',
      'Tournament platforms connecting millions of gamers',
      'Player development and coaching programs',
      'Esports arena infrastructure and broadcasting'
    ],
    impact: 'Establishing India as a global esports powerhouse',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80'
  },
  {
    id: 'sports-tech',
    title: 'Sports Tech Innovation',
    ecosystem: 'Sports',
    tagline: 'Where Technology Meets Athletic Performance',
    story: 'Every movement tells a story. Every heartbeat holds data. Sports Tech Innovation translates athletic performance into actionable intelligence. Using wearable sensors, AI analytics, and biomechanical modeling, we help athletes understand their bodies, optimize their training, and push beyond their limits.',
    whatWeDo: [
      'Wearable technology for real-time performance tracking',
      'AI-powered video analysis and tactical insights',
      'Injury prediction and prevention systems',
      'Performance optimization through data science'
    ],
    impact: 'Revolutionizing how athletes train and compete',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80'
  },
  {
    id: 'ai-intelligence',
    title: 'Colab Intelligence',
    ecosystem: 'Technology',
    tagline: 'Enterprise AI for Mission-Critical Decisions',
    story: 'In high-stakes environments, decisions can\'t wait. Colab Intelligence delivers enterprise-grade AI solutions for defense, intelligence, and strategic operations. Our systems don\'t just process data—they understand context, predict outcomes, and provide actionable intelligence when it matters most.',
    whatWeDo: [
      'Machine learning models for threat detection and analysis',
      'Natural language processing for intelligence gathering',
      'Predictive analytics for strategic planning',
      'Computer vision for surveillance and reconnaissance'
    ],
    impact: 'Empowering critical decision-making with AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80'
  },
  {
    id: 'aegis-drones',
    title: 'Aegis Drones',
    ecosystem: 'Technology',
    tagline: 'Autonomous Systems for Complex Missions',
    story: 'The future of aerial operations is autonomous, intelligent, and precise. Aegis Drones develops next-generation UAV systems for defense, surveillance, and mission-critical operations. Our drones don\'t just fly—they think, adapt, and execute complex missions with minimal human intervention.',
    whatWeDo: [
      'Autonomous navigation and obstacle avoidance',
      'Real-time surveillance and reconnaissance',
      'Swarm intelligence for coordinated operations',
      'Secure communication and data transmission'
    ],
    impact: 'Redefining aerial operations through autonomy',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80'
  },
  {
    id: 'defense-systems',
    title: 'Defense Systems',
    ecosystem: 'Technology',
    tagline: 'Next-Gen Security for Critical Infrastructure',
    story: 'Security isn\'t reactive—it\'s predictive. Our Defense Systems division builds next-generation security solutions for government and enterprise clients. From cyber defense to physical security, from threat intelligence to crisis response, we create comprehensive security ecosystems that anticipate and neutralize threats before they materialize.',
    whatWeDo: [
      'Integrated security platforms for critical infrastructure',
      'Cyber defense and threat intelligence systems',
      'Access control and perimeter security solutions',
      'Crisis management and emergency response systems'
    ],
    impact: 'Protecting what matters most with advanced security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80'
  }
];

const ServicesNew = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeEcosystem, setActiveEcosystem] = useState<'all' | 'Sports' | 'Technology'>('all');

  const filteredServices = activeEcosystem === 'all' 
    ? services 
    : services.filter(s => s.ecosystem === activeEcosystem);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full text-sm font-bold text-primary uppercase tracking-wider"
          >
            What We Do
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="text-white">Our Services &</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
            Bridging sports excellence and technological innovation to create transformative solutions
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-24"
        >
          <div className="inline-flex bg-black/40 backdrop-blur-2xl rounded-2xl p-1.5 border border-white/10">
            {(['all', 'Sports', 'Technology'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveEcosystem(filter)}
                className={`px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 ${
                  activeEcosystem === filter
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {filter === 'all' ? 'All Services' : filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Display */}
        <div className="space-y-32">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl blur-3xl"
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative">
                {/* Main Content Grid */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image Section */}
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <motion.div
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {/* Ecosystem Badge */}
                      <div className="absolute top-6 right-6 px-4 py-2 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10">
                        <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {service.ecosystem}
                        </span>
                      </div>

                      {/* Number Badge */}
                      <div className="absolute bottom-6 left-6 w-14 h-14 bg-black/80 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/10">
                        <span className="text-2xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Tagline */}
                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="text-sm font-bold text-primary uppercase tracking-wider"
                    >
                      {service.tagline}
                    </motion.p>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl md:text-5xl font-black text-white leading-tight"
                    >
                      {service.title}
                    </motion.h3>

                    {/* Story */}
                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-lg text-gray-300 leading-relaxed"
                    >
                      {service.story}
                    </motion.p>

                    {/* What We Do */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3 pt-4"
                    >
                      <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">What We Do</p>
                      <ul className="space-y-2">
                        {service.whatWeDo.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Impact */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-3 pt-4"
                    >
                      <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Impact</p>
                        <p className="text-lg font-semibold text-white">{service.impact}</p>
                      </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.a
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      href={`/${service.id}`}
                      className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:gap-4 transition-all duration-300 group"
                    >
                      Learn More
                      <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                    </motion.a>
                  </div>
                </div>

                {/* Divider */}
                {index < filteredServices.length - 1 && (
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
