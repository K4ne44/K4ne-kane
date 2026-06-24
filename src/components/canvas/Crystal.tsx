'use client'

import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function Crystal() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const mouse = useMousePosition()
  const targetRot = useRef({ x: 0, y: 0 })

  const geometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1.8, 0)
    const pos = geo.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      const z = pos.getZ(i)
      const stretch = 1 + 0.3 * Math.sin(y * 2) * Math.cos(x * 2)
      pos.setXYZ(i, x * stretch, y * stretch * 1.2, z * stretch)
    }
    geo.computeVertexNormals()
    return geo
  }, [])

  useFrame((state, delta) => {
    if (!meshRef.current) return

    targetRot.current.x += (mouse.y * 0.3 - targetRot.current.x) * 0.05
    targetRot.current.y += (mouse.x * 0.3 - targetRot.current.y) * 0.05

    meshRef.current.rotation.x += delta * 0.3 + targetRot.current.x * delta * 0.5
    meshRef.current.rotation.y += delta * 0.5 + targetRot.current.y * delta * 0.5
    meshRef.current.rotation.z += delta * 0.1

    const scale = clicked ? 1.15 : hovered ? 1.05 : 1
    meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        geometry={geometry}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <MeshTransmissionMaterial
          backside
          thickness={0.5}
          roughness={0.05}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.5}
          chromaticAberration={0.06}
          color={hovered ? '#00E5FF' : '#00BFFF'}
          emissive={hovered ? '#00BFFF' : '#0055FF'}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          envMapIntensity={1.5}
          resolution={256}
        />
      </mesh>
    </Float>
  )
}
