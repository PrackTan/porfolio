"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("experience.title")}</h2>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{t("experience.company1")}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {t("experience.period1")}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{t("experience.description1")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{t("experience.company2")}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {t("experience.period2")}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{t("experience.description2")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

