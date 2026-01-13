"use client"

import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      title: "Choose Treatment",
      description: "Browse 18 premium treatments for hair, skin, nails & wellness",
      icon: "✨",
    },
    {
      title: "Pick Your Time",
      description: "Select a date and time that works perfectly for you",
      icon: "🕐",
    },
    {
      title: "Relax & Enjoy",
      description: "Arrive and experience our premium unisex salon & spa",
      icon: "✓",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-purple-100/40 via-purple-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-transparent to-purple-300/15" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Easy Booking</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three simple steps to your perfect salon experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-sm md:hover:shadow-xl md:hover:shadow-purple-500/20 transition-all duration-300 border border-purple-200/50 h-full md:hover:-translate-y-2">
                <div className="text-4xl mb-4">{step.icon}</div>

                <h3 className="text-2xl font-semibold text-foreground mb-3 md:group-hover:text-purple-800 transition-colors duration-300">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed md:group-hover:text-purple-600 transition-colors duration-300">{step.description}</p>

                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="bg-purple-600 rounded-full p-2">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
