import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-2">Contacto</h1>
          <p className="text-xl text-muted-foreground">
            Estamos aquí para ayudarte a dar vida a tus ideas publicitarias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Información de contacto</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground">Dirección</h3>
                <address className="not-italic mt-1">
                  Paseo de la Castellana, 90
                  <br />
                  28046 Madrid, Spain
                </address>
              </div>

              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <p className="mt-1">
                  <a href="mailto:info@solarplazamarketing.com" className="hover:text-amber-500">
                    info@solarplazamarketing.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground">Teléfono</h3>
                <p className="mt-1">
                  <a href="tel:+34691279237" className="hover:text-amber-500">
                    +34 691 279 237
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground">Horario</h3>
                <p className="mt-1">
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Fines de semana: Cerrado
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Envíanos un mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
