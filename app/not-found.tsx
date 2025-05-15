import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center space-y-8">
        <div className="relative">
          <div className="text-9xl font-bold text-amber-500 opacity-20">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl font-bold">Página no encontrada</h1>
          </div>
        </div>

        <p className="text-muted-foreground">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contactar</Link>
          </Button>
        </div>

        <div className="pt-8">
          <img
            src="/placeholder.svg?height=300&width=500&query=creative billboard 404 page not found"
            alt="Página no encontrada"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  )
}
