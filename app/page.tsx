"use client"

import HeroSection from "@/components/landing/hero-section"
import TreatmentsPreview from "@/components/landing/treatments-preview"
import TestimonialsSection from "@/components/landing/testimonials-section"
import HowItWorks from "@/components/landing/how-it-works"
import BookingForm from "@/components/landing/booking-form"
import FAQSection from "@/components/landing/faq-section"
import FinalCTA from "@/components/landing/final-cta"
import MapSection from "@/components/landing/map-section"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function AnimatedSection({ children, direction = "left" }: { children: React.ReactNode, direction?: "left" | "right" }) {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <section 
      ref={ref} 
      className={`transition-all duration-300 ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : `opacity-0 ${direction === 'left' ? '-translate-x-8' : 'translate-x-8'}`
      }`}
    >
      {children}
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AnimatedSection direction="left">
        <BookingForm />
      </AnimatedSection>
      <AnimatedSection direction="right">
        <TreatmentsPreview />
      </AnimatedSection>
      <AnimatedSection direction="left">
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection direction="right">
        <HowItWorks />
      </AnimatedSection>
      <AnimatedSection direction="left">
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection direction="right">
        <FinalCTA />
      </AnimatedSection>
      <AnimatedSection direction="left">
        <MapSection />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
