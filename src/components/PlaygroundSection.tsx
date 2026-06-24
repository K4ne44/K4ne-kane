'use client'

import { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import InteractiveCube from './canvas/InteractiveCube'
import GlassCard from './ui/GlassCard'
import GradientButton from './ui/GradientButton'

export default function PlaygroundSection() {
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <section id="playground" className="section-padding relative">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            Interactive Zone
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            3D{' '}
            <span className="text-gradient">Playground</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Click to change colors, double-click to morph shapes. Drag to orbit around.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="h-[400px] md:h-[500px]"
          >
            <GlassCard className="h-full w-full !p-0 overflow-hidden">
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ antialias: true }}
                onCreated={({ camera }) => {
                  camera.position.set(0, 0, 5)
                }}
              >
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00BFFF" />
                  <InteractiveCube />
                  <OrbitControls
                    autoRotate={autoRotate}
                    autoRotateSpeed={2}
                    enableZoom={true}
                    enablePan={false}
                  />
                  <Environment preset="city" />
                </Suspense>
              </Canvas>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold text-white mb-4">
                How to Play
              </h3>
              <ul className="space-y-4">
                {[
                  { key: 'click', desc: 'Click the cube to cycle colors' },
                  { key: 'double', desc: 'Double-click to morph shapes' },
                  { key: 'drag', desc: 'Drag to orbit around the object' },
                  { key: 'scroll', desc: 'Scroll to zoom in/out' },
                ].map((item) => (
                  <li key={item.key} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <div>
                      <span className="text-cyan-300 font-mono text-sm font-bold uppercase">
                        {item.key}
                      </span>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10">
                <label className="flex items-center gap-3 cursor-pointer">
                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      autoRotate ? 'bg-cyan-500' : 'bg-white/20'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 shadow-md ${
                        autoRotate ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                  <span className="text-sm text-gray-300">Auto-rotate</span>
                </label>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
