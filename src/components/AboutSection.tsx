"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "19", label: "Years Old", icon: "fa-calendar" },
  { value: "L5", label: "SWD Student", icon: "fa-graduation-cap" },
  { value: "3", label: "Languages", icon: "fa-language" },
  { value: "10+", label: "Technologies", icon: "fa-code" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-5xl font-bold">
            About{" "}
            <span className="text-gradient">Me</span>
          </h2>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 neu-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                  K
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Muvunyi Hidjazi
                  </h3>
                  <p className="text-sm text-gray-400 font-mono">@k4ne_dev</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Hi, I&apos;m Muvunyi Hidjazi (K4NE), a 19-year-old Software
                Development student at Saint Joseph Integrated Technical College
                (SJITC) in Rwanda. I am passionate about creating modern web
                applications, solving real-world problems through technology,
                and continuously improving my development skills.
              </p>
              <div className="mt-6 flex gap-4">
                {["fa-react", "fa-node", "fa-js", "fa-python"].map(
                  (icon, i) => (
                    <span
                      key={i}
                      className="text-2xl text-gray-500 hover:text-purple-400 transition-colors"
                    >
                      <i className={`fab ${icon}`} />
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <div
            ref={ref}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-6 text-center neu-card hover:border-purple-500/20 transition-all"
              >
                <i
                  className={`fas ${stat.icon} text-2xl text-purple-400 mb-3`}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-gradient mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
