import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = e.clientX + 'px';
        cursorGlowRef.current.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32 pb-16 overflow-hidden">
      <div ref={cursorGlowRef} className="cursor-glow"></div>
      
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Label */}
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyber-accent"></span>
            <span className="font-display text-xs tracking-[0.3em] text-cyber-accent uppercase">Full Stack Developer</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyber-accent"></span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-8 font-normal">
            <span className="block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Building Digital
            </span>
            <span className="block text-cyber-accent text-shadow-glow opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Experiences
            </span>
            <span className="block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              That Matter
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed text-cyber-text-dim max-w-2xl mb-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            Crafting elegant solutions with modern web technologies.
            Specialized in MERN stack development with a passion for
            creating intuitive and performant applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 mb-16 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <motion.a
              href="#projects"
              className="relative px-10 py-4 text-sm tracking-widest uppercase bg-cyber-accent text-cyber-dark border-2 border-cyber-accent shadow-glow overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-10 py-4 text-sm tracking-widest uppercase bg-transparent text-cyber-text border-2 border-cyber-border hover:border-cyber-secondary hover:text-cyber-secondary hover:shadow-glow-secondary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            {[
              { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:your@email.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-2 border-cyber-border text-cyber-text text-xl md:text-2xl transition-all duration-300 relative overflow-hidden group hover:text-cyber-dark hover:border-cyber-accent hover:shadow-glow"
                aria-label={label}
              >
                <span className="absolute top-0 left-0 w-full h-full bg-cyber-accent transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 -z-10"></span>
                <Icon className="relative z-10" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
          <div className="w-96 h-96 bg-[length:50px_50px] animate-pulse-slow" style={{
            backgroundImage: 'linear-gradient(#ff3366 1px, transparent 1px), linear-gradient(90deg, #ff3366 1px, transparent 1px)'
          }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-cyber-secondary rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1/2 left-1/2 w-0.5 h-48 bg-gradient-to-b from-cyber-accent to-transparent"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyber-text-dim text-xs tracking-[0.2em] uppercase font-display opacity-0 animate-fadeInUp" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
        <div className="w-px h-10 bg-gradient-to-b from-cyber-accent to-transparent animate-scrollDown"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;