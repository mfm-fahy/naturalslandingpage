import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import FloatingCTA from "@/components/landing/floating-cta"
import "./globals.css"
import "../styles/no-animations.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Naturals - Unisex Salon & Spa",
  description: "Premium salon and spa services including hair, skin, nails, and wellness treatments",
  generator: "v0.app",
  icons: {
    icon: "/fav-icon (2).png",
    shortcut: "/fav-icon (2).png",
    apple: "/fav-icon (2).png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  )
}
