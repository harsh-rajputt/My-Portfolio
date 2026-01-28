import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDatabase, FaPython, 
  FaGitAlt, FaCode, FaServer, FaTerminal 
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "SQL", icon: <FaDatabase className="text-blue-600" /> },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Hadoop", icon: <FaServer className="text-yellow-600" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-blue font-bold tracking-widest uppercase text-sm"
          >
            Technical Stack
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-dark mt-3"
          >
            My Expert Skills
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-gray-light rounded-3xl shadow-soft hover:shadow-medium transition-all"
            >
              <h3 className="text-xl font-bold text-gray-dark mb-6 border-b border-gray-200 pb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-4">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-gray-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;