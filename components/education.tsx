"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "University College of Engineering, Kanchipuram",
    duration: "2022 - 2026",
    location: "Kanchipuram, TN, India",
    status: "In Progress",
    gpa: "8.0/10",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Web Development",
      "Computer Networks",
      "Operating Systems",
    ],
    achievements: [
      "Dean's List (Fall 2023, Spring 2024)",
      "Computer Science Society Member",
      
    ],
  },
  {
    degree: "Higher Secondary Certificate (12th Grade)",
    institution: "Babuji Memorial Higher Secondary School",
    duration: "2021 - 2022",
    location: "Nagercoil, TN, India",
    status: "Completed",
    percentage: "85%",
    stream: "Bio Maths",
    achievements: [
      "School Topper in Bio Maths",
      "Science Olympiad State Level Qualifier",
      "Best Student Award",
    ],
  },
  {
    degree: "High School Certificate (10th Grade)",
    institution: "St.Joseph's High School, Nagercoil",
    duration: "2018 - 2020",
    location: "Nagercoil, TN, India",
    status: "Completed",
    percentage: "89%",
    achievements: ["School Rank 1", "Mathematics Olympiad District Winner", "Student Council President"],
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Academic journey and educational milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block animate-pulse"></div>

                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 md:ml-16 group hover:scale-[1.02]">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <GraduationCap className="w-6 h-6 text-primary" />
                              <Badge
                                variant={edu.status === "In Progress" ? "default" : "secondary"}
                                className={edu.status === "In Progress" ? "animate-pulse" : ""}
                              >
                                {edu.status}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {edu.degree}
                            </h3>
                            <p className="text-lg font-semibold text-accent mb-3">{edu.institution}</p>
                          </div>

                          <div className="text-right">
                            {edu.gpa && <div className="text-lg font-bold text-primary mb-1">GPA: {edu.gpa}</div>}
                            {edu.percentage && (
                              <div className="text-lg font-bold text-primary mb-1">{edu.percentage}</div>
                            )}
                          </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          {edu.stream && (
                            <div className="flex items-center space-x-2">
                              <Award className="w-4 h-4" />
                              <span>{edu.stream}</span>
                            </div>
                          )}
                        </div>

                        {/* Relevant Courses */}
                        {edu.relevantCourses && (
                          <div>
                            <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.relevantCourses.map((course) => (
                                <Badge key={course} variant="outline" className="text-xs">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
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
