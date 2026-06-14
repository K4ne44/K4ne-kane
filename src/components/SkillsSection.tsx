"use client";

import { motion } from "framer-motion";

type Skill = { name: string; level: number; color: string };

const skillCategories: { title: string; icon: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    icon: "fa-code",
    skills: [
      { name: "HTML5", level: 90, color: "#e34f26" },
      { name: "CSS3", level: 85, color: "#1572b6" },
      { name: "JavaScript", level: 80, color: "#f7df1e" },
      { name: "React.js", level: 75, color: "#61dafb" },
      { name: "Next.js", level: 70, color: "#000000" },
    ],
  },
  {
    title: "Backend",
    icon: "fa-server",
    skills: [
      { name: "Node.js", level: 70, color: "#339933" },
      { name: "Express.js", level: 65, color: "#000000" },
      { name: "Python", level: 60, color: "#3776ab" },
    ],
  },
  {
    title: "Databases",
    icon: "fa-database",
    skills: [
      { name: "MongoDB", level: 70, color: "#47a248" },
      { name: "MySQL", level: 45, color: "#4479a1" },
    ],
  },
  {
    title: "Other Skills",
    icon: "fa-tools",
    skills: [
      { name: "Responsive Design", level: 85, color: "#7c3aed" },
      { name: "REST APIs", level: 75, color: "#06b6d4" },
      { name: "Git & GitHub", level: 80, color: "#f05032" },
      { name: "Problem Solving", level: 85, color: "#f59e0b" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass rounded-2xl p-6 neu-card hover:border-purple-500/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-400/20 flex items-center justify-center">
                  <i className={`fas ${category.icon} text-purple-400`} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={catIdx * 0.15 + skillIdx * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  delay,
}: {
  skill: Skill;
  delay: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-300">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.8 }}
          className="text-xs text-purple-400 font-mono"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
          }}
        >
          <div className="absolute inset-0 shimmer rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
