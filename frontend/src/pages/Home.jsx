import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

const API_URL = import.meta.env.VITE_API_URL;

// fallback data (VERY IMPORTANT)
const FALLBACK_PROJECTS = [
  {
    _id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with authentication, payments and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    github: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    _id: "2",
    title: "Task Management App",
    description:
      "Team collaboration app with real-time updates and role management.",
    technologies: ["React", "Express", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    github: "https://github.com",
  },
  {
    _id: "3",
    title: "Analytics Dashboard",
    description:
      "Visual analytics dashboard with charts and performance tracking.",
    technologies: ["React", "Chart.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    github: "https://github.com",
  },
];

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/v1/projects/featured`
        );

        // SAFETY CHECK
        if (Array.isArray(res.data)) {
          setProjects(res.data);
        } else if (Array.isArray(res.data?.data)) {
          setProjects(res.data.data);
        } else {
          setProjects(FALLBACK_PROJECTS);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects(FALLBACK_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <Hero />

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-32 px-6 max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-pink-500 tracking-[0.3em] text-xs uppercase">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-semibold mt-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            A selection of recent work showcasing real-world problem
            solving, clean UI, and scalable backend architecture.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center text-gray-400 text-lg">
            Loading projects...
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project._id || index}
                project={project}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
