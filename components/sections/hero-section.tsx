import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 px-4 relative overflow-hidden bg-amber-50 border-b">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 pb-20">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl mx-auto">
            Transformamos espacios urbanos en <span className="text-amber-500">experiencias visuales</span> impactantes
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
            Publicidad exterior, merchandising y materiales impresos que capturan miradas y generan resultados.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Solicitar presupuesto</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">Ver proyectos</Link>
          </Button>
        </div>

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          <div className="rounded-lg overflow-hidden transform rotate-2 shadow-lg bg-white p-2">
            <img
              src="/88329049d1485520b32068f7f00f16f5.jpg"
              alt="Ejemplo de valla publicitaria"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="rounded-lg overflow-hidden transform -rotate-1 shadow-lg mt-16 bg-white p-2">
            <img
              src="/0bf33ef1320e3a4a56f1df3b16ec70c4.jpg"
              alt="Publicidad en metro"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="rounded-lg overflow-hidden transform rotate-1 shadow-lg bg-white p-2">
            <img
              src="/3301612e77ab802fb3121022aa2f168c.jpg"
              alt="Merchandising de marca"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#f5f5f5_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
    </section>
  )
}
