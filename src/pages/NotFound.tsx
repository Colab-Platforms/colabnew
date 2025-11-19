import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.05) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* 404 Number */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="font-serif font-black text-[150px] md:text-[200px] lg:text-[250px] leading-none"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #a855f7 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                404
              </motion.h1>
            </motion.div>

            {/* Error Icon */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                  <AlertCircle className="w-12 h-12 text-primary" />
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
                Page Not Found
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Oops! The page you're looking for seems to have wandered off into the digital void.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Attempted path: <code className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-primary font-mono text-sm">{location.pathname}</code>
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={() => navigate('/')}
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
              </motion.button>

              <motion.button
                onClick={() => navigate(-1)}
                className="group px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 hover:border-primary/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </motion.button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Search className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Looking for something?</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Contact', path: '/contact' },
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.path}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Corner Accents */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 border-b-2 border-r-2 border-secondary/30 rounded-br-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        />
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;

