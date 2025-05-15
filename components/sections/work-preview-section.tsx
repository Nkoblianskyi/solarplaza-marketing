import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import projectsData from "@/data/projects.json"

export default function WorkPreviewSection() {
  // Get the 3 most recent projects
  const recentProjects = [...projectsData.proyectos]
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a nuestros clientes a destacar en el mundo físico
          </p>
        </div>

        <div className="space-y-16">
          {recentProjects.map((proyecto, index) => {
            const date = new Date(proyecto.fecha)
            const formattedDate = new Intl.DateTimeFormat("es-ES", {
              year: "numeric",
              month: "long",
            }).format(date)

            // Alternating layout (chess pattern)
            const isEven = index % 2 === 0

            return (
              <div
                key={proyecto.id}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 aspect-video relative rounded-lg overflow-hidden">
                  <img
                    src={proyecto.imagenes[0] || "/placeholder.svg"}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-amber-500">{proyecto.categoria}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formattedDate}
                  </div>

                  <h3 className="text-2xl font-bold">{proyecto.titulo}</h3>
                  <p className="text-muted-foreground">{proyecto.descripcion_corta}</p>

                  <div className="pt-2">
                    <Button asChild>
                      <Link href={`/projects/${proyecto.slug}`}>Ver proyecto</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">Ver todos los proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
