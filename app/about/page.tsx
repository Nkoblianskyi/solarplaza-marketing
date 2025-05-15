import aboutData from "@/data/about.json"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-muted-foreground">{aboutData.vision}</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-lg">{aboutData.historia}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Nuestra Misión</h2>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <p className="text-lg italic">{aboutData.mision}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutData.valores.map((valor, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-amber-600">{valor.titulo}</h3>
                    <p>{valor.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-lg">{aboutData.equipo.descripcion}</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-gray-400">👤</span>
                  </div>
                  <h3 className="font-bold">
                    Equipo de {index === 0 ? "Diseño" : index === 1 ? "Estrategia" : "Producción"}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
