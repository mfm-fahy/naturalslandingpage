"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

const treatments = [
  "Select Treatment",
  "Hair Cut",
  "Beard Trim / Shave",
  "Hair Colour",
  "Head Massage",
  "Hair Spa",
  "Hair Straightening",
  "Hair Colouring & Highlights",
  "Keratin Service",
  "Skin Facial",
  "Detan Face",
  "Face Clean Up",
  "De-Tan",
  "Face Masks",
  "Under Eye Treatment",
  "Manicure",
  "Pedicure",
  "Nail Art",
  "Reflexology",
  "Threading & Waxing",
]

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    treatment: treatments[0],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", formData)
    alert("Thank you for your booking! We will confirm your appointment shortly.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      treatment: treatments[0],
    })
  }

  return (
    <section id="booking" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Book Your Appointment</h2>
          <p className="text-xl text-foreground/70">Reserve your perfect treatment slot</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Phone size={20} />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">+91 98765 43210</p>
                <p className="text-sm text-foreground/60 mt-2">Mon-Sun: 10am - 8pm</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Mail size={20} />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">hello@naturals.com</p>
                <p className="text-sm text-foreground/60 mt-2">We reply within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <MapPin size={20} />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">123 Wellness Street</p>
                <p className="text-sm text-foreground/60">Premium Salon District</p>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Booking</CardTitle>
                <CardDescription>Fill in your details and we'll confirm your appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Select Treatment</label>
                      <select
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      >
                        {treatments.map((treatment) => (
                          <option key={treatment} value={treatment}>
                            {treatment}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Preferred Time</label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:opacity-90 transition py-3 font-bold text-lg"
                  >
                    Confirm Booking
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
