"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Star, Users, Award, MapPin, Clock, Sparkles, Zap, Heart, Crown } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useSlots } from "@/hooks/use-slots"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const isMobile = useIsMobile()
  const { slots, decreaseSlots, isLoaded } = useSlots()

  const words = ["Dream Look", "Glow Up", "Best Self"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToBooking = () => {
    decreaseSlots()
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const callNow = () => {
    window.open("tel:+916369811137", "_self")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with mobile optimization */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: "url(/hero-spa.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
        }}
      />

      {/* Enhanced gradient overlays with mobile optimization */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-purple-800/60 to-purple-950/75 z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-purple-900/20 to-purple-800/10 z-2" />
      {isMobile && <div className="absolute inset-0 bg-purple-900/15 z-3" />}

      {/* Floating particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        ))}
      </div>
      

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center min-h-screen justify-center">
        {/* Logo with enhanced animation */}
        <div className="mb-4 sm:mb-6 transform transition-all duration-1000 hover:scale-110">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
            <img
              src="/naturals-logo.png"
              alt="Naturals Unisex Salon & Spa"
              className="relative h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto drop-shadow-2xl filter brightness-110 animate-fade-in"
            />
          </div>
        </div>

        {/* Main headline with dynamic text animation */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-2xl text-balance leading-tight animate-slide-up">
            Unlock Your
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-2xl font-extrabold animate-gradient">
                {words[currentWord]}
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse" />
            </span>
          </h1>
        </div>

        {/* Enhanced subtitle with icons */}
        <div className="mb-8 sm:mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium text-balance leading-relaxed max-w-4xl mx-auto drop-shadow-xl mb-4">
            Transform into your most confident self
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm sm:text-base font-medium">Expert Stylists</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-sm sm:text-base font-medium">Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-400" />
              <span className="text-sm sm:text-base font-medium">Premium Care</span>
            </div>
          </div>
        </div>

        {/* Enhanced key benefits with animations */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: Clock, text: "Same Day Booking", color: "from-blue-500 to-cyan-500" },
            { icon: Sparkles, text: "Premium Quality", color: "from-purple-500 to-pink-500" },
            { icon: Award, text: "Expert Team", color: "from-yellow-500 to-orange-500" }
          ].map((benefit, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden"
              style={{ animationDelay: `${0.8 + index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full`} />
              <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-xl px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-white font-semibold text-sm sm:text-base border border-white/40 shadow-2xl hover:bg-white/30 hover:scale-105 transition-all duration-300 hover:shadow-white/20">
                <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                <span>{benefit.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA buttons with animations */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 md:mb-12 w-full max-w-sm sm:max-w-none animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button
            size={isMobile ? "default" : "lg"}
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-white to-purple-50 text-purple-900 hover:from-purple-100 hover:to-white font-bold px-8 sm:px-10 md:px-12 text-base sm:text-lg md:text-xl h-14 sm:h-16 md:h-18 shadow-2xl hover:shadow-white/50 transition-all rounded-full duration-300 hover:scale-110 active:scale-95 w-full sm:w-auto relative overflow-hidden group border-2 border-white"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-none" />
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Book Your Glow-Up</span>
          </Button>
          
          <Button
            variant="outline"
            size={isMobile ? "default" : "lg"}
            onClick={callNow}
            className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold px-8 sm:px-10 md:px-12 text-base sm:text-lg md:text-xl h-14 sm:h-16 md:h-18 rounded-full bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 w-full sm:w-auto hover:shadow-2xl hover:shadow-white/30 shadow-lg group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 relative z-10 group-hover:animate-pulse" />
            <span className="relative z-10">Call Now</span>
          </Button>
        </div>

        {/* Enhanced urgency indicator */}
        {/* <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="relative inline-flex items-center gap-3 mb-8 sm:mb-10 px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-500 backdrop-blur-xl text-white font-bold rounded-full text-sm sm:text-base shadow-2xl hover:scale-105 transition-transform duration-300 border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse opacity-50" />
            <div className="relative flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
              <span className="animate-pulse">🔥 Only {slots} slots left today!</span>
            </div>
          </div>
        </div> */}

        {/* Stats removed for cleaner design */}
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce cursor-pointer" onClick={scrollToBooking}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white/80 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div> */}
    </section>
  )
}
