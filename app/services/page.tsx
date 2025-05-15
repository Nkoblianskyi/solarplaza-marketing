import Link from "next/link"
import { Button } from "@/components/ui/button"
import servicesData from "@/data/services.json"
import { Monitor, Bus, FileText, ShoppingBag, Briefcase } from "lucide-react"

const iconMap = {
  monitor: Monitor,
  bus: Bus,
  "file-text": FileText,
  "shopping-bag": ShoppingBag,
  briefcase: Briefcase,
}

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">Nuestros Servicios</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Soluciones integrales de marketing offline para conectar con su audiencia en el mundo físico
        </p>
      </div>

      <div className="space-y-16">
        {servicesData.servicios.map((servicio, index) => {
          const IconComponent = iconMap[servicio.icono as keyof typeof iconMap]
          const isEven = index % 2 === 0

          return (
            <div
              key={servicio.id}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Icon Section */}
              <div className="w-full md:w-2/5 flex justify-center">
                <div className="p-8 bg-amber-50 rounded-full">
                  {IconComponent && <IconComponent className="h-32 w-32 text-amber-500" />}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-3/5 space-y-4">
                <h2 className="text-2xl font-bold">{servicio.nombre}</h2>
                <p className="text-lg text-muted-foreground">{servicio.descripcion_corta}</p>
                <p className="text-muted-foreground">{servicio.descripcion_larga}</p>
                <div className="pt-4">
                  <Button asChild>
                    <Link href={`/services/${servicio.slug}`}>Ver detalles</Link>
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
