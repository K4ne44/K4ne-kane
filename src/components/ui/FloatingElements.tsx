'use client'

import { useEffect, useState, useRef } from 'react'

interface FloatingShape {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  delay: number
  type: 'circle' | 'triangle' | 'diamond' | 'hexagon'
  opacity: number
}

export default function FloatingElements() {
  const [shapes, setShapes] = useState<FloatingShape[]>([])

  useEffect(() => {
    const generated: FloatingShape[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 8 + Math.random() * 20,
      rotation: Math.random() * 360,
      speed: 15 + Math.random() * 25,
      delay: Math.random() * 5,
      type: (['circle', 'triangle', 'diamond', 'hexagon'] as const)[
        Math.floor(Math.random() * 4)
      ],
      opacity: 0.03 + Math.random() * 0.05,
    }))
    setShapes(generated)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-5">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute animate-float-slow"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: shape.opacity,
            animationDuration: `${shape.speed}s`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="w-full h-full rounded-full border border-cyan-400"
              style={{ transform: `rotate(${shape.rotation}deg)` }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid rgba(0, 191, 255, 0.15)`,
                transform: `rotate(${shape.rotation}deg)`,
              }}
            />
          )}
          {shape.type === 'diamond' && (
            <div
              className="w-full h-full rotate-45 border border-yellow-400/30"
              style={{ transform: `rotate(${shape.rotation + 45}deg)` }}
            />
          )}
          {shape.type === 'hexagon' && (
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                border: '1px solid rgba(0, 229, 255, 0.2)',
                transform: `rotate(${shape.rotation}deg)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
