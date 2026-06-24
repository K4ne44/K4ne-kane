'use client'

import { useRef, useState, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

const COLORS = ['#00BFFF', '#00E5FF', '#FFD60A', '#39FF14', '#FF6B6B', '#A855F7']
const SHAPES = ['box', 'tetrahedron', 'octahedron', 'sphere', 'icosahedron'] as const
type Shape = (typeof SHAPES)[number]

const GEOMETRY_CACHE = new Map<Shape, THREE.BufferGeometry>()

function getGeometry(shape: Shape) {
  if (!GEOMETRY_CACHE.has(shape)) {
    const map: Record<Shape, () => THREE.BufferGeometry> = {
      box: () => new THREE.BoxGeometry(2, 2, 2),
      tetrahedron: () => new THREE.TetrahedronGeometry(1.8),
      octahedron: () => new THREE.OctahedronGeometry(1.6),
      sphere: () => new THREE.SphereGeometry(1.5, 16, 16),
      icosahedron: () => new THREE.IcosahedronGeometry(1.6),
    }
    GEOMETRY_CACHE.set(shape, map[shape]())
  }
  return GEOMETRY_CACHE.get(shape)!
}

export default function InteractiveCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)
  const [colorIndex, setColorIndex] = useState(0)
  const [shapeIndex, setShapeIndex] = useState(0)
  const [exploding, setExploding] = useState(false)

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.8
      meshRef.current.rotation.z += delta * 0.3
    }
    if (wireRef.current) {
      wireRef.current.rotation.copy(meshRef.current?.rotation || new THREE.Euler())
    }

    if (exploding && meshRef.current) {
      const s = meshRef.current.scale.x
      if (s > 0.1) {
        meshRef.current.scale.lerp(new THREE.Vector3(0, 0, 0), 0.08)
        if (wireRef.current) {
          wireRef.current.scale.copy(meshRef.current.scale)
        }
      } else {
        setExploding(false)
        meshRef.current.scale.set(1, 1, 1)
        if (wireRef.current) wireRef.current.scale.set(1, 1, 1)
      }
    }
  })

  const handleClick = useCallback(() => {
    setColorIndex((i) => (i + 1) % COLORS.length)
  }, [])

  const handleDoubleClick = useCallback(() => {
    setExploding(true)
    setTimeout(() => {
      setShapeIndex((i) => (i + 1) % SHAPES.length)
    }, 300)
  }, [])

  const color = COLORS[colorIndex]
  const geo = getGeometry(SHAPES[shapeIndex])

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh
        ref={meshRef}
        geometry={geo}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <meshPhysicalMaterial
          color={color}
          metalness={0.3}
          roughness={0.1}
          clearcoat={0.5}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh ref={wireRef} geometry={geo} scale={[1.02, 1.02, 1.02]}>
        <meshPhysicalMaterial
          color={color}
          wireframe
          transparent
          opacity={0.15}
          emissive={color}
          emissiveIntensity={0.3}
          depthWrite={false}
        />
      </mesh>
    </Float>
  )
}
