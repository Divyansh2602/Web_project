import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, and payment processing.",
      image: "/placeholder.svg?height=225&width=400&text=E-commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "Web application that uses machine learning to generate unique images based on text prompts.",
      image: "/placeholder.svg?height=225&width=400&text=AI+Image+Generator",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
      image: "/placeholder.svg?height=225&width=400&text=Task+Management",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application that displays current conditions and forecasts for any location.",
      image: "/placeholder.svg?height=225&width=400&text=Weather+Dashboard",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "Dashboard for tracking and analyzing social media metrics across multiple platforms.",
      image: "/placeholder.svg?height=225&width=400&text=Social+Media+Analytics",
      technologies: ["React", "D3.js", "Node.js", "Express"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl">Divyansh Gupta</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A collection of my work, side projects, and experiments
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      alt={project.title}
                      className="object-cover transition-all hover:scale-105"
                      height="225"
                      src={project.image || "/placeholder.svg"}
                      style={{
                        aspectRatio: "400/225",
                        objectFit: "cover",
                      }}
                      width="400"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </Link>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Divyansh Gupta. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

