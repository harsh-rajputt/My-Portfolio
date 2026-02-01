import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEdit } from 'react-icons/fa';
import { projectsAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  /* 
   * Backend is running now, restoring API functionality
   */
  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await projectsAPI.getFeatured();

      // ✅ ENSURE ARRAY NO MATTER WHAT BACKEND RETURNS
      const projectsArray = Array.isArray(response?.data)
        ? response.data
        : Array.isArray(response?.data?.data)
          ? response.data.data
          : [];

      if (projectsArray.length === 0) {
        throw new Error('Projects array empty');
      }

      setProjects(projectsArray);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects');

      // ✅ FALLBACK DATA
      setProjects([
        {
          _id: '1',
          title: 'YouTube',
          description:
            'Video streaming platform with user authentication .',
          image:
            'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
          technologies: ['Express', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
          github: 'https://github.com/harsh-rajputt/YouTube',
          liveUrl: '#',
        },
        {
          _id: '2',
          title: 'MegaBlog',
          description:
            'A blog platform with user authentication and content management.',
          image:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
          technologies: ['React', 'Appwrite', 'Redux', 'TinyMCE'],
          github: 'https://github.com/harsh-rajputt/MegaBlog',
          liveUrl: 'https://mega-blog-murex-gamma.vercel.app',
        },
        {
          _id: '3',
          title: 'Social Media Dashboard',
          description:
            'Analytics dashboard for tracking social media metrics with data visualization.',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
          technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Chart.js'],
          github: 'https://github.com',
          liveUrl: 'https://example.com',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-blue mx-auto mb-12"></div>
          <div className="flex justify-center py-20">
            <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-primary-blue"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-blue mx-auto mb-4"></div>

          {error && (
            <p className="text-center text-yellow-600 text-sm mb-8">
              {error} — showing sample projects
            </p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {Array.isArray(projects) &&
              projects.map((project, index) => (
                <motion.div
                  key={project._id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all group"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center gap-4 pb-6">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-primary-blue hover:text-white transition"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-primary-blue hover:text-white transition"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {user && user.role === 'admin' && (
                        <button
                          onClick={() => navigate('/admin', { state: { editProject: project } })}
                          className="p-3 bg-white rounded-full hover:bg-yellow-500 hover:text-white transition"
                          title="Edit Project"
                        >
                          <FaEdit />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-blue transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-medium mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(project.technologies) &&
                        project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-light text-primary-blue text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
