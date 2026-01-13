"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Users, Award, Clock } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Expert Professionals",
    description: "Certified and experienced therapists and stylists trained in the latest techniques",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We use only high-quality, natural products for all our treatments",
  },
  {
    icon: Clock,
    title: "Convenient Scheduling",
    description: "Easy online booking with flexible appointment times to fit your schedule",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Customized treatments tailored to your unique needs and preferences",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Naturals</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card key={index} className="border-primary/20 hover:border-primary/50 transition">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Icon className="text-purple-600" size={24} />
                    </div>
                    <CardTitle className="text-lg">{reason.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
