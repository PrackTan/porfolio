"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const { t } = useLanguage()

  const skills = {
    languages: ["JAVA", "JAVASCRIPT", "DART", "PHP"],
    frameworks: [
      "Springboot",
      "NodeJS",
      "ExpressJS",
      "NestJS",
      "Magento",
      "Wordpress",
      "REACTJS",
      "NextJS",
      "VueJS (base)",
      "Flutter (base)",
      "ReactNative",
    ],
    databases: ["MSSQL", "MySQL", "MongoDB", "PostgreSQL"],
    others: ["Technical Documentation", "Redis cache", "Docker", "Git", "Postman", "Microservice", "ELK"],
  }

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("skills.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t("skills.languages")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("skills.frameworks")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("skills.databases")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("skills.others")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.others.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

