"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, CheckCircle } from "lucide-react"

const internships = [
  {
    company: "TechCorp Solutions",
    role: "Frontend Development Intern",
    duration: "Jun 2024 - Aug 2024",
    location: "Remote",
    type: "Summer Internship",
    responsibilities: [
      "Developed responsive web components using React and TypeScript",
      "Collaborated with design team to implement UI/UX improvements",
      "Optimized application performance resulting in 25% faster load times",
      "Participated in code reviews and agile development processes",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Development Intern",
    duration: "Jan 2024 - May 2024",
    location: "San Francisco, CA",
    type: "Part-time",
    responsibilities: [
      "Built RESTful APIs using Node.js and Express.js",
      "Implemented user authentication and authorization systems",
      "Designed and optimized database schemas using PostgreSQL",
      "Created comprehensive documentation for API endpoints",
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
  },
]

export function Internships() {
  return (
    <section id="internships" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Internship Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Hands-on experience in real-world development environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>

            <div className="space-y-12">
              {internships.map((internship, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block animate-pulse"></div>

                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 md:ml-16 group hover:scale-[1.02]">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {internship.role}
                            </h3>
                            <div className="flex items-center space-x-2 text-lg font-semibold text-accent">
                              <Building className="w-5 h-5" />
                              <span>{internship.company}</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit">
                            {internship.type}
                          </Badge>
                        </div>

                        {/* Details */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{internship.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{internship.location}</span>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {internship.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {internship.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="glass">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
