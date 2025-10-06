"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const initSmoothScroll = async () => {
      const Lenis = (await import("lenis")).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initSmoothScroll()
  }, [])

  return (
    <main className="min-h-screen">
      <Hero />
      {/* <About /> */}
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
