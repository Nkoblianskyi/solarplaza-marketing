import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import postsData from "@/data/posts.json"

// Función para obtener la imagen específica para cada artículo
function getPostImage(post: any) {
  switch (post.id) {
    case 1:
      return "/ce3e59ece48428e0bb46173a0b17e3bc.jpg" // Tendencias publicidad exterior 2025
    case 2:
      return "/1e2d07674c411642299914939f255f82.jpg" // Merchandising en era digital
    case 3:
      return "/72983c167578ed7cc9a42749d650897a.jpg" // Metro como lienzo publicitario
    case 4:
      return "/4a250cd894d9c27a61c01775d5e2626c.jpg" // Psicología de vallas publicitarias
    default:
      return `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(post.titulo)}`
  }
}

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...postsData.posts].sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Perspectivas, tendencias y conocimientos sobre marketing offline
        </p>
      </div>

      <div className="space-y-16">
        {sortedPosts.map((post, index) => {
          const date = new Date(post.fecha)
          const formattedDate = new Intl.DateTimeFormat("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(date)

          // Alternating layout (chess pattern)
          const isEven = index % 2 === 0

          return (
            <div
              key={post.id}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 aspect-video relative rounded-lg overflow-hidden">
                <img
                  src={getPostImage(post) || "/placeholder.svg"}
                  alt={post.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary">{post.categoria}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formattedDate}
                </div>

                <h2 className="text-2xl font-bold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-amber-500 transition-colors">
                    {post.titulo}
                  </Link>
                </h2>

                <p className="text-muted-foreground">{post.resumen}</p>

                <Button asChild variant="outline">
                  <Link href={`/blog/${post.slug}`}>Leer artículo</Link>
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
