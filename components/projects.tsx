"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

const projects = [
  {
    title: "DNA Discovery Research",
    description:"Designing a discrete diffusion model with score-entropy optimization to generate novel cis-regulatory DNA sequences. Aiming to improve predictive modeling of gene regulation and accelerate discovery of therapeutic DNA elements",
    tags: ["PyTorch", "Pandas", "Deep Learning"],
  },
  {
    title: "Novelty Research",
    description:
      "Built an AI email agent that curates and synthesizes research updates, expediting discovery for academic researchers. Won AWS MCP Agents Hackathon, earning $2,500+ in prizes and selected from 100+ competing teams",
    tags: ["AWS", "n8n", "MCP"],
    github: "https://github.com/M-A-A-R/AWSHackathon",
    demo: "https://devpost.com/software/novelty-research",
  },
  {
    title: "Courseium",
    description: "Built a course recommender system for UCLA students using collaborative filtering, content-based filtering, and hybrid filtering. Trained on Bruin Walk with over 1000 courses saved.",
    tags: ["Tavily", "MongoDB", "MCP"],
    link: "https://github.com/bloodpool7/CourseRecommenderSystem",
  },
  {
    title: "Quantum Cryptography Research",
    description:
      "Developed a transformer-based validator for Quantum RNGs, introducing a novel alternative to statistical tests. Achieved state-of-the-art speed and efficiency, with research presented at IEEE ISNCC 2024 and open-sourced",
    tags: ["PyTorch", "Pandas", "Scikit-learn", "SciPy"],
    link: "https://doi.org/10.1109/ISNCC62547.2024.10758985"
  },
  {
    title: "Clinical Text Classification Research",
    description:
      "Applied text-embedding models for clinical document classification, removing training overhead and improving LLM compatibility. Conducted at UCLA CS Department and published in the Journal of Emerging Investigators",
    tags: ["Pandas", "Scikit-learn", "SciPy", "Vertex AI", "LangChain", "Vector Database"],
    link: "https://doi.org/10.59720/24-073"
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initAnimations = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".project-card")
        cards.forEach((card, index) => {
          // Entry animation
          gsap.from(card, {
            opacity: 0,
            scale: 0.5,
            rotation: index % 2 === 0 ? -15 : 15,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
            },
          })
        })
      }
    }

    initAnimations()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="space-y-12">
          <div>
            <span className="text-sm uppercase tracking-wider text-accent font-medium">Projects</span>
            <div className="h-px bg-border mt-4 mb-8" />
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-500 group hover:shadow-lg hover:shadow-accent/5">

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground font-[family-name:var(--font-display)]">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(project.github || project.demo || project.link) && (
                      <div className="flex gap-4 pt-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Link
                          </a>
                        )}
                      </div>
                    )}
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
