"use client"

import { useEffect, useRef } from "react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLSpanElement>(null)
  const paragraphsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initAnimations = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      // Animate title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          x: -100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        })
      }

      // Animate paragraphs with stagger
      if (paragraphsRef.current) {
        const paragraphs = paragraphsRef.current.querySelectorAll("p")
        gsap.from(paragraphs, {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          scrollTrigger: {
            trigger: paragraphsRef.current,
            start: "top 75%",
            end: "top 40%",
            scrub: 1,
          },
        })
      }
    }

    initAnimations()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-8">
          <div>
            <span ref={titleRef} className="text-sm uppercase tracking-wider text-accent font-medium">
              About
            </span>
            <div className="h-px bg-border mt-4 mb-8" />
          </div>

          <div ref={paragraphsRef} className="space-y-6 text-foreground leading-relaxed">
            <p className="text-lg md:text-xl text-pretty">
              {`I like building things that are cool and functional. Check some of it out here. 
              I'm currently working on DNA sequence generation using deep learning techniques. 
              I'm also a computer science student at UCLA, so if you're ever in LA or want to talk about cool stuff, reach out`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
