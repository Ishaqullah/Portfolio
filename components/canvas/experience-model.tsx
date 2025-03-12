"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, Float } from "@react-three/drei"
import type { Group } from "three"

export default function ExperienceModel() {
  const modelRef = useRef<Group>(null)
  const brain = useGLTF("/models/brain/scene.gltf")

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={modelRef} dispose={null}>
        <primitive object={brain.scene} scale={0.5} position={[0, 0, 0]} rotation={[0, 0, 0]} />
      </group>
    </Float>
  )
}

