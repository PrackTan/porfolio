"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "Bachlongmobile",
      description: "E-commerce platform for mobile phones using PHP with Magento and ReactJS/Next.js for frontend.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PHP", "Magento", "ReactJS", "Next.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Bachlongcare",
      description: "Customer care platform using PHP, WordPress, and JavaScript with NestJS for new features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PHP", "WordPress", "JavaScript", "NestJS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Landing Pages",
      description: "Various landing pages developed for marketing campaigns.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "HTML", "CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Personal Project",
      description: "A side project showcasing skills in modern web development.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Node.js"],
      demoUrl: "#",
      githubUrl: "https://github.com/PrackTan",
    },
  ]

  return (
    <section id="projects" className="section bg-muted/25">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("projects.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild size="sm" variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t("projects.code")}
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("projects.liveDemo")}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/PrackTan" target="_blank" rel="noopener noreferrer">
              {t("projects.viewAll")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

