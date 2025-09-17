"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye, Smartphone, ShoppingCart } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI and secure payment integration",
    shortDescription: "Modern e-commerce platform with React and Node.js",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
    ],
    github: "https://github.com/johndoe/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    icon: ShoppingCart,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Medical Map UI/UX",
    description: "Mobile app design for healthcare facility location and appointment booking",
    shortDescription: "Healthcare mobile app UI/UX design with interactive prototypes",
    image: "/placeholder-w1oi6.png",
    technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
    features: [
      "Interactive map with healthcare facilities",
      "Appointment booking system",
      "Doctor profiles and reviews",
      "Medical history tracking",
      "Emergency contact features",
      "Accessibility-focused design",
    ],
    prototype: "https://figma.com/proto/medical-map",
    behance: "https://behance.net/medical-map-design",
    icon: Smartphone,
    category: "UI/UX Design",
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Showcasing my technical skills through real-world applications and designs
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-[1.02] overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="glass">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.prototype && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.prototype} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{project.shortDescription}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full glass bg-transparent rounded-lg transition-colors duration-200 hover:bg-primary/10 hover:text-accent dark:hover:text-accent"
                          onClick={() => setSelectedProject(project)}
                        >
                          <span className="transition-colors duration-200">View Details</span>
                          <Eye className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:scale-110" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl glass">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-3">
                            <project.icon className="w-6 h-6 text-primary" />
                            <span>{project.title}</span>
                          </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-6">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />

                          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                          <div>
                            <h4 className="font-semibold mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-4">
                            {project.github && (
                              <Button asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  GitHub
                                </a>
                              </Button>
                            )}
                            {project.live && (
                              <Button variant="outline" asChild>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                            {project.prototype && (
                              <Button variant="outline" asChild>
                                <a href={project.prototype} target="_blank" rel="noopener noreferrer">
                                  <Eye className="w-4 h-4 mr-2" />
                                  Prototype
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
