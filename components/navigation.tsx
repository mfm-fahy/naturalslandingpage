"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/naturals-logo.png" alt="Naturals Logo" width={180} height={60} className="h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary font-medium transition">
              About Us
            </a>
            <a href="#treatments" className="text-foreground hover:text-primary font-medium transition">
              Treatments
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary font-medium transition">
              Why Us
            </a>
            <a
              href="#booking"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition font-medium"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a href="#about" className="block text-foreground hover:text-primary font-medium">
              About Us
            </a>
            <a href="#treatments" className="block text-foreground hover:text-primary font-medium">
              Treatments
            </a>
            <a href="#why-us" className="block text-foreground hover:text-primary font-medium">
              Why Us
            </a>
            <a
              href="#booking"
              className="block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition font-medium text-center"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
