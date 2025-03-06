import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="section bg-muted/25">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <Image src="/placeholder.svg?height=400&width=400" alt="Profile picture" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg">
              Hello! I'm a passionate full stack developer with 5 years of experience building web applications. I
              specialize in JavaScript/TypeScript, React, Next.js, Node.js, and related technologies.
            </p>

            <p className="text-lg">
              My journey in programming started when I built my first website at the age of 16. Since then, I've
              developed numerous projects, collaborated with talented teams, and continuously learned new technologies
              to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl text-primary mb-1">5+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl text-primary mb-1">50+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl text-primary mb-1">15+</h3>
                  <p className="text-muted-foreground">Happy Clients</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl text-primary mb-1">3</h3>
                  <p className="text-muted-foreground">Industry Awards</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

