'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 2000 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 50
    }
    return pos
  }, [count])

  const colors = useMemo(() => {
    const c = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const t = Math.random()
      c[i * 3] = 0 + t * 0.2
      c[i * 3 + 1] = 0.5 + t * 0.4
      c[i * 3 + 2] = 0.8 + t * 0.2
    }
    return c
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * delta * 0.05
      pos[i * 3] += Math.cos(state.clock.elapsedTime * 0.5 + i * 0.01) * delta * 0.02
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
