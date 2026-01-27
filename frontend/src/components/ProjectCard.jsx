import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-6
        hover:border-pink-500/50
        transition
      "
    >
      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="text-gray-400 mt-3 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech?.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-pink-500/10 text-pink-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        className="inline-block mt-6 text-pink-400 hover:text-pink-300"
      >
        View Project →
      </a>
    </motion.div>
  );
}
