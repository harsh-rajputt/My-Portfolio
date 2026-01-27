import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { contactsAPI } from '../api/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await contactsAPI.create(formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-24">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyber-accent"></span>
            <span className="font-display text-xs tracking-[0.3em] text-cyber-accent uppercase">Get In Touch</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyber-accent"></span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Let's Work Together
          </h1>
          
          <p className="text-base md:text-lg text-cyber-text-dim max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Email Card */}
            <div className="bg-cyber-surface border border-cyber-border p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-accent to-cyber-secondary"></div>
              
              <h3 className="text-xl mb-6">Contact Information</h3>
              
              <div className="flex gap-6 items-start">
                <FaEnvelope className="text-2xl text-cyber-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-cyber-text-dim font-display tracking-widest mb-2 uppercase">Email</h4>
                  <a href="mailto:your@email.com" className="text-lg text-cyber-text hover:text-cyber-accent transition-colors">
                    your@email.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="bg-cyber-surface border border-cyber-border p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-accent to-cyber-secondary"></div>
              
              <h3 className="text-xl mb-6">Connect With Me</h3>
              
              <div className="flex flex-col gap-4">
                {[
                  { icon: FaGithub, label: 'GitHub', href: 'https://github.com' },
                  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com' }
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-cyber-accent/5 border border-cyber-border text-cyber-text transition-all duration-300 hover:bg-cyber-accent/10 hover:border-cyber-accent hover:translate-x-1 font-display tracking-wider text-sm group"
                  >
                    <Icon className="text-xl text-cyber-accent transition-transform duration-300 group-hover:scale-125" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none hidden lg:block">
              <div className="w-36 h-36 border-2 border-cyber-accent animate-pulse-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-cyber-secondary rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="order-1 lg:order-2 bg-cyber-surface border border-cyber-border p-8 md:p-12 relative"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-accent to-cyber-secondary"></div>

            <div className="mb-8">
              <label htmlFor="name" className="block mb-3 text-cyber-text font-display text-xs tracking-widest uppercase">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-6 py-4 bg-cyber-dark border-2 border-cyber-border text-cyber-text font-body text-base transition-all duration-300 outline-none focus:border-cyber-accent focus:shadow-glow"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="block mb-3 text-cyber-text font-display text-xs tracking-widest uppercase">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-6 py-4 bg-cyber-dark border-2 border-cyber-border text-cyber-text font-body text-base transition-all duration-300 outline-none focus:border-cyber-accent focus:shadow-glow"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="subject" className="block mb-3 text-cyber-text font-display text-xs tracking-widest uppercase">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className="w-full px-6 py-4 bg-cyber-dark border-2 border-cyber-border text-cyber-text font-body text-base transition-all duration-300 outline-none focus:border-cyber-accent focus:shadow-glow"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block mb-3 text-cyber-text font-display text-xs tracking-widest uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 bg-cyber-dark border-2 border-cyber-border text-cyber-text font-body text-base transition-all duration-300 outline-none resize-y min-h-[150px] focus:border-cyber-accent focus:shadow-glow"
              />
            </div>

            {status.message && (
              <div className={`px-6 py-4 mb-6 rounded font-body ${
                status.type === 'success' 
                  ? 'bg-cyber-secondary/10 border border-cyber-secondary text-cyber-secondary' 
                  : 'bg-cyber-accent/10 border border-cyber-accent text-cyber-accent'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-10 py-5 bg-cyber-accent text-cyber-dark border-2 border-cyber-accent text-sm tracking-widest uppercase relative overflow-hidden transition-all duration-300 shadow-glow disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(255,51,102,0.6)] hover:-translate-y-0.5 group"
            >
              <span className="relative z-10">{loading ? 'Sending...' : 'Send Message'}</span>
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></span>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;