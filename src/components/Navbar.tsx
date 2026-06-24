'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GradientButton from './ui/GradientButton'

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Playground', href: '#playground' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = NAV_ITEMS.map((item) => ({
        id: item.href.replace('#', ''),
        el: document.getElementById(item.href.replace('#', '')),
      }))

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.el) {
          const rect = section.el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActive(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-500 ${
        scrolled
          ? 'glass-strong rounded-2xl'
          : 'bg-transparent rounded-full'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#hero')
          }}
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          K4NE
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(item.href)
              }}
              className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                active === item.href.replace('#', '')
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {active === item.href.replace('#', '') && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/10 rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-5 h-[2px] bg-white rounded-full"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-[2px] bg-white rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-5 h-[2px] bg-white rounded-full"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="px-6 pb-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(item.href)
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === item.href.replace('#', '')
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
