"use client"

import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import type { Group } from "three"

export default function ScrollAnimation() {
  const { height } = useThree((state) => state.viewport)
  const groupRef = useRef<Group>(null)
  const scroll = useScroll()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y = scroll.offset * height
      groupRef.current.rotation.y = scroll.offset * Math.PI * 2
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh
          key={i}
          position={[Math.sin((i / 5) * Math.PI * 2) * 2, i * -height, Math.cos((i / 5) * Math.PI * 2) * 2]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={`hsl(${i * 50}, 100%, 50%)`} />
        </mesh>
      ))}
    </group>
  )
}

