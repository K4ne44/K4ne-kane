"use client";

import { motion } from "framer-motion";

const languages = [
  {
    name: "Kinyarwanda",
    native: "Ikinyarwanda",
    flag: "🇷🇼",
    level: "Native",
    proficiency: 100,
    color: "#7c3aed",
  },
  {
    name: "Kiswahili",
    native: "Kiswahili",
    flag: "🇹🇿",
    level: "Intermediate",
    proficiency: 65,
    color: "#06b6d4",
  },
  {
    name: "English",
    native: "English",
    flag: "🇺🇸",
    level: "Advanced",
    proficiency: 80,
    color: "#f59e0b",
  },
];

export default function LanguagesSection() {
  return (
    <section id="languages" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm mb-2">// languages</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Languages I{" "}
            <span className="text-gradient">Speak</span>
          </h2>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-8 text-center neu-card group cursor-default relative overflow-hidden"
            >
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${lang.color}, transparent)` }}
              />
              <div className="relative z-10">
                <motion.span
                  className="text-6xl block mb-4"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {lang.flag}
                </motion.span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {lang.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{lang.native}</p>
                <div className="inline-block px-4 py-1.5 rounded-full text-xs font-medium glass border border-white/5">
                  {lang.level}
                </div>
                <div className="mt-4 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${lang.color}, transparent)`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
