import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import specialProjectsData from "@/data/specialProjects.json"

export default function ProyectosTemporales() {
  return (
    <section className="py-16 container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Edición Especial: Proyectos Temporales</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Campañas de temporada y eventos especiales con soluciones específicas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialProjectsData.proyectosEspeciales.map((proyecto) => {
          const fechaInicio = new Date(proyecto.fechaInicio)
          const fechaFin = new Date(proyecto.fechaFin)

          const formatDate = (date: Date) => {
            return new Intl.DateTimeFormat("es-ES", {
              day: "numeric",
              month: "short",
            }).format(date)
          }

          return (
            <Card key={proyecto.id} className="flex flex-col h-full overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={`/placeholder.svg?height=300&width=500&query=${encodeURIComponent(proyecto.titulo)}`}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {formatDate(fechaInicio)} - {formatDate(fechaFin)}
                    </span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{proyecto.titulo}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{proyecto.descripcion}</p>
                <ul className="mt-4 space-y-1">
                  {proyecto.elementos.slice(0, 2).map((elemento, index) => (
                    <li key={index} className="text-sm flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      {elemento}
                    </li>
                  ))}
                  {proyecto.elementos.length > 2 && (
                    <li className="text-sm text-muted-foreground">+ {proyecto.elementos.length - 2} más...</li>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/projects/special/${proyecto.id}`}>Ver proyecto</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
