'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Crystal from './canvas/Crystal'
import AuroraBackground from './canvas/AuroraBackground'
import ParticleField from './canvas/ParticleField'
import GradientButton from './ui/GradientButton'
import FloatingElements from './ui/FloatingElements'

const TITLES = [
  'Software Developer',
  'React Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'Student Developer',
]

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00BFFF" />
        <AuroraBackground />
        <ParticleField count={1500} />
        <Crystal />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useEffect(() => {
    const current = TITLES[titleIndex]
    let timeout: NodeJS.Timeout

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          80 + Math.random() * 50
        )
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(text.slice(0, -1)),
          40 + Math.random() * 30
        )
      } else {
        setDeleting(false)
        setTitleIndex((i) => (i + 1) % TITLES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, titleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 hero-gradient pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />

      <div className="absolute inset-0">
        <Scene />
      </div>

      <FloatingElements />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-cyan-400 font-mono text-sm md:text-base mb-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hello, I am
          </motion.p>

          <motion.h1
            className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              K4ne
            </span>
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span>{text}</span>
            <span className="typewriter-cursor" />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <GradientButton size="lg" onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
              </svg>
              View Projects
            </GradientButton>
            <GradientButton variant="secondary" size="lg" href="/resume.pdf">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </GradientButton>
            <GradientButton variant="ghost" size="lg" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Contact Me
            </GradientButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
