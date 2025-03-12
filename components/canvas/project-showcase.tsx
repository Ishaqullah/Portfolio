"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, Text, Float, Html } from "@react-three/drei"
import type { Group } from "three"

interface ProjectShowcaseProps {
  project: {
    title: string
    description: string
    technologies: string[]
  }
  index: number
  active: boolean
  setActive: (index: number) => void
}

export default function ProjectShowcase({ project, index, active, setActive }: ProjectShowcaseProps) {
  const modelRef = useRef<Group>(null)
  const laptop = useGLTF("/models/laptop/scene.gltf")

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1 + index) * 0.1
    }
  })

  return (
    <Float speed={1.75} rotationIntensity={0.2} floatIntensity={0.5} position={[index * 4 - 4, 0, 0]}>
      <group ref={modelRef} onClick={() => setActive(index)} onPointerOver={() => setActive(index)}>
        <primitive object={laptop.scene} scale={0.35} position={[0, -0.25, 0]} rotation={[0, Math.PI / 2, 0]} />

        {active && (
          <Html position={[0, 0.5, 0.51]} wrapperClass="html-container" center distanceFactor={1.5}>
            <div className="bg-black/80 p-4 rounded-lg w-64 text-white">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-xs mt-2">{project.description.substring(0, 100)}...</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs bg-white/20 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Html>
        )}

        <Text position={[0, -1, 0]} rotation={[0, 0, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="top">
          {project.title}
        </Text>
      </group>
    </Float>
  )
}

