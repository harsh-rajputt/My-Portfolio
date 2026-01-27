import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] py-6 transition-all duration-300 ${
      isScrolled ? 'bg-cyber-dark/95 backdrop-blur-md py-4 shadow-2xl border-b border-cyber-border' : 'bg-transparent'
    }`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl text-cyber-text tracking-widest uppercase relative z-20">
          <span className="text-cyber-accent text-3xl mx-1 inline-block animate-pulse">{'<'}</span>
          Portfolio
          <span className="text-cyber-accent text-3xl mx-1 inline-block animate-pulse">{'/>'}</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-8 h-0.5 bg-cyber-accent shadow-glow transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-8 h-0.5 bg-cyber-accent shadow-glow transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-8 h-0.5 bg-cyber-accent shadow-glow transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`md:flex md:gap-12 md:items-center fixed md:static top-0 right-0 h-screen md:h-auto w-[70%] max-w-[300px] md:w-auto md:max-w-none bg-cyber-surface/98 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none flex-col md:flex-row justify-center gap-8 border-l md:border-l-0 border-cyber-border shadow-2xl md:shadow-none transition-all duration-500 ${
          isMenuOpen ? 'right-0' : '-right-full md:right-0'
        }`}>
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-display text-sm md:text-base tracking-[0.15em] uppercase px-8 md:px-0 py-4 md:py-2 text-cyber-text-dim hover:text-cyber-accent transition-colors duration-300 group opacity-0 md:opacity-100 ${
                isMenuOpen ? 'animate-slideInLeft' : ''
              } ${location.pathname === link.path ? 'text-cyber-accent' : ''}`}
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <span className="relative z-10">{link.label}</span>
              <span className={`absolute bottom-0 left-0 md:left-0 w-full h-0.5 bg-cyber-accent shadow-glow transform transition-transform duration-400 ${
                location.pathname === link.path 
                  ? 'scale-x-100 bg-cyber-secondary shadow-glow-secondary' 
                  : 'scale-x-0 group-hover:scale-x-100'
              } origin-left`}></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;