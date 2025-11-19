import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { BlogPost } from "@/data/blogPosts";

// Get blog posts from window object (shared from Blog.tsx)
const getAllBlogPosts = (): BlogPost[] => {
  return (window as any).allBlogPosts || [];
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const allPosts = getAllBlogPosts();
    const foundPost = allPosts.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      // Scroll to top when post loads
      window.scrollTo(0, 0);
    } else {
      // Redirect to blog page if post not found
      navigate("/blog");
    }
  }, [slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <InfinityCursor />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.button
              onClick={() => navigate("/blog")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </motion.button>

            {/* Category Badge */}
            {post.category && (
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase">
                  {post.category}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {post.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
              )}
            </motion.div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative pb-16">
        <div className="container px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg prose-invert max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <motion.div
              className="mt-16 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Share this article</h3>
                <div className="flex items-center gap-3">
                  <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {getAllBlogPosts()
                .filter(p => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost, i) => (
                  <motion.article
                    key={relatedPost.slug}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  >
                    <div className="relative rounded-2xl overflow-hidden mb-4">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{relatedPost.date}</p>
                  </motion.article>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
