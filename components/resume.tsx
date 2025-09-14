"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Eye, FileText, Star } from "lucide-react"

export function Resume() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Download or view my complete resume showcasing my skills, experience, and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Resume Preview */}
                <div className="relative">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-bold text-lg">Aswin S</h3>
                          <p className="text-sm text-muted-foreground">Computer Science Student</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="h-2 bg-primary/30 rounded w-3/4"></div>
                        <div className="h-2 bg-accent/30 rounded w-1/2"></div>
                        <div className="h-2 bg-primary/20 rounded w-2/3"></div>

                        <div className="pt-4">
                          <div className="h-1 bg-muted rounded w-full mb-2"></div>
                          <div className="h-1 bg-muted rounded w-4/5 mb-2"></div>
                          <div className="h-1 bg-muted rounded w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-2 animate-float">
                    <Star className="w-4 h-4" />
                  </div>
                </div>

                {/* Resume Actions */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Professional Resume</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive overview of my educational background, technical skills, project experience, and
                      professional achievements. Updated regularly to reflect my latest accomplishments.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Last updated: September 2025</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Format: PDF, 1 page</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>ATS-friendly format</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/Aswin_Resume.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="lg" className="animate-glow group w-full">
                        <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                        Download PDF
                      </Button>
                    </a>
                    <a
                      href="/Aswin_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="lg" className="glass group w-full bg-transparent">
                        <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        View Online
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
