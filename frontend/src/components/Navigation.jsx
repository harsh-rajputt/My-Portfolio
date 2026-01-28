import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Update navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset added to account for the fixed header height
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Name/Logo */}
          <button
            onClick={() => {
              setActiveSection('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold text-gray-dark hover:text-primary-blue transition-colors"
          >
            Harsh Raj
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-semibold transition-colors hover:text-primary-blue ${
                  activeSection === link.id ? 'text-primary-blue' : 'text-gray-medium'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* The Contact Button from the image */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-primary-blue text-white rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-md hover:shadow-primary-blue/20"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;