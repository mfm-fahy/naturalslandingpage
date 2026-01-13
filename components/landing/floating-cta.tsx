"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, MessageCircle, Sparkles, X } from "lucide-react"
import { useSlots } from "@/hooks/use-slots"

export default function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { slots, decreaseSlots } = useSlots()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 2000)
    }, 5000)

    return () => clearInterval(pulseTimer)
  }, [])

  const scrollToBooking = () => {
    decreaseSlots()
    const element = document.getElementById("booking-form")
    if (element) {
      element.scrollIntoView()
    }
    setIsExpanded(false)
  }

  const callNow = () => {
    window.open("tel:+916369811137", "_self")
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/916369811137?text=Hi! I'd like to book an appointment at Naturals.", "_blank")
  }

  if (!mounted) return null

  const floatingContent = (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Mobile Floating Button */}
      <div className="md:hidden">
        <div className="relative">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950 text-white rounded-full h-16 w-16 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl ${isPulsing ? 'animate-pulse' : ''}`}
          >
            {isExpanded ? <X className="w-6 h-6" /> : <Calendar className="w-6 h-6" />}
          </Button>
          
          {/* Slot counter badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            {slots}
          </div>
          
          {/* Expanded mobile menu */}
          {isExpanded && (
            <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 min-w-[200px] transform transition-all duration-300 animate-in slide-in-from-bottom-4">
              <div className="text-center mb-4">
                <p className="text-sm font-bold text-gray-900">✨ Book Your Glow-Up!</p>
                <p className="text-xs text-red-600 font-medium animate-pulse">Only {slots} slots left today!</p>
              </div>
              
              <div className="space-y-3">
                <Button
                  onClick={scrollToBooking}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950 text-white rounded-xl h-12 font-semibold shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={callNow}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-10"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                  <Button
                    onClick={openWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white rounded-xl h-10"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Floating Card */}
      <div className="hidden md:block">
        <div className={`bg-white rounded-2xl shadow-2xl p-4 min-w-[220px] border-2 border-purple-100 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl ${isPulsing ? 'animate-pulse' : ''}`}>
          <div className="text-center mb-3">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <p className="text-base font-bold text-gray-900">Transform Today!</p>
              <Sparkles className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-sm text-red-600 font-semibold animate-pulse bg-red-50 px-3 py-1 rounded-full">
              🔥 Only {slots} slots left today!
            </p>
          </div>
          
          <div className="space-y-2">
            <Button
              onClick={scrollToBooking}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950 text-white rounded-xl h-10 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </Button>
            
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={callNow}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-9 font-medium transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-3 h-3 mr-1" />
                Call
              </Button>
              <Button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white rounded-xl h-9 font-medium transition-all duration-300 hover:scale-105"
              >
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Chat
              </Button>
            </div>
            
            <div className="text-center pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-600">📍 Kolathur, Chennai | 🕐 9 AM - 9 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(floatingContent, document.body)
}