import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I’m <span className="text-pink-500">Harsh</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400">
          Full-Stack Developer crafting clean, scalable & user-focused web experiences.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition">
            View Projects
          </button>
          <button className="px-6 py-3 rounded-full border border-pink-500 hover:bg-pink-500/10 transition">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
