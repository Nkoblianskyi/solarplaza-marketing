import aboutData from "@/data/about.json"

export default function AboutShortSection() {
  return (
    <section className="py-16 container">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestra Filosofía</h2>

        <p className="text-xl text-muted-foreground">{aboutData.vision}</p>

        <p className="text-lg">{aboutData.mision}</p>

        <div className="flex justify-center pt-6">
          <div className="w-20 h-1 bg-amber-500"></div>
        </div>
      </div>
    </section>
  )
}
