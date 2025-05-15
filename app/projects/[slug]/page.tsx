import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Calendar, CheckCircle, Quote } from "lucide-react"
import projectsData from "@/data/projects.json"

export async function generateStaticParams() {
  return projectsData.proyectos.map((proyecto) => ({
    slug: proyecto.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Convertir a string para asegurar la comparación correcta
  const slug = String(params.slug)
  const proyecto = projectsData.proyectos.find((p) => String(p.slug) === slug)

  if (!proyecto) {
    notFound()
  }

  const date = new Date(proyecto.fecha)
  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-6">
        <Button asChild variant="ghost" className="pl-0">
          <Link href="/projects">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver a proyectos
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-amber-500">{proyecto.categoria}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {formattedDate}
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">{proyecto.titulo}</h1>
          <p className="text-xl text-muted-foreground mb-8">{proyecto.descripcion_corta}</p>

          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src={proyecto.imagenes[0] || "/placeholder.svg"}
              alt={proyecto.titulo}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">{proyecto.descripcion_completa}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Objetivos</h2>
            <ul className="space-y-2 mb-8">
              {proyecto.objetivos.map((objetivo, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{objetivo}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Nuestra Solución</h2>
            <p className="mb-8">{proyecto.solucion}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {proyecto.imagenes.slice(1).map((imgSrc, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={imgSrc || "/placeholder.svg"}
                    alt={`Imagen ${index + 1} del proyecto ${proyecto.titulo}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Resultados</h2>
            <ul className="space-y-2 mb-8">
              {proyecto.resultados.map((resultado, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{resultado}</span>
                </li>
              ))}
            </ul>

            {proyecto.testimonial && (
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
                <div className="flex items-start">
                  <Quote className="h-8 w-8 text-amber-300 mr-3 flex-shrink-0" />
                  <p className="italic">{proyecto.testimonial}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Detalles del Proyecto</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-muted-foreground">Cliente</h3>
                  <p>{proyecto.cliente}</p>
                </div>

                <div>
                  <h3 className="font-medium text-muted-foreground">Categoría</h3>
                  <p>{proyecto.categoria}</p>
                </div>

                <div>
                  <h3 className="font-medium text-muted-foreground">Fecha</h3>
                  <p>{formattedDate}</p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="w-full">
                  <Link href="/contact">Solicitar un proyecto similar</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <h3 className="font-bold mb-3">Proyectos relacionados</h3>
            <div className="space-y-4">
              {projectsData.proyectos
                .filter((p) => p.categoria === proyecto.categoria && p.id !== proyecto.id)
                .slice(0, 2)
                .map((relatedProject) => (
                  <Link key={relatedProject.id} href={`/projects/${relatedProject.slug}`}>
                    <div className="group flex gap-3 items-center">
                      <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={relatedProject.imagenes[0] || "/placeholder.svg"}
                          alt={relatedProject.titulo}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-amber-500 transition-colors">
                          {relatedProject.titulo}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {relatedProject.descripcion_corta.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
