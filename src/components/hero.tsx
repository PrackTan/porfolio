"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDownCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="section bg-gradient-to-b from-muted/50 to-background min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="container">
        <div className="flex flex-col items-start max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">{t("hero.greeting")}</span>
            <span className="block text-primary">NGUYEN CHAU HUU TAN</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">{t("hero.role")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">{t("hero.description")}</p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="#projects">{t("hero.viewWork")}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">{t("hero.contactMe")}</Link>
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

