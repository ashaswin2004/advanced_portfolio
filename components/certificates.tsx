"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Novitech R&D Private Limited",
    date: "August 2025 - September 2025",
    description: "Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and MongoDB, Express.js",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express.js"],
    // credentialUrl: "https://freecodecamp.org/certification/johndoe/full-stack",
    image: "/novitech.png",
  },
  {
    title: "Full Stack Development Internship",
    issuer: "Ekadd Technologies",
    date: "June 2025 - July 2025",
    description: "User experience design principles, wireframing, prototyping, and user research methodologies",
    skills: ["HTML/CSS", "JavaScript", "Java", "Git"],
    // credentialUrl: "https://coursera.org/verify/ABCD1234",
    image: "intern_certificate.jpg",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "September 2024",
    description: "Advanced JavaScript concepts, algorithms, and data structure implementations",
    skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
    credentialUrl: "https://freecodecamp.org/certification/johndoe/javascript-algorithms",
    image: "/placeholder-w4pue.png",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "August 2024",
    description: "Modern CSS techniques, Flexbox, Grid, and responsive design principles",
    skills: ["CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
    credentialUrl: "https://freecodecamp.org/certification/johndoe/responsive-web-design",
    image: "/placeholder-sbkus.png",
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Continuous learning and professional development milestones
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-[1.02] overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <div className="p-2 rounded-full bg-primary/20 backdrop-blur-sm">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-accent">{cert.issuer}</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm text-primary hover:text-accent transition-colors group/link"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
