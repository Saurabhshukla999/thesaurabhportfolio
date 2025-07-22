"use client"

import { useEffect, useRef } from "react"

interface ParticlesBackgroundProps {
  particleCount?: number
  minSize?: number
  maxSize?: number
  minDuration?: number
  maxDuration?: number
}

export default function ParticlesBackground({
  particleCount = 50,
  minSize = 2,
  maxSize = 5,
  minDuration = 10,
  maxDuration = 20,
}: ParticlesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const particles: HTMLDivElement[] = []
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      const size = Math.random() * (maxSize - minSize) + minSize
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDuration = `${Math.random() * (maxDuration - minDuration) + minDuration}s`
      particle.style.animationDelay = `${Math.random() * -maxDuration}s`
      particle.style.setProperty("--x-end", `${(Math.random() - 0.5) * 200}px`)
      particle.style.setProperty("--y-end", `${(Math.random() - 0.5) * 200}px`)
      containerRef.current.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach((p) => p.remove())
    }
  }, [particleCount, minSize, maxSize, minDuration, maxDuration])

  return <div ref={containerRef} className="particles-container" aria-hidden="true" />
}
