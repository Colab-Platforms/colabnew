import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfinityCursor from "@/components/InfinityCursor";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Linkedin, Twitter, Instagram, Facebook, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS Configuration
      const serviceId ='service_2pzw09d';
      const templateId = 'template_jzovk2m';
      const publicKey = 'Zw0oX8ch-4XoOi5TF';

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString('en-IN', { 
          dateStyle: 'medium', 
          timeStyle: 'short',
          timeZone: 'Asia/Kolkata'
        }),
        to_email: 'techcolabplatform@gmail.com',
      };

      console.log('Sending email with params:', templateParams);

      // Send email via EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('Email sent successfully:', result);

      // Send to Google Sheets (optional)
      try {
        await sendToGoogleSheets(formData);
      } catch (sheetError) {
        console.log('Google Sheets error (non-critical):', sheetError);
      }

      // Success
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error: any) {
      console.error('Error sending message:', error);
      console.error('Error details:', error.text || error.message);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to send data to Google Sheets
  const sendToGoogleSheets = async (data: typeof formData) => {
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzbpALJYKwqH_56eEtIH34jVD7-0USJ_NSUybS-_M9YAFbv_-O-LQTEcLzYUgkIGZCw/exec';
      
      // Build query string for GET request (more reliable with Google Apps Script)
      const params = new URLSearchParams({
        name: data.name,
        email: data.email,
        phone: data.phone || 'Not provided',
        subject: data.subject,
        message: data.message,
        timestamp: new Date().toLocaleString('en-IN', { 
          dateStyle: 'medium', 
          timeStyle: 'short',
          timeZone: 'Asia/Kolkata'
        })
      });

      const urlWithParams = `${scriptUrl}?${params.toString()}`;
      
      console.log('Sending to Google Sheets via GET...');

      const response = await fetch(urlWithParams, {
        method: 'GET',
        mode: 'no-cors', // Important for Google Apps Script
      });

      // With no-cors, we can't read the response, but if no error thrown, it worked
      console.log('✅ Data sent to Google Sheets successfully');
      
    } catch (error) {
      console.error('❌ Error sending to Google Sheets:', error);
      // Don't throw error - we still want to show success if email was sent
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["techcolabplatform@gmail.com"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 8976866292"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["202, Takshashila Building, Samant Estate", "JP Road, Goregaon East, Mumbai 400063"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const offices = [
    {
      city: "Mumbai",
      address: "202, Takshashila Building, Samant Estate, JP Road, Goregaon East",
      image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&q=80",
    },
    {
      city: "Bangalore",
      address: "Coming Soon - Tech Hub",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80",
    },
    {
      city: "Delhi",
      address: "Coming Soon - Corporate Center",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
    },
  ];

  return (
    <>      <div className="min-h-screen bg-background text-foreground">
        <InfinityCursor />
        <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.05) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-8"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">Get In Touch</span>
                </motion.div>

                <h1 className="font-serif font-black text-6xl md:text-7xl lg:text-8xl leading-[0.85] mb-8">
                  <span className="block text-foreground">Let's Build</span>
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Together</span>
                </h1>

                <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
                  Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "24/7", label: "Support" },
                    { value: "<1hr", label: "Response" },
                    { value: "100%", label: "Satisfaction" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="text-center p-4 rounded-2xl bg-primary/5 border border-primary/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Contact Info Cards */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    className="group relative p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${info.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, j) => (
                        <p key={j} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left - Form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                  <h2 className="font-serif font-black text-4xl md:text-5xl mb-6">
                    Send us a <span className="text-primary">Message</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Your Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Subject</label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
                          placeholder="Project Inquiry"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <p className="text-green-500 font-medium">
                          Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </p>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <p className="text-red-500 font-medium">
                          Oops! Something went wrong. Please try again or email us directly.
                        </p>
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Right - Additional Info */}
              <motion.div
                className="lg:col-span-2 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {/* Social Links */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                  <h3 className="font-bold text-xl text-foreground mb-6">Follow Us</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Linkedin, name: "LinkedIn", color: "hover:bg-blue-500/10" },
                      { icon: Twitter, name: "Twitter", color: "hover:bg-sky-500/10" },
                      { icon: Instagram, name: "Instagram", color: "hover:bg-pink-500/10" },
                      { icon: Facebook, name: "Facebook", color: "hover:bg-blue-600/10" },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        className={`flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 ${social.color} transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <social.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-xl text-foreground mb-2">Looking for Careers?</h3>
                  <p className="text-muted-foreground mb-4">
                    Join our team and help build the future of sports and technology.
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    View Open Positions
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif font-black text-5xl md:text-6xl mb-6">
              Our <span className="text-primary">Offices</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our locations across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-80">
                  <img src={office.image} alt={office.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <MapPin className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-serif font-bold text-3xl text-white mb-2">{office.city}</h3>
                    <p className="text-white/80">{office.address}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container relative z-10 px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-2xl text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">Map integration coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Contact;

