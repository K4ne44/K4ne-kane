'use client'

import { motion } from 'framer-motion'
import GlassCard from './ui/GlassCard'
import GradientButton from './ui/GradientButton'

const PROJECTS = [
  {
    title: 'Inventory Management System',
    description: 'Full-stack inventory system with real-time tracking, stock alerts, and detailed analytics dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'from-blue-600 to-cyan-600',
    live: '#',
    github: '#',
  },
  {
    title: 'Authentication System',
    description: 'Secure authentication with JWT, OAuth 2.0, multi-factor auth, and session management.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'JWT'],
    gradient: 'from-purple-600 to-pink-600',
    live: '#',
    github: '#',
  },
  {
    title: 'Wedding Equipment Rental',
    description: 'E-commerce platform for wedding equipment rental with booking calendar and payment integration.',
    tags: ['React', 'Firebase', 'Stripe', 'Tailwind'],
    gradient: 'from-yellow-600 to-orange-600',
    live: '#',
    github: '#',
  },
  {
    title: 'Student Management System',
    description: 'Comprehensive student management with grade tracking, attendance, and parent communication portals.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'tRPC'],
    gradient: 'from-green-600 to-emerald-600',
    live: '#',
    github: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with product management, cart system, and responsive checkout flow.',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
    gradient: 'from-cyan-600 to-blue-600',
    live: '#',
    github: '#',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
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
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects{' '}
            <span className="text-gradient">Showcase</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group h-full">
                <GlassCard hover className="h-full flex flex-col overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div
                    className={`w-full h-40 rounded-xl bg-gradient-to-br ${project.gradient} mb-5 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="text-4xl font-bold text-white/30 select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-cyan-300 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <GradientButton size="sm" href={project.live}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </GradientButton>
                    <GradientButton variant="secondary" size="sm" href={project.github}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </GradientButton>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <GradientButton variant="secondary" href="https://github.com/k4ne">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </GradientButton>
        </motion.div>
      </div>
    </section>
  )
}
