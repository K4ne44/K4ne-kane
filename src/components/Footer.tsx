'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="container-wide px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#hero"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            K4NE
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-sm text-center"
          >
            &copy; {new Date().getFullYear()} K4NE. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-sm font-mono text-center"
          >
            Building the future through code.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
