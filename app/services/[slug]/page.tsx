import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Monitor, Bus, FileText, ShoppingBag, Briefcase, Check } from "lucide-react"
import servicesData from "@/data/services.json"

const iconMap = {
  monitor: Monitor,
  bus: Bus,
  "file-text": FileText,
  "shopping-bag": ShoppingBag,
  briefcase: Briefcase,
}

export async function generateStaticParams() {
  return servicesData.servicios.map((servicio) => ({
    slug: servicio.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Convertir a string para asegurar la comparación correcta
  const slug = String(params.slug)
  const servicio = servicesData.servicios.find((s) => String(s.slug) === slug)

  if (!servicio) {
    notFound()
  }

  const IconComponent = iconMap[servicio.icono as keyof typeof iconMap]

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-6">
        <Button asChild variant="ghost" className="pl-0">
          <Link href="/services">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver a servicios
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 flex items-center gap-3">
            {IconComponent && <IconComponent className="h-8 w-8 text-amber-500" />}
            {servicio.nombre}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{servicio.descripcion_corta}</p>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">{servicio.descripcion_larga}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Nuestro Proceso</h2>
            <ol className="space-y-4 mb-8">
              {servicio.proceso.map((paso, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 mr-3">
                    {index + 1}
                  </span>
                  <span>{paso}</span>
                </li>
              ))}
            </ol>

            <div className="flex justify-center my-12">
              {IconComponent && <IconComponent className="h-32 w-32 text-amber-500" />}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Ejemplos de Aplicación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {servicio.imagenes && servicio.imagenes.length > 0
                ? servicio.imagenes.map((imagen, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={imagen || "/placeholder.svg"}
                      alt={`Ejemplo ${index + 1} de ${servicio.nombre}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
                : // Fallback si no hay imágenes
                [1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Ejemplo {index + 1}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Beneficios</h2>
              <ul className="space-y-3">
                {servicio.beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button asChild className="w-full">
                  <Link href="/contact">Solicitar presupuesto</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <h3 className="font-bold mb-3">Otros servicios</h3>
            <ul className="space-y-2">
              {servicesData.servicios
                .filter((s) => s.id !== servicio.id)
                .map((otroServicio) => {
                  const OtroIconComponent = iconMap[otroServicio.icono as keyof typeof iconMap]
                  return (
                    <li key={otroServicio.id}>
                      <Link
                        href={`/services/${otroServicio.slug}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-amber-600 transition-colors"
                      >
                        {OtroIconComponent && <OtroIconComponent className="h-4 w-4" />}
                        {otroServicio.nombre}
                      </Link>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
