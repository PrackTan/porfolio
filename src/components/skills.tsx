import { Html5, Css3, Javascript, ReactLogo, Nextjs, Nodejs, Database, Github, Git, TailwindCss } from "./icons"

const skills = [
  { name: "HTML5", icon: Html5 },
  { name: "CSS3", icon: Css3 },
  { name: "JavaScript", icon: Javascript },
  { name: "React", icon: ReactLogo },
  { name: "Next.js", icon: Nextjs },
  { name: "Node.js", icon: Nodejs },
  { name: "Databases", icon: Database },
  { name: "Git", icon: Git },
  { name: "GitHub", icon: Github },
  { name: "Tailwind CSS", icon: TailwindCss },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border"
            >
              <skill.icon className="w-16 h-16 mb-4 text-primary" />
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

