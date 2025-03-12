"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Developer",
      company: "Reon Energy Limited",
      period: "Oct 2024 - Present",
      description:
        "Dealing with frontend of Reon's renowned product spark. Frontend is on React/Redux. Spark is responsible to show useful insights for energy consumption on telecommunication sites and solar sites.",
      skills: ["React", "Redux", "Frontend Development", "Data Visualization"],
    },
    {
      title: "Full Stack Developer",
      company: "NRPU(HEC) | FAST NUCES",
      period: "Oct 2023 – Jun 2024",
      description:
        "Led full stack development for NRPU(HEC) Cow Health Monitoring System. Responsibilities included system architecture, frontend and backend development, and database management, for enhanced cattle health management.",
      skills: ["Full Stack", "System Architecture", "Database Management"],
    },
    {
      title: "Frontend Developer Intern",
      company: "Pragmatics Engineering Solutions",
      period: "Jun 2023 – Aug 2023",
      description:
        "Worked on a product, Pragmatics Engineering, which is React based web-app, under the supervision of expert computer scientists.",
      skills: ["React", "Web Development", "Frontend"],
    },
    // {
    //   title: "Teaching Assistant Operating System",
    //   company: "FAST NUCES",
    //   period: "Sept 2022 – Dec 2022",
    //   description:
    //     "Checked assignments, quizzes and semester project of 80+ Students - Worked under direction of licensed teacher in and outside of classroom.",
    //   skills: ["Operating Systems", "Teaching", "Evaluation"],
    // },
    // {
    //   title: "Teaching Assistant Programming Fundamentals",
    //   company: "FAST NUCES",
    //   period: "Jan 2022 – Apr 2022",
    //   description:
    //     "Checked assignments, quizzes and semester project of 40+ Students - Worked under direction of licensed teacher in and outside of classroom.",
    //   skills: ["Programming", "Teaching", "Mentoring"],
    // },
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
    <section id="experience" className="section-container md:pl-24">
      <div className="container">
        <h2 className="section-title">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <p className="section-subtitle max-w-2xl">My professional journey and roles</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 ml-6 md:ml-8"></div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={item} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary ml-4 md:ml-6 mt-6 z-10"></div>

                <div className="ml-16 md:ml-20">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/10 card-hover overflow-hidden">
                    <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/50"></div>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className="mt-2 md:mt-0 self-start md:self-center bg-primary/5 border-primary/20"
                        >
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-primary/5 hover:bg-primary/10 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

