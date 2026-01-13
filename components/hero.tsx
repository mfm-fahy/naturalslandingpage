"use client"

import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-spa.jpg" alt="Luxury Spa" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Transform Yourself</h1>
        <p className="text-xl md:text-2xl mb-8 text-pretty opacity-95">
          Experience premium salon and spa treatments designed to rejuvenate your body and refresh your spirit
        </p>
        <Link
          href="#booking"
          className="inline-block bg-white text-black px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition"
        >
          Book Your Treatment
        </Link>
      </div>
    </section>
  )
}
