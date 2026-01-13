"use client"

import { Sparkles, Heart, Shield, Award, Star, Users, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

export default function BenefitsSection() {
  const isMobile = useIsMobile()
  
  const benefits = [
    {
      icon: Sparkles,
      title: "Expert Professionals",
      description: "Certified specialists with 15+ years of expertise in all treatments",
      stat: "15+ Years",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "For Everyone",
      description: "Welcoming space for all clients, all backgrounds, all genders",
      stat: "100% Inclusive",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Shield,
      title: "Safe & Hygienic",
      description: "Strict international sanitation standards for your wellbeing",
      stat: "ISO Certified",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in unisex beauty & wellness",
      stat: "#1 Rated",
      color: "from-purple-700 to-purple-800"
    },
  ]

  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/20 via-purple-100/30 to-purple-50/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/15 via-transparent to-purple-300/15" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-400/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="mobile-text-center mb-12 sm:mb-16">
          {/* Social proof header */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="flex -space-x-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-purple-700">Trusted by 50,000+ customers</span>
          </div>
          
          <h2 className="mobile-heading mb-4 text-balance">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Naturals</span>?
          </h2>
          <p className="mobile-subheading text-muted-foreground max-w-3xl mx-auto">
            {isMobile ? "Premium care & expert service for everyone" : "Premium care, expert service, and a welcoming space designed for everyone"}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <div
                key={i}
                className="mobile-card bg-white rounded-2xl text-center shadow-lg md:hover:shadow-2xl md:hover:shadow-purple-500/20 transition-all duration-500 md:hover:-translate-y-4 border border-purple-200/50 relative overflow-hidden cursor-pointer group"
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 md:group-hover:opacity-15 transition-all duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-100/60 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating icon with enhanced animation */}
                <div className="flex justify-center mb-4 sm:mb-6 relative">
                  <div className={`p-3 sm:p-4 rounded-full bg-gradient-to-br ${benefit.color} shadow-lg md:group-hover:shadow-xl transition-all duration-500 md:group-hover:scale-110 md:group-hover:rotate-6`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white md:group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Pulse ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${benefit.color} opacity-0 md:group-hover:opacity-20 animate-ping`}></div>
                </div>
                
                {/* Enhanced stat badge */}
                <div className="inline-block bg-purple-200/80 text-purple-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 md:group-hover:bg-purple-300/90 md:group-hover:scale-105 transition-all duration-300">
                  {benefit.stat}
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 md:group-hover:text-purple-800 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:group-hover:text-purple-600 transition-colors duration-300">{benefit.description}</p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-700 to-purple-500 opacity-0 md:group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mobile-text-center">
          <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 rounded-2xl sm:rounded-3xl mobile-card text-white shadow-2xl shadow-purple-900/25">
            <div className="mobile-flex-center">
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Experience the Naturals Difference</h3>
                <p className="text-purple-50 mobile-body mb-4">
                  Join thousands of satisfied customers who trust us with their beauty needs
                </p>
                
                {/* Social proof */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>50K+ Customers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Same Day Booking</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button
                  onClick={scrollToBooking}
                  className="mobile-button bg-white text-purple-700 hover:bg-purple-50 hover:text-purple-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                {!isMobile && (
                  <Button
                    className="mobile-button bg-purple-500 text-white hover:bg-purple-600 border-2 border-purple-500 hover:border-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                    onClick={() => window.open('tel:+916369811137', '_self')}
                  >
                    Call Now
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
