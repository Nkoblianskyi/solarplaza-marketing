import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const materiales = [
  {
    nombre: "Papel",
    descripcion: "Desde 80gr hasta 350gr, con acabados mate, brillo, texturados y ecológicos certificados.",
    imagen: "/559ad025b53c502cff2a12c14fafc6ae.jpg",
  },
  {
    nombre: "Vinilo",
    descripcion: "Adhesivos de corte, impresión digital, microperforados y poliméricos de larga duración.",
    imagen: "/a4f43f07c526396afb27c1e738f5e598.jpg",
  },
  {
    nombre: "Lona",
    descripcion: "PVC frontlit, backlit, mesh y alternativas ecológicas para exterior e interior.",
    imagen: "/0e9dc743939df8a0b63b2550fa0d5ede.jpg",
  },
  {
    nombre: "Textil",
    descripcion: "Algodón, poliéster y mezclas técnicas para merchandising, banderas y displays.",
    imagen: "/10a84ee59eef05dc735d2b3054f4a109.jpg",
  },
  {
    nombre: "Rígidos",
    descripcion: "PVC, dibond, metacrilato, madera y materiales sostenibles para señalética.",
    imagen: "/2e029e682bac605ae540324bc59f76b4.jpg",
  },
  {
    nombre: "Gadgets",
    descripcion: "Productos promocionales personalizables en diversos materiales y acabados.",
    imagen: "/0eddccfd5dfcb0ea14657d2bc788bc56.jpg",
  },
]

export default function MaterialesFormatos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Materiales y Formatos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploramos las posibilidades de cada material para crear impacto en cualquier superficie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materiales.map((material, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video">
                <img
                  src={material.imagen || "/placeholder.svg"}
                  alt={material.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{material.nombre}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{material.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
