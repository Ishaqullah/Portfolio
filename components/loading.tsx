"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 1, 100))
      } else {
        setIsComplete(true)
      }
    }, 20)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      animate={isComplete ? { opacity: 0, pointerEvents: "none" } : { opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        className="w-20 h-20 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="5"
            fill="none"
            className="text-muted opacity-20"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="5"
            fill="none"
            className="text-primary"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{
              strokeDasharray: "251.2",
              strokeDashoffset: "0",
              transformOrigin: "center",
              transform: "rotate(-90deg)",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>
      </motion.div>
      <motion.p
        className="mt-4 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {progress}%
      </motion.p>
    </motion.div>
  )
}

