"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Development",
    description:
      "Building end-to-end web applications using React, Node.js, Express, and MongoDB. Creating responsive, scalable solutions with modern architectures.",
    icon: "fa-layer-group",
    color: "#7c3aed",
  },
  {
    title: "React Development",
    description:
      "Creating dynamic single-page applications with React hooks, context API, state management, and component-based architecture.",
    icon: "fa-react",
    color: "#61dafb",
  },
  {
    title: "Database Design",
    description:
      "Designing efficient database schemas for both SQL (MySQL) and NoSQL (MongoDB) databases with optimized queries and indexing.",
    icon: "fa-database",
    color: "#47a248",
  },
  {
    title: "API Development",
    description:
      "Developing RESTful APIs with Node.js and Express, implementing authentication, authorization, and comprehensive documentation.",
    icon: "fa-plug",
    color: "#f59e0b",
  },
  {
    title: "Software Engineering Projects",
    description:
      "Leading and contributing to various software projects, applying SDLC methodologies, version control, and collaborative development practices.",
    icon: "fa-project-diagram",
    color: "#ef4444",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm mb-2">
            // experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Experience &{" "}
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 neu-card group cursor-default relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at 50% 50%, ${exp.color}, transparent)`,
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}05)`,
                    border: `1px solid ${exp.color}30`,
                  }}
                >
                  <i
                    className={`${exp.icon === "fa-react" ? "fab" : "fas"} ${exp.icon} text-xl`}
                    style={{ color: exp.color }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${exp.color}, #06b6d4)`,
                    WebkitBackgroundClip: "text",
                  }}
                >
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
