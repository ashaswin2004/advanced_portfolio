"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Aspiring Full Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-float">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <img src="/professional-headshot-of-young-computer-science-st.jpg" alt="Profile" className="w-44 h-44 rounded-full object-cover" />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Aswin S
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground">
              Computer Science Student | <span className="text-primary font-semibold">{text}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-balance leading-relaxed">
            Passionate about creating innovative solutions through code. Building the future, one project at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="animate-glow group">
              Get In Touch
              <Mail className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="glass group bg-transparent">
              View My Work
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  )
}
