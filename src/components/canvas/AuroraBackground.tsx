'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AuroraBackground() {
  const ref = useRef<THREE.Mesh>(null)

  const geometry = useMemo(() => new THREE.PlaneGeometry(30, 15, 64, 64), [])

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#00BFFF') },
        uColor2: { value: new THREE.Color('#00E5FF') },
        uColor3: { value: new THREE.Color('#0055FF') },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying float vElevation;
        void main() {
          vUv = uv;
          vec3 pos = position;
          float wave1 = sin(pos.x * 0.5 + uTime * 0.3) * 0.3;
          float wave2 = cos(pos.y * 0.4 + uTime * 0.2) * 0.2;
          float wave3 = sin((pos.x + pos.y) * 0.3 + uTime * 0.4) * 0.25;
          pos.z += wave1 + wave2 + wave3;
          vElevation = pos.z;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uTime;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
          float t = (vElevation + 0.8) / 1.6;
          vec3 color1 = mix(uColor1, uColor2, t);
          vec3 color2 = mix(uColor2, uColor3, 1.0 - t);
          vec3 color = mix(color1, color2, sin(vUv.x * 3.14 + uTime * 0.2) * 0.5 + 0.5);
          float alpha = 0.15 * (1.0 - vUv.y) * (0.5 + 0.5 * sin(vUv.x * 6.28 + uTime * 0.1));
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.ShaderMaterial
      mat.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh
      ref={ref}
      geometry={geometry}
      material={material}
      rotation={[-0.3, 0.2, 0]}
      position={[0, 2, -5]}
    />
  )
}
