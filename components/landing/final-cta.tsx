"use client"

import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="relative mobile-section overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=600&width=1920&query=luxury spa salon interior with elegant design)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-black/50 z-1" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-purple-800/50 to-purple-900/60 z-2" />

      <div className="relative z-10 mobile-container mobile-text-center">
        <h2 className="mobile-heading text-white mb-6 text-balance">
          Ready to Transform Your Beauty?
        </h2>
        <p className="mobile-subheading text-purple-100 mb-12 text-balance max-w-2xl mx-auto">
          Join thousands of satisfied clients who trust Naturals for premium beauty and wellness experiences
        </p>

        <div className="mobile-flex-center gap-4 mb-12">
          <Button
            className="mobile-button bg-white text-purple-900 hover:bg-purple-50 hover:text-purple-800 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all w-full sm:w-auto"
            onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Your Appointment Now
          </Button>
          <Button
            className="mobile-button border-2 border-purple-200 text-purple-100 hover:bg-purple-200/20 hover:border-purple-100 font-semibold rounded-full backdrop-blur-sm transition-all w-full sm:w-auto"
            onClick={() => window.open("tel:+916369811137", "_self")}
          >
            📞 +91 063698 11137
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-purple-100/90">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">📍</span>
            <p className="text-sm sm:text-base">Kolathur, Chennai</p>
          </div>
          <div className="hidden sm:block w-px h-6 bg-purple-300/40" />
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🕐</span>
            <p className="text-sm sm:text-base">Mon-Sun | 9 AM - 9 PM</p>
          </div>
          <div className="hidden sm:block w-px h-6 bg-purple-300/40" />
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">✓</span>
            <p className="text-sm sm:text-base">Same Day Booking</p>
          </div>
        </div>
      </div>
      </section>
  )
}
