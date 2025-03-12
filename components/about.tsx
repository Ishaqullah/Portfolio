"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="section-container md:pl-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>

          <p className="section-subtitle max-w-2xl">Get to know my background and professional journey</p>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg leading-relaxed mb-8">
                Motivated computer scientist with a strong foundation in front-end development, object-oriented
                programming, data structures, and databases. I am an effective communicator and team player, eager to
                contribute technical knowledge and problem-solving abilities to create innovative software solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gradient">Professional Focus</h3>
                  <p className="text-muted-foreground">
                    Currently working as a Developer at Reon Energy Limited, focusing on React/Redux frontend
                    development for their renowned product Spark, which provides useful insights for energy consumption
                    on telecommunication and solar sites.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gradient">Academic Background</h3>
                  <p className="text-muted-foreground">
                    Graduated with a Bachelor's in Computer Science from FAST NUCES with a CGPA of 3.56. Consistently
                    recognized on the Dean's List of Honour for academic excellence.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/10">
                <h3 className="text-xl font-bold mb-4">My Journey</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1 bg-primary/20 rounded-full relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Started Programming</h4>
                      <p className="text-sm text-muted-foreground">
                        Began my journey with programming fundamentals and web development
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-primary/20 rounded-full relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Computer Science Degree</h4>
                      <p className="text-sm text-muted-foreground">
                        Pursued higher education in Computer Science at FAST NUCES
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-primary/20 rounded-full relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Professional Career</h4>
                      <p className="text-sm text-muted-foreground">
                        Started working as a Developer at Reon Energy Limited
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

