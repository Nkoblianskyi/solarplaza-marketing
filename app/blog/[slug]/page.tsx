import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Calendar, Tag } from "lucide-react"
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


export async function generateStaticParams() {
  return postsData.posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postsData.posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const date = new Date(post.fecha)
  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-6">
        <Button asChild variant="ghost" className="pl-0">
          <Link href="/blog">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>
        </Button>
      </div>

      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="secondary">{post.categoria}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {formattedDate}
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">{post.titulo}</h1>
          <p className="text-xl text-muted-foreground">{post.resumen}</p>
        </div>

        <div className="aspect-video mb-8 rounded-lg overflow-hidden">
          <img
            src={getPostImage(post) || "/placeholder.svg"}
            alt={post.titulo}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose max-w-none">
          {post.contenido.map((bloque, index) => {
            if (bloque.tipo === "parrafo") {
              return (
                <p key={index} className="mb-6">
                  {bloque.texto}
                </p>
              )
            } else if (bloque.tipo === "subtitulo") {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {bloque.texto}
                </h2>
              )
            }
            return null
          })}
        </div>

        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="mr-1">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6">Artículos relacionados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {postsData.posts
              .filter((p) => p.id !== post.id && p.categoria === post.categoria)
              .slice(0, 2)
              .map((relatedPost) => {
                const relatedDate = new Date(relatedPost.fecha)
                const relatedFormattedDate = new Intl.DateTimeFormat("es-ES", {
                  year: "numeric",
                  month: "short",
                }).format(relatedDate)

                return (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="group flex gap-4 items-start">
                      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={getPostImage(relatedPost) || "/placeholder.svg"}
                          alt={relatedPost.titulo}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-amber-500 transition-colors">
                          {relatedPost.titulo}
                        </h4>
                        <div className="text-sm text-muted-foreground mt-1">{relatedFormattedDate}</div>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </article>
    </div>
  )
}
