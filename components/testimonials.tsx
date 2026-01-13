"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Client",
    content:
      "The best salon experience I've ever had! The team is so professional and the atmosphere is absolutely relaxing. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Hair Treatment Client",
    content:
      "Amazing hair treatments and the stylists really know what they're doing. My hair has never looked better!",
    rating: 5,
  },
  {
    name: "Neha Patel",
    role: "Spa Lover",
    content:
      "The spa treatments here are absolutely luxurious. I feel completely rejuvenated after every visit. Will definitely be back!",
    rating: 5,
  },
  {
    name: "Amit Singh",
    role: "Regular Client",
    content: "Fantastic customer service and the quality of treatments is exceptional. Worth every penny!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-primary/20">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
