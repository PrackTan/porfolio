"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="section bg-muted/25">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("education.title")}</h2>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{t("education.degree1")}</CardTitle>
                  <CardDescription className="mt-1">{t("education.institution1")}</CardDescription>
                </div>
                <CardDescription className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {t("education.period1")}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{t("education.degree2")}</CardTitle>
                  <CardDescription className="mt-1">{t("education.institution2")}</CardDescription>
                </div>
                <CardDescription className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {t("education.period2")}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{t("education.degree3")}</CardTitle>
                </div>
                <CardDescription className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {t("education.period3")}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

