"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Globe, Users, Lightbulb } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "text-blue-500",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "React/Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-green-500",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "PostgreSQL", level: 60 },
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "text-purple-500",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 75 },
      { name: "User Research", level: 70 },
      { name: "Prototyping", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Globe,
    color: "text-orange-500",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Docker", level: 55 },
      { name: "AWS Basics", level: 50 },
    ],
  },
]

const softSkills = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Team Collaboration", icon: Users },
  { name: "Communication", icon: Users },
  { name: "Adaptability", icon: Lightbulb },
  { name: "Time Management", icon: Users },
  { name: "Critical Thinking", icon: Lightbulb },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Technical proficiencies and soft skills developed through projects and learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <Card
                  key={category.title}
                  className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h4 className="text-lg font-bold">{category.title}</h4>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
            <Card className="glass border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {softSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="text-center group hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="mb-3 flex justify-center">
                        <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <skill.icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {skill.name}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
