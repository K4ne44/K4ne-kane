'use client'

import { motion } from 'framer-motion'
import GlassCard from './ui/GlassCard'
import AnimatedCounter from './ui/AnimatedCounter'

const STATS = [
  { label: 'Years Old', value: 19, suffix: '' },
  { label: 'Technologies', value: 12, suffix: '+' },
  { label: 'Languages', value: 3, suffix: '' },
  { label: 'Projects Built', value: 8, suffix: '+' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
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
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Crafting{' '}
            <span className="text-gradient">Digital Experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 items-start">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard>
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl font-bold text-white shrink-0">
                  K
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Muvunyi Hidjazi
                  </h3>
                  <p className="text-cyan-400 font-mono text-sm">@k4ne_dev</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  A 19-year-old Software Development student at SJITC, Rwanda, 
                  passionate about building futuristic digital experiences that 
                  blend creativity with technology.
                </p>
                <p>
                  Currently pursuing an L5 Software Development diploma, I specialize 
                  in full-stack development with modern frameworks like Next.js and 
                  React, while exploring the intersection of 3D graphics and web.
                </p>
                <p className="text-cyan-300 font-mono text-sm">
                  &gt; Status: Building the future through code.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            className="md:col-span-2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <GlassCard glow="blue" hover>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                      <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
            <div className="col-span-2">
              <GlassCard glow="cyan">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-gray-300 text-sm font-mono">
                    Open to freelance & collaboration opportunities
                  </span>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
