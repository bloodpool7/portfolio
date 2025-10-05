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
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
              design with robust engineering. My favorite work lies at the intersection of design and development,
              creating experiences that not only look great but are meticulously built for performance and usability.
            </p>

            <p className="text-base md:text-lg text-muted-foreground text-pretty">
              Currently, I'm a Senior Front-End Engineer at <span className="text-accent">Company Name</span>,
              specializing in accessibility. I contribute to the creation and maintenance of UI components that power
              our platform's frontend, ensuring our product meets web accessibility standards and best practices to
              deliver an inclusive user experience.
            </p>

            <p className="text-base md:text-lg text-muted-foreground text-pretty">
              In the past, I've had the opportunity to develop software across a variety of settings — from advertising
              agencies and large corporations to start-ups and small digital product studios. Additionally, I also
              released a comprehensive video course a few years ago, guiding learners through building a web app.
            </p>

            <p className="text-base md:text-lg text-muted-foreground text-pretty">
              In my spare time, I'm usually reading, exploring new technologies, or working on side projects that push
              my creative boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
