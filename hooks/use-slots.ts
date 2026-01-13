"use client"

import { useState, useEffect } from "react"

export function useSlots() {
  const [slots, setSlots] = useState(3)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get stored slots or generate random initial slots (1-5)
    const storedSlots = localStorage.getItem('availableSlots')
    const storedDate = localStorage.getItem('slotsDate')
    const today = new Date().toDateString()

    if (storedDate !== today) {
      // New day, generate 5-10 random slots
      const newSlots = Math.floor(Math.random() * 6) + 5
      setSlots(newSlots)
      localStorage.setItem('availableSlots', newSlots.toString())
      localStorage.setItem('slotsDate', today)
    } else if (storedSlots) {
      const currentSlots = parseInt(storedSlots)
      // If slots are 0, generate new random slots
      if (currentSlots === 0) {
        const newSlots = Math.floor(Math.random() * 6) + 5
        setSlots(newSlots)
        localStorage.setItem('availableSlots', newSlots.toString())
      } else {
        setSlots(currentSlots)
      }
    }
    
    // Sync with animation timing
    setTimeout(() => setIsLoaded(true), 300)
  }, [])

  const decreaseSlots = () => {
    if (slots > 1) {
      const newSlots = slots - 1
      setSlots(newSlots)
      localStorage.setItem('availableSlots', newSlots.toString())
    }
  }

  return { slots, decreaseSlots, isLoaded }
}