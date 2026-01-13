"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Heart, MapPin, Phone, Mail, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400" />
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Image
                src="/naturals-logo.png"
                alt="Naturals Logo"
                width={180}
                height={60}
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-purple-100 text-sm leading-relaxed mb-6">
                Your destination for premium beauty and wellness treatments in Chennai.
              </p>
              
              {/* Rating display */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-purple-200">4.8/5 • 150+ reviews</span>
              </div>
              
              {/* CTA Button */}
              <Button 
                className="bg-white text-purple-900 hover:bg-purple-100 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Now
              </Button>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-purple-300" />
                  <div className="text-purple-100 leading-relaxed">
                    <p className="font-medium text-white mb-1">Visit Our Salon</p>
                    <p>28, Secretariat Colony 1st St,<br />
                    near Secretariat Colony,<br />
                    Secretariat Nagar, Vinayakapuram,<br />
                    Kolathur, Chennai, Tamil Nadu 600099</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-purple-300" />
                  <div>
                    <p className="font-medium text-white mb-1">Call Us</p>
                    <a href="tel:+916369811137" className="text-purple-100 hover:text-white transition">
                      063698 11137
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-purple-300" />
                  <div>
                    <p className="font-medium text-white mb-1">Working Hours</p>
                    <p className="text-purple-100">Mon-Sun: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#treatments" className="text-purple-100 hover:text-white transition flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    Hair Cut & Styling
                  </a>
                </li>
                <li>
                  <a href="#treatments" className="text-purple-100 hover:text-white transition flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    Facial Treatments
                  </a>
                </li>
                <li>
                  <a href="#treatments" className="text-purple-100 hover:text-white transition flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    Bridal Packages
                  </a>
                </li>
                <li>
                  <a href="#treatments" className="text-purple-100 hover:text-white transition flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    Spa & Wellness
                  </a>
                </li>
                <li>
                  <a href="#treatments" className="text-purple-100 hover:text-white transition flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    Hair Treatments
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Connect With Us</h4>
              <div className="space-y-4">
                <p className="text-purple-100 text-sm">Follow us for beauty tips and updates</p>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/naturals.vinayagapuram" target="_blank" rel="noopener noreferrer" className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.instagram.com/naturals.vinayagapuram/" target="_blank" rel="noopener noreferrer" className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-700/50 bg-purple-950/30">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-purple-200">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p>© 2026 Naturals Unisex Salon & Spa. All rights reserved.</p>
                <Link href="/privacy" className="text-purple-300 hover:text-white transition">
                  Privacy Policy
                </Link>
              </div>
              <div className="flex items-center gap-1 mt-4 md:mt-0">
                Made with <Heart size={16} className="fill-current text-purple-400" /> in Chennai
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
