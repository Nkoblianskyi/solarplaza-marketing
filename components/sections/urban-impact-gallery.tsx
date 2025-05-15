export default function UrbanImpactGallery() {
  const images = [
    {
      src: "/eee49a467e1ced6d0eb0b308a8cd8f71.jpg",
      alt: "Valla publicitaria en ciudad nocturna",
    },
    {
      src: "/9f672d80b0e3f18515c02c37dd2903ef.jpg",
      alt: "Autobús con branding",
    },
    {
      src: "/acba09369c4e7650855ca9a37e2c26b6.jpg",
      alt: "Branding en estación de metro",
    },
    {
      src: "/2551e9ce351eccc3d7cad8271f8d3bed.jpg",
      alt: "Artículos promocionales de marca",
    },
    {
      src: "/04a2cd19c35f75d5c49d516b1ee7bbd1.jpg",
      alt: "Display publicitario en centro comercial",
    },
    {
      src: "/30c637c4ac79ea164d4165b6d9e172b0.jpg",
      alt: "Material de oficina con marca",
    },
  ]

  return (
    <section className="py-16 container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Urban Impact Gallery</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          El poder visual de la publicidad en el entorno urbano
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg ${index % 5 === 0 || index % 5 === 4 ? "row-span-2" : ""}`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
