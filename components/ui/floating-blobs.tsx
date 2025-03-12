"use client"

import { useEffect, useState } from "react"

interface FloatingBlobsProps {
  count?: number
  className?: string
}

export function FloatingBlobs({ count = 3, className = "" }: FloatingBlobsProps) {
  const [blobs, setBlobs] = useState<
    Array<{ id: number; color: string; size: string; top: string; left: string; delay: string }>
  >([])

  useEffect(() => {
    const colors = ["bg-primary/30", "bg-accent/30", "bg-purple-500/30", "bg-pink-500/30", "bg-blue-500/30"]

    const sizes = ["w-64 h-64", "w-72 h-72", "w-80 h-80", "w-96 h-96"]

    const newBlobs = Array.from({ length: count }).map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }))

    setBlobs(newBlobs)
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className={`floating-blob ${blob.color} ${blob.size}`}
          style={{
            top: blob.top,
            left: blob.left,
            animationDelay: blob.delay,
          }}
        />
      ))}
    </div>
  )
}

