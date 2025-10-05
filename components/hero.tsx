"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const socialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initAnimations = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      const { SplitText } = await import("gsap/SplitText")

      gsap.registerPlugin(ScrollTrigger, SplitText)

      // Split text animation for title
      if (titleRef.current) {
        const split = new SplitText(titleRef.current, { type: "chars" })
        gsap.from(split.chars, {
          opacity: 0,
          y: 100,
          rotateX: -90,
          stagger: 0.02,
          duration: 1,
          ease: "back.out(1.7)",
        })
      }

      // Animate other elements with stagger
      const elements = [subtitleRef.current, descRef.current, navRef.current, socialsRef.current]
      gsap.from(elements, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      })

      // Parallax effect on scroll
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          y: 200,
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
      }
    }

    initAnimations()
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div ref={heroRef} className="max-w-4xl w-full">
        <div className="space-y-6">
          <h1
            ref={titleRef}
            className="font-[family-name:var(--font-display)] text-6xl md:text-8xl font-bold tracking-tight text-balance text-foreground -ml-[0.05em]"
          >
            Rishabh Goel
          </h1>

          <p ref={subtitleRef} className="text-xl md:text-3xl text-accent font-light">
            Researcher & Engineer
          </p>

          <p ref={descRef} className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I am a researcher and engineer at the intersection of AI and biology.
          </p>

          <div ref={navRef} className="flex gap-6 pt-4">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          <div ref={socialsRef} className="flex gap-4 pt-6">
            <a
              href="https://github.com/bloodpool7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rgoel7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/rishabh7goel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:goelr668@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
