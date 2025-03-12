"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Sphere } from "@react-three/drei"
import type { Group } from "three"
import { motion } from "framer-motion-3d"

interface SkillsGlobeProps {
  skills: string[]
}

export default function SkillsGlobe({ skills }: SkillsGlobeProps) {
  const globeRef = useRef<Group>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useFrame((state) => {
    if (globeRef.current && !hoveredSkill) {
      globeRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={globeRef}>
      <Sphere args={[1.5, 16, 16]} visible={false}>
        {skills.map((skill, index) => {
          const phi = Math.acos(-1 + (2 * index) / skills.length)
          const theta = Math.sqrt(skills.length * Math.PI) * phi
          const x = Math.cos(theta) * Math.sin(phi) * 1.5
          const y = Math.sin(theta) * Math.sin(phi) * 1.5
          const z = Math.cos(phi) * 1.5

          return (
            <motion.group
              key={skill}
              position={[x, y, z]}
              whileHover={{ scale: 1.2 }}
              onPointerOver={() => setHoveredSkill(skill)}
              onPointerOut={() => setHoveredSkill(null)}
            >
              <Text
                color={hoveredSkill === skill ? "#f272c8" : "white"}
                fontSize={0.1}
                anchorX="center"
                anchorY="middle"
              >
                {skill}
              </Text>
            </motion.group>
          )
        })}
      </Sphere>
    </group>
  )
}

