"use client"

import { ArrowRight, Github, Mail, Linkedin, Download, ExternalLink, Code, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import ParticlesBackground from "@/components/particles-background"
import { useEffect, useState } from "react"
import { personalData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [textIndex, setTextIndex] = useState(0)

  const typingTexts = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"]

  useEffect(() => {
    setMounted(true)

    // Typing animation
    const text = typingTexts[textIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < text.length) {
        setCurrentText(text.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % typingTexts.length)
          setCurrentText("")
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [textIndex])

  const featuredProjects = personalData.projects.filter((project) => project.featured).slice(0, 2)

  return (
    <div className="min-h-screen bg-terminal-dark text-white overflow-hidden relative font-mono">
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

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Status Badge */}
              <div
                className={`transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Badge className="bg-gradient-to-r from-terminal-green/20 to-terminal-green/30 border border-terminal-green/50 hover:from-terminal-green/30 hover:to-terminal-green/40 text-terminal-green-bright px-6 py-3 rounded-none mb-8 shadow-lg shadow-terminal-green/25 backdrop-blur-sm">
                  {personalData.hero.badge}
                </Badge>
              </div>

              {/* Main Heading */}
              <div
                className={`space-y-6 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-wider">
                  <span className="text-high-contrast">Hello, I'm</span>
                  <br />
                  <span className="heading-accent italic terminal-glow-bright">{personalData.name}</span>
                </h1>

                <div className="text-xl md:text-2xl text-medium-contrast font-light tracking-wide min-h-[3rem] max-w-3xl mx-auto leading-relaxed">
                  <span className="text-terminal-green-bright">&gt;</span> {currentText}
                  <span className="animate-pulse text-terminal-green-bright">|</span>
                </div>
              </div>

              {/* Description */}
              <div
                className={`transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <p className="text-xl md:text-2xl text-medium-contrast max-w-3xl leading-relaxed">
                  {personalData.summary}
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Button
                  size="lg"
                  className="glass-terminal-button bg-terminal-green hover:bg-terminal-green/90 text-black px-8 py-4 rounded-none text-lg font-bold tracking-wide transform hover:scale-105 transition-all duration-300 shadow-lg shadow-terminal-green/25"
                  asChild
                >
                  <Link href="/work">
                    <Briefcase className="mr-2 h-5 w-5" />
                    View My Work
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="glass-terminal-button border-2 border-terminal-green/50 hover:border-terminal-green text-terminal-green-bright hover:bg-terminal-green hover:text-black px-8 py-4 rounded-none text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
                  href="/resume.pdf"
                  target="_blank"
                >
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div
                className={`flex gap-4 transition-all duration-1000 delay-900 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-terminal-icon bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-terminal-green/50 hover:bg-terminal-green/10 text-high-contrast w-12 h-12 rounded-none transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-terminal-icon bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-terminal-green/50 hover:bg-terminal-green/10 text-high-contrast w-12 h-12 rounded-none transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href={personalData.social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-terminal-icon bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-terminal-green/50 hover:bg-terminal-green/10 text-high-contrast w-12 h-12 rounded-none transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href={`mailto:${personalData.email}`}>
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div
                className={`relative transition-all duration-1000 delay-1100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="relative">
                  {/* Enhanced frame with multiple layers */}
                  <div className="absolute -inset-6 border-4 border-terminal-green-bright bg-transparent terminal-frame-glow"></div>
                  <div className="absolute -inset-3 bg-terminal-green/5 backdrop-blur-sm border border-terminal-green/20"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-terminal-green/10 to-transparent"></div>

                  {/* Profile image */}
                  <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gray-900/80 backdrop-blur-sm relative overflow-hidden border border-gray-800/50">
                    <Image
                      src="/images/saurabh.jpg"
                      alt={personalData.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-terminal-dark/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-terminal-green/20 to-terminal-green/30 border border-terminal-green/50 hover:from-terminal-green/30 hover:to-terminal-green/40 text-terminal-green-bright px-6 py-3 rounded-none mb-8 shadow-lg shadow-terminal-green/25 backdrop-blur-sm">
                Featured Work
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-high-contrast">Selected </span>
                <span className="heading-accent italic terminal-glow-bright">Projects</span>
              </h2>
              <p className="text-xl md:text-2xl text-medium-contrast max-w-3xl mx-auto leading-relaxed">
                A showcase of my recent work in web development and React applications
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {personalData.projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="glass-terminal-card bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800/50 hover:border-terminal-green/50 transition-all duration-500 rounded-none hover:scale-[1.02] hover:-translate-y-2 group cursor-pointer"
                  >
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-terminal-dark/80 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-terminal-green text-black px-2 py-1 text-xs font-bold">FEATURED</Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6 space-y-4">
                      <CardTitle className="text-xl font-bold heading-secondary group-hover:text-terminal-green-bright transition-colors duration-300">
                        {project.title}
                      </CardTitle>

                      <CardDescription className="text-medium-contrast leading-relaxed">
                        {project.description}
                      </CardDescription>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-medium-contrast text-xs tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button
                          size="sm"
                          className="bg-terminal-green hover:bg-terminal-green/90 text-black px-4 py-2 rounded-none text-sm font-bold tracking-wide transition-all duration-300"
                          asChild
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Live
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border border-gray-700/50 hover:border-terminal-green/50 text-medium-contrast hover:text-terminal-green-bright px-4 py-2 rounded-none text-sm font-bold tracking-wide transition-all duration-300 bg-transparent"
                          asChild
                        >
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Code className="h-3 w-3 mr-1" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* View All Projects Button */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="glass-terminal-button border-2 border-terminal-green/50 hover:border-terminal-green text-terminal-green-bright hover:bg-terminal-green hover:text-black px-8 py-4 rounded-none text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
                asChild
              >
                <Link href="/work">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gradient-to-r from-terminal-green/20 to-terminal-green/30 border border-terminal-green/50 hover:from-terminal-green/30 hover:to-terminal-green/40 text-terminal-green-bright px-6 py-3 rounded-none mb-8 shadow-lg shadow-terminal-green/25 backdrop-blur-sm">
              Technical Skills
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-high-contrast">Technologies I </span>
              <span className="heading-accent italic terminal-glow-bright">Work With</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[...personalData.skills.languages, ...personalData.skills.frameworks].slice(0, 8).map((skill, index) => (
                <div
                  key={index}
                  className="glass-terminal-card bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-terminal-green/50 p-4 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-medium-contrast font-medium tracking-wide">{skill}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              variant="outline"
              className="glass-terminal-button border-2 border-terminal-green/50 hover:border-terminal-green text-terminal-green-bright hover:bg-terminal-green hover:text-black px-8 py-4 rounded-none text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
              asChild
            >
              <Link href="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="glass-terminal-card bg-gray-900/50 backdrop-blur-sm border-2 border-terminal-green/30 hover:border-terminal-green/50 transition-all duration-500">
              <CardContent className="p-12">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  <span className="text-high-contrast">Let's </span>
                  <span className="heading-accent italic terminal-glow-bright">Work Together</span>
                </h2>
                <p className="text-xl md:text-2xl text-medium-contrast mb-8 leading-relaxed max-w-3xl mx-auto">
                  Ready to bring your ideas to life? I'm available for freelance projects and full-time opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="glass-terminal-button bg-terminal-green hover:bg-terminal-green/90 text-black px-8 py-4 rounded-none text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Get In Touch
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-terminal-button border-2 border-terminal-green/50 hover:border-terminal-green text-terminal-green-bright hover:bg-terminal-green hover:text-black px-8 py-4 rounded-none text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
                    asChild
                  >
                    <Link href="/about">Learn More About Me</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
