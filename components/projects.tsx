"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "AutoConnect",
      description:
        "Developed an innovative e-commerce platform as part of my Final Year Project (FYP) to revolutionize the online buying and selling of automobiles. The platform includes all essential e-commerce features and a negotiation chatbot that intelligently bargains with buyers on behalf of sellers.",
      technologies: ["React", ".NET", "PostgreSQL", "Supabase", "Chatbot"],
      link: "https://github.com/Ishaqullah/AutoConnect",
    },
    {
      title: "MS Dentals",
      description:
        "Designed and developed a professional website for a dental clinic using HTML, CSS, JavaScript, and Bootstrap. Integrated PHP for backend functionality and utilized phpMyAdmin to manage the SQL-based database, ensuring smooth appointment scheduling and patient management.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "SQL"],
      link: "https://github.com/Ishaqullah/MSDental-Clinic",
    },
    {
      title: "Shareek-e-Hayat Dating App",
      description:
        "Built a dating app using React Native and Python, incorporating a recommender system to help users find the perfect match. Designed an intuitive UI and implemented a MongoDB database for efficient user data storage and retrieval.",
      technologies: ["Python", "React Native", "MongoDB"],
      link: "https://github.com/Ishaqullah/Shareek-e-Hayat-DatingApp",
    },
    {
      title: "BookCart App Testing Framework",
      description:
        "Developed an automated testing framework for a web-based e-commerce application using Selenium and Python. Designed test cases to ensure seamless user experience and functionality validation.",
      technologies: ["Selenium", "Python"],
      link: "https://github.com/Ishaqullah/BookCart-App-Testing-Framework",
    },
    {
      title: "Video Game Sales Prediction",
      description:
        "Built a machine learning model to predict video game sales trends using Python. Leveraged Pandas, Seaborn, NumPy, and Matplotlib for data analysis and visualization, implementing regression models to forecast sales based on historical data.",
      technologies: ["Python", "Pandas", "Seaborn", "NumPy", "Matplotlib", "Machine Learning"],
      link: "https://github.com/Ishaqullah/Video-Game-Sales-Prediction",
    },
    {
      title: "Attendance System using Facial Recognition",
      description:
        "Developed an AI-powered attendance management system using OpenCV and Python. The system captures facial features, recognizes students/employees, and logs attendance automatically, eliminating the need for manual entry.",
      technologies: ["Python", "OpenCV"],
      link: "https://github.com/Ishaqullah/AttendenceUsingHumanFaceRecognition",
    },
    {
      title: "Sorting Visualizer",
      description:
        "Created an interactive sorting visualizer using JavaScript, HTML, and Bootstrap to demonstrate various sorting algorithms. The tool efficiently visualizes how algorithms like Bubble Sort, Merge Sort, and Quick Sort operate on large datasets.",
      technologies: ["JavaScript", "Bootstrap", "HTML", "Algorithms"],
      link: "https://github.com/Ishaqullah/SortingAlgorithmsVisualizer",
    },
    {
      title: "Word Puzzle Game",
      description:
        "Developed a word puzzle game using Assembly Language, showcasing low-level programming skills. Implemented logic to generate word challenges, process user input, and track scores in an interactive gameplay environment.",
      technologies: ["Assembly Language"],
      link: "https://github.com/Ishaqullah/Word-Puzzle-Game",
    },
  ];
  

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
    <section id="projects" className="section-container md:pl-24">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Projects</span>
        </h2>

        <p className="section-subtitle max-w-2xl">Showcasing my technical work and applications</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 card-hover overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/50"></div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-primary/5 border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 hover:bg-primary/10 hover:text-primary transition-colors p-0"
                      asChild
                    >
                      <Link href={project.link}>
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
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

