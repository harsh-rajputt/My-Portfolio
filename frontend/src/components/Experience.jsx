import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Tech Solutions Pvt Ltd',
      period: '2023 - Present',
      location: 'Noida, India',
      description: [
        'Developed and maintained full-stack web applications using MERN stack',
        'Collaborated with cross-functional teams to deliver high-quality products',
        'Implemented RESTful APIs and optimized database queries for better performance',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Digital Innovations',
      period: '2022 - 2023',
      location: 'Remote',
      description: [
        'Built responsive user interfaces using React and Tailwind CSS',
        'Integrated third-party APIs and services',
        'Participated in agile development processes',
        'Contributed to open-source projects',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'University Name', // Update with your specific college/university
      period: '2020 - 2023',
      location: 'Noida, India',
      description: 'Specialized in Software Development and Web Technologies',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-blue font-bold tracking-widest uppercase text-sm"
          >
            My Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-dark mt-3"
          >
            Experience & Education
          </motion.h2>
        </div>
          
        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-10 text-gray-dark flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center text-primary-blue">💼</span>
              Work Experience
            </h3>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10 border-l-2 border-primary-blue/20"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-blue rounded-full border-4 border-white shadow-sm"></div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-dark">{exp.title}</h4>
                        <p className="text-primary-blue font-semibold">{exp.company}</p>
                      </div>
                      <div className="lg:text-right">
                        <p className="text-gray-medium font-semibold bg-gray-light px-3 py-1 rounded-md text-sm">{exp.period}</p>
                        <p className="text-gray-400 text-xs mt-2 uppercase tracking-wide font-bold">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-medium text-sm md:text-base leading-relaxed flex items-start gap-3">
                          <span className="text-primary-blue mt-1.5 shrink-0">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-10 text-gray-dark flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center text-primary-blue">🎓</span>
              Education
            </h3>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative pl-10 border-l-2 border-primary-blue/20"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-blue rounded-full border-4 border-white shadow-sm"></div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-dark">{edu.degree}</h4>
                        <p className="text-primary-blue font-semibold">{edu.institution}</p>
                      </div>
                      <div className="lg:text-right">
                        <p className="text-gray-medium font-semibold bg-gray-light px-3 py-1 rounded-md text-sm">{edu.period}</p>
                        <p className="text-gray-400 text-xs mt-2 uppercase tracking-wide font-bold">{edu.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-medium leading-relaxed font-body">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;