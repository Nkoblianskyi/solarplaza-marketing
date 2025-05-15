import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import servicesData from "@/data/services.json"
import { Monitor, Bus, FileText, ShoppingBag, Briefcase } from "lucide-react"

const iconMap = {
  monitor: Monitor,
  bus: Bus,
  "file-text": FileText,
  "shopping-bag": ShoppingBag,
  briefcase: Briefcase,
}

export default function ServiceOverviewSection() {
  return (
    <section className="py-16 container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Nuestros Servicios</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Un enfoque integral para llevar su marca al mundo físico
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.servicios.map((servicio) => {
          const IconComponent = iconMap[servicio.icono as keyof typeof iconMap]

          return (
            <Card key={servicio.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-center">{servicio.nombre}</CardTitle>
                <CardDescription className="text-center">{servicio.descripcion_corta}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex justify-center mb-6">
                  {IconComponent && <IconComponent className="h-16 w-16 text-amber-500" />}
                </div>
                <p className="text-sm text-muted-foreground">{servicio.descripcion_larga.slice(0, 120)}...</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/services/${servicio.slug}`}>Más información</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild size="lg">
          <Link href="/services">Ver todos los servicios</Link>
        </Button>
      </div>
    </section>
  )
}
