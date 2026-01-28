import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // bg-black and text-white provide the high-contrast look you want
    <footer className="py-10 bg-black text-white border-t border-white/10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm md:text-base tracking-wider opacity-90">
              © {currentYear} <span className="font-bold">Harsh Raj</span>. 
              Built with React & Tailwind CSS.
            </p>
          </motion.div>

          {/* Simple subtle divider or top link */}
          <div className="mt-4 w-12 h-px bg-white/20"></div>
          
          <a
            href="#"
            className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors"
          >
            Scroll to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;