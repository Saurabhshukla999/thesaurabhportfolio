"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, MapPin, Mail, Linkedin, Github, GraduationCap, Briefcase } from "lucide-react"
import ParticlesBackground from "@/components/particles-background"
import { personalData } from "@/lib/data"
import Link from "next/link"

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-terminal-dark text-white font-mono">
      <Navigation />

      {/* Enhanced Hybrid Background */}
      <div className="flowing-background-terminal">
        <div className="flowing-shape-terminal flowing-shape-terminal-1"></div>
        <div className="flowing-shape-terminal flowing-shape-terminal-2"></div>
        <div className="flowing-shape-terminal flowing-shape-terminal-3"></div>
        <div className="flowing-shape-terminal flowing-shape-terminal-4"></div>
        <div className="flowing-shape-terminal flowing-shape-terminal-5"></div>
      </div>
      <div className="mesh-gradient-terminal"></div>

      {/* Terminal grid overlay */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,65,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Particles Background */}
      <ParticlesBackground />

      <main className="relative z-10 container mx-auto px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div
              className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-high-contrast">About </span>
                <span className="heading-accent italic terminal-glow-bright">Me</span>
              </h1>
              <p className="text-xl md:text-2xl text-medium-contrast leading-relaxed max-w-3xl mx-auto">
                {personalData.summary}
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Personal Information */}
            <Card
              className={`glass-terminal-card bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800/50 hover:border-terminal-green/50 transition-all duration-500 rounded-none hover:scale-105 hover:-translate-y-2 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <CardHeader className="border-b border-gray-800/50">
                <CardTitle className="text-xl font-bold heading-secondary tracking-wider">
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3 text-medium-contrast">
                  <MapPin className="h-5 w-5 text-terminal-green-bright" />
                  <span className="tracking-wide">{personalData.location}</span>
                </div>
                <div className="flex items-center gap-3 text-medium-contrast">
                  <Mail className="h-5 w-5 text-terminal-green-bright" />
                  <a
                    href={`mailto:${personalData.email}`}
                    className="hover:text-terminal-green-bright transition-colors tracking-wide"
                  >
                    {personalData.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-medium-contrast">
                  <Linkedin className="h-5 w-5 text-terminal-green-bright" />
                  <a
                    href={personalData.social.linkedin}
                    className="hover:text-terminal-green-bright transition-colors tracking-wide"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3 text-medium-contrast">
                  <Github className="h-5 w-5 text-terminal-green-bright" />
                  <a
                    href={personalData.social.github}
                    className="hover:text-terminal-green-bright transition-colors tracking-wide"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card
              className={`glass-terminal-card bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800/50 hover:border-terminal-green/50 transition-all duration-500 rounded-none hover:scale-105 hover:-translate-y-2 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <CardHeader className="border-b border-gray-800/50">
                <CardTitle className="text-xl font-bold heading-secondary tracking-wider flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                {personalData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-terminal-green/30 pl-4">
                    <h3 className="font-bold text-medium-contrast tracking-wide">{edu.degree}</h3>
                    <p className="text-gray-400 text-sm tracking-wide">{edu.institute}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-500 text-sm tracking-wide">{edu.year}</span>
                      <span className="px-2 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-medium-contrast text-xs tracking-wide">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Experience */}
          <div
            className={`mb-16 transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight flex items-center gap-3">
              <Briefcase className="h-7 w-7 text-terminal-green" />
              <span className="text-high-contrast">Experience</span>
            </h2>

            <div className="space-y-8">
              {personalData.experience.map((job, index) => (
                <Card
                  key={index}
                  className="glass-terminal-card bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800/50 hover:border-terminal-green/50 transition-all duration-500 rounded-none"
                >
                  <CardHeader className="border-b border-gray-800/50">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <CardTitle className="text-xl font-bold heading-secondary tracking-wider flex flex-wrap items-center gap-3">
                          {job.company}
                          {job.current && (
                            <span className="px-2 py-0.5 bg-terminal-green/15 border border-terminal-green/40 text-terminal-green text-[10px] font-bold tracking-widest uppercase">
                              Current
                            </span>
                          )}
                        </CardTitle>
                        <p className="text-medium-contrast text-sm tracking-wide mt-1">{job.role}</p>
                        <p className="text-gray-500 text-xs tracking-wide mt-1">{job.context}</p>
                      </div>
                      <div className="md:text-right shrink-0">
                        <p className="text-gray-400 text-sm tracking-wide">{job.period}</p>
                        <p className="text-gray-500 text-xs tracking-wide">{job.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {job.highlights.map((point, i) => (
                        <li key={i} className="flex gap-3 text-medium-contrast text-sm leading-relaxed">
                          <span className="text-terminal-green shrink-0 mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-gray-800/50">
                      {job.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-medium-contrast text-xs tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={`text-center transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-high-contrast">Ready to </span>
              <span className="heading-accent italic terminal-glow-bright">Work Together</span>
              <span className="text-high-contrast">?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
        size="lg"
        className="glass-terminal-button bg-terminal-green hover:bg-terminal-green/90 text-black px-8 py-3 rounded-none font-bold tracking-wide transition-all duration-300 hover:scale-105"
        asChild
      >
        <a href="/saurabh.pdf" download>
          Download Resume
          <Download className="ml-2 h-4 w-4" />
        </a>
      </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-terminal-button border-2 border-gray-700/50 hover:border-terminal-green text-medium-contrast hover:text-terminal-green-bright px-8 py-3 rounded-none font-bold tracking-wide transition-all duration-300 hover:scale-105 bg-transparent"
                asChild
              >
                <Link href="/work">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
