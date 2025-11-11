import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Gamepad2, Trophy, Users, Tv, ArrowRight, Calendar, MapPin, Clock, Star, Target, TrendingUp, Award, Zap, Play, DollarSign } from "lucide-react";

const Esports = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=80" alt="Esports" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Gamepad2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase">Esports</span>
            </motion.div>

            <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
              <span className="block text-white">Digital</span>
              <span className="block text-primary">Champions</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Professional gaming organization leading India's esports revolution.
            </p>

            <motion.button className="px-8 py-4 rounded-2xl bg-primary text-white font-bold flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              Join Tournament
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Tournaments - Upcoming Events */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Upcoming <span className="text-primary">Tournaments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compete in India's biggest esports events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                game: "VALORANT",
                title: "Colab Champions League",
                date: "March 15-20, 2024",
                location: "Mumbai, India",
                prize: "₹50 Lakhs",
                teams: "32 Teams",
                image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
                status: "Registration Open"
              },
              {
                game: "CS:GO",
                title: "India Masters",
                date: "April 5-10, 2024",
                location: "Bangalore, India",
                prize: "₹30 Lakhs",
                teams: "16 Teams",
                image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80",
                status: "Coming Soon"
              },
              {
                game: "BGMI",
                title: "Mobile Legends Cup",
                date: "May 1-7, 2024",
                location: "Delhi, India",
                prize: "₹40 Lakhs",
                teams: "64 Teams",
                image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
                status: "Registration Open"
              },
            ].map((tournament, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-96 rounded-3xl overflow-hidden">
                  <img src={tournament.image} alt={tournament.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <div className={`px-4 py-2 rounded-full backdrop-blur-sm border ${
                      tournament.status === "Registration Open" 
                        ? "bg-primary/20 border-primary/40 text-primary" 
                        : "bg-white/10 border-white/20 text-white"
                    }`}>
                      <span className="text-xs font-bold uppercase">{tournament.status}</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{tournament.game}</div>
                    <h3 className="font-serif font-bold text-3xl text-white mb-4">{tournament.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-white/80">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{tournament.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{tournament.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-black text-primary">{tournament.prize}</div>
                        <div className="text-xs text-white/60">Prize Pool</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{tournament.teams}</div>
                        <div className="text-xs text-white/60">Competing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams - Professional Roster */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Our <span className="text-primary">Teams</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet India's top professional gaming rosters
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { game: "VALORANT", rank: "#1 India", players: "5 Players", achievements: "3 Major Wins" },
              { game: "CS:GO", rank: "#2 India", players: "5 Players", achievements: "2 Major Wins" },
              { game: "BGMI", rank: "#1 India", players: "4 Players", achievements: "5 Major Wins" },
              { game: "FIFA", rank: "#3 India", players: "2 Players", achievements: "1 Major Win" },
            ].map((team, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6" whileHover={{ rotate: 360 }}>
                  <Gamepad2 className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-serif font-bold text-2xl mb-2">{team.game}</h3>
                <div className="text-sm text-primary font-bold mb-4">{team.rank}</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Players</span>
                    <span className="font-bold">{team.players}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Achievements</span>
                    <span className="font-bold">{team.achievements}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming - Platform Features */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Streaming <span className="text-primary">Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch live tournaments and connect with the community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Tv, title: "Live Streaming", desc: "Watch all tournaments in HD quality with zero lag" },
              { icon: Users, title: "Interactive Chat", desc: "Engage with players and fans in real-time" },
              { icon: Trophy, title: "Match Replays", desc: "Rewatch epic moments and learn from pros" },
              { icon: Star, title: "Multi-View", desc: "Watch multiple streams simultaneously" },
              { icon: Clock, title: "VOD Library", desc: "Access full tournament archives anytime" },
              { icon: Target, title: "Player POV", desc: "See the game from your favorite player's perspective" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6" whileHover={{ rotate: 360, scale: 1.1 }}>
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-serif font-bold text-2xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training - How to Improve */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Level Up Your <span className="text-primary">Game</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional training programs to improve your skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Pro Coaching",
                desc: "One-on-one sessions with professional players",
                features: ["Personalized training", "VOD reviews", "Strategy sessions", "Performance analysis"],
                price: "₹999/month",
                image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80"
              },
              {
                title: "Team Training",
                desc: "Comprehensive team coordination and strategy",
                features: ["Team scrims", "Communication drills", "Map strategies", "Tournament prep"],
                price: "₹4,999/month",
                image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80"
              },
            ].map((program, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-3xl font-black text-primary mb-2">{program.price}</div>
                  </div>
                </div>
                <h3 className="font-serif font-bold text-3xl mb-3">{program.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{program.desc}</p>
                <div className="space-y-2">
                  {program.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community - Join the Movement */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Join Our <span className="text-primary">Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of India's fastest-growing esports community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: "10K+", label: "Active Players", icon: Users },
              { value: "50+", label: "Tournaments", icon: Trophy },
              { value: "1M+", label: "Monthly Views", icon: Tv },
              { value: "₹2Cr+", label: "Prize Money", icon: DollarSign },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-5xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes - What You Can Win */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-20 h-20 text-primary mx-auto mb-8" />
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Win Big <span className="text-primary">Prizes</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Compete for cash prizes, gaming gear, and professional contracts
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Cash Prizes", value: "₹2Cr+", desc: "Total prize pool" },
                { title: "Gaming Gear", value: "₹50L+", desc: "Equipment worth" },
                { title: "Pro Contracts", value: "20+", desc: "Players signed" },
              ].map((prize, i) => (
                <motion.div
                  key={i}
                  className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-bold text-xl mb-2">{prize.title}</h4>
                  <div className="text-4xl font-black text-primary mb-2">{prize.value}</div>
                  <p className="text-sm text-muted-foreground">{prize.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="px-10 py-5 rounded-2xl bg-primary text-white font-bold text-lg flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-sm text-foreground font-bold text-lg border border-border flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6" />
                Watch Highlights
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Esports;
