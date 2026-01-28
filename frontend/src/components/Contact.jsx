import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { contactsAPI } from '../services/api.jsx'; // Ensure path matches your api helper

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await contactsAPI.create(formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'harshraj9162192367@gmail.com',
      link: 'mailto:harshraj9162192367@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9934992849',
      link: 'tel:+919934992849'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Noida, India',
      link: null
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/harsh-rajputt', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/harsh-raj-481837263/', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-custom">
        {/* Standard Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-blue font-bold tracking-widest uppercase text-sm"
          >
            Connection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-dark mt-3"
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-medium mt-4 max-w-2xl mx-auto font-body">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Details Column */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-light rounded-2xl p-6 hover:shadow-soft transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-xl text-primary-blue shadow-sm group-hover:bg-primary-blue group-hover:text-white transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-gray-dark font-semibold hover:text-primary-blue transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-dark font-semibold">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Connect Card */}
            <div className="bg-primary-blue rounded-2xl p-8 text-white shadow-lg shadow-primary-blue/20">
              <h3 className="font-bold text-xl mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white hover:text-primary-blue transition-all"
                    aria-label={social.label}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-large">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-dark ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-light border-transparent focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/5 outline-none transition-all font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-dark ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-light border-transparent focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/5 outline-none transition-all font-medium"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="subject" className="text-sm font-bold text-gray-dark ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-light border-transparent focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/5 outline-none transition-all font-medium"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-bold text-gray-dark ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl bg-gray-light border-transparent focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/5 outline-none transition-all font-medium resize-none"
                  placeholder="Project details..."
                />
              </div>

              {status.message && (
                <div className={`mb-8 p-4 rounded-xl font-medium ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-700' 
                    : 'bg-red-50 text-red-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-blue text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-primary-blue/30 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;