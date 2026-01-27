import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="relative bg-cyber-surface border border-cyber-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyber-accent hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(255,51,102,0.2)] h-full flex flex-col group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-cyber-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10"></div>

      {/* Image Section */}
      <div className="relative w-full pt-[60%] overflow-hidden bg-cyber-dark">
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay with links */}
        <div className="absolute top-0 left-0 w-full h-full bg-cyber-dark/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20">
          <div className="flex gap-6">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-transparent border-2 border-cyber-accent text-cyber-accent text-2xl transition-all duration-300 hover:bg-cyber-accent hover:text-cyber-dark hover:shadow-glow hover:scale-110 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                style={{ transitionDelay: '0.1s' }}
                aria-label="View GitHub"
              >
                <FaGithub />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-transparent border-2 border-cyber-accent text-cyber-accent text-xl transition-all duration-300 hover:bg-cyber-accent hover:text-cyber-dark hover:shadow-glow hover:scale-110 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                style={{ transitionDelay: '0.2s' }}
                aria-label="View Live Site"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex-1 flex flex-col relative z-20">
        <h3 className="text-xl md:text-2xl mb-4 text-cyber-text transition-colors duration-300 group-hover:text-cyber-accent">
          {project.title}
        </h3>
        <p className="text-cyber-text-dim leading-relaxed mb-6 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-4 py-2 bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent text-xs font-display tracking-widest uppercase transition-all duration-300 group-hover:bg-cyber-accent/20 group-hover:border-cyber-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-t-cyber-accent border-l-[50px] border-l-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-30"></div>
    </motion.div>
  );
};

export default ProjectCard;