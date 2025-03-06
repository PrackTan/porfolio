"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section bg-muted/25">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("about.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <Image src="/placeholder.svg?height=400&width=400" alt="Profile picture" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg">{t("about.description1")}</p>

            <p className="text-lg">{t("about.description2")}</p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl text-primary mb-1">1+</h3>
                  <p className="text-muted-foreground">{t("about.yearsExperience")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl text-primary mb-1">10+</h3>
                  <p className="text-muted-foreground">{t("about.projectsCompleted")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl text-primary mb-1">5+</h3>
                  <p className="text-muted-foreground">{t("about.happyClients")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl text-primary mb-1">2</h3>
                  <p className="text-muted-foreground">Companies</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

