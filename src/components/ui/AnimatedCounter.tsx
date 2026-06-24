'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  from?: number
  to: number
  suffix?: string
  duration?: number
  once?: boolean
}

export default function AnimatedCounter({
  from = 0,
  to,
  suffix = '',
  duration = 2,
  once = true,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true
            const startTime = Date.now()
            const animate = () => {
              const elapsed = (Date.now() - startTime) / 1000
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(from + (to - from) * eased)
              if (progress < 1) requestAnimationFrame(animate)
            }
            animate()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [from, to, duration, once])

  return (
    <span ref={ref}>
      {typeof count === 'number'
        ? `${Math.round(count)}${suffix}`
        : `${count}${suffix}`}
    </span>
  )
}
