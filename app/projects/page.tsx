"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import projectsData from "@/data/projects.json"

type Category = "all" | "billboards" | "transporte" | "merchandising" | "impresos" | "oficinas"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const categories = [
    { id: "all", label: "Todos" },
    { id: "billboards", label: "Vallas Publicitarias" },
    { id: "transporte", label: "Transporte" },
    { id: "merchandising", label: "Merchandising" },
    { id: "impresos", label: "Impresos" },
  ]

  const filteredProjects =
    activeCategory === "all"
      ? projectsData.proyectos
      : projectsData.proyectos.filter((project) => project.categoria === activeCategory)

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">Nuestros Proyectos</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Descubre cómo hemos ayudado a nuestros clientes a destacar en el mundo físico
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id as Category)}
            className="mb-2"
          >
            {category.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const date = new Date(project.fecha)
          const formattedDate = new Intl.DateTimeFormat("es-ES", {
            year: "numeric",
            month: "long",
          }).format(date)

          return (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video relative">
                <img
                  src={project.imagenes[0] || "/placeholder.svg"}
                  alt={project.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-amber-500">{project.categoria}</Badge>
                </div>
              </div>
              <CardContent className="pt-6 flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formattedDate}
                </div>
                <h2 className="text-xl font-bold mb-2">{project.titulo}</h2>
                <p className="text-muted-foreground">{project.descripcion_corta}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/projects/${project.slug}`}>Ver proyecto</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No hay proyectos en esta categoría actualmente.</p>
        </div>
      )}
    </div>
  )
}
