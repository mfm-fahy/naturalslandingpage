"use client"

import { useRef, useState } from "react"

export function useScrollAnimation() {
  const [isVisible] = useState(true)
  const ref = useRef<HTMLElement>(null)

  return { ref, isVisible }
}