"use client"

import { motion } from "framer-motion"

interface SignatureLogoProps {
  name: string
  className?: string
}

export function SignatureLogo({ name, className = "" }: SignatureLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      <h1 className="signature-text text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
        {name}
      </h1>
      <motion.div
        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-purple-600 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

