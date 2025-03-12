"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import type * as THREE from "three"

interface SkillsVisualizationProps {
  skills: string[]
}

export default function SkillsVisualization({ skills }: SkillsVisualizationProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {skills.slice(0, 10).map((skill, index) => {
        const angle = (index / 10) * Math.PI * 2
        const radius = 1.5

        const x = Math.cos(angle) * radius
        const y = ((index % 3) - 1) * 0.5
        const z = Math.sin(angle) * radius

        return (
          <Text key={skill} position={[x, y, z]} fontSize={0.15} color="#ffffff" anchorX="center" anchorY="middle">
            {skill}
          </Text>
        )
      })}
    </group>
  )
}

