export default function QuoteBlockSection() {
  return (
    <section className="py-16 bg-amber-500 text-white">
      <div className="container">
        <blockquote className="text-center max-w-4xl mx-auto space-y-6">
          <div className="text-5xl font-serif">"</div>
          <p className="text-2xl md:text-4xl font-light italic leading-relaxed">
            El marketing no es sobre lo que vendes, sino sobre la historia que cuentas en el entorno urbano.
          </p>
          <div className="flex justify-center pt-4">
            <div className="w-20 h-1 bg-white opacity-50"></div>
          </div>
        </blockquote>
      </div>
    </section>
  )
}
