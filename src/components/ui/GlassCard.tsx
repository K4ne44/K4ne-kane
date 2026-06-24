'use client'

import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: 'blue' | 'cyan' | 'yellow' | 'none'
  hover?: boolean
}

export default function GlassCard({
  children,
  className = '',
  glow = 'none',
  hover = false,
}: GlassCardProps) {
  const glowClass =
    glow === 'blue'
      ? 'glow-blue'
      : glow === 'cyan'
        ? 'glow-cyan'
        : glow === 'yellow'
          ? 'glow-yellow'
          : ''

  return (
    <div
      className={`glass rounded-2xl p-6 md:p-8 transition-all duration-500 ${
        hover ? 'card-hover hover:shadow-2xl hover:shadow-cyan-500/10' : ''
      } ${glowClass} ${className}`}
    >
      {children}
    </div>
  )
}
