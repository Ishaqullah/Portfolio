"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Text } from "@react-three/drei"
import type * as THREE from "three"

interface ProjectVisualizationProps {
  projects: { title: string }[]
  activeIndex: number
}

export default function ProjectVisualization({ projects, activeIndex }: ProjectVisualizationProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the entire group slowly
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1

      // Move to the active project
      const targetX = activeIndex * -2
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => (
        <group key={index} position={[index * 2, 0, 0]}>
          <Box args={[1, 0.7, 0.1]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color={activeIndex === index ? "#8b5cf6" : "#4c1d95"}
              metalness={0.5}
              roughness={0.2}
            />
          </Box>
          <Text position={[0, -1, 0]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="middle">
            {project.title}
          </Text>
        </group>
      ))}
    </group>
  )
}

