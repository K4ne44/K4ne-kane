"use client";

import { motion } from "framer-motion";

const education = [
  {
    period: "2025 - Present",
    title: "Level 5 Software Development",
    school: "Saint Joseph Integrated Technical College (SJITC)",
    location: "Rwanda",
    description:
      "Pursuing advanced software development studies with focus on modern web technologies, database management, and software engineering principles,and finishing high school",
    icon: "fa-graduation-cap",
  },
  {
    period: "2024 - 2025",
    title: "Software Development level 4",
    school: "Saint Joseph Integrated Technical College (SJITC)",
    location: "Rwanda",
    description:
      "Built a strong foundation in programming concepts, data structures, algorithms, and introductory web development.",
    icon: "fa-laptop-code",
  },
  {
    period: "2022 - 2023",
    title: "Software Development level 3",
    school: "Saint Joseph Integrated Technical College (SJITC)",
    location: "Rwanda",
    description:
      "Built a strong foundation in programming concepts, data structures, algorithms, and introductory web development.",
    icon: "fa-laptop-code",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-5xl font-bold">
            My{" "}
            <span className="text-gradient">Education</span>
          </h2>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-400/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block flex-1" />
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-2">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0a0a0f] shadow-lg shadow-purple-500/30" />
                </div>
                <div className="flex-1 pl-16 md:pl-0">
                  <div className="glass rounded-2xl p-6 neu-card hover:border-purple-500/20 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-400/20 flex items-center justify-center">
                        <i className={`fas ${item.icon} text-purple-400`} />
                      </div>
                      <span className="text-sm text-purple-400 font-mono">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-1">{item.school}</p>
                    <p className="text-gray-500 text-xs mb-3">
                      <i className="fas fa-map-marker-alt mr-1" />
                      {item.location}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
