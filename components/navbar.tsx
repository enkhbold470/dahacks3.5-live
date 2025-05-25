"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { navbarData } from "@/lib/data"
import { Menu, X, Home, Calendar, BookOpen, HelpCircle } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const getIcon = (linkName: string) => {
    switch (linkName) {
      case 'HOME':
        return <Home className="w-4 h-4" />
      case 'SCHEDULE':
        return <Calendar className="w-4 h-4" />
      case 'RESOURCES':
        return <BookOpen className="w-4 h-4" />
      case 'FAQ':
        return <HelpCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a1e]/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">
                DAHacks 3.5
              </Link>
            </div>

            <nav className="flex items-center space-x-8">
              {navbarData.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? "text-primary" : "text-gray-300"
                  }`}
                >
                  {getIcon(link.name)}
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a0a1e]/90 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-center">
            <Link href="/" className="text-xl font-bold">
              DAHacks 3.5
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a1e] border-t border-gray-800">
        <div className="grid grid-cols-4 h-16">
          {navbarData.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                pathname === link.href ? "text-primary bg-[#1a1a3a]" : "text-gray-300"
              }`}
            >
              {getIcon(link.name)}
              <span className="text-xs font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
