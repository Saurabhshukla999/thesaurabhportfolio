"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, Calendar } from "lucide-react"
import ParticlesBackground from "@/components/particles-background"
import { personalData } from "@/lib/data"

export default function Contact() {
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

      <main className="relative z-10 container mx-auto px-8 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Badge className="bg-gradient-to-r from-terminal-green/20 to-terminal-green/30 border border-terminal-green/50 hover:from-terminal-green/30 hover:to-terminal-green/40 text-terminal-green-bright px-6 py-3 rounded-none mb-8 shadow-lg shadow-terminal-green/25 backdrop-blur-sm">
                Get In Touch
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-high-contrast">Let's </span>
                <span className="heading-accent italic terminal-glow-bright">Connect</span>
              </h1>
              <p className="text-xl md:text-2xl text-medium-contrast max-w-3xl mx-auto leading-relaxed">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you.
              </p>
            </div>
          </div>

          {/* Contact Information Section - Now centered and enhanced */}
          <div className="flex justify-center">
            <Card
              className={`glass-terminal-card bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800/50 hover:border-terminal-green/50 transition-all duration-500 rounded-none w-full max-w-lg ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <CardHeader className="border-b border-gray-800/50">
                <CardTitle className="text-xl font-bold heading-secondary tracking-wider">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terminal-green/20 border border-terminal-green/50 flex items-center justify-center rounded-sm">
                    <Mail className="h-5 w-5 text-terminal-green-bright" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm tracking-wide">Email</p>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-medium-contrast hover:text-terminal-green-bright transition-colors tracking-wide"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terminal-green/20 border border-terminal-green/50 flex items-center justify-center rounded-sm">
                    <Phone className="h-5 w-5 text-terminal-green-bright" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm tracking-wide">Phone</p>
                    <a
                      href="tel:8569879142"
                      className="text-medium-contrast hover:text-terminal-green-bright transition-colors tracking-wide"
                    >
                      8569879142
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terminal-green/20 border border-terminal-green/50 flex items-center justify-center rounded-sm">
                    <MapPin className="h-5 w-5 text-terminal-green-bright" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm tracking-wide">Location</p>
                    <p className="text-medium-contrast tracking-wide">{personalData.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terminal-green/20 border border-terminal-green/50 flex items-center justify-center rounded-sm">
                    <Calendar className="h-5 w-5 text-terminal-green-bright" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm tracking-wide">Availability</p>
                    <p className="text-medium-contrast tracking-wide">Available for new projects</p>
                  </div>
                </div>

                {/* Quick Actions within Contact Info Card */}
                <div className="pt-4 space-y-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full glass-terminal-button border-2 border-terminal-green/50 hover:border-terminal-green text-terminal-green-bright hover:bg-terminal-green hover:text-black px-6 py-3 rounded-none font-bold tracking-wide transition-all duration-300 bg-transparent backdrop-blur-sm"
                    asChild
                  >
                    <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full glass-terminal-button border-2 border-terminal-green/50 hover:border-terminal-green text-terminal-green-bright hover:bg-terminal-green hover:text-black px-6 py-3 rounded-none font-bold tracking-wide transition-all duration-300 bg-transparent backdrop-blur-sm"
                    asChild
                  >
                    <a href="tel:8569879142">Schedule a Call</a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full glass-terminal-button border-2 border-terminal-green/50 hover:border-terminal-green text-terminal-green-bright hover:bg-terminal-green hover:text-black px-6 py-3 rounded-none font-bold tracking-wide transition-all duration-300 bg-transparent backdrop-blur-sm"
                    href="/resume.pdf"
                    target="_blank"
                  >
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
