"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Resume } from "@/components/resume"
import { About } from "@/components/about"
import { Internships } from "@/components/internships"
import { Projects } from "@/components/projects"
import { Certificates } from "@/components/certificates"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { LoadingScreen } from "@/components/loading-screen"
import { ParticleBackground } from "@/components/particle-background"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Resume />
        <About />
        <Internships />
        <Projects />
        <Certificates />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
