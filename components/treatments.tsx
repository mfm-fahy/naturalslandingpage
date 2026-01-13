"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const treatmentCategories = [
  {
    title: "Hair Services",
    description: "Professional hair care and styling",
    image: "/hair-treatment.jpg",
    treatments: [
      "Hair Cut",
      "Beard Trim / Shave",
      "Hair Colour",
      "Head Massage",
      "Hair Spa",
      "Hair Straightening or Smoothening",
      "Hair Cuts & Styling",
      "Hair Colouring & Highlights",
      "Keratin Service",
    ],
  },
  {
    title: "Facial & Skin",
    description: "Premium facial and skincare treatments",
    image: "/facial-treatment.jpg",
    treatments: ["Skin Facial", "Detan Face", "Face Clean Up", "Facial", "De-Tan", "Face Masks", "Under Eye Treatment"],
  },
  {
    title: "Nails & Hands",
    description: "Beautiful nails and hand treatments",
    image: "/nail-treatment.jpg",
    treatments: ["Manicure", "Pedicure", "Nail Art"],
  },
  {
    title: "Wellness & Relaxation",
    description: "Holistic wellness and relaxation services",
    image: "/massage-treatment.jpg",
    treatments: ["Head Massage", "Reflexology", "Threading & Waxing"],
  },
]

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Treatments</h2>
          <p className="text-xl text-foreground/70">Comprehensive beauty and wellness services</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {treatmentCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition">
              <div className="relative h-64 w-full">
                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-primary">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {category.treatments.map((treatment, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground/80">{treatment}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
