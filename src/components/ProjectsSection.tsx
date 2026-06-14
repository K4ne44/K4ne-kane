"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Inventory Management System",
    description:
      "A full-stack inventory system with real-time tracking, CRUD operations, and reporting dashboards.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    color: "#7c3aed",
    gradient: "from-purple-600 to-blue-600",
    icon: "fa-boxes",
  },
  {
    title: "Authentication System",
    description:
      "Secure authentication with JWT, OAuth2, role-based access, and session management.",
    tech: ["Next.js", "JWT", "OAuth", "PostgreSQL"],
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    icon: "fa-lock",
  },
  {
    title: "Wedding Equipment Rental",
    description:
      "A rental platform for wedding equipment with booking, payments, and inventory management.",
    tech: ["React", "Node.js", "MySQL", "Stripe"],
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    icon: "fa-ring",
  },
  {
    title: "Student Management System",
    description:
      "Comprehensive student management with attendance tracking, grades, and communication tools.",
    tech: ["React", "Express", "MongoDB", "Tailwind"],
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-600",
    icon: "fa-user-graduate",
  },
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce solution with product management, cart, checkout, and admin panel.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    color: "#ef4444",
    gradient: "from-red-500 to-rose-600",
    icon: "fa-shopping-cart",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden neu-card group cursor-pointer"
    >
      <div
        className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <i
          className={`fas ${project.icon} text-6xl text-white/30 group-hover:text-white/50 transition-all group-hover:scale-110`}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 bg-black/40">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
          >
            <i className="fas fa-external-link-alt mr-2" />
            Live Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
          >
            <i className="fab fa-github mr-2" />
            Code
          </motion.button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs rounded-full glass text-gray-400 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
