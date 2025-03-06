"use client"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-muted/25 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-2xl">NGUYEN CHAU HUU TAN</h2>
            <p className="text-muted-foreground mt-2">{t("footer.role")}</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/PrackTan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NGUYEN CHAU HUU TAN. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

