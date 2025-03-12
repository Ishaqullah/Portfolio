"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Cluster Analysis In Python",
      issuer: "Datacamp",
    },
    {
      title: "Complete JavaScript and JQuery course with VUE Js Intro",
      issuer: "Udemy",
    },
    {
      title: "MySQL Database Development Mastery",
      issuer: "Udemy",
    },
    {
      title: "Exploratory Data Analysis In Python",
      issuer: "Datacamp",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="certifications" className="section-container md:pl-24">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Certifications</span>
        </h2>

        <p className="section-subtitle max-w-2xl">Professional development and continuous learning</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-hover overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/50"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Award className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-muted-foreground">
                        Issued by <span className="text-primary">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

