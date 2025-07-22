"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Wrench, Shield, BookOpen, Sparkles } from "lucide-react"
import ParticlesBackground from "@/components/particles-background"
import { personalData } from "@/lib/data"

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: personalData.skills.languages,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: personalData.skills.frameworks,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Development",
      icon: Wrench,
      skills: personalData.skills.tools,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Backend & APIs",
      icon: Database,
      skills: personalData.skills.backend,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Authentication",
      icon: Shield,
      skills: personalData.skills.authentication,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Currently Learning",
      icon: BookOpen,
      skills: personalData.skills.learning,
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen text-white">
      <Navigation />

      {/* Animated Background Elements */}
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

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div
              className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Badge className="bg-gradient-to-r from-terminal-green/20 to-terminal-green/30 border border-terminal-green/50 hover:from-terminal-green/30 hover:to-terminal-green/40 text-terminal-green-bright px-6 py-3 rounded-none mb-8 shadow-lg shadow-terminal-green/25 backdrop-blur-sm">
                <Sparkles className="mr-2 h-4 w-4" />
                Technical Skills
              </Badge>
            </div>

            <h1
              className={`text-5xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <span className="text-high-contrast">My </span>
              <span className="heading-accent italic terminal-glow-bright">Expertise</span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-medium-contrast max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              A comprehensive overview of my technical skills and the technologies I work with to build modern web
              applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className={`glass-terminal-card hover:border-terminal-green/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl font-bold heading-secondary group-hover:text-terminal-green-bright transition-colors duration-300">
                      <div
                        className={`p-2 rounded-none bg-gradient-to-r ${category.color} bg-opacity-20 border border-terminal-green/30`}
                      >
                        <IconComponent className="h-5 w-5 text-terminal-green-bright" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gray-800/50 backdrop-blur-sm text-medium-contrast hover:bg-gray-700/50 hover:text-terminal-green-bright border border-gray-700/50 hover:border-terminal-green/50 transition-all duration-300 hover:scale-105 rounded-none"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-terminal-green/5 to-terminal-green/10 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              )
            })}
          </div>

          {/* Experience Summary */}
          <div
            className={`mt-20 text-center transition-all duration-1000 delay-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Card className="glass-terminal-card bg-gray-900/50 backdrop-blur-sm border-terminal-green/30 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-accent terminal-glow-bright">
                  2+ Years of Experience
                </h2>
                <p className="text-xl text-medium-contrast leading-relaxed">
                  Specialized in building performant, scalable web interfaces using React and modern JavaScript
                  frameworks. Passionate about creating exceptional user experiences and writing clean, maintainable
                  code.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
