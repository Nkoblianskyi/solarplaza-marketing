import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">¿Tienes una idea? ¡Hablemos!</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
          Convirtamos tu visión en realidad. Contáctanos para empezar a construir tu próxima campaña impactante.
        </p>
        <div className="pt-4">
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
            <Link href="/contact">Contactar ahora</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
