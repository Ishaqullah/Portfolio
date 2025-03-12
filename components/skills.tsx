"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TechLogo } from "./ui/tech-logo"

export default function Skills() {
  const techLogos = {
    "C#": "/logos/sharp.svg",
    "C/C++": "/logos/cplusplus.svg",
    "Python": "/logos/python.svg",
    "JavaScript": "/logos/javascript.svg",
    "TypeScript": "/logos/typescript.svg",
    "HTML": "/logos/html5.svg",
    "CSS": "/logos/css3.svg",
    "React": "/logos/react.svg",
    "Next.js": "/logos/nextdotjs.svg",
    "Bootstrap": "/logos/bootstrap.svg",
    "Material UI": "/logos/mui.svg",
    "Node.js": "/logos/nodedotjs.svg",
    ".NET": "/logos/dotnet.svg",
    "MySQL": "/logos/mysql.svg",
    "PostgreSQL": "/logos/postgresql.svg",
    "Jira": "/logos/jira.svg",
    "GitHub": "/logos/github.svg",
    "GitLab": "/logos/gitlab.svg",
    "Google Dialogflow": "/logos/dialogflow.svg",
    "Postman API": "/logos/postman.svg",
  };
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["C#", "C/C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      name: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Bootstrap", "Material UI"],
    },
    {
      name: "Backend Development",
      skills: ["Node.js", ".NET"],
    },
    {
      name: "Databases",
      skills: ["MySQL", "PostgreSQL"],
    },
  
    {
      name: "Tools & Platforms",
      skills: ["Jira", "GitHub", "GitLab", "Google Dialogflow", "Postman API"],
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
    <section id="skills" className="section-container md:pl-24">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Skills</span>
        </h2>

        <p className="section-subtitle max-w-2xl">Technologies and tools I work with</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={item}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-gradient">{category.name}</h3>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
                    {category.skills.slice(0, 8).map((skill) => (
                      <TechLogo 
                        key={skill} 
                        name={skill} 
                        logo={techLogos[skill]} 
                      />
                    ))}
                  </div>

                  {/* ... (keep existing badges section unchanged) */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Skills Proficiency</h3>

          <div className="space-y-6 max-w-2xl">
            <div>
              <div className="flex justify-between mb-2">
                <span>Frontend Development</span>
                <span className="text-primary">90%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Backend Development</span>
                <span className="text-primary">80%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Database Management</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Data Structures & Algorithms</span>
                <span className="text-primary">75%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

