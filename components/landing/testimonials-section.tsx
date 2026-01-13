"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Priya Sharma",
    service: "Hair Cut & Styling",
    rating: 5,
    text: "Excellent service! The staff is very professional and friendly. Got a beautiful haircut and the ambiance is really good. Highly recommended for hair treatments.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Rajesh Kumar",
    service: "Facial & Beard Trim",
    rating: 5,
    text: "Amazing experience at Naturals Kolathur. The facial was very relaxing and my beard trim was perfect. Staff is well trained and maintains good hygiene standards.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Meera Krishnan",
    service: "Bridal Package",
    rating: 5,
    text: "Best salon in Kolathur area! Did my bridal makeup and hair styling. The team was so patient and made sure everything was perfect. Thank you for making my special day beautiful!",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Arun Vijay",
    service: "Hair Color & Cut",
    rating: 5,
    text: "Very satisfied with the hair coloring service. The stylist understood exactly what I wanted and the result was fantastic. Good value for money and quality service.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Lakshmi Devi",
    service: "Spa Treatment",
    rating: 5,
    text: "Wonderful spa experience! The massage was very relaxing and the therapist was skilled. Clean environment and good customer service. Will definitely visit again.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Karthik Raman",
    service: "Hair Treatment",
    rating: 4,
    text: "Good service overall. The hair treatment helped with my dandruff problem. Staff is courteous and the salon is well maintained. Reasonable pricing too.",
    image: "/placeholder-user.jpg"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-100/50 via-purple-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/10 via-transparent to-purple-100/10" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-200/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="mobile-text-center mb-12 sm:mb-16">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="flex -space-x-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 text-purple-500 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-purple-700">4.8/5 from 150+ Google reviews</span>
          </div>
          
          <h2 className="mobile-heading mb-4 text-balance">
            What Our <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="mobile-subheading text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real people who trust us with their beauty and wellness needs
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial display */}
          <div className="bg-white rounded-2xl sm:rounded-3xl mobile-card shadow-2xl shadow-purple-900/15 border border-purple-200/60 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-purple-200">
              <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
            </div>
            
            <div className="relative z-10">
              <div className="mobile-flex-center gap-6 sm:gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-bold text-purple-700">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating 
                            ? 'text-purple-500 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  <p className="mobile-body text-gray-700 mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-purple-600 font-medium">
                      {testimonials[currentIndex].service}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0 border-purple-200 hover:bg-purple-50 hover:border-purple-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0 border-purple-200 hover:bg-purple-50 hover:border-purple-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'bg-purple-600 scale-125' 
                    : 'bg-purple-200 hover:bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto mt-12 sm:mt-16 text-center">
            <div className="p-4">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Google Reviews</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Premium Services</div>
            </div>
          </div>
      </div>
    </section>
  )
}