"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

const experiences = [
  {
    period: "February 2025 — June 2025",
    title: "Founder",
    company: "Interchat",
    description:
      "Created an AI-powered collaboration tool enabling multi-user communication with integrated AI assistants. Scaled platform to 100+ users across 5 organizations.",
    tags: ["Next.js", "Socket.io", "MongoDB", "SQL", "RAG"],
  },
  {
    period: "May 2024 — January 2025",
    title: "Research Intern",
    company: "Invista Health",
    description:
      "Developed a Flutter-based survey analysis tool to support remote patient monitoring of geriatric patients. Deployed in active use for 600+ patients with 2+ comorbidities",
    tags: ["Flutter", "Python", "Auth0", "IoT", "Azure"],
  },
  {
    period: "May 2024 — December 2024",
    title: "AI Project Lead",
    company: "Pacific Links Foundation",
    description: "Led and directed an initiative creating AI-powered English tutors with real-time voice-to-voice technology. Used by 2,000+ human-trafficking survivors in Vietnam, expanding scalable access to English education",
    tags: ["Next.js", "Moodle", "Google Cloud Platform"],
  },
  {
    period: "June 2024 — September 2024",
    title: "Software Engineering Intern",
    company: "Rezolve AI",
    description: "Developed a sentiment-aware voice AI customer support agent with a RAG-based context system for a Series A startup. Deployed production-ready demo on Google Cloud for 150+ businesses",
    tags: ["RAG", "GitLab", "LangChain", "Vector Database", "Google Cloud Platform"],
  }
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initAnimations = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".experience-card")
        
        // Animate all experience cards dynamically
        cards.forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            scale: 0.95,
            y: 60,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          })
        })
      }
    }

    initAnimations()
  }, [experiences.length])

  return (
    <section ref={sectionRef} id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-12">
          <div>
            <span className="text-sm uppercase tracking-wider text-accent font-medium">Experience</span>
            <div className="h-px bg-border mt-4 mb-8" />
          </div>

          <div ref={cardsRef} className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <Card className="p-6 md:p-8 bg-card border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground font-[family-name:var(--font-display)]">
                          {exp.title}
                        </h3>
                        <p className="text-accent">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
