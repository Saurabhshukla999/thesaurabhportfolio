"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, ArrowRight, CheckCircle } from "lucide-react"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import { personalData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Work() {
  const [mounted, setMounted] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-terminal-dark text-white font-mono">
      <Navigation />

      {/* Hybrid Background */}
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div
              className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Badge className="bg-gradient-to-r from-terminal-green/20 to-terminal-green/30 border border-terminal-green/50 hover:from-terminal-green/30 hover:to-terminal-green/40 text-terminal-green-bright px-6 py-3 rounded-none mb-8 shadow-lg shadow-terminal-green/25 backdrop-blur-sm">
                My Work
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-high-contrast">My </span>
                <span className="heading-accent italic terminal-glow-bright">Projects</span>
              </h1>
              <p className="text-xl md:text-2xl text-medium-contrast max-w-3xl mx-auto leading-relaxed">
                A collection of my work showcasing expertise in modern web development and React applications.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {personalData.projects.map((project, index) => (
              <Card
                key={index}
                className={`glass-terminal-card bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800/50 hover:border-terminal-green/50 transition-all duration-500 rounded-none hover:scale-[1.02] hover:-translate-y-2 group cursor-pointer ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Project Image */}
                  <div className="relative">
                    <div className="border-2 border-terminal-green/50 p-2 bg-gray-900/30 backdrop-blur-sm">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover bg-gray-800 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-terminal-green text-black text-xs font-bold tracking-wide">
                          FEATURED
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <CardTitle className="text-2xl font-bold heading-secondary mb-3 tracking-wide group-hover:text-terminal-green-bright transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-medium-contrast text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>

                    {/* Project Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-terminal-green-bright font-semibold text-sm uppercase tracking-wider">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-2 text-gray-400">
                            <CheckCircle className="h-3 w-3 text-terminal-green-bright mt-1 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-terminal-green-bright font-semibold mb-3 text-sm uppercase tracking-wider">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-terminal-green/50 text-medium-contrast hover:text-terminal-green-bright text-sm font-medium tracking-wide transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button
                        size="lg"
                        className="glass-terminal-button bg-terminal-green hover:bg-terminal-green/90 text-black px-6 py-3 rounded-none font-bold tracking-wide transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="glass-terminal-button border-2 border-gray-700/50 hover:border-terminal-green/50 text-medium-contrast hover:text-terminal-green-bright px-6 py-3 rounded-none font-bold tracking-wide transition-all duration-300 hover:scale-105 bg-gray-900/30 backdrop-blur-sm"
                        asChild
                      >
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-terminal-green/5 to-terminal-green/10 opacity-0 transition-opacity duration-300 ${hoveredProject === index ? "opacity-100" : ""}`}
                ></div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-20 transition-all duration-1000 delay-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-high-contrast">Interested in </span>
              <span className="heading-accent italic terminal-glow-bright">collaboration</span>
              <span className="text-high-contrast">?</span>
            </h2>
            <Button
              size="lg"
              className="glass-terminal-button bg-terminal-green hover:bg-terminal-green/90 text-black px-8 py-4 rounded-none text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
