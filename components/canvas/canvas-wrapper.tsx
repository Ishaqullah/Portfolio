"use client"

import { Canvas } from "@react-three/fiber"
import { Preload } from "@react-three/drei"
import { type ReactNode, Suspense, useEffect, useState } from "react"
import { ErrorBoundary } from "../error-boundary"

interface CanvasWrapperProps {
  children: ReactNode
  className?: string
}

function CanvasLoader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default function CanvasWrapper({ children, className = "" }: CanvasWrapperProps) {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) {
    return (
      <div className={`${className} bg-black/5 rounded-lg`}>
        <CanvasLoader />
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      <ErrorBoundary>
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{
            preserveDrawingBuffer: true,
            antialias: true,
            alpha: true,
          }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>{children}</Suspense>
          <Preload all />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}

