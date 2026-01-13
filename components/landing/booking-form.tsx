"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, ArrowRight, ArrowLeft, Calendar, Clock, User, Mail, Phone, Sparkles, Star, Users } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useSlots } from "@/hooks/use-slots"

const TREATMENTS = [
  { name: "Hair Cut", price: "₹299", duration: "30 min", popular: true },
  { name: "Beard Trim / Shave", price: "₹199", duration: "20 min", popular: false },
  { name: "Hair Colour", price: "₹899", duration: "90 min", popular: true },
  { name: "Head Massage", price: "₹399", duration: "45 min", popular: false },
  { name: "Hair Spa", price: "₹699", duration: "60 min", popular: true },
  { name: "Hair Straightening", price: "₹1299", duration: "120 min", popular: false },
  { name: "Keratin Service", price: "₹1599", duration: "150 min", popular: false },
  { name: "Skin Facial", price: "₹599", duration: "60 min", popular: true },
  { name: "Detan Face", price: "₹399", duration: "45 min", popular: false },
  { name: "Face Clean Up", price: "₹299", duration: "30 min", popular: true },
  { name: "De-Tan", price: "₹499", duration: "45 min", popular: false },
  { name: "Face Masks", price: "₹349", duration: "30 min", popular: false },
  { name: "Under Eye Treatment", price: "₹449", duration: "30 min", popular: false },
  { name: "Manicure", price: "₹399", duration: "45 min", popular: true },
  { name: "Pedicure", price: "₹499", duration: "60 min", popular: true },
  { name: "Reflexology", price: "₹699", duration: "60 min", popular: false },
  { name: "Threading & Waxing", price: "₹199", duration: "20 min", popular: false },
  { name: "Nail Art", price: "₹299", duration: "30 min", popular: false },
]

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"
]

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatments: [] as string[],
    date: "",
    time: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [availableSlots, setAvailableSlots] = useState(TIME_SLOTS)
  const isMobile = useIsMobile()
  const { slots } = useSlots()

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0]
  
  // Simulate slot availability based on selected date
  useEffect(() => {
    if (formData.date) {
      const dayOfWeek = new Date(formData.date).getDay()
      // Weekend slots are more limited
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        setAvailableSlots(TIME_SLOTS.filter((_, i) => i % 2 === 0))
      } else {
        setAvailableSlots(TIME_SLOTS)
      }
    }
  }, [formData.date])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTreatmentSelect = (treatment: string) => {
    setFormData((prev) => {
      const treatments = prev.treatments.includes(treatment)
        ? prev.treatments.filter(t => t !== treatment)
        : [...prev.treatments, treatment]
      return { ...prev, treatments }
    })
  }

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, time }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.treatments.length > 0
      case 2: return formData.date !== "" && formData.time !== ""
      case 3: return formData.name !== "" && formData.phone !== "" && formData.email !== ""
      default: return false
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("[v0] Booking submitted:", formData)
    setSubmitted(true)
    setIsLoading(false)
    
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", treatments: [], date: "", time: "" })
      setSubmitted(false)
      setCurrentStep(1)
    }, 5000)
  }

  return (
    <section id="booking-form" className="mobile-section mobile-container bg-gradient-to-b from-purple-50/40 via-purple-100/20 to-purple-200/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/25 via-transparent to-purple-300/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header with social proof */}
        <div className="mobile-text-center mb-12 sm:mb-16">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center">
                  <Star className="w-3 h-3 text-white fill-current" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-purple-700">2,847 bookings this month</span>
          </div>
          
          <h2 className="mobile-heading mb-4 text-balance">
            Book Your <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Perfect</span> Appointment
          </h2>
          <p className="mobile-subheading text-muted-foreground max-w-2xl mx-auto">
            {isMobile ? "Quick 3-step booking process" : "Secure your slot for an unforgettable spa experience in just 3 simple steps"}
          </p>
          
          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-3 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span>Only {slots} slots left today!</span>
          </div>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl border border-purple-100 animate-in fade-in duration-500 max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 animate-bounce" />
                <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full animate-ping" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Booking Confirmed! 🎉</h3>
            <p className="text-muted-foreground mb-6 text-base sm:text-lg">
              Thank you for choosing Naturals. We'll contact you within 15 minutes to confirm your appointment details.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
              <p className="text-green-800 font-medium text-sm">
                ✓ Confirmation sent to {formData.email}<br/>
                ✓ SMS reminder will be sent 2 hours before your appointment
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => window.open('https://wa.me/18003628725?text=Hi! I just booked an appointment and wanted to confirm the details.', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
              >
                WhatsApp Us
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('tel:+1-800-NATURALS', '_self')}
                className="border-purple-200 text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-xl"
              >
                Call Now
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-2xl shadow-purple-900/15 border border-purple-200/70 overflow-hidden max-w-3xl mx-auto">
            {/* Progress bar */}
            <div className="bg-gradient-to-r from-purple-100/60 to-purple-200/60 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-800">Step {currentStep} of 4</span>
                <span className="text-sm text-purple-700">{Math.round((currentStep / 4) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-purple-300/60 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              {/* Step 1: Treatment Selection */}
              {currentStep === 1 && (
                <div className="animate-in slide-in-from-right duration-300">
                  <div className="text-center mb-6">
                    <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Choose Your Treatments</h3>
                    <p className="text-muted-foreground">Select one or more services you'd like to book</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                    {TREATMENTS.map((treatment) => (
                      <div
                        key={treatment.name}
                        onClick={() => handleTreatmentSelect(treatment.name)}
                        className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md h-20 flex items-center ${
                          formData.treatments.includes(treatment.name)
                            ? 'border-purple-500 bg-purple-50 shadow-lg'
                            : 'border-gray-200 hover:border-purple-300 bg-white'
                        }`}
                      >
                        {treatment.popular && (
                          <div className="absolute top-1 right-1 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Popular
                          </div>
                        )}
                        <div className="flex justify-between items-center w-full">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground text-sm truncate">{treatment.name}</h4>
                            <p className="text-xs text-muted-foreground">{treatment.duration}</p>
                          </div>
                          <div className="text-right ml-3 flex-shrink-0">
                            {formData.treatments.includes(treatment.name) && (
                              <CheckCircle2 className="w-4 h-4 text-purple-600" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {formData.treatments.length > 0 && (
                    <div className="mt-4 p-4 bg-purple-50 rounded-2xl">
                      <p className="text-sm font-medium text-purple-800 mb-2">Selected Treatments ({formData.treatments.length}):</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.treatments.map((treatment) => (
                          <span key={treatment} className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-xs rounded-full">
                            {treatment}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleTreatmentSelect(treatment)
                              }}
                              className="ml-1 hover:bg-purple-700 rounded-full p-0.5"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Date & Time Selection */}
              {currentStep === 2 && (
                <div className="animate-in slide-in-from-right duration-300">
                  <div className="text-center mb-6">
                    <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Pick Date & Time</h3>
                    <p className="text-muted-foreground">When would you like to visit us?</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Select Date</label>
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        required
                        className="bg-input border-border text-foreground text-base px-4 py-3 rounded-xl h-12 w-full"
                      />
                    </div>
                    
                    {formData.date && (
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          Available Time Slots
                          <span className="text-xs text-muted-foreground ml-2">({availableSlots.length} slots available)</span>
                        </label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {availableSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => handleTimeSelect(slot)}
                              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                                formData.time === slot
                                  ? 'border-purple-500 bg-purple-500 text-white shadow-lg'
                                  : 'border-gray-200 hover:border-purple-300 bg-white text-foreground hover:shadow-md'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Personal Information */}
              {currentStep === 3 && (
                <div className="animate-in slide-in-from-right duration-300">
                  <div className="text-center mb-6">
                    <User className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Your Details</h3>
                    <p className="text-muted-foreground">We need these to confirm your booking</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground text-base px-4 py-3 rounded-xl h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground text-base px-4 py-3 rounded-xl h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground text-base px-4 py-3 rounded-xl h-12"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="animate-in slide-in-from-right duration-300">
                  <div className="text-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Confirm Your Booking</h3>
                    <p className="text-muted-foreground">Please review your appointment details</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Treatments:</span>
                        <span className="font-semibold text-foreground text-right">{formData.treatments.join(", ")}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-semibold text-foreground">{new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-semibold text-foreground">{formData.time}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Name:</span>
                        <span className="font-semibold text-foreground">{formData.name}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Phone:</span>
                        <span className="font-semibold text-foreground">{formData.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-green-800">
                        <p className="font-medium mb-1">What happens next?</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Instant confirmation via SMS & email</li>
                          <li>• Our team will call you within 15 minutes</li>
                          <li>• Reminder sent 2 hours before appointment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6 py-3 rounded-xl border-purple-200 text-purple-700 hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                
                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 min-w-[140px]"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Booking...
                      </div>
                    ) : (
                      <>Confirm Booking</>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}
        
        {/* Trust indicators */}
        <div className="text-center mt-8 space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="font-medium">Secure Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="font-medium">Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="font-medium">24hr Cancellation</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Your information is encrypted and secure. We never share your details with third parties.
          </p>
        </div>
      </div>
    </section>
  )
}
