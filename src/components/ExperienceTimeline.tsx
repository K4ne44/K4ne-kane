'use client'

import { motion } from 'framer-motion'
import GlassCard from './ui/GlassCard'

const TIMELINE = [
  {
    year: '2025 - Present',
    title: 'Level 5 Software Development',
    subtitle: 'SJITC, Rwanda',
    description:
      'Advanced software development with focus on full-stack architecture, database design, and professional project management.',
    type: 'education',
  },
  {
    year: '2024 - 2025',
    title: 'Level 4 Software Development',
    subtitle: 'SJITC, Rwanda',
    description:
      'Intermediate development skills including OOP, data structures, web development fundamentals, and team collaboration.',
    type: 'education',
  },
  {
    year: '2022 - 2023',
    title: 'Level 3 Computing',
    subtitle: 'SJITC, Rwanda',
    description:
      'Foundation in computing principles, programming logic, and introductory software development concepts.',
    type: 'education',
  },
  {
    year: '2024 - Present',
    title: 'Freelance Developer',
    subtitle: 'Self-employed',
    description:
      'Building web applications and digital solutions for clients. Specializing in React/Next.js development and full-stack projects.',
    type: 'work',
  },
  {
    year: '2023 - 2024',
    title: 'Junior Developer Intern',
    subtitle: 'Tech Startup',
    description:
      'Contributed to frontend development, bug fixes, and feature implementation using React and modern JavaScript tooling.',
    type: 'work',
  },
]

export default function ExperienceTimeline() {
  return (
    <section id="timeline" className="section-padding relative">
      <div className="section-gradient absolute inset-0 pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience{' '}
            <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500 md:-translate-x-px" />

          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 md:mb-16 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block flex-1" />

              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-1.5">
                <div className="w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 ring-4 ring-navy" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-cyan-500/50 to-transparent" />
              </div>

              <div className={`flex-1 pl-14 md:pl-0 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                <GlassCard hover>
                  <span className="text-xs font-mono text-cyan-400 mb-1 block">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                  <span
                    className={`inline-block mt-3 px-3 py-1 text-xs font-mono rounded-full ${
                      item.type === 'education'
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : 'bg-green-500/10 text-green-400 border border-green-500/20'
                    }`}
                  >
                    {item.type === 'education' ? 'Education' : 'Work'}
                  </span>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
