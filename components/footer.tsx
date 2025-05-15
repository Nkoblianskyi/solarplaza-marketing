import Link from "next/link"

export default function Footer() {
  // Navigation links for the footer
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Servicios", href: "/services" },
    { name: "Proyectos", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contact" },
  ]

  // Service links
  const serviceLinks = [
    { name: "Vallas Publicitarias", href: "/services/vallas-publicitarias" },
    { name: "Transporte Público", href: "/services/transporte-publico" },
    { name: "Materiales Impresos", href: "/services/materiales-impresos" },
    { name: "Merchandising", href: "/services/merchandising" },
    { name: "Oficinas y Papelería", href: "/services/oficinas-papeleria" },
  ]

  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">SolarPlaza Marketing</h2>
          <address className="not-italic text-sm text-muted-foreground">
            Paseo de la Castellana, 90, 28046 Madrid, Spain
          </address>
          <div className="space-y-1 text-sm">
            <p>
              <a href="mailto:info@solarplazamarketing.com" className="text-muted-foreground hover:text-foreground">
                info@solarplazamarketing.com
              </a>
            </p>
            <p>
              <a href="tel:+34691279237" className="text-muted-foreground hover:text-foreground">
                +34 691 279 237
              </a>
            </p>
          </div>
        </div>

        {/* Main Navigation */}
        <div>
          <h3 className="font-semibold mb-4">Navegación</h3>
          <nav>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Servicios</h3>
          <nav>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-amber-500 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-amber-500 transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t">
        <p className="text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} SolarPlaza Marketing. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
