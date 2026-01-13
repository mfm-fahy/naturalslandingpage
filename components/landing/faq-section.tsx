"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Simply fill out our booking form with your preferred treatment, date, and time. We'll confirm your booking immediately and send you all the details via email and phone.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Yes! Contact us at least 24 hours before your appointment to cancel or reschedule without any charges. We're happy to accommodate your schedule.",
  },
  {
    q: "What premium products do you use?",
    a: "We exclusively use certified, luxury organic products that are safe for all skin types and hair conditions. All our products are dermatologist-approved and cruelty-free.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Gift cards are available in various denominations ($25, $50, $100+). Contact us or visit our studio to purchase. They're perfect gifts for loved ones!",
  },
  {
    q: "First-time client? What to expect?",
    a: "We'll conduct a brief consultation to understand your needs, preferences, and any allergies. Our experts will recommend the best treatments and products for your unique requirements.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open Monday to Sunday, 10 AM - 9 PM. Walk-ins are always welcome, but we recommend booking in advance for guaranteed slots.",
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mobile-section mobile-container bg-gradient-to-b from-purple-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/15 via-transparent to-purple-200/10" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mobile-text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mobile-subheading text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-purple-200/60 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="mobile-touch w-full p-4 sm:p-6 flex items-center justify-between bg-gradient-to-r from-purple-50/30 to-transparent hover:from-purple-100/50 hover:to-transparent transition-all duration-300 group-hover:bg-purple-100/40"
              >
                <span className="font-semibold text-foreground text-left mobile-body group-hover:text-purple-800 transition-colors duration-300">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 ml-4 transition-all duration-500 group-hover:text-purple-700 ${
                    open === i ? "rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-4 py-4 sm:px-6 sm:py-6 bg-gradient-to-b from-purple-100/40 to-transparent text-muted-foreground mobile-body border-t border-purple-200/60 animate-in fade-in slide-in-from-top-2 duration-500">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
