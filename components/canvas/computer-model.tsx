"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, Float, PresentationControls } from "@react-three/drei"
import type { Group } from "three"

export default function ComputerModel() {
  const computerRef = useRef<Group>(null)
  const computer = useGLTF("/models/desktop_pc/scene.gltf")

  useFrame((state) => {
    if (computerRef.current) {
      computerRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float rotationIntensity={0.4}>
        <group ref={computerRef} dispose={null}>
          <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
        </group>
      </Float>
    </PresentationControls>
  )
}

