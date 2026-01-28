import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light rounded-full mb-6">
              <span className="text-primary-blue font-medium text-sm">Full-Stack Developer</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-primary-blue">Harsh Raj</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-medium mb-8 leading-relaxed max-w-xl">
              BCA Graduate specializing in MERN Stack Development. Passionate about building scalable web applications with modern technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/harsh-rajputt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-dark text-white rounded-lg font-medium hover:bg-gray-800 transition-all hover:shadow-lg"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
              
              <a
                href="https://linkedin.com/in/harsh-raj-481837263/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-all hover:shadow-lg"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
              
              <a
                href="mailto:harshraj9162192367@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-dark rounded-lg font-medium hover:border-primary-blue hover:text-primary-blue transition-all"
              >
                <FaEnvelope className="text-xl" />
                Email
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-gray-medium">
              <div className="flex items-center gap-2">
                <FaPhone className="text-gray-400" />
                <span>+91 9934992849</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>Noida, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
                  {/* Placeholder for profile image */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {/* Replace this div with actual image */}
                    <img 
                      src="image.png"
                      alt="Harsh Raj"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-blue rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Made in Bolt Badge */}
        <div className="mt-20 flex justify-end">
          <div className="inline-flex items-center gap-2 text-sm text-gray-medium">
            <span className="font-semibold">⚡</span>
            <span>Made in Bolt</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;