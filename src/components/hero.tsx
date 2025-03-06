"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDownCircle } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      className="section bg-gradient-to-b from-muted/50 to-background min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="container">
        <div className="flex flex-col items-start max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="block text-primary">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">Full Stack Developer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I build modern, responsive web applications using the latest technologies. Passionate about creating
            beautiful and functional user experiences.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="w-full flex justify-center pt-20">
            <Link
              href="#about"
              className="animate-bounce text-primary hover:text-primary/80 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <ArrowDownCircle size={36} />
              <span className="sr-only">Scroll down</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

