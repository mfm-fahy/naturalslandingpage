"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Naturals</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Welcome to Your Wellness Sanctuary</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              At Naturals Unisex Salon & Spa, we believe in the transformative power of self-care. With over a decade of
              experience, we've been dedicated to providing premium beauty and wellness treatments to our valued
              clients.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our team of certified professionals uses the finest products and latest techniques to ensure every
              treatment leaves you feeling refreshed, renewed, and absolutely radiant. We create an atmosphere of calm
              and luxury where you can escape the everyday and reconnect with yourself.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Whether you're seeking hair transformation, skin rejuvenation, or complete relaxation, Naturals is your
              destination for excellence in beauty and wellness.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/hero-spa.jpg" alt="Naturals Spa Interior" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
