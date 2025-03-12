"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Home, User, Briefcase, Code, Award, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const toggleSidebar = () => setIsOpen(!isOpen)

  const sections = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
    { id: "certifications", label: "Certifications", icon: <Award className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Find the current section based on scroll position
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 200 && rect.bottom >= 200
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="bg-card border-primary/20 text-primary"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar for mobile */}
      <motion.div
        className="fixed inset-y-0 right-0 z-40 w-64 bg-card border-l border-border md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gradient">
              Ishaq<span className="text-primary">.</span>
            </h2>
            <ModeToggle />
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`sidebar-link ${activeSection === section.id ? "active" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {section.icon}
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-6 border-t border-border">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary"
              >
                <Link href="https://github.com/Ishaqullah" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary"
              >
                <Link href="https://www.linkedin.com/in/ishaqullah-s-05a292137/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sidebar for desktop */}
      <div className="fixed inset-y-0 left-0 z-40 hidden md:block">
        <div className="flex flex-col h-full w-20 border-r border-border bg-card/50 backdrop-blur">
          <div className="flex flex-col items-center py-8">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mb-8">
              I
            </div>

            <nav className="flex-1">
              <ul className="space-y-8">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`flex flex-col items-center gap-1 text-xs ${
                        activeSection === section.id ? "text-primary" : "text-muted-foreground hover:text-primary"
                      } transition-colors duration-300`}
                    >
                      <div
                        className={`p-2 rounded-full ${
                          activeSection === section.id ? "bg-primary/10" : "hover:bg-primary/5"
                        }`}
                      >
                        {section.icon}
                      </div>
                      <span>{section.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* <div className="mt-auto pb-8">
              <ModeToggle />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

