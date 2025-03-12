"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TechLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <motion.div
      className="group flex flex-col items-center gap-2 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-12 w-12 p-2 rounded-lg bg-background border border-primary/10 group-hover:border-primary/30 transition-all">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain p-1 grayscale group-hover:grayscale-0 transition-all duration-300"
          sizes="(max-width: 768px) 48px, 48px"
        />
      </div>
      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
        {name}
      </span>
    </motion.div>
  )
}