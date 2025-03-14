"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Bachelor in Computer Science",
      institution: "FAST NUCES",
      period: "2020-2024",
      details: "CGPA: 3.56",
      awards: [
        "Dean's List of Honour (Oct 2023)",
        "Dean's List of Honour (Oct 2022)",
        "Dean's List of Honour (Oct 2021)",
      ],
    },
    {
      degree: "ACCP-Pro",
      institution: "Aptech Institute",
      period: "2015-2017",
      details: "",
      awards: [],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="section-container md:pl-24">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Education</span>
        </h2>

        <p className="section-subtitle max-w-2xl">Academic background and qualifications</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl"
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-hover overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/50"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className="mt-2 md:mt-0 self-start md:self-center bg-primary/5 border-primary/20"
                        >
                          {edu.period}
                        </Badge>
                      </div>

                      {edu.details && <p className="mb-4">{edu.details}</p>}

                      {edu.awards.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-primary/10">
                          <h4 className="font-medium flex items-center gap-2 mb-3">
                            <Award className="h-4 w-4 text-primary" />
                            Awards & Honours
                          </h4>
                          <ul className="space-y-2">
                            {edu.awards.map((award, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span className="text-muted-foreground">{award}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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

