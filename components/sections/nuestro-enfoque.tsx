"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileQuestion, PenTool, Printer, MapPin } from "lucide-react"

const etapas = [
  {
    id: "brief",
    titulo: "Brief",
    descripcion: "Entendemos sus objetivos, audiencia y necesidades",
    icon: FileQuestion,
    color: "bg-blue-500",
    detalles: [
      "Análisis de objetivos de comunicación",
      "Estudio de público objetivo y comportamiento",
      "Definición de KPIs",
      "Evaluación de restricciones y oportunidades",
      "Establecimiento de cronograma",
    ],
  },
  {
    id: "diseno",
    titulo: "Diseño",
    descripcion: "Creamos conceptos visuales que capturan la atención",
    icon: PenTool,
    color: "bg-amber-500",
    detalles: [
      "Conceptualización creativa",
      "Exploración visual y propuestas",
      "Adaptación a formatos y medios específicos",
      "Ajustes y aprobaciones",
      "Preparación de artes finales",
    ],
  },
  {
    id: "produccion",
    titulo: "Producción",
    descripcion: "Materializamos las ideas con la máxima calidad",
    icon: Printer,
    color: "bg-green-500",
    detalles: [
      "Selección de materiales óptimos",
      "Impresión, fabricación o manufactura",
      "Control de calidad exhaustivo",
      "Acabados y montaje",
      "Embalaje y preparación logística",
    ],
  },
  {
    id: "instalacion",
    titulo: "Instalación",
    descripcion: "Implementamos en ubicaciones estratégicas",
    icon: MapPin,
    color: "bg-purple-500",
    detalles: [
      "Coordinación logística",
      "Gestión de permisos cuando sea necesario",
      "Instalación profesional por especialistas",
      "Supervisión y control final",
      "Documentación fotográfica",
    ],
  },
]

export default function NuestroEnfoque() {
  const [etapaActiva, setEtapaActiva] = useState("brief")

  const etapaSeleccionada = etapas.find((e) => e.id === etapaActiva) || etapas[0]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Nuestro Enfoque</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso estructurado para transformar ideas en realidades impactantes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {etapas.map((etapa) => {
                const Icon = etapa.icon
                const isActive = etapa.id === etapaActiva

                return (
                  <Card
                    key={etapa.id}
                    className={`cursor-pointer transition-colors ${isActive ? "border-amber-500 bg-amber-50" : ""}`}
                    onClick={() => setEtapaActiva(etapa.id)}
                  >
                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                      <div
                        className={`w-10 h-10 rounded-full ${etapa.color} text-white flex items-center justify-center mr-4`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle>{etapa.titulo}</CardTitle>
                        <CardDescription className="mt-1">{etapa.descripcion}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${etapaSeleccionada.color} text-white flex items-center justify-center`}
                    >
                      {etapaSeleccionada.icon && <etapaSeleccionada.icon className="h-5 w-5" />}
                    </div>
                    <span>{etapaSeleccionada.titulo}</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-lg mt-2">{etapaSeleccionada.descripcion}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-medium">¿Qué incluye esta fase?</h4>
                  <ul className="space-y-2">
                    {etapaSeleccionada.detalles.map((detalle, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        {detalle}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
