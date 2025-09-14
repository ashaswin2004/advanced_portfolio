"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Heart, Zap, Users } from "lucide-react"

const strengths = [
  {
    icon: Zap,
    title: "Quick Learner",
    description: "Rapidly adapt to new technologies and frameworks",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborate effectively in diverse team environments",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Analytical approach to complex technical challenges",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "Genuine enthusiasm for software development",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Passionate computer science student with a drive for innovation and excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="space-y-8">
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      <img
                        src="/computer-science-student-portrait.png"
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border-2 border-primary/30"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                        <Zap className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                      <Badge variant="secondary" className="mb-4">
                        Computer Science Student
                      </Badge>
                      <p className="text-muted-foreground leading-relaxed">
                        Currently pursuing Bachelor's in Computer Science with a focus on full-stack development.
                        Passionate about creating user-centric applications and exploring emerging technologies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Career Goals */}
              <Card className="glass border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <Target className="w-6 h-6 mr-2 text-accent" />
                    Career Goals
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Aspiring to become a full-stack developer specializing in modern web technologies. Seeking
                    opportunities to contribute to innovative projects while continuously learning and growing in a
                    collaborative environment.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Strengths Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center lg:text-left">Key Strengths</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {strengths.map((strength, index) => (
                  <Card
                    key={strength.title}
                    className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <strength.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-bold mb-2">{strength.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{strength.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
