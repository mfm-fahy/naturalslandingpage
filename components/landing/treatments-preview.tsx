"use client"

import { Scissors, Sparkles, Droplets, Zap } from "lucide-react"

export default function TreatmentsPreview() {
  const categories = [
    {
      name: "Hair Services",
      icon: Scissors,
      count: 7,
      description: "Cuts, trims, color & styling for all hair types",
    },
    {
      name: "Skin Treatments",
      icon: Sparkles,
      count: 6,
      description: "Facials, de-tan, cleansups & skincare",
    },
    {
      name: "Nail Care",
      icon: Droplets,
      count: 3,
      description: "Manicure, pedicure & nail art",
    },
    {
      name: "Wellness",
      icon: Zap,
      count: 2,
      description: "Massage, reflexology & relaxation",
    },
  ]

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/40 via-white to-purple-100/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/10 via-transparent to-purple-300/10" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="mobile-text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading mb-4 text-balance">Our Services</h2>
          <p className="mobile-subheading text-muted-foreground max-w-2xl mx-auto">
            18 premium treatments for everyone. Hair, skin, nails & wellness services designed for all clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div
                key={i}
                className="mobile-card bg-gradient-to-br from-white to-purple-100/40 rounded-2xl text-center shadow-sm md:hover:shadow-2xl md:hover:shadow-purple-500/20 transition-all duration-500 md:hover:-translate-y-2 md:hover:scale-105 border border-purple-200/50 group cursor-pointer relative overflow-hidden"
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/40 rounded-full -translate-y-10 translate-x-10 md:group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-4 rounded-full bg-purple-200/60 md:group-hover:bg-purple-600 transition-all duration-500 md:group-hover:scale-110 md:group-hover:rotate-12 shadow-lg md:group-hover:shadow-xl">
                    <Icon className="w-7 h-7 text-purple-700 md:group-hover:text-white transition-colors duration-300" />
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-purple-600/30 opacity-0 md:group-hover:opacity-100 animate-ping"></div>
                </div>
                
                <div className="text-5xl font-bold text-purple-600 mb-3 md:group-hover:scale-125 md:group-hover:text-purple-700 transition-all duration-500 relative z-10">
                  {cat.count}
                  <span className="text-lg ml-1 opacity-60">+</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 md:group-hover:text-purple-800 transition-colors duration-300 relative z-10">{cat.name}</h3>
                <p className="text-sm text-muted-foreground md:group-hover:text-purple-700 transition-colors duration-300 relative z-10">{cat.description}</p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-700 to-purple-500 transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
