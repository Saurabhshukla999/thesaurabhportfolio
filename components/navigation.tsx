"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { personalData } from "@/lib/data"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ]

  // Extract initials from name
  const initials = personalData.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light-terminal" : "dark")
  }

  if (!mounted) {
    return <nav className="fixed top-0 left-0 right-0 z-50 h-20" />; 
  }
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-mono ${
        scrolled
          ? "bg-terminal-dark/95 backdrop-blur-md border-b border-terminal-green/20 shadow-lg shadow-terminal-green/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-terminal-green text-black font-bold text-lg tracking-wider transition-all duration-300 group-hover:scale-110">
              <Terminal className="h-5 w-5" />
            </div>
            <div className="text-xl font-bold text-terminal-green hover:text-terminal-green/80 transition-colors duration-300 tracking-wider">
              {initials}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-300 hover:text-terminal-green transition-colors duration-300 font-medium tracking-wide relative group ${
                  pathname === item.href ? "text-terminal-green" : ""
                }`}
              >
                {item.name}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-terminal-green transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></div>
              </Link>
            ))}
          </div>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-terminal-green hover:bg-gray-800 rounded-none w-10 h-10"
              onClick={toggleTheme}
            >
              {mounted && theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
            </Button>
            <Button
              size="sm"
              className="bg-terminal-green hover:bg-terminal-green/90 text-black px-6 py-2 rounded-none font-bold tracking-wide transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">Hire Me</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-terminal-green hover:bg-gray-800 rounded-none w-10 h-10"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-terminal-green hover:bg-gray-800 rounded-none w-10 h-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-800/50 bg-terminal-dark/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 text-gray-300 hover:text-terminal-green hover:bg-gray-800/50 transition-all duration-300 tracking-wide ${
                    pathname === item.href ? "text-terminal-green bg-gray-800/30" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-terminal-green mr-2">&gt;</span>
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button
                  size="sm"
                  className="w-full bg-terminal-green hover:bg-terminal-green/90 text-black px-6 py-3 rounded-none font-bold tracking-wide transition-all duration-300"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/contact">Hire Me</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
