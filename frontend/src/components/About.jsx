import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary-blue mx-auto mb-12"></div>
          
          <div className="space-y-6 text-lg text-gray-medium leading-relaxed">
            <p>
              I'm a passionate Full-Stack Developer with expertise in building modern web applications 
              using the MERN stack. As a BCA graduate, I combine strong theoretical knowledge with 
              practical development skills to create efficient and scalable solutions.
            </p>
            
            <p>
              My journey in web development has equipped me with a deep understanding of both 
              front-end and back-end technologies. I enjoy turning complex problems into simple, 
              beautiful, and intuitive designs.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;