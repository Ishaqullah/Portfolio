"use client"

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type { Group } from "three"

interface ModelLoaderProps {
  modelPath: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
  animate?: boolean
}

export default function ModelLoader({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  animate = true,
}: ModelLoaderProps) {
  const modelRef = useRef<Group>(null)
  const { scene } = useGLTF(modelPath)

  useFrame((state, delta) => {
    if (modelRef.current && animate) {
      modelRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={modelRef} position={position} rotation={rotation}>
      <primitive object={scene} scale={scale} />
    </group>
  )
}

