import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { ShoppingCart, Package, Shield, TrendingUp, Star, Search, Filter, Heart, ArrowRight } from "lucide-react";

const SportsMarketplace = () => {
  const categories = [
    { name: "Cricket", products: 1200, image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&q=80" },
    { name: "Football", products: 980, image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80" },
    { name: "Badminton", products: 650, image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&q=80" },
    { name: "Tennis", products: 540, image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&q=80" },
    { name: "Fitness", products: 2100, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" },
    { name: "Accessories", products: 1800, image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&q=80" },
  ];

  const featuredProducts = [
    { name: "Pro Cricket Bat", price: "₹12,999", rating: 4.8, image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&q=80" },
    { name: "Premium Football", price: "₹2,499", rating: 4.9, image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=400&q=80" },
    { name: "Running Shoes", price: "₹8,999", rating: 4.7, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
    { name: "Gym Equipment Set", price: "₹24,999", rating: 4.6, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero - E-commerce Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/20 border border-primary/30 mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ShoppingCart className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">E-Commerce Platform</span>
              </motion.div>

              <h1 className="font-serif font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] mb-8">
                <span className="block text-foreground">Sports</span>
                <span className="block text-primary">Marketplace</span>
              </h1>

              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
                India's premier destination for authentic sports equipment, apparel, and accessories. Shop from 10,000+ verified products.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <motion.button
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white font-bold flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  Start Shopping
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="px-8 py-4 rounded-2xl border-2 border-primary/30 text-foreground font-bold hover:bg-primary/5"
                  whileHover={{ scale: 1.05 }}
                >
                  Become a Seller
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "10K+", label: "Products" },
                  { value: "50K+", label: "Customers" },
                  { value: "100%", label: "Authentic" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-black text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Showcase */}
            <motion.div 
              className="relative h-[600px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <motion.div 
                    className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&q=80" alt="Product" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80" alt="Product" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
                <div className="space-y-4 pt-12">
                  <motion.div 
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" alt="Product" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div 
                    className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80" alt="Product" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Shop by <span className="text-primary">Category</span>
            </h2>
            <p className="text-xl text-muted-foreground">Browse our extensive collection across all sports</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {categories.map((category, i) => (
              <motion.div
                key={i}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-serif font-bold text-4xl text-white mb-2">{category.name}</h3>
                  <p className="text-white/80">{category.products} Products</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Featured <span className="text-primary">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground">Handpicked bestsellers from top brands</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={i}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-primary">{product.price}</span>
                    <motion.button
                      className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: "100% Authentic", desc: "Verified products only" },
              { icon: Package, title: "Fast Delivery", desc: "2-3 days shipping" },
              { icon: TrendingUp, title: "Best Prices", desc: "Competitive rates" },
              { icon: Star, title: "Top Rated", desc: "4.8/5 customer rating" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-3xl bg-primary/5 border border-primary/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <badge.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl text-foreground mb-2">{badge.title}</h3>
                <p className="text-muted-foreground">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportsMarketplace;
