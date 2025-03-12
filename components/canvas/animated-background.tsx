"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Points } from "@react-three/drei"
import type * as THREE from "three"

export default function AnimatedBackground({ count = 1000 }) {
  const ref = useRef<THREE.Points>(null)

  // Create a simple particle system
  const particlesPosition = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    particlesPosition[i3] = (Math.random() - 0.5) * 3
    particlesPosition[i3 + 1] = (Math.random() - 0.5) * 3
    particlesPosition[i3 + 2] = (Math.random() - 0.5) * 3
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05
      ref.current.rotation.y -= delta * 0.07
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3}>
      <pointsMaterial size={0.02} color="#8b5cf6" sizeAttenuation transparent />
    </Points>
  )
}

