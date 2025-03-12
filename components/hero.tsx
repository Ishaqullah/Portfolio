"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 md:pl-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <div className="px-4 py-1 border border-primary/30 rounded-full text-primary text-sm inline-block">
              Full Stack Developer
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hello, I'm <span className="text-gradient">Ishaqullah Siddiqui</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Transforming Code into Impactful Digital Experiences
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-6">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary px-6 py-6"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary"
            >
              <Link href="https://github.com/Ishaqullah" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary"
            >
              <Link href="https://www.linkedin.com/in/ishaqullah-s-05a292137/" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary"
            >
              <Link href="mailto:ishaq.siddiqui1401@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-32 md:translate-x-0"
      >
        <Button variant="ghost" size="icon" asChild className="rounded-full text-primary animate-bounce-slow">
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </a>
        </Button>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
    </section>
  )
}

