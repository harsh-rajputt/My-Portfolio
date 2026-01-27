import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
// import { projectsAPI } from '../api/api';
import axios from 'axios';
import  API_URL  from '../api/api.jsx';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/v1/projects/featured`);
        setProjects(response.data.data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Sample data for demonstration
        setProjects([
          {
            _id: '1',
            title: 'E-Commerce Platform',
            description: 'Full-featured online store with payment integration, user authentication, and admin dashboard.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
            github: 'https://github.com',
            liveUrl: 'https://example.com',
            featured: true
          },
          {
            _id: '2',
            title: 'Task Management App',
            description: 'Collaborative project management tool with real-time updates and team features.',
            technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
            github: 'https://github.com',
            liveUrl: 'https://example.com',
            featured: true
          },
          {
            _id: '3',
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for tracking social media metrics across multiple platforms.',
            technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Chart.js'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
            github: 'https://github.com',
            featured: true
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="pt-0">
      <Hero />
      
      <section id="projects" className="py-32 relative">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyber-accent"></span>
              <span className="font-display text-xs tracking-[0.3em] text-cyber-accent uppercase">Portfolio</span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyber-accent"></span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Featured Projects
            </h2>
            
            <p className="text-base md:text-lg text-cyber-text-dim max-w-3xl mx-auto leading-relaxed">
              A selection of my recent work showcasing diverse technical skills
              and creative problem-solving across various domains.
            </p>
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="text-center py-16 font-display text-cyber-text-dim text-xl tracking-widest">
              Loading projects...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-12">
              {projects.map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;