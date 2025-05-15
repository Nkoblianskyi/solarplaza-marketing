import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, PenTool, Printer, MapPin, BarChart } from "lucide-react"

const processSteps = [
  {
    title: "Ideación",
    description: "Exploramos conceptos creativos alineados con sus objetivos de comunicación",
    icon: Lightbulb,
  },
  {
    title: "Diseño",
    description: "Desarrollamos visuales impactantes adaptados al formato y contexto",
    icon: PenTool,
  },
  {
    title: "Producción",
    description: "Fabricamos con materiales de alta calidad y acabados profesionales",
    icon: Printer,
  },
  {
    title: "Instalación",
    description: "Implementamos en ubicaciones estratégicas maximizando la visibilidad",
    icon: MapPin,
  },
  {
    title: "Análisis",
    description: "Evaluamos resultados y optimizamos para futuras campañas",
    icon: BarChart,
  },
]

export default function CreativeProcessSection() {
  return (
    <section className="py-16 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Nuestro Proceso Creativo</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          De la idea a la implementación: así trabajamos para dar vida a su comunicación
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Line connector */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12 relative">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className={`w-full md:w-1/2 ${isEven ? "md:text-right md:order-1" : "md:order-3"}`}>
                  <Card className={`h-full ${isEven ? "md:ml-auto" : "md:mr-auto"}`}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex items-center justify-center order-2 z-10">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className={`hidden md:block md:w-1/2 ${isEven ? "order-3" : "order-1"}`}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
