"use client"

import { Html, useProgress } from "@react-three/drei"

export default function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm font-medium mt-4">{progress.toFixed(0)}% loaded</p>
      </div>
    </Html>
  )
}

